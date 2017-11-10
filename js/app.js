var election = prompt('¿En qué zona prefieres reservar tu asiento?' + '\n1.- Primera clase' + '\n2.- Económica' + '\nPor favor ingresa el número');


window.onload = function() {
  var reserve = document.querySelector('.reservar');

  reserve.addEventListener('click', addX);
};

var centinel = true;

function addX(event) {
  if (event.target.matches('td') && event.target.textContent === '') {
    if (centinel)
      event.target.textContent = 'x';
    else
      event.target.textContent = 'o';
    centinel = !centinel;
  }
}
