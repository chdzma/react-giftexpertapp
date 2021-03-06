import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Ataque titanes']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>

            <ol>
                {
                    categories.map((category) => {
                        return <GifGrid key={category} category={category} />
                    })
                }
            </ol>
        </>
    )
}
