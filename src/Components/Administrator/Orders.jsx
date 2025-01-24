import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../App.css";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);


    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + "/orders")
            .then((res) => {
                // console.log(res.data);
                setOrders(res.data)
            })
    }, []);



    const handleView = (order) => {
        setSelectedOrder(order);
    };

    const handlePrint = () => {
        const printContent = document.getElementById("invoice").innerHTML;
        const originalContent = document.body.innerHTML;

        // Replace the body content with the invoice content
        document.body.innerHTML = printContent;

        // Trigger the print
        window.print();

        // Restore the original content
        document.body.innerHTML = originalContent;

        // Re-apply event listeners if needed (React components may need a full reload)
        window.location.reload();
    };

    return (
        <div>
            {/* Orders Table */}
            <div className="container mt-4">
                <h3>Orders</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>SubTotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order.id}>
                                <td>{index + 1}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.mobile}</td>
                                <td>{order.subTotal}</td>
                                <td>

                                    <button onClick={() => handleView(order)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* Modal View */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered" style={{ maxWidth: "1000px" }}  >
                    <div class="modal-content" >
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Selected Order</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {selectedOrder && (
                                <div className="container mt-5 bg-light p-4" id="invoice">
                                    <h3 className="text-center">Invoice</h3>
                                    <p>
                                        <strong>Name:</strong> {selectedOrder.name} {selectedOrder.surname}
                                    </p>
                                    <p>
                                        <strong>Email:</strong> {selectedOrder.email}
                                    </p>
                                    <p>
                                        <strong>Mobile:</strong> {selectedOrder.mobile}
                                    </p>
                                    <p>
                                        <strong>Address:</strong> {selectedOrder.address}, {selectedOrder.city},{" "}
                                        {selectedOrder.state} - {selectedOrder.zip}, {selectedOrder.country}
                                    </p>
                                    <h5>Order Details</h5>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedOrder.orders.map((item, index) => (
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            style={{ width: "50px", height: "50px", marginRight: "10px" }}
                                                        />
                                                        {item.title}
                                                    </td>
                                                    <td>${item.price}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>${item.price * item.quantity}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <h5 className="text-right">SubTotal: ${selectedOrder.subTotal}</h5>
                                    <button className="btn btn-success mt-3" onClick={handlePrint}>
                                        Print Invoice
                                    </button>
                                </div>
                            )}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
