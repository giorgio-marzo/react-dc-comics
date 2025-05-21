import React from 'react'

const ComicCard = (props) => {
    return (
        <div className='card-comic '>
            <img src={props.imagine} alt="" />
            <h4>{props.titolo}</h4>
        </div>
    )
}

export default ComicCard