// MODEL 

/*  savedBookmark[];

    Array to store bookmarks recieved from user as input
*/
let savedBookmark;

const bookmarkLocal = JSON.parse(localStorage.getItem('saved-bookmark'));

if (Array.isArray(bookmarkLocal)) {
    savedBookmark = bookmarkLocal;
}
else {
    savedBookmark = [];
}

renderBookmark();   /*  on-load: render whatever is already present in array    */

/*  createNewBookmark(title, url);

    take bookmark name and bookmarl url as parameter,
    add it as a new object in savedBookmark Array
*/
function createNewBookmark(title, url) {
    savedBookmark.push({
        title: title,
        url: url
    });
    saveLocal();
}

/*  newAnchorElement(object);

    takes every object from savedBookmark Array.
    create new anchor element <a>, 
    takes 'title' from savedBookmark array object and assigns it as innerText in <a>,
    sets 'href' attribute to url of savedBookmark array object,
    return newly created <a> tag,
*/ 
function newAnchorElement(object) {
     let aElement = document.createElement('a');    
     aElement.innerHTML = object.title;  
     aElement.setAttribute('href', object.url); 
     aElement.setAttribute('target', '_blank');

     return aElement;
}

function saveLocal() {
    localStorage.setItem('saved-bookmark', JSON.stringify(savedBookmark));
}

// CONTROLLER

/*  addBookmark();

    takes values from input elements in varibles bookmarkName and bookmarkUrl,
    passes these variables as arguments in createNewBookmark() function.
    this will save bookmark as new object in savedBookmark Array.
    call render function to render all objects in savedBookmark array to screen.
*/
function addBookmark() {
    let bookmarkUrl = document.querySelector('#url').value;
    let bookmarkName = document.querySelector('#name').value;
    
    createNewBookmark(bookmarkName, bookmarkUrl)
    renderBookmark();
    console.log(savedBookmark);     //to be removed later
}




// VIEW

/*  renderBookmark();

    delete whatever is already present in div#container by clear(),
    for every object of savedBookmark array-
    make new <a> element by newAnchorElement()
    prepend (add as first node) in div#container (to display bookmark in reverse order)
*/
function renderBookmark() {
    clear();    
   

    savedBookmark.forEach(function (object) {
        let a = newAnchorElement(object);
        const div = document.querySelector('div#container');  
        div.prepend(a);  
    });
}

/*  clear();

    wipe-out bookmarks from the div#container
*/
function clear() {
    const div = document.querySelector('div#container');
    div.innerHTML = '';
}
