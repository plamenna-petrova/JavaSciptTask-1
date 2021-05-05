
var oneLineInput = document.querySelector(".one-line-input");

console.log(oneLineInput);

oneLineInput.addEventListener("keydown", onKeyboardClick);
function onKeyboardClick(event) {
    switch (event.keyCode) {
        case 13:
           var inputContainer = document.querySelector(".input-container");
           var cursorPosition = event.target.selectionStart;
           console.log(cursorPosition);
           var textarea = document.createElement("textarea");
           textarea.value = oneLineInput.value;
           textarea.setAttribute("class", "multiple-line-textarea");
           inputContainer.replaceChild(textarea, oneLineInput); 
           event.preventDefault();
           setCaretToPos(textarea, cursorPosition);      
    }
}

function setSelectionRange(input, selectionStart, selectionEnd) {
    if (input.setSelectionRange) {
      input.focus();
      input.setSelectionRange(selectionStart, selectionEnd);
    }
    else if (input.createTextRange) {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveEnd('character', selectionEnd);
      range.moveStart('character', selectionStart);
      range.select();
    }
}
  
function setCaretToPos (input, pos) {
     setSelectionRange(input, pos, pos);
}