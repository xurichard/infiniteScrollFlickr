import requests
import json

def main():
	get_public_photos_method = 'flickr.people.getPublicPhotos'
	get_list_method = 'flickr.photosets.getList'
	# [u'stat', u'photosets']
	# photosets -> [u'total', u'perpage', u'photoset', u'page', u'pages']
	optional = True

	response = call_api(get_list_method, True)

	set_ids = []
	if response.ok:
		response = json.loads(response.text)
		for photo_set in response['photosets']['photoset']:
			set_ids.append(photo_set['id'])
	else:
		print 'something went wrong: ' + query

	set_id = set_ids[0]

	response = call_api('flickr.photosets.getPhotos', True, '&photoset_id='+set_id)
	
	if response.ok:
		response = json.loads(response.text)
		for photo_json in response['photoset']['photo']:
			print get_photo_url(photo_json)


user_id = '139169754@N02'
api_key = '41dd3aff041c00c52febdef9786a9ca0'
api_secret = '0f5a3b5047f760f7'

# optional
per_page = 10
privacy_filter = 1


def call_api(method, optional, additional_params = ''):
	query = 'https://api.flickr.com/services/rest/?&method=%s&api_key=%s&user_id=%s&format=json&nojsoncallback=1'%(method, api_key, user_id)
	if optional:
		query += '&per_page=%d&privacy_filter=%d'%(per_page, privacy_filter)
	if additional_params:
		query += additional_params
	print "running query: " + query
	return requests.get(query)

def get_photo_url(flickr_json):
	farm_id = flickr_json['farm']
	server_id = flickr_json['server']
	photo_id = flickr_json['id']
	photo_secret = flickr_json['secret']
	size = 'z'
	return 'https://farm%s.staticflickr.com/%s/%s_%s_%s.jpg'%(farm_id, server_id, photo_id, photo_secret, size)

if __name__ == '__main__':
	method = 'flickr.people.getPublicPhotos'
	query = 'https://api.flickr.com/services/rest/?&method=%s&api_key=%s&user_id=%s&format=json&nojsoncallback=1'%(method, api_key, user_id)
	query += '&extras=url_z'

	response = requests.get(query)
	if response.ok:
		response = json.loads(response.text)
	
		for link in response['photos']['photo']:
			print link['url_z']

	print query


	# main()


