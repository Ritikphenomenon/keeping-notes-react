import React ,{useState} from "react"

function CreateArea(Props
  ){
const [note,setnote]=useState({
  title:"",
  content:""
});

function handleChange(event){
   const {name,value}=event.target
   setnote((prevNote)=>{
     return {
       ...prevNote,
       [name]:value
     }
   });

};

function submitNote(event){
  Props.onAdd(note);
  setnote({
    title:"",
    content:""
  });
  event.preventDefault();
}



return(

<div>
  <form className="comp">


    <input 
    name="title" 
    onChange={handleChange}
    value={note.title}
    placeholder="Title"
    />

    <textarea
    name="content"
    onChange={handleChange}
    value={note.content}
    placeholder="Take a note..."
    rows="3"
    />
    

    <button onClick={submitNote}>Add</button>

    </form>

  </div>

)

}

export default CreateArea;