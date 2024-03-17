import React from 'react';
import "./home.css"
import { useSelector } from 'react-redux';
import { FcLikePlaceholder } from "react-icons/fc";
import { addDelete, addFavorite } from '../../redux/slices/todo';
import { useDispatch } from 'react-redux';
import { MdDeleteOutline } from "react-icons/md";
import { useState } from 'react';



const Home = () => {
    const dispatch = useDispatch()
    const todo = useSelector(state=>state.todo.todo)
    

    function handleFavorite(id){
        dispatch(addFavorite(id))

    }
    return (
        <section id= "home">
            <div className="container">
                <div className="home">
                    {
                        todo.map((el, ind)=>(
                            <div className='card' key={ind}>
                                <img src={el.image} alt="" />
                                <p>{el.name}</p>
                                <p>{el.lastname}</p>
                               <div className="btn">
                               <button  onClick={()=>dispatch(addDelete(el.id))}><MdDeleteOutline style={{background: "none"}} /></button>
                                <button onClick={()=>handleFavorite(el.id) }><FcLikePlaceholder style={{background: "none"}}/></button>
                               </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;