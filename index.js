// external js: masonry.pkgd.js, imagesloaded.pkgd.min.js, jquery.min.js

var all_photos = []

var flickerAPI = "https://api.flickr.com/services/rest/?&method=flickr.people.getPhotos&api_key=41dd3aff041c00c52febdef9786a9ca0&user_id=139169754@N02&format=json&nojsoncallback=1";
$.getJSON(flickerAPI, {
  format: "json"
}, function( data ) {
  //just to get more random pages
  var num = Math.floor(Math.random() * data.photos.pages)
  setAllPhotos(num)
});


function setAllPhotos(page_num){
  flickerAPI= "https://api.flickr.com/services/rest/?&method=flickr.people.getPhotos&api_key=41dd3aff041c00c52febdef9786a9ca0&user_id=139169754@N02&format=json&nojsoncallback=1&page=" + page_num;
  $.getJSON(flickerAPI, {
  format: "json"
  }, function( data ) {
    all_photos = data.photos.photo
    appendPhotos(10)
  })
}

// create <div class="grid-item"></div>
function getItemElement(num) {
  var elem = document.createElement('div');
  elem.className = 'item ';
  var img = document.createElement("img");
  var p = all_photos[num];
  var url = "https://farm" + p.farm + ".staticflickr.com/" + p.server + "/" + p.id + "_" + p.secret + "_z.jpg"
  img.setAttribute("src", url);
  all_photos.splice(num, 1);
  elem.appendChild(img)
  return elem;
}

function appendPhotos(num){
  if(all_photos.length > 0){
    var photos = []
    for(i = 0; i < num; i++){
      var rand = Math.floor(Math.random() * all_photos.length)
      photos.push(getItemElement(rand))
    }
    var $items = $(photos)
    // hide by default
    $items.hide();
    // append to container
    $container.append( $items );
    $items.imagesLoaded().progress( function( imgLoad, image ) {
      // get item
      // image is imagesLoaded class, not <img>
      // <img> is image.img
      var $item = $( image.img ).parents('.item');
      // un-hide item
      $item.show();
      // masonry does its thing
      $container.masonry( 'appended', $item );
    });
  }
}

var $container = $('#container').masonry({
  itemSelector: '.item',
  columnWidth: 1
});


window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && all_photos.length > 0) {
      appendPhotos(3);
    }
};




