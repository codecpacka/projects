console.log('welcome to note apps');
showNotes();
let addBtn = document.getElementById('addBtn');
let reload = document.getElementById('reload');
clearall = document.getElementById('clear');
rev = document.getElementById('reverselist');


addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes')

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);

    }
    notesobj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    addTxt.value = "";
    console.log(notesobj);
    showNotes();
})
////////////function for displaying notes///
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);


        let html = "";
        notesobj.forEach(function (element, index) {
            html += `
         <div class="card my-3 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <a id="${index}" onclick="deletnote(this.id)" class="btn btn-primary hoverred">delete note</a>
                </div>
            </div>
                `;
        })
        let notesElm = document.getElementById('notes');
        if (notesobj.length != 0) {
            notesElm.innerHTML = html;
        }
        else {
            notesElm.innerHTML = "<b>notes list is empty pls insert a note</b>"
        }
    };



}


function deletnote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);

    }

    notesobj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    showNotes();

}


////////////////////search funtionality///////////////////


let search = document.getElementById('search');
search.addEventListener('input', function () {
    let searchtxt = search.value.toLowerCase();
    let notecard = document.getElementsByClassName('card');
    console.log(notecard);
    Array.from(notecard).forEach(function (element) {
        let txt = element.getElementsByTagName("p")[0].innerText;
        console.log(txt);
        if (txt.includes(searchtxt)) {

            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })

})





























///////////////////////////////extra functions////////////

//////////////////to reload the webpage/////////
reload.addEventListener('click', function () {
    location.reload();
})
//////////////////to clear all notes from localstorage/////////////////
clearall.addEventListener('click', function () {
    let p = confirm('would u like to clear all notes');
    if (p == true) {
        localStorage.clear();
        let notesElm = document.getElementById('notes');
        notesElm.innerHTML = "";
        showNotes();
        console.log('all cleared');
        console.log(p);
    }
})

rev.addEventListener('click', function (e) {
    console.log('reversed');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
        notesobj.reverse();
        localStorage.setItem('notes', JSON.stringify(notesobj));
        let html = "";
        for (let index = (notesobj.length) - 1; index >= 0; index--) {

            html += `
            <div class="card my-3 mx-2" style="width: 18rem;">
                   <div class="card-body">
                       <h5 class="card-title">Note ${index + 1}</h5>
                       <p class="card-text">${notesobj[index]}</p>
                       <a id="${index}" onclick="deletnote(this.id)" class="btn btn-primary hoverred">delete note</a>
                   </div>
               </div>
                   `;
        }
        let notesElm = document.getElementById('notes');
        if (notesobj.length != 0) {
            notesElm.innerHTML = html;
        }
        else {
            notesElm.innerHTML = "<b>notes list is empty pls insert a note</b>";

        }

    }
})
