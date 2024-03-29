from django.contrib import admin
from .models import FakeUser, GoodReasons


class FakeUserAdmin(admin.ModelAdmin):
    
    fields = ('username', 'fake_username', 'age')

class GoodReasonsAdmin(admin.ModelAdmin):

    fields = ('title', 'reason')
    
admin.site.register(GoodReasons, GoodReasonsAdmin)
admin.site.register(FakeUser, FakeUserAdmin)