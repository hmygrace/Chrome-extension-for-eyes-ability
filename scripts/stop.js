// document.body.removeEventListener('mouseover', mouseover);
// document.body.removeEventListener('mouseout', mouseout);
// document.body.removeEventListener('click', click);
var body = document.body;
var bodyClone = body.cloneNode(true);

body.parentNode.replaceChild(bodyClone,body);