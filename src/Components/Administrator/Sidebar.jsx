import React from 'react'

function Sidebar() {
    return (
        <div>
            <div class="d-flex flex-column flex-shrink-0 p-3" style={{"width": "280px"}}>
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
                    {/* <span class="fs-4">Sidebar 2</span> */}
                </a>
                <hr />
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href="#" class="nav-link active" aria-current="page">  Home
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark">  Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark"> Orders
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark"> Products
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark"> Customers
                        </a>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    )
}

export default Sidebar