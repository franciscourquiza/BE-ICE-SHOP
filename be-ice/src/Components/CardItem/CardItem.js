import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = (props) => {
  return (
    <div>
        <li className='cards_item'>
            <div className='cards_item_link' >
                <figure className='cards_item_pic-wrap' data-category={props.label}>
                    <img className='cards_item_img' 
                    src={props.src}
                    alt='Travel Image'
                    />
                </figure>
                <div className='cards_item_info'>
                    <h5 className='cards_item_text'>{props.text}</h5>
                </div>
            </div>
        </li>
    </div>
  )
}

export default CardItem