from django.db import models

# Create your models here.

class Panel(models.Model):
	info = models.CharField(max_length=200)