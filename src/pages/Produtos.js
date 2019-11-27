import React, {Fragment} from 'react'

import Card from '../components/Card/Card'

const produtos = [
    {
        id: 1,
        title: "Fifa 19 - PS4",
        img: "",
        price: "29,90"
    },
    {
        id: 2,
        title: "Relógio ",
        img: "",
        price: "299,90"
    },
    {
        id: 3,
        title: "Fifa 19",
        img: "",
        price: "29,90"
    },
    {
        id: 4,
        title: "Fifa 19",
        img: "",
        price: "29,90"
    },
    {
        id: 5,
        title: "Fifa 19",
        img: "",
        price: "29,90"
    },
    {
        id: 6,
        title: "Fifa 19",
        img: "",
        price: "29,90"
    },
    {
        id: 7,
        title: "Fifa 19",
        img: "",
        price: "29,90"
    },
    {
        id: 8,
        title: "Fifa 19",
        img: "",
        price: "29,90"
    },
    {
        id: 9,
        title: "Fifa 19",
        img: "",
        price: "29,90"
    },
    {
        id: 10,
        title: "Fifa 19",
        img: "",
        price: "29,90"
    }
]

const Produtos = (props)=>(

    <Fragment>
        {produtos.map( item =>(

        <Card
        key={item.id}
        coisinha={item}
        // imagem={item.img}
        // titulo={item.title}
        
        />
        ))} 

    </Fragment>
)

export default Produtos 