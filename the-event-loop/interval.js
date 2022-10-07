var count = 3;

var timer = setInterval(function () {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(timer);
  } else {
    console.log(count);
    count--;
  }
}
, 1000);
