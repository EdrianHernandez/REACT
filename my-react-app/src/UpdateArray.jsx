import React, {useState} from 'react';

function UpdateArray() {
    
    const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);

    function handleAddFruit() {

         const newFruit = document.getElementById("fruitinput").value;
         document.getElementById("fruitinput").value = ""; 

         setFruits(fruits => [...fruits, newFruit]);
    }

    function handleRemoveFruit(index) {

        const newFruits = fruits.filter((_, i) => i !== index);
        setFruits(newFruits);
    }

    return( <div>
                <h1>Fruits List</h1>
                <ul>
                    {fruits.map((fruit, index) => 
                    <li key={index} onClick={() => handleRemoveFruit(index)}>
                        {fruit} 
                    </li>)}
                </ul>

                <input type="text" id="fruitinput" placeholder="Enter food name"/>
                <button onClick={handleAddFruit}>Add Food</button>
            </div>);
}

export default UpdateArray
