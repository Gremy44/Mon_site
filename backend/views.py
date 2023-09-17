from rest_framework.generics import RetrieveAPIView, ListAPIView, CreateAPIView, GenericAPIView
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.mixins import ListModelMixin, CreateModelMixin
from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination

from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse, JsonResponse
from django.contrib.sessions.models import Session
from django.utils import timezone
from django.core.mail import send_mail

from dotenv import load_dotenv
from datetime import timedelta
import requests
import random
import os

import json


from .serializer import FakeUserSerializer, GoodReasonsSerializer, ContactSerializer
from .models import FakeUser, GoodReasons, Contact

def index(request):
    return render(request, 'build/index.html')


class ReasonView(ModelViewSet):
    
    queryset = GoodReasons.objects.all()
    serializer_class = GoodReasonsSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        random_id = random.randint(11, 29)
        record = get_object_or_404(GoodReasons, id=random_id)
        print("ID : ", random_id)
        return self.queryset.filter(id=record.id)

    
class FakeUserView(ModelViewSet):
    
    queryset = FakeUser.objects.all().order_by('-id')
    serializer_class = FakeUserSerializer
    permission_classes = [AllowAny]
    
    def get_fake_user_view(self):
        r_fake_username = requests.get('https://api.namefake.com/name')
        data_user = json.loads(r_fake_username.text)
        fake_username = data_user['name']
        print('FU :', fake_username)
        return fake_username
        
    def get_queryset(self):
        queryset = super().get_queryset()
        limit = 5  # Limite le nombre d'éléments à 5
        return queryset[:limit]

    def create(self, request):
        
        username = request.data.get('username')
        
        if username:
            r_fake_username = requests.get('https://api.namefake.com/name')
            data_user = json.loads(r_fake_username.text)
            fake_username = data_user['name']
            age = random.randint(18, 99)

            fake_user = FakeUser(username=username, fake_username=fake_username, age=age)
            fake_user.save()

            serializer = self.get_serializer(fake_user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({"username": ["Le champ 'username' est requis."]}, status=status.HTTP_400_BAD_REQUEST)
    
  
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