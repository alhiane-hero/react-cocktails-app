// import packages:
import React, {useRef} from 'react';
import { useGlobalContext } from '../context/Context';

function SearchForm() {

    const {setSearchTerm} = useGlobalContext();
    const searchValue = useRef('');

    React.useEffect(_ => {
        searchValue.current.focus();
    }, []);
    
    const serachCocktail = _ => {
        setSearchTerm(searchValue.current.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <section className='section search-section'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Search Your Favorite Cocktail</label>
                    <input type='search'
                        name='name'
                        id='name'
                        ref={searchValue}
                        onChange={serachCocktail}
                    />
                </div>
            </form>
        </section>
    );
}

export default SearchForm;