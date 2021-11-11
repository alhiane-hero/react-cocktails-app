import React from 'react';
import {Link} from "react-router-dom";

const Cocktail = ({id, name, image, info, glass}) => {
    return (
        <article className='cocktail'>
            <header>
                <img className='img-fluid cocktail-img' 
                src={image} alt={name} />
            </header>
            <footer>
                <h3 className='cocktail-name'>{name}</h3>
                <h4 className='cocktail-glass'>{glass}</h4>
                <p className='cocktail-info'>{info}</p>
                <Link to={`/cocktail/${id}`} className='btn'>details</Link>
            </footer>
        </article>
    );
}

export default Cocktail