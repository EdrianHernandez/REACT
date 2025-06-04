import React from 'react';

function Updater() {

    const [car, setCar] = React.useState({
        make: 'Toyota',
        year: 2020,
        model: 'Corolla'
    });

    function handleMakeChange(event) {
        setCar(car => ({ ...car, make: event.target.value }));
    }

    function handleYearChange(event){
        setCar(car => ({ ...car, year: event.target.value }));
    }

    function handleModelChange(event){
        setCar(car => ({ ...car, model: event.target.value }));
    }
    
  return(   <div>
                <h1>Car Details</h1>
                <p>Make: {car.make}</p>
                <p>Year: {car.year}</p>
                <p>Model: {car.model}</p>
                 
                <input type="text" value={car.make} onChange={handleMakeChange}/>
                <input type="number" value={car.year} onChange={handleYearChange}/>
                <input type="text" value={car.model} onChange={handleModelChange}/>
            </div>);
} 

export default Updater
