// import { CssSelectorGenerator } from '../../../css-selector-generator-master/src';


chrome.storage.sync.get('color', function(data) {
    // changeColor.style.backgroundColor = data.color;
    // changeColor.setAttribute('value', data.color);
    document.body.style.backgroundColor = data.color;
    // document.body.style.fontSize = '20px';
    // changeColor(document.getElementsByTagName("body")[0]);
    // document.div.style.color = data.color;
  });

function changeColor(element,color){
  element.setAttribute("style",element.getAttribute("style")+";color:"+color);
  for(var i=0; i < element.children.length; i++){
      changeFont(element.children[i],color);
  }
}
  

  // first, create instance of the object with default options
// my_selector_generator = new CssSelectorGenerator;

// // create (or find reference to) any element
// my_element = document.createElement('div');
// document.body.appendChild(my_element);

// // then you can get unique CSS selector for any referenced element
// my_element_selector = my_selector_generator.getSelector(my_element);

// // track every click
// document.body.addEventListener('click', function (event) {
//   // get reference to the element user clicked on
//   var element = event.target;
//   // get unique CSS selector for that element
//   // var selector = my_selector_generator.getSelector(element);
//   // do whatever you need to do with that selector
//   console.log('selector', selector);
// });