// external js: masonry.pkgd.js, imagesloaded.pkgd.min.js, jquery.min.js
var all_photos = []
var all_photos_index = 0

// create <div class="grid-item"></div>
function getItemElement() {
  var elem = document.createElement('div');
  elem.className = 'item ';
  var img = document.createElement("img");
  img.setAttribute("src", all_photos[all_photos_index]);
  all_photos_index += 1;
  elem.appendChild(img)
  return elem;
}

function appendPhotos(num){
  if(all_photos.length > num && all_photos_index < all_photos.length){
    var photos = []
    for(i = 0; i < num; i++){
      photos.push(getItemElement())
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
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      appendPhotos(3);
    }
};
















// EXAMPLE


// $( function() {

//   var $container = $('#container').masonry({
//     itemSelector: '.item',
//     columnWidth: 200
//   });

//   $('#load-images').click( function() {
//     var $items = getItems();
//     // hide by default
//     $items.hide();
//     // append to container
//     $container.append( $items );
//     $items.imagesLoaded().progress( function( imgLoad, image ) {
//       // get item
//       // image is imagesLoaded class, not <img>
//       // <img> is image.img
//       var $item = $( image.img ).parents('.item');
//       // un-hide item
//       $item.show();
//       // masonry does its thing
//       $container.masonry( 'appended', $item );
//     });
//   });
  
// });

// function randomInt( min, max ) {
//   return Math.floor( Math.random() * max + min );
// }

// function getItem() {
//   var width = randomInt( 150, 400 );
//   var height = randomInt( 150, 250 );
//   var item = '<div class="item">'+
//     '<img src="http://lorempixel.com/' + 
//       width + '/' + height + '/nature" /></div>';
//   return item;
// }

// function getItems() {
//   var items = '';
//   for ( var i=0; i < 12; i++ ) {
//     items += getItem();
//   }
//   // return jQuery object
//   return $( items );
// }
