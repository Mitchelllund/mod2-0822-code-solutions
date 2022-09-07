var $userList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function (object) {
  console.log('xhr status: ', xhr.status);
  console.log('xhr response: ', xhr.response);
  for (var i = 0; i < xhr.response; i++) {
    var newLi = document.createElement('li');
    newLi.textContent = object.name;
    $userList.appendChild(newLi);
  }
});
xhr.send();
