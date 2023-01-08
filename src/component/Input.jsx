import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Input({ sendData }) {
    let [value, setValue] = useState({ title: '', text: '' });
    const [isRender, setIsRender] = useState(true);
    function changeHandler(e) {
        e.preventDefault();
        const data = e.target.value;
        const name = e.target.name;
        setValue({ ...value, [name]: data });
    }
    return (
        <div className='form-container'>
            {isRender ? <h5 onClick={() => setIsRender(!isRender)} className='clicklble-text'>click here to write a note</h5> :
         <form onSubmit={(e)=>e.preventDefault()}
            className='Input'
            action="">
            
            <input onChange={changeHandler}
            placeholder="Add title..."
            type="text"
            name="title" id=""
            value={value.title} />
            
            <textarea onChange={changeHandler}
            rows="4"
            name="text" id=""
            placeholder='Input text...'
                value={value.text}
            />
            <AddCircleIcon onClick={(e) => {
            e.preventDefault()
            if (value.title !== "") {
                sendData(value);
                setIsRender(!isRender);
            }else{alert("fill title")}
            setValue({ title: "", text: "" });
        }} className='button' fontSize='large'/>
            
            </form> }
            </div>
    );
}
export default Input;
