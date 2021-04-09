
let notesArrary = []

function change_theme() {
    const btn = document.createElement('button');
    btn.innerText = 'Change Theme';
    document.getElementById('header').appendChild(btn); 
    btn.addEventListener('click', () => {
        alert('Click the button again to change the theme');
        document.querySelector('.container').classList.add("ChangeTheme")
        let toggleStatus = document.querySelector(".ChangeTheme").classList.toggle('.container')
        if (toggleStatus === false) {
            document.querySelector('*').style.backgroundColor = '#f2e9de'
            document.querySelector('p').style.backgroundColor = '#f2e9de'
            document.querySelector('footer').style.backgroundColor = '#f2e9de'
            document.querySelector('.note_container').style.backgroundColor = '#f2e9de'
            document.querySelector('#header').style.backgroundColor = '#f2e9de'
            document.querySelector('.note').style.backgroundColor = '#f2e9de'
            document.querySelector('.create_button').style.backgroundColor = '#f2e9de'
            document.querySelector('ul').style.backgroundColor = '#f2e9de'
            document.querySelector('a').style.backgroundColor = '#f2e9de'
            document.querySelector('.navigation').style.backgroundColor = '#f2e9de'
            document.querySelectorAll(".Navigation")[1].style.backgroundColor = '#f2e9de'
            document.querySelectorAll(".Navigation a")[1].style.backgroundColor = '#f2e9de'
            document.querySelector('.save').style.backgroundColor = '#f2e9de'
            document.querySelector('.delete').style.backgroundColor = '#f2e9de'
            document.querySelector('#note_button').style.backgroundColor = '#f2e9de'
        } else {  
            document.querySelector('*').style.backgroundColor = '#555169'
            document.querySelector('p').style.backgroundColor = '#555169'
            document.querySelector('footer').style.backgroundColor = '#555169'
            document.querySelector('.note_container').style.backgroundColor = '#555169'
            document.querySelector('#header').style.backgroundColor = '#555169'
            document.querySelector('.note').style.backgroundColor = '#555169'
            document.querySelector('.create_button').style.backgroundColor = '#555169'
            document.querySelector('ul').style.backgroundColor = '#555169'
            document.querySelector('a').style.backgroundColor = '#555169'
            document.querySelector('.navigation').style.backgroundColor = '#555169'
            document.querySelector('li a').style.backgroundColor = '#555169'
            document.querySelectorAll(".Navigation")[1].style.backgroundColor = '#555169'
            document.querySelectorAll(".Navigation a")[1].style.backgroundColor = '#555169'
            document.querySelector('.save').style.backgroundColor = '#555169'
            document.querySelector('.delete').style.backgroundColor = '#555169'
            document.querySelector('#note_button').style.backgroundColor = '#555169'
            
        }
    })
}

change_theme();


let new_notefunct = new_note();
function new_note () {
    let create_note = document.querySelector('.create_button')
    create_note.classList.add('create_note')
    let toggleStatus = document.querySelector(".create_note").classList.toggle('.create_button')
    if (toggleStatus === false) {
        create_note.innerText = '+'
        create_note.style.width = "30px"
     
        let newNote = document.createElement('textarea');
        newNote.cols = "40";
        newNote.rows = "20";
        newNote.innerText = 'Type your title and hit enter twice to write notes in body';
        newNote.setAttribute("id", "story");
        create_note.appendChild(newNote);
  
        create_note.insertAdjacentHTML('beforeend', '<div class="save_delete" </div>');
        let save_delete = document.querySelector(".save_delete")
        save_delete.style.display = 'inline-flex'

        save_delete.insertAdjacentHTML('beforeend', '<button class="save" type="button"> save</button>');
        save_delete.insertAdjacentHTML('beforeend', '<button class="delete" type="button"> cancel</button>');
        remove_note = document.querySelector('.delete')
        save_note = document.querySelector('.save')
        save_deleteDiv = document.querySelector('.save_delete')
        console.log(toggleStatus)
        
        save_deleteDiv.addEventListener('click', (e) => {
            let note_value = document.querySelector('#story').value
            let note = document.querySelector('#story')
            if (e.target.innerText === 'save') {
                notes_split = note_value.split('\n\n')
                notesArrary.push(storeNotes(notes_split))
                console.log(notesArrary)
                alert('Note has been saved')
                cleanUp()

                return note  
            
            } else {
                alert('Note has been deleted');
                cleanUp()
            }
        })
    }
}
    

function cleanUp () {
    const note = document.querySelector('#story')
    let create_note = document.querySelector('.create_button')
    note.remove()
    create_note.innerText = '+ create a new note'
    create_note.style.width = "300px"
}


function storeNotes(arr) {
    return saveNotes = {title: arr[0], body: arr[1]} 
}

storeNotes(notesArrary);


function sidebar (OpenClose) {
    OpenClose.addEventListener('click', (e) => {
        console.log(e.target.innerText)
        OpenClose.classList.add('slidebar')
        document.querySelector(".slidebar").classList.toggle(".open_nav")
        let getSidebar = document.querySelector('.slidebar')
        let open_button = document.querySelector(".open_button")
        let closeButton = document.createElement('button');
        closeButton.innerText = '<<';
        closeButton.setAttribute("class", "close_button");
        let close_button = document.querySelector('.close_button');
        let title = document.createElement('h1');
        title.innerText = 'my notes';
        let note_lists = document.createElement("ul");
        let remove_lists = document.querySelectorAll('ul')[1]
        
            if (e.target.innerText === '>>') {
            open_button.remove();
            getSidebar.classList.remove('open_nav')
            getSidebar.appendChild(closeButton);
            getSidebar.appendChild(title);
            getSidebar.appendChild(note_lists)
            
            note_lists.insertAdjacentHTML('afterbegin', '<li class="note_list"></a></li>')
            note_lists.insertAdjacentHTML('beforeend', '<li class="note_list"></a></li>')

            loopArray()

        } else {
            close_button.remove();
            getSidebar.classList.add('open_nav')
            remove_lists.remove();
            document.querySelector('h1').remove();
            open_button = document.createElement('button');
            open_button.innerText = '>>';
            open_button.setAttribute("class", "open_button");
            getSidebar.appendChild(open_button)
        }
    })
}


sidebar(document.querySelector('.open_nav'));


function loopArray() {
    let note_class = document.querySelector('.note_list')
    let NoteTitles = document.querySelectorAll('.note_list')
    let NoteTitles0 = document.querySelectorAll('.note_list')[0]
    let NoteTitles1 = document.querySelectorAll('.note_list')[1]
    
    for (const note of notesArrary) {
        if (NoteTitles[0].innerText.length === 0 || NoteTitles[1].innerText.length >= 1){
            const {title} = note
            const {body} = note
            console.log(body)
            NoteTitles[0].innerText = title
            NoteTitles0.addEventListener('click', (e) => {
            document.querySelector('#story').value = body
        })

        } else {
            const {title} = note
            const {body} = note
            console.log(body)
            NoteTitles[1].innerText = title
            NoteTitles1.addEventListener('click', (e) => {
                document.querySelector('#story').value = body
                console.log(e.target.innerText)
            })
        }
    }
}
