from django.db import models

# Create your models here.
class User(models.Model):     
    name = models.CharField(max_length=20)
    passwd = models.CharField(max_length=20)    
    account =  models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.account