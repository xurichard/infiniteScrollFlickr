import requests
import json

get_public_photos_method = 'flickr.people.getPublicPhotos'
get_list_method = 'flickr.photosets.getList'
# [u'stat', u'photosets']
# photosets -> [u'total', u'perpage', u'photoset', u'page', u'pages']
optional = True

per_page = 10
privacy_filter = 1

query = 'https://api.flickr.com/services/rest/?&method=%s&api_key=%s&user_id=%s&format=json&nojsoncallback=1'%(get_list_method, api_key, user_id)
if optional:
	query += '&per_page=%d&privacy_filter=%d'%(per_page, privacy_filter)

response = requests.get(query)
if response.ok:
	response = json.loads(response.text)
	print response['photosets']['photoset'][0]
else:
	print 'something went wrong: ' + query

def call_api(method, optional):
	user_id = '139169754@N02'
	api_key = '41dd3aff041c00c52febdef9786a9ca0'
	api_secret = '0f5a3b5047f760f7'

	query = 'https://api.flickr.com/services/rest/?&method=%s&api_key=%s&user_id=%s&format=json&nojsoncallback=1'%(get_list_method, api_key, user_id)


