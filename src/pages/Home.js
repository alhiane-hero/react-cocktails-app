// import packages:
import React from 'react';
// import components:
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';

function Home() {
    return (
        <main>
            <SearchForm />
            <CocktailList />
        </main>
    );
}

export default Home;