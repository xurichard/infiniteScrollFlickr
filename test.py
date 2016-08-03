import flickrapi
import json

api_key = u'41dd3aff041c00c52febdef9786a9ca0'
api_secret = u'0f5a3b5047f760f7'

flickr = flickrapi.FlickrAPI(api_key, api_secret, format='json')
photos = flickr.photos.search(user_id='139169754@N02', per_page='10')
sets = flickr.photosets.getList(user_id='139169754@N02')

sets = json.loads(sets.decode('utf-8'))
# print sets['photosets']['photoset'][0]['title']['_content']

# photosets, stats

# photosets
	# total
	# perpage
	# photoset
	# page
	# pages 




for i in sets['photosets']['photoset']:
	print i
# for i in photos:
# 	print i



