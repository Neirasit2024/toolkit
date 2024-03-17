import React from 'react';
import "./admin.css"
import { useState } from 'react';
import {useDispatch} from "react-redux"
import { addTodo } from '../../redux/slices/todo';


const Admin = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState({
        name:"",
        lastname:"",
        image: ""
    })

    function handleInputValue(e){
        let obj = {...inputValue, [e.target.name] : e.target.value}
        setInputValue(obj)
    }

   

  function addTask(){
//     let newTask ={
//         task: ,
//         id: Date.now()
//    }
   dispatch(addTodo({...inputValue, id:Date.now()}))
  }
    return (
        <section id='admin'>
            <div className="container">
                <div className="admin">
                    <h1>TO DO</h1>
                    <input onChange={handleInputValue} name='name' type="text" placeholder='name .. '/>
                    <input onChange={handleInputValue} name='lastname' type="text" placeholder='lastname ... '/>
                    <input onChange={handleInputValue} name='image' type="text" placeholder="URL images ... "/>
                    <div className="btn">
                        <button onClick={addTask}>create</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admin;