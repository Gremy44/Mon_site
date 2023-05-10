from django.contrib import admin
from .models import FakeUser


class FakeUserAdmin(admin.ModelAdmin):
    
    fields = ('username', 'password')


admin.site.register(FakeUser, FakeUserAdmin)