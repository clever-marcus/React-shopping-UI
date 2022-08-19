from django.db import models

# Create your models here.

class Login(models.Model):
    username = models.CharField(max_length=60, null=True)
    password = models.CharField(max_length=30)

    def __str__(self):
        return self.username

class Register(models.Model):
    first_name = models.CharField(max_length=80, blank=True)
    last_name = models.CharField(max_length=80, blank=True)
    username = models.CharField(max_length=60, null=True)
    email = models.CharField(max_length=150, null=True)

    def __str__(self):
        return self.first_name

class Checkout(models.Model):
    product_name = models.CharField(max_length=200, null=True)
    color = models.CharField(max_length=50, null=True)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    total = models.IntegerField(default=0, null=True, blank=True)
    date_ordered = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product_name
