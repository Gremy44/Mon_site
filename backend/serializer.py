from rest_framework import serializers
from .models import FakeUser, GoodReasons, Contact

class FakeUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FakeUser
        fields = [
            'username',
            'fake_username',
            'age',
        ]
        
class GoodReasonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = GoodReasons
        fields = [
            'title',
            'reason',
        ]
        
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'message']