


// Add a function to add dark button to the app
// the alert works but need to actualy change the color theme
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

// let list = document.querySelector('ul');  < ----
// list.insertAdjacentHTML('beforebegin', '<p>heelo</P>');

function new_note () {
    let create_note = document.querySelector('.create_button')
    create_note.classList.add('create_note')
    let toggleStatus = document.querySelector(".create_note").classList.toggle('.create_button')
    if (toggleStatus === true) {
        // let newDiv = document.createElement('div');
        // newDiv.classList.add("save_delete");
        
        // const currentDiv = document.getElementById("story");
        // document.body.insertBefore(newDiv, currentDiv);

        let createButton = document.createElement('button');
        createButton.innerText = '+';
        createButton.setAttribute("id", "note_button");
        create_note.parentNode.replaceChild(createButton, create_note);
        let parent = document.querySelector('#note_button')

        let newNote = document.createElement('textarea');
        newNote.cols = "40";
        newNote.rows = "20";
        newNote.innerText = 'your note here';
        // create_note.parentNode.replaceChild(newNote, create_note);
        newNote.setAttribute("id", "story");
        document.getElementById("note_button").appendChild(newNote);

        parent.insertAdjacentHTML('beforeend', '<div class="save_delete" </div>');
        let save_delete = document.querySelector(".save_delete")

        save_delete.insertAdjacentHTML('beforeend', '<button class="save" type="button"> save</button>');
        save_delete.insertAdjacentHTML('beforeend', '<button class="delete" type="button"> delete</button>');
        remove_note = document.querySelector('.delete')
        save_note = document.querySelector('.save')
        save_deleteDiv = document.querySelector('.save_delete')
        console.log(toggleStatus)
        
        save_deleteDiv.addEventListener('click', (e) => {
            // let toggleStatus = document.querySelector("#note_button").classList.toggle('.create_button')
            if (e.target.innerText === 'save') {
                   alert('Note has been saved')
            } else {
                alert('Note has been deleted');
                let toggleStatus = document.querySelector("#note_button").classList.toggle('.create_button')
                parent.remove()
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
        // })
        // save_note.addEventListener('click', (e) => {
        //     alert('Note has been saved');
        // })
    }
    // else {
    //     document.querySelector('.create_button').innerHTML = "+ create a new note";
    //     // document.querySelector('textarea').remove();
    // }
   
  

}
    

// notes();  

// function delete_notes (remove_notes) {
   
//     console.log(remove_notes)
// //     remove_notes.addEventListener('click', (e) => {
// //         alert('Note has been deleted');
// //         let toggleStatus = document.querySelector("#note_button").classList.toggle('.create_button')
// //         if (toggleStatus === true) {
// //             parent.remove()
// //             let createButton = document.createElement('button');
// //             createButton.innerText = '+';
// //         } 
// //  })
// }

// delete_notes(new_note());

// let note = document.getElementById("#story").value;   <-- can use this to read the value 

// - use document.querySelectorAll("li") to access the stored notesArray
// function store_notes (save_note, note1or2) {
    // get the note_content to this function
    // and push to the notesArray
    // let notesArray = [{}];  // <---- this array should only take two notes
    // maybe check if there is less than two object in the arrary:
        /// notesArrary.push 
        // return notesArrary
    //else:
        // notesArrary.push last object in the arrary which it should be note two
        // return notesArrary
    
    // use a for loop to loop though the notesArrary
        // to bring out the note the user specified
            // when found the note should be displayed in the main 
            // with a close note button
                // if close note is clicked, the app returns to ints original state
// }


// store_notes(save_note, note1or2); // <----- note1or2 is talking about the li in the sidebar




function slidebar (OpenClose) {
    OpenClose.addEventListener('click', (e) => {
        console.log(e.target.innerText)
        OpenClose.classList.add('slidebar')
        let open_nav = document.querySelector("open_nav")
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

        // let notes = document.querySelector("ul")
  
        // try  let note_lists = document.querySelector("h1 > ul")
        

            if (e.target.innerText === '>>') {
            open_button.remove();
            getSidebar.classList.remove('open_nav')
            getSidebar.appendChild(closeButton);
            getSidebar.appendChild(title);
            getSidebar.appendChild(note_lists)
            note_lists.insertAdjacentHTML('afterbegin', '<li class="note_list"> <a href="">note one</a></li>')
            note_lists.insertAdjacentHTML('beforeend', '<li class="note_list"> <a href="">note two</a></li>')
        } else {
            close_button.remove();
            getSidebar.classList.add('open_nav')
            remove_lists.remove()
            document.querySelector('h1').remove();
            open_button = document.createElement('button');
            open_button.innerText = '>>';
            open_button.setAttribute("class", "open_button");
            getSidebar.appendChild(open_button)
        
            
        }
    })
}


slidebar(document.querySelector('.open_nav'));
