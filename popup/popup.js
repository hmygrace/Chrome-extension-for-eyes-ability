
window.onload = function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: "scripts/element-select.js"});
    });

};


let changeBackgroundColor = document.getElementById('changeBackgroundColor');

changeBackgroundColor.onclick = function() {
    var newColor = document.getElementById('background-color-selector').value;
    chrome.storage.sync.set({backgroundColor: newColor}, function() {
          console.log('The backgroundColor is '+newColor);
        });
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.executeScript(
    //         tabs[0].id,
    //         {file: "scripts/color-change.js"});
    // });
};

let changeColor = document.getElementById('changeColor');

changeColor.onclick = function() {
    var newColor = document.getElementById('color-selector').value;
    chrome.storage.sync.set({color: newColor}, function() {
          console.log('The color is '+newColor);
        });
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.executeScript(
    //         tabs[0].id,
    //         {file: "scripts/color-change.js"});
    // });
};

let changeFontSize = document.getElementById('changeFontSize');

changeFontSize.onclick = function() {
    var newSize = document.getElementById('font-size-selector').value;
    chrome.storage.sync.set({fontSize: newSize}, function() {
          console.log('The size is '+newSize);
        });
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.executeScript(
    //         tabs[0].id,
    //         {file: "scripts/fontSize-change.js"});
    // });
};

let changeFontWeight = document.getElementById('changeFontWeight');

changeFontWeight.onclick = function() {
    var newWeight = document.getElementById('font-weight-selector').value;
    chrome.storage.sync.set({fontWeight: newWeight}, function() {
          console.log('The weight is '+newWeight);
        });
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.executeScript(
    //         tabs[0].id,
    //         {file: "scripts/fontWeight-change.js"});
    // });
};
