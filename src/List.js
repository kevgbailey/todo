
import { render } from '@testing-library/react';
import { useState } from 'react';
//the list object is pretty much all the functional components of the app. it has no child components as of now.
const List = () => {
const [list,setList] = useState([
{text: 'You may add tasks using the submit box above.', id: (Math.floor(Math.random()*10000))},
{text: 'Take out the trash!', id: (Math.floor(Math.random()*10000))},
{text: 'are you serious right neow', id: (Math.floor(Math.random()*10000))},

])
//const [text, setText] = useState('');
const[listObject, setListObject] = useState({text: '', id:0});

//This function takes the value from the form and assigns it to the dynamic value "text" whenever something is put in there.
function handleChange(event) {
  setListObject({text: event.target.value, id: (Math.floor(Math.random()*10000)) });
  console.log(listObject);
  }

  //This function takes the text value and creates a new list that adds the text value to the list.
  function handleAdd() {
    const newList = list.concat(listObject);
    setList(newList);
    console.log(newList);
  }

  function handleDelete(id){
    console.log(id);
     const newList = list.filter(list => list.id !== id);
     setList(newList);
  }
function handleEdit(id){
  render(
    <p>hello</p>
  )
}


    return (  
<div className = 'mainList'>
    <div className = 'inputForms'>
        <input type = "text"  onChange = {handleChange} onSubmit = {handleAdd}/>
        <button type = "button" onClick = {handleAdd}> Add</button>
    </div>
    <ul>
    {list.map((toDo)=>(
        <div className = 'list-preview' key = {toDo.id}>
            <li className = 'listitems'>{toDo.text}</li> 
            <button id = 'cancelbutton' onClick = {() =>handleDelete(toDo.id)}>X</button>
            <button id = 'editbutton' onClick = {() => handleEdit(toDo.id)}>Edit</button>

        </div>

    ))}
    </ul>
    
        </div>
       
        
    );
}
 
export default List;