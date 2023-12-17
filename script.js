var myLibrary = []

class Book{
    constructor(title, author, pages, current=0, read=false){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.current = current
        this.read = read;
        this.info = function() {
            if(this.read)
                return `${this.title} by ${this.author}, ${this.pages} pages, current page: ${this.current}, read`;
            else
                return `${this.title} by ${this.author}, ${this.pages} pages, current page: ${this.current}, not read yet`;
    };
    }
}


const addCard = (e)=>{
    e.preventDefault();

    const wtitle = document.querySelector('#title');
    const wauthor = document.querySelector('#author');
    const wpages = document.querySelector('#pages');
    const wcurrent = document.querySelector('#current');
    const wread = document.querySelector('#read');


    var myBook = new Book(wtitle.value, wauthor.value, wpages.value, wcurrent.value, wread.checked);
    myLibrary.push(myBook);
    
    



    const library = document.querySelector('.book-display');

    const card = document.createElement('div');
    card.classList.add('card');
    
    const title = document.createElement('p');
    const author = document.createElement('p');
    const page = document.createElement('p');

    title.innerText = wtitle.value;
    author.innerText = wauthor.value;
    page.innerText = `${wcurrent.value} / ${wpages.value}`;

    const del = document.createElement('button');
    const img = document.createElement('img');
    img.src = 'close.svg';

    del.addEventListener('click', (e)=>{
        const child = e.target;
        const toDel = child.parentNode;
        
        //need to modify array as well
        const parent = toDel instanceof HTMLDivElement ? toDel : toDel.parentNode;
        console.log(myLibrary)
        myLibrary = myLibrary.filter(book => book.name != parent.childNodes[0].value);
        console.log('after');
        console.log(myLibrary);
        parent.remove();
    });

    del.appendChild(img);


    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(page);
    card.appendChild(del);


    library.appendChild(card);
    dialog.close();

    wtitle.value = '';
    wauthor.value = '';
    wpages.value = '';
    wcurrent.value = '';
    wread.checked = false;
}


const dialog = document.querySelector('dialog');
const openDialog = () =>{
    dialog.showModal();
}

const addButton = document.querySelector('#add');
addButton.addEventListener('click', openDialog);

const closeDialog = () => {
    dialog.close();
}

const close = document.querySelector('#close');
close.addEventListener('click', closeDialog);

const clearCard = () =>{
    const library = document.querySelector('.book-display');
    library.innerHTML = '';
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearCard);

const addnew = document.querySelector('#add-card');
addnew.addEventListener('click', addCard)


addnew.onmouseover = () =>{
    dialog.className = 'button-hovered';
};

addnew.onmouseout = ()=>{
    dialog.className='';
};


close.onmouseover = () =>{
    dialog.className = 'close-hovered';
};

close.onmouseout = ()=>{
    dialog.className='';
};




