from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse

from .models import *

def index(request):
	posts = post.objects.order_by('-date')
	context = {'posts':posts}
	return render(request, 'blog/index.html', context)