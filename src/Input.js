const Input = ({handleChange,handleAdd}) => {
    return (  
        <div className = 'inputForms'>
        <input type = "text"  onChange = {handleChange} onSubmit = {handleAdd}/>
        <button type = "submit" onClick = {handleAdd}> Add</button>
    </div>
    );
}
 
export default Input;