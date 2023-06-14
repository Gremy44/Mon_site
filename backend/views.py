from rest_framework.generics import RetrieveAPIView, ListAPIView, CreateAPIView, GenericAPIView
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.mixins import ListModelMixin, CreateModelMixin
from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination

from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from django.contrib.sessions.models import Session
from django.utils import timezone
from django.core.mail import send_mail

from dotenv import load_dotenv
from datetime import timedelta
import random
import os


from .serializer import FakeUserSerializer, GoodReasonsSerializer, ContactSerializer
from .models import FakeUser, GoodReasons, Contact

class ReasonView(ModelViewSet):
    
    queryset = GoodReasons.objects.all()
    serializer_class = GoodReasonsSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        record_count = self.queryset.count()
        random_id = random.randint(1, record_count)
        record = get_object_or_404(GoodReasons, id=random_id)
        return self.queryset.filter(id=record.id)
        
class FakeUserView(ModelViewSet):
    
    queryset = FakeUser.objects.all().order_by('-id')
    serializer_class = FakeUserSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        limit = 5  # Limite le nombre d'éléments à 5
        return queryset[:limit]
    
    def create(self, request, *args, **kwargs):
        # Récupérer le nom d'utilisateur fourni dans la requête POST
        username = request.data.get('username')
        print('COUCOU : ', username)
        
        # Créer un cookie de session avec le nom d'utilisateur comme valeur
        session_key = request.session.session_key
        if not session_key:
            request.session.save()
            session_key = request.session.session_key

        Session.objects.filter(session_key=session_key).update(expire_date=timezone.now() + timedelta(hours=1))
        request.session['temporary_username'] = username
        
        # Appeler la méthode create() de la classe parente pour gérer la création de l'objet FakeUser
        return super().create(request, *args, **kwargs)

    
class ContactView(ModelViewSet):
    
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]
    
    def create(self, request, *args, **kwargs):
        # Récupérer les données du formulaire de l'utilisateur
        dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
        load_dotenv(dotenv_path)
        
        name = request.data.get('name')
        email = request.data.get('email')
        message = request.data.get('message')
        subject = "Mail From Ton site de" + " " + name

        # Envoyer l'e-mail
        send_mail(subject, message, email, [os.getenv('EMAIL_HOST_USER')])
        
        return super().create(request, *args, **kwargs)