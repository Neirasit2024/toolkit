import React from 'react';
import "./favorite.css"
import { useSelector } from 'react-redux';

const Favorite = () => {
    const favorite = useSelector(state=> state.todo.favorite)
    console.log(favorite)
    return (
        <section id="favoite">
            <div className="container">
                <div className="favorite">
                    {
                        favorite.map((el, ind)=>(
                            <div className="card" key={ind}>
                                <img src={el.image} alt="" />
                                <p>{el.name}</p>
                                <p>{el.lastname}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Favorite;