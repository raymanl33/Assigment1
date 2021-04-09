
let notesArrary = []

function change_theme() {
    // should target heading element --> document.querySelectorAll('.header .navigation')
  
    const btn = document.createElement('button');
    btn.innerText = 'Change Theme';
    document.getElementById('header').appendChild(btn); 
    btn.addEventListener('click', () => {
        alert('Click the button again to change the theme');
        document.querySelector('.container').classList.add("ChangeTheme")
        let toggleStatus = document.querySelector(".ChangeTheme").classList.toggle('.container')
        if (toggleStatus === false) {
            document.querySelector('*').style.backgroundColor = '#f2e9de'
            document.querySelector('.ChangeTheme').style.opacity = ""
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
            
            console.log(toggleStatus)
        } else {  // <-- maybe add a if statment 
            // document.querySelector('body').style.backgroundColor = '#f2e9de'
      
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

        // document.querySelector('.create_button').style.display = 'none'
        let createButton = document.createElement('button');
        createButton.innerText = '+';
        createButton.setAttribute("id", "note_button");
        create_note.parentNode.replaceChild(createButton, create_note);
        let parent = document.querySelector('#note_button')

        let newNote = document.createElement('textarea');
        newNote.cols = "40";
        newNote.rows = "20";
        newNote.innerText = 'Type your title and hit enter twice to write notes in body';
        newNote.setAttribute("id", "story");
        document.getElementById("note_button").appendChild(newNote);

        parent.insertAdjacentHTML('beforeend', '<div class="save_delete" </div>');
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
                note.value = 'Type your title and hit enter twice to write notes in body'
                // still need to remove the note taking area after clicked 

                // document.querySelector('#note_button').style.display = 'none'
                // let Re_createButton = document.createElement('button');
                // Re_createButton.innerText = '+ create a new note';
                // Re_createButton.setAttribute("class", "create_button");
                // note_button.parentNode.replaceChild(Re_createButton, note_button);
                return note
                
                   
            } else {
                alert('Note has been deleted');
                
                // still need to remove the note taking area after clicked 
                document.querySelector('#note_button').style.display = 'none'
                let Re_createButton = document.createElement('button');
                Re_createButton.innerText = '+ create a new note';
                Re_createButton.setAttribute("class", "create_button");
                note_button.parentNode.replaceChild(Re_createButton, note_button);

                // document.querySelector('.create_button').style.display = 'block'

            }
        })
        // remove_note.addEventListener('click', (e) => {
        //     alert('Note has been deleted');
        //     let toggleStatus = document.querySelector("#note_button").classList.toggle('.create_button')
        //     if (toggleStatus === true) {
        //         parent.remove()
        //         let createButton = document.createElement('button');
        //         createButton.innerText = '+';
        //         // createButton.setAttribute("id", "note_button");
        //         // create_note.parentNode.replaceChild(createButton, create_note);
        //         // let parent = document.querySelector('#note_button')
        //     }      
        
    }
   
}
    

function storeNotes(arr) {
    return saveNotes = {title: arr[0], body: arr[1]} 
  
}

storeNotes(notesArrary);


// function values(arr) {
//     for (const note of arr) {
//         const {body} = note
//         console.log(body)
//     }
// }

// values(notesArrary);



function sidebar (OpenClose, newNotes) {
   
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


sidebar(document.querySelector('.open_nav'), new_notefunct);




