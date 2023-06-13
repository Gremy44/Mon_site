# Generated by Django 4.2.1 on 2023-06-12 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_alter_fakeuser_age_alter_fakeuser_fake_username_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('email', models.EmailField(max_length=128)),
                ('message', models.TextField(max_length=1000)),
            ],
        ),
    ]
