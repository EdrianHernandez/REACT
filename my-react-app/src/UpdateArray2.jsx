import React, {useState} from 'react';

function UpdateArray2() {
    
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carModel, setCarModel] = useState("");
    const [carMake, setCarMake] = useState("");

    function handleAddCar() {
        const newCar = {
            year: carYear,
            model: carModel,
            make: carMake
        };
        
        setCars(cars => [...cars, newCar]);
        setCarYear(new Date().getFullYear());
        setCarModel("");
        setCarMake("");
    }

    function handleRemoveCar(index) {
        const newCars = cars.filter((_, i) => i !== index);
        setCars(newCars);
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    return (<div>
                <h1>Cars List</h1>
                <ul>
                    {cars.map((car, index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
                </ul>

                <input 
                    type="number" 
                    value={carYear} 
                    onChange={handleYearChange} 
                    placeholder="Enter car year"
                />
                <input 
                    type="text" 
                    value={carMake} 
                    onChange={handleMakeChange} 
                    placeholder="Enter car make"
                />
                <input 
                    type="text" 
                    value={carModel} 
                    onChange={handleModelChange} 
                    placeholder="Enter car model"
                />
                <button onClick={handleAddCar}>Add Car</button>
            </div>
    ) 
}

export default UpdateArray2
