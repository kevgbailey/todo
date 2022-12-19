import { useState } from 'react';
import Input from './Input';
//the list object is pretty much all the functional components of the app. it has no child components as of now.
const List = () => {
  //const [formVisible, setFormVisible] = useState(false);
const [editing, setEditing] = useState(0);
const [list,setList] = useState([
{text: 'You may add tasks using the submit box above.', id: Math.floor(Math.random()*10000)},
{text: 'Take out the trash!', id: Math.floor(Math.random()*10000)},
{text: 'are you serious right neow', id: Math.floor(Math.random()*10000)},
])
const updatedList = list.map((todo, index) => ({
  text:todo.text,
  id: index
  
}));
console.log(updatedList)


//const [text, setText] = useState('');
const[listObject, setListObject] = useState({text: '', id:0});

//This function takes the value from the form and assigns it to the dynamic value "text" whenever something is put in there.
function handleChange(event) {
  setListObject({text: event.target.value, id: 0});
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
  setEditing(id);
}


function handleFormSubmit(event,key,string) {
  //I need to do something to replace an element in the array with the new element created with handleAdd
  event.preventDefault();
const index = list.findIndex(toDoObject => toDoObject.text ===string && toDoObject.id === key);
console.log(index);
list[index] = listObject;
setList(list);
}


    return (  
<div>

     <Input handleChange={handleChange} handleAdd={handleAdd} /><ul>
        {list.map((toDo) => (
          <div className='list-preview' key={toDo.id}>
            <li className='listitems'>{toDo.text}</li>
            <button id='cancelbutton' onClick={() => handleDelete(toDo.id)}>X</button>
            <button id='editbutton' onClick={() => handleEdit(toDo.id)}>Edit</button>
            {editing === toDo.id &&(
        <form onSubmit={(event) => handleFormSubmit(event, toDo.id, toDo.text)} key={toDo.id}>
          <label>
            Edit item:
            <input type="text"onChange = {handleChange} onSubmit = {handleAdd} />
          </label>
          <button type="submit" onClick = {(event) => handleFormSubmit(event, toDo.id, toDo.text)} key={toDo.id}>Save</button>
        </form>
      )}

          </div>

        ))}
      </ul>
    
        </div>
       
        
    );
}
 
export default List;