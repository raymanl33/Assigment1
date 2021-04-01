
// Add a function to add dark button to the app
// the alert works but need to actualy change the color theme
function change_theme() {
    // should target heading element 
    const btn = document.createElement('button');
    btn.innerText = 'Change Color';
    document.body.appendChild(btn); 
    btn.addEventListener('click', () => {
        alert('Click the button again will change the theme back to the light mode');
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






