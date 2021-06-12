from django.db import models

# Create your models here.
class UserComment(models.Model):     
    name = models.CharField(max_length=20)
    comment = models.TextField(blank=True) 
    created_at = models.DateTimeField(auto_now_add=True)