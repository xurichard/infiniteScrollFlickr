import requests
import json

def main():
	get_public_photos_method = 'flickr.people.getPublicPhotos'
	get_list_method = 'flickr.photosets.getList'
	# [u'stat', u'photosets']
	# photosets -> [u'total', u'perpage', u'photoset', u'page', u'pages']
	optional = True

	response = call_api(get_list_method, True)

	if response.ok:
		response = json.loads(response.text)
		print response['photosets']['photoset'][0]
	else:
		print 'something went wrong: ' + query


user_id = '139169754@N02'
api_key = '41dd3aff041c00c52febdef9786a9ca0'
api_secret = '0f5a3b5047f760f7'

# optional
per_page = 10
privacy_filter = 1


def call_api(method, optional):
	query = 'https://api.flickr.com/services/rest/?&method=%s&api_key=%s&user_id=%s&format=json&nojsoncallback=1'%(method, api_key, user_id)
	if optional:
		query += '&per_page=%d&privacy_filter=%d'%(per_page, privacy_filter)
	return requests.get(query)


if __name__ == '__main__':
	main()


