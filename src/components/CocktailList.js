// import packages:
import React from 'react';
import { useGlobalContext } from '../context/Context';
import Cocktail from './Cocktail';
import Loading from './Loading';

function CocktailList() {

    const {cocktails, loading} = useGlobalContext();

    if (loading) {
        return <Loading />
    }

    if (cocktails.length < 1) {
        return (
            <h2 className='no-cocktails'>
                no cocktails matched your search criteria
            </h2>
        )
    }

    return (
        <section className='section cocktails-list'>
            <h2 className='section-title'>cocktails</h2>
            <div className='cocktails-center'>{
                cocktails.map(cocktail => {
                    return <Cocktail key={cocktail.id} {...cocktail} />
                })
            }</div>
        </section>
    );
}

export default CocktailList;