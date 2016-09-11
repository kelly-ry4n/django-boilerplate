from rest_framework.serializers import ModelSerializer

from .models import Ipsum


class IpsumSerializer(ModelSerializer):

    class Meta:
        model = Ipsum
