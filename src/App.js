import React, { useState } from 'react';
import Coffee from './Coffee'; // Use {} when importing without default
import './style.css';

// Traditional functions in React can be nicer for debugging tools
function App(){

    // Starting data: different coffees
    const originalCoffees = [
        {
            name: 'House Blend',
            isArabica: true
        },
        {
            name: 'Blonde Roast',
            isArabica: false
        },
        {
            name: 'Villalobos',
            isArabica: true
        }
    ];

    // Define important states for the app
    [coffees, setCoffees] = useState(originalCoffees); // coffees to display
    [name, setName] = useState(""); // name on the form input to display
    [isArabica, setIsArabica] = useState(false); // checkbox state to display
    console.log("Coffee state: ", coffees); // just for debugging
    console.log("Coffee name to display: ", name);
    console.log("isArabica state to display: ", isArabica);

    const handleSubmit = (event) => {
        event.preventDefault(); // stop form from refreshing whole page
        // Update the coffee state!! ... by defining a whole new array
        setCoffees([
            ...coffees, // keep existing coffees in the array
            {
                name,
                isArabica
            }
        ])

        // THIS IS GIVING A TON OF ERRORS: 
        // setCoffees( coffees.push({
        //     name: name,
        //     isArabica: isArabica
        // }) );
    }

    return (
        <div id="app">
            <section id="controls">
                <div className="step">
                    <h1>Coffee Klatsch</h1>
                    <small>
                        <p><em>[ klahch, klach ] - noun</em></p>
                        <p>a social gathering, especially for coffee and conversation.</p>
                    </small>
                </div>
                {/* TODO: Form goes here to add more coffees */}
                <form className="add-item" onSubmit={ handleSubmit } >
                    <h4>Add more coffees!</h4>
                    <input type="text" 
                        placeholder="Coffee type" 
                        value={name} 
                        onChange={ (event) => {setName(event.target.value)}} />
                    <label>
                        <input type="checkbox" 
                            checked={isArabica} 
                            onChange={ () => {setIsArabica(!isArabica)}} />
                        <small>arabica?</small>
                    </label>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </section>
            <section className="step" id="coffees">
                {/* Show all coffees using Coffee component*/}
                {
                    // Whenever mapping over something, add a KEY to the component
                    coffees.map( (coffee, index) => {
                        return(
                            <Coffee key={index} 
                                coffee={coffee} 
                                index={index} />
                        );
                    })
                }
              
            </section>
        </div>
    );    
}

export default App;