import React from 'react'

export default function CategoryItem(props) {
    const {idCategory} = props;
    return (
        <div className='categoryItem'>
            {idCategory}
        </div>
    )
}
