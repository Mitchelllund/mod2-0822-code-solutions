var $previous = document.querySelector('#previous');
var $next = document.querySelector('#next');
var $carousel = document.querySelectorAll('.Carousel img');
var $dots = document.getElementsByClassName('dots');
var $numOfImgs = document.querySelectorAll('.Carousel img').length;
var $imageIndex = 0;
var changePhoto = window.setInterval(next, 3000);

function next(event) {
  if ($imageIndex !== $numOfImgs - 1) {
    $carousel[$imageIndex].classList.replace('view', 'hide');
    $carousel[$imageIndex + 1].classList.replace('hide', 'view');
    $dots[$imageIndex].classList.replace('fa-solid', 'fa-regular');
    $dots[$imageIndex + 1].classList.replace('fa-regular', 'fa-solid');
    $imageIndex += 1;
  } else if ($imageIndex >= $numOfImgs - 1) {
    $imageIndex = 0;
    $carousel[4].classList.replace('view', 'hide');
    $carousel[$imageIndex].classList.replace('hide', 'view');
    $dots[4].classList.replace('fa-solid', 'fa-regular');
    $dots[$imageIndex].classList.replace('fa-regular', 'fa-solid');
  }
  return changePhoto;
}

function previous(event) {
  if ($imageIndex !== 0) {
    $carousel[$imageIndex - 1].classList.replace('hide', 'view');
    $carousel[$imageIndex].classList.replace('view', 'hide');
    $dots[$imageIndex - 1].classList.replace('fa-regular', 'fa-solid');
    $dots[$imageIndex].classList.replace('fa-solid', 'fa-regular');
    $imageIndex -= 1;
  } else if ($imageIndex <= 0) {
    $imageIndex = 4;
    $carousel[0].classList.replace('view', 'hide');
    $carousel[4].classList.replace('hide', 'view');
    $dots[0].classList.replace('fa-solid', 'fa-regular');
    $dots[4].classList.replace('fa-regular', 'fa-solid');
  }
}

$next.addEventListener('click', next);
$previous.addEventListener('click', previous);
