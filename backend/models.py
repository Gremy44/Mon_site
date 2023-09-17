from django.db import models

import requests
import random
import json


class FakeUser(models.Model):
    
    username = models.CharField(max_length=128)
    fake_username = models.CharField(max_length=128, blank=True)
    age = models.IntegerField(blank=True)

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