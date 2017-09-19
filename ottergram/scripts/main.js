var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

var OldImageList = [];
var NewImageList = [];

function setDetails(imageUrl, titleText) {
  'use strict';

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);

  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);

  detailTitle.textContent = titleText;

}

function imageFromThumb(thumbnail) {
  'use strict';

  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';

  return thumbnail.getAttribute('data-image-title');
}


function setDetailsFromThumb(thumbnail) {
  'use strict';

  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));

  var index = thumbnail.getAttribute('data-image-index');
  thumbnail.setAttribute('data-image-url', OldImageList[index]);
}

function addThumbClickHandler(thumb) {
  'use strict';

  thumb.addEventListener('click', function(event) {
    event.preventDefault();

    setDetailsFromThumb(thumb);
    setRandomThumbnail();
  });
}

function getThumbnailsArray() {
  'use strict';

  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);

  var thumbnailArray = [].slice.call(thumbnails);

  return thumbnailArray;
}

function generateNewImageList() {
  'use strict';

  NewImageList = [
    'https://f4.bcbits.com/img/a3294149458_2.jpg', 'https://f4.bcbits.com/img/a0683688743_2.jpg', 'https://f4.bcbits.com/img/a1972082113_2.jpg', 'https://f4.bcbits.com/img/a3734024958_2.jpg', 'https://f4.bcbits.com/img/a0551543270_2.jpg'
  ];

  return NewImageList;
}

function buildOldImageList() {
  'use strict';

  var thumbnails = getThumbnailsArray();

  for (var i = 0; i < thumbnails.length; i++) {
    OldImageList[i] = thumbnails[i].getAttribute('data-image-url');
  }

  return OldImageList;
}

function setRandomThumbnail() {
  'use strict';

  var thumbnails = getThumbnailsArray();
  var randomIndex = Math.floor(Math.random() * (thumbnails.length-1 - 0 + 1)) + 0;
  thumbnails[randomIndex].setAttribute('data-image-url', NewImageList[randomIndex]);

}

function initializeEvents() {
  'use strict';

  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);

  buildOldImageList();
  generateNewImageList();
  setRandomThumbnail();
}

initializeEvents();
