import React from 'react'
import Productcard from './Productcard'
import Data from './Data'

export default function Products() {
    return (
        <>
            <div class="row">
                <div class="col-sm-8 offset-sm-2 text-center my-4">
                    <h2 className='mb-4'>All Products</h2>
                    <section>
                        <div className='row justify-content-center'>
                            {Data.ProductData.map((item, index) => {
                                return (
                                    <Productcard img={item.img} title={item.title} text={item.text} price={item.price} />
                                )
                            })}

                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
