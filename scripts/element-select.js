
function changeFontSize(element,fontSize){
    element.setAttribute("style",element.getAttribute("style")+";font-size:"+fontSize);
    for(var i=0; i < element.children.length; i++){
        changeFontSize(element.children[i],fontSize);
    }
}
function changeFontWeight(element,fontWeight){
    element.setAttribute("style",element.getAttribute("style")+";font-weight:"+fontWeight);
    for(var i=0; i < element.children.length; i++){
        changeFontWeight(element.children[i],fontWeight);
    }
}
function changeColor(element,color){
    element.setAttribute("style",element.getAttribute("style")+";color:"+color);
    for(var i=0; i < element.children.length; i++){
        changeColor(element.children[i],color);
    }
}

document.body.addEventListener('mouseover', function mouseover(event) {
    console.log("mouseover");
    // get reference to the element user mouseover
    if(event.target.id!="popup"){
        event.target.style.border = "thick solid grey";
        event.target.style.borderWidth = "5px";
    }
    }, false);
document.body.addEventListener('mouseout', function mouseout(event) {
    console.log("mouseout");
    // get reference to the element user mouseover
    if(event.target.id!="popup"){
        event.target.style.border = "";
        event.target.style.borderWidth = "";
    }
}, false);
document.body.addEventListener('click',function click(event){
    chrome.storage.sync.get('backgroundColor', function(data) {
        event.target.style.backgroundColor = data.backgroundColor;
    });
    chrome.storage.sync.get('color', function(data) {
        changeColor(event.target,data.color);
    });
    chrome.storage.sync.get('fontSize', function(data) {
        changeFontSize(event.target,data.fontSize);
    });
    chrome.storage.sync.get('fontWeight', function(data) {
        changeFontWeight(event.target,data.fontWeight);
    });
    
    // chrome.tabs.executeScript(
    //     event.id,
    //     {file: "scripts/color-change.js"});
    // chrome.tabs.executeScript(
    //     event.id,
    //     {file: "scripts/fontSize-change.js"});
    // chrome.tabs.executeScript(
    //     event.id,
    //     {file: "scripts/fontWeight-change.js"});
});

