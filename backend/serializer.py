from rest_framework import serializers
from .models import FakeUser, GoodReasons

class FakeUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FakeUser
        fields = [
            'username',
            'password',
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