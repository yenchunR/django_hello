from rest_framework import serializers
from .models import UserComment

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserComment
        fields = ('id', 'name', 'comment', 'created_at')

    def __str__(self):
        return self.name