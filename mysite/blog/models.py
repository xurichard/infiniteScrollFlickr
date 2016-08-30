from django.db import models

# Create your models here.
class post(models.Model):
	body = models.TextField()
	title = models.CharField(max_length=255)
	subtitle = models.CharField(max_length=255)
	date = models.DateField()
	author = models.CharField(max_length=255)
	post_image = models.ImageField(upload_to='blog')
	author_image = models.ImageField(upload_to='blog')

	def __str__(self):
		return self.title