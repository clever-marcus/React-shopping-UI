from rest_framework.response import Response
from .models import *
from .serializers import LoginSerializer, RegisterSerializer, CheckoutSerializer

def LoginCredentials(request):
    login = Login.objects.all().order_by('-updated')
    serializer = LoginSerializer(login, many=True)
    return Response(serializer.data)

def RegisterCredentials(request):
    register = Register.objects.all()
    serializer = RegisterSerializer(register, many=True)
    return Response(serializer.data)

def CheckoutDetails(request):
    checkout = Checkout.objects.all()
    serializer = CheckoutSerializer(checkout, many=False)
    return Response(serializer.data)