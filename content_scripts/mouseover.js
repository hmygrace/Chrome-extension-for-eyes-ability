document.addEventListener('mouseover', function (event) {
  console.log("mouseover");
  // get reference to the element user mouseover
  event.target.style.borderWidth = "5px";
  // reset the borderWidth after a short delay
  setTimeout(function() {
      event.target.style.borderWidth = "";
      }, 400);
}, false);




var newTool = document.createElement('div');
// newTool.style.position = "fixed";
newTool.classList.add('floating');
// newTool.innerHTML = "sdsfdgdesgddfafdggewrgd";
var innerDiv = document.createElement('div');
innerDiv.classList.add('innerDiv');
var closeButton = document.createElement('button');
closeButton.innerHTML = "Close";
innerDiv.appendChild(closeButton);
// newTool.innerHTML = "<div style='padding:5px;background-color:white;margin:auto'> <button>Close</button> </div>";
newTool.appendChild(innerDiv);
// var p = document.createElement('p');
// p.textContent = "fghsdjk";
// innerDiv.appendChild(p);
// newTool.appendChild(p);
// newTool.appendChild(innerDiv);
document.body.appendChild(newTool);




// Unique ID for the className.
// var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

// // Previous dom, that we want to track, so we can remove the previous styling.
// var prevDOM = null;

// // Mouse listener for any move event on the current document.
// document.addEventListener('mousemove', function (e) {
//   var srcElement = e.srcElement;

//   // Lets check if our underlying element is a DIV.
// //   if (srcElement.nodeName == 'DIV') {

//     // For NPE checking, we check safely. We need to remove the class name
//     // Since we will be styling the new one after.
//     if (prevDOM != null) {
//       prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
//     }

//     // Add a visited class name to the element. So we can style it.
//     srcElement.classList.add(MOUSE_VISITED_CLASSNAME);

//     // The current element is now the previous. So we can remove the class
//     // during the next iteration.
//     prevDOM = srcElement;
// //   }
// }, false);


  // "content_scripts": [
  //   {
  //     "matches": ["http://*/*"],
  //     "css": ["content_scripts/mouseover.css"],
  //     "js": ["content_scripts/mouseover.js"],
  //     "run_at": "document_end",
  //     "all_frames": true
  //   }
  // ],

  
  // "browser_action": {
  //   "default_icon": {
  //     "19": "icons/action19x19.png",
  //     "38": "icons/action38x38.png"
  //   },
  //   "default_title": "SelectorGadget",
  //   "default_popup": "popup/popup.html"
  // },