import React, { useState } from 'react';

const Categories = ({cat,filteredmenus}) => {
    const [maincat,setMaincat] = useState('all')
    return (
        <div className='btn-container'>
            {cat.map((item)=>(
                <button key={Math.random()} type='button' className={item === maincat ? 'filter-btn highlight' : 'filter-btn'} onClick={() =>{
                    setMaincat(item);
                    filteredmenus(item)
                }
                } >{item}</button>
            ))}
        </div>
    );
};

export default Categories;