var currentX = '';
var currentY = '';
var movementConstant = 0.025;

document.addEventListener('mousemove', function(e) {
  if (currentX === '') currentX = e.pageX;
  var xdiff = e.pageX - currentX;
  currentX = e.pageX;
  if (currentY === '') currentY = e.pageY;
  var ydiff = e.pageY - currentY;
  currentY = e.pageY;

  var parallaxDivs = document.querySelectorAll('.parallax div');
  parallaxDivs.forEach(function(el, i) {
    var movement = (i + 1) * (xdiff * movementConstant);
    var movementy = (i + 1) * (ydiff * movementConstant);
    var newX = el.offsetLeft + movement;
    var newY = el.offsetTop + movementy;
    var cssObj = {
      'left': newX + 'px',
      'top': newY + 'px'
    };

    el.style.transform = 'translate(' + newX + 'px, ' + newY + 'px)';
  });
});