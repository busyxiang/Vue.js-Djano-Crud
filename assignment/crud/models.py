from django.db import models

# Create your models here.
class Crud(models.Model):
    crud_id = models.AutoField(primary_key=True)
    crud_title = models.TextField()
    crud_notification_datetime = models.DateTimeField()
    crud_creation_datetime = models.DateTimeField(auto_now_add=True)