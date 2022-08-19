from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import LoginSerializer, RegisterSerializer, CheckoutSerializer

# Create your views here.

def index(request):
    return render(request, 'build/index.html')