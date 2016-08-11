from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse

from .models import *


import requests
import json


user_id = '139169754@N02'
api_key = '41dd3aff041c00c52febdef9786a9ca0'
api_secret = '0f5a3b5047f760f7'

def index(request):
	context = {}
	context['photos'] = []

	method = 'flickr.people.getPublicPhotos'
	query = 'https://api.flickr.com/services/rest/?&method=%s&api_key=%s&user_id=%s&format=json&nojsoncallback=1'%(method, api_key, user_id)
	query += '&extras=url_z'

	response = requests.get(query)
	if response.ok:
		response = json.loads(response.text)
	
		for link in response['photos']['photo']:
			context['photos'].append(link['url_z'])

	return render(request, 'mainPage/index.html', context)

