import React from 'react'
import { BsCartPlus,BsStarFill } from "react-icons/bs";

const Card = ({juwon,title,desc,price}) => {
  return (
    <div className='p-3'>
        <div className="card shadow" style={{width: "15rem"}}>
            <img src={juwon} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <h5 className='fw-b text-center'>{price}</h5>
                <div className='d-flex justify-content-around mb-3'>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                </div>
                <a href="https://www.google.com" className="text-white btn btn-danger w-100 d-flex justify-content-evenly align-items-center">
                    <BsCartPlus />
                    Add to cart
                </a>
            </div>
        </div>
    </div>
  )
}

export default Card
