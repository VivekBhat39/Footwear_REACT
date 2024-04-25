import React from 'react'

export default function Productcard(props) {
    return (
        <div className='col-12 col-md-6 col-lg-3 mx-0 mb-4' >
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} className="card-img-top img-fluid" />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <h5 className="card-title">${props.price}</h5>
                    <button href="#" className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
