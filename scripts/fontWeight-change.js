chrome.storage.sync.get('fontWeight', function(data) {
    // changeColor.style.backgroundColor = data.color;
    // changeColor.setAttribute('value', data.color);
    // document.body.style.backgroundColor = data.fontSize;
    // document.body.style.fontSize = '20px';
    changeFont(document.getElementsByTagName("body")[0],data.fontWeight);
    // document.div.style.color = data.color;
  });


function changeFont(element,fontWeight){
  element.setAttribute("style",element.getAttribute("style")+";font-weight:"+fontWeight);
  for(var i=0; i < element.children.length; i++){
      changeFont(element.children[i],fontWeight);
  }
}