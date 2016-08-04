// external js: masonry.pkgd.js

var $grid = $('.grid').masonry({
  columnWidth: 160,
  itemSelector: '.grid-item'
});

var photosets = []

var flickerAPI = "https://api.flickr.com/services/rest/?&method=flickr.photosets.getList&api_key=41dd3aff041c00c52febdef9786a9ca0&user_id=139169754@N02&format=json&nojsoncallback=1&per_page=10&privacy_filter=1";
$.getJSON(flickerAPI, {
  format: "json"
})
.done(function( data ) {
  photosets = data.photosets.photoset
});

for(i = 0; i < photosets.length; i ++ ){
  var p = photos[i]
  var url = "https://farm" + p.farm + ".staticflickr.com/" + p.server + "/" + p.id + "_" + p.secret + "_z.jpg"
}

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
  var wRand = Math.random();
  var hRand = Math.random();
  var widthClass = wRand > 0.8 ? 'grid-item--width3' : wRand > 0.6 ? 'grid-item--width2' : '';
  var heightClass = hRand > 0.85 ? 'grid-item--height4' : hRand > 0.6 ? 'grid-item--height3' : hRand > 0.35 ? 'grid-item--height2' : '';
  elem.className = 'grid-item ' + widthClass + ' ' + heightClass;
  return elem;
}
