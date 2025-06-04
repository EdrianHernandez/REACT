import React, { useState } from "react";

function UseState() {
  
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Panda");
    }

    const updateAge = () => {
        setAge(5);
    }

    const updateEmploymentStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(<div>
        <h2>Hello, {name}!</h2>
        <p>Your age is: {age}</p>
        <p>Employment Status: {isEmployed ? "Employed" : "Unemployed"}</p>
        <button onClick={updateName}>Update Name</button>
        <button onClick={updateAge}>Update Age</button>
        <button onClick={updateEmploymentStatus}>Update Employment Status</button>
    </div>);
}

export default UseState
