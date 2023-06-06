import React from 'react'

export default function Productcard(props) {
    return (
        <div className='col-12 col-md-6 col-lg-3 mx-0 mb-4' >
            <div class="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} class="card-img-top img-fluid" />
                <div class="card-body text-center">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.text}</p>
                    <h5 class="card-title">${props.price}</h5>
                    <button href="#" class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
