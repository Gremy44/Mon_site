from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from django.shortcuts import get_object_or_404
from django.shortcuts import render

from .serializer import FakeUserSerializer, GoodReasonsSerializer
from .models import FakeUser, GoodReasons

class ReasonView(RetrieveAPIView):
    
    queryset = GoodReasons.objects.all()
    serializer_class = GoodReasonsSerializer
    permission_classes = [AllowAny]
    
    '''def get_object(self,request, pk):
        good_reason = get_object_or_404(GoodReasons, pk=pk)
        serializer = GoodReasonsSerializer(good_reason)
        return Response(serializer.data)'''
        