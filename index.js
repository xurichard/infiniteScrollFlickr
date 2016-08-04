// external js: masonry.pkgd.js
var $grid = $('.grid').masonry({
  columnWidth: 160,
  itemSelector: '.grid-item'
});

var photosets = []

var flickerAPI = "https://api.flickr.com/services/rest/?&method=flickr.photosets.getList&api_key=41dd3aff041c00c52febdef9786a9ca0&user_id=139169754@N02&format=json&nojsoncallback=1&privacy_filter=1";
$.getJSON(flickerAPI, {
  format: "json"
})
.done(function( data ) {
  photosets = data.photosets.photoset
  $.each( photosets, function(i, photoset){
    getphotos(photoset)
  })
});


var all_photos = []
var all_photos_index = 0

var getphotos = function( photoset ){
  call = "https://api.flickr.com/services/rest/?&method=flickr.photosets.getPhotos&api_key=41dd3aff041c00c52febdef9786a9ca0&user_id=139169754@N02&format=json&nojsoncallback=1&privacy_filter=1&photoset_id=" + photoset.id;
  $.getJSON(call, {
    format: "json"
  })
  .done(function( data ) {
    $.each( data.photoset.photo, function( i, p ) {
      var url = "https://farm" + p.farm + ".staticflickr.com/" + p.server + "/" + p.id + "_" + p.secret + "_z.jpg"
      all_photos.push(url)
    })
  })
};

// var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
// $.getJSON( flickerAPI, {
//   tags: "mount rainier",
//   tagmode: "any",
//   format: "json"
// })
// .done(function( data ) {
//   console.log(data)
//   $.each( data.items, function( i, item ) {
//     $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
//     if ( i === 3 ) {
//       return false;
//     }
//   });
// });


window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      var elems = [ getItemElement(), getItemElement(), getItemElement() ];
      // make jQuery object
      var $elems = $( elems );
      $grid.append( $elems ).masonry( 'appended', $elems );
    }
};

$('.append-button').on( 'click', function() {
  var elems = [ getItemElement(), getItemElement(), getItemElement() ];
  // make jQuery object
  var $elems = $( elems );
  $grid.append( $elems ).masonry( 'appended', $elems );
});

// create <div class="grid-item"></div>
function getItemElement() {
  var elem = document.createElement('div');
  elem.className = 'grid-item ';
  var img = document.createElement("img");
  img.setAttribute("src", all_photos[all_photos_index]);
  all_photos_index += 1;
  elem.appendChild(img)
  return elem;
}
