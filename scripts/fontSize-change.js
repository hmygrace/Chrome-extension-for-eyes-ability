chrome.storage.sync.get('fontSize', function(data) {
    // changeColor.style.backgroundColor = data.color;
    // changeColor.setAttribute('value', data.color);
    // document.body.style.backgroundColor = data.fontSize;
    // document.body.style.fontSize = '20px';
    changeFont(document.getElementsByTagName("body")[0],data.fontSize);
    // document.div.style.color = data.color;
  });


function changeFont(element,fontSize){
  element.setAttribute("style",element.getAttribute("style")+";font-size:"+fontSize);
  for(var i=0; i < element.children.length; i++){
      changeFont(element.children[i],fontSize);
  }
}