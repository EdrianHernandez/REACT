import React from "react";

function OnChange() {
  
    const [name, setName] = React.useState("");
    const [quantity, setQuantity] = React.useState();
    const [comment, setComment] = React.useState("");
    const [payment, setPayment] = React.useState("");
    const [shipping, setShipping] = React.useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    } 

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);    
    }

    return( <div>
                <h2>Enter Your Name</h2>
                <input 
                    type="text" 
                    value={name} 
                    onChange={handleNameChange} 
                    placeholder="Type your name here"
                />
                <p>Your name is: {name}</p>

                <input 
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    placeholder="Enter quantity"
                />
                <p>Quantity: {quantity}</p>

                <textarea 
                    type="text" 
                    value={comment} 
                    onChange={handleCommentChange} 
                    placeholder="Type your comment here"
                />
                <p>Your comment: {comment}</p>  

                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select an option</option> 
                    <option value="Visa">Visa</option> 
                    <option value="MasterCard">MasterCard</option>
                </select>
                <p>Payment Method: {payment}</p>

                <label>
                    <input 
                        type="radio" 
                        value="Pick Up" 
                        checked={shipping === "Pick Up"} 
                        onChange={handleShippingChange} 
                    />
                    Pick Up
                </label><br />
                <label>
                    <input 
                        type="radio" 
                        value="Delivery" 
                        checked={shipping === "Delivery"} 
                        onChange={handleShippingChange} 
                    />
                    Delivery
                </label>
                <p>Shipping Method: {shipping}</p>

            </div>);
}

export default OnChange
