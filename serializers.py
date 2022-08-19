from rest_framework.serializers import ModelSerializer
from .models import *

class LoginSerializer(ModelSerializer):
    class Meta:
        model = Login
        fields = '__all__'

class RegisterSerializer(ModelSerializer):
    class Meta:
        model = Register
        fields = '__all__'

class CheckoutSerializer(ModelSerializer):
    class Meta: 
        model = Checkout
        fields = '__all__'