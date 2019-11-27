import React from 'react'
import Imagem from '../../assets/img/images.jpg'

// import Produto from '../../pages/Produtos'

import './Card.css'

const Card =(props) => {
const { price, title, img }= props.coisinha
    return(
    <div className='card'>
        <img className='card-img' src={Imagem}></img>
        <p>{title}</p>
        <p>{price}</p>

    </div>
    )
    }


export default Card