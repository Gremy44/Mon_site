from django.contrib.auth.hashers import make_password
from django.db import models

import requests
import random
import json

class FakeUser(models.Model):
    username = models.CharField(max_length=128)
    password = models.CharField(max_length=128, blank=True)
    fake_username = models.CharField(max_length=128, blank=True)
    age = models.IntegerField(blank=True)

    def save(self, *args, **kwargs):
        # Crypte le mot de passe avant de sauvegarder l'utilisateur
        self.password = make_password(self.password)
        
        r_fake_username = requests.get('https://api.namefake.com/name')
        data_user = json.loads(r_fake_username.text)
        fake_username = data_user['name']
        self.fake_username = fake_username
        
        age = random.randint(7, 77)
        self.age = age
        
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.username
    
class GoodReasons(models.Model):
    title = models.CharField(max_length=64)
    reason = models.TextField()
    
    def __str__(self):
        return self.title
    
class Contact(models.Model):
    
    name = models.CharField(max_length=128)
    email = models.EmailField(max_length=128)
    message = models.TextField(max_length=1000)

    def __str__(self):
        return self.email