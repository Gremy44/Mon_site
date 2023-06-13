from rest_framework.generics import RetrieveAPIView, ListAPIView, CreateAPIView, GenericAPIView
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.mixins import ListModelMixin, CreateModelMixin
from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination

from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from django.shortcuts import get_object_or_404
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.sessions.models import Session
from django.utils import timezone

from datetime import timedelta


from .serializer import FakeUserSerializer, GoodReasonsSerializer, ContactSerializer
from .models import FakeUser, GoodReasons, Contact

class ReasonView(RetrieveAPIView):
    
    queryset = GoodReasons.objects.all()
    serializer_class = GoodReasonsSerializer
    permission_classes = [AllowAny]
    
    '''def get_object(self,request, pk):
        good_reason = get_object_or_404(GoodReasons, pk=pk)
        serializer = GoodReasonsSerializer(good_reason)
        return Response(serializer.data)'''
        
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

    
class ContactView(CreateAPIView):
    
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]