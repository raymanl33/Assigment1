


// Add a function to add dark button to the app
// the alert works but need to actualy change the color theme
function change_theme() {
    // should target heading element --> document.querySelectorAll('.header .navigation')
    const btn = document.createElement('button');
    btn.innerText = 'Change Theme';
    document.body.append(btn); 
    btn.addEventListener('click', () => {
        alert('Click the button again to change the theme');
        document.querySelector('.container').classList.add("ChangeTheme")
        let toggleStatus = document.querySelector(".ChangeTheme").classList.toggle('.container')
        if (toggleStatus === false) {
            document.querySelector('.ChangeTheme').style.backgroundColor = '#f2e9de'
            document.querySelector('p').style.backgroundColor = '#f2e9de'
            document.querySelector('footer').style.backgroundColor = '#f2e9de'
            document.querySelector('.note_container').style.backgroundColor = '#f2e9de'
            document.querySelector('.header').style.backgroundColor = '#f2e9de'
            document.querySelector('.note').style.backgroundColor = '#f2e9de'
            document.querySelector('.note_button').style.backgroundColor = '#f2e9de'
            document.querySelector('.delete').style.backgroundColor = '#f2e9de'
            document.querySelector('.save').style.backgroundColor = '#f2e9de'
            document.querySelector('.save_delete').style.backgroundColor = '#f2e9de'
            document.querySelector('ul').style.backgroundColor = '#f2e9de'
            document.querySelector('a').style.backgroundColor = '#f2e9de'
            document.querySelector('.navigation').style.backgroundColor = '#f2e9de'
            document.querySelectorAll(".Navigation")[1].style.backgroundColor = '#f2e9de'
            document.querySelectorAll(".Navigation a")[1].style.backgroundColor = '#f2e9de'
            console.log(toggleStatus)
        } else {
            console.log(toggleStatus)
            document.querySelector('p').style.backgroundColor = '#555169'
            document.querySelector('footer').style.backgroundColor = '#555169'
            document.querySelector('.note_container').style.backgroundColor = '#555169'
            document.querySelector('.header').style.backgroundColor = '#555169'
            document.querySelector('.note').style.backgroundColor = '#555169'
            document.querySelector('.note_button').style.backgroundColor = '#555169'
            document.querySelector('.delete').style.backgroundColor = '#555169'
            document.querySelector('.save').style.backgroundColor = '#555169'
            document.querySelector('.save_delete').style.backgroundColor = '#555169'
            document.querySelector('ul').style.backgroundColor = '#555169'
            document.querySelector('a').style.backgroundColor = '#555169'
            document.querySelector('.navigation').style.backgroundColor = '#555169'
            document.querySelector('li a').style.backgroundColor = '#555169'
            document.querySelectorAll(".Navigation")[1].style.backgroundColor = '#555169'
            document.querySelectorAll(".Navigation a")[1].style.backgroundColor = '#555169'
        }
    })
}

change_theme();


// - use document.querySelectorAll("li") to access the stored notesArray
function store_notes (save_note, note1or2) {
    // get the note_content to this function
    // and push to the notesArray
    let notesArray = [{}];  // <---- this array should only take two notes
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
}


store_notes(save_note, note1or2); // <----- note1or2 is talking about the li in the sidebar

function new_notes (create_button) {

            //if new note is clicked:    
                //clicking on the new note button in index.html should open
                //a note taking area along with a save and cancel buttom
                    //if save is clicked
                        // should remove the note taking area and buttons and
                            //return the title and body of thenote to push 
                            // make sure to return (object)
                            //to new_notes function  
                    //if delete is clicked 
                        //text area should close without saving the note

}


new_notes(create_button);  // <---- figure out how to target .create_button






