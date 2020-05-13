console.log('Library app');
/////////creating book constructor which returns book object
function Book(name, aurthor, type) {
    this.name = name;
    this.aurthor = aurthor;
    this.type = type;
}

/////for displaying book creating display constructor//////////
function Display() {

}
Display.prototype.add = function (book) {
    console.log(`addding to ui `);
}
Display.prototype.clear = function () {
    submitform = document.getElementById('form');
    submitform.reset();
}
Display.prototype.validate = function () {
    let name = document.getElementById('bookName').value;
    let aurthor = document.getElementById('aurthor').value;
    if (name.length < 3 || aurthor.length < 3) { return false; }
    else { return true; }
}

Display.prototype.msg = function (type, msg) {
    console.log(`hr`);
    let message = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> ${msg}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
    let msgbox = document.getElementById('msg');
    msgbox.innerHTML = message;
}

///////adding event listen to button addBook
submitform = document.getElementById('form');
console.log(submitform);
submitform.addEventListener('submit', formsubmit);
function formsubmit(e) {
    let name = document.getElementById('bookName').value;
    let aurthor = document.getElementById('aurthor').value;
    let type;
    let fiction = document.getElementById('Fiction');
    let science = document.getElementById('Science');
    let cooking = document.getElementById('Cooking');
    if (fiction.checked) { type = fiction.value }
    else if (science.checked) { type = science.value }
    else if (cooking.checked) { type = cooking.value }
    let book = new Book(name, aurthor, type);
    console.log(book);
    e.preventDefault();
    let display = new Display();
    if (display.validate()) {
        display.add(book);
        display.clear();
        display.msg('success', `you have succesfully inserted data`);
    }
    else {
        display.msg('danger', 'unable to write');
    }
}
