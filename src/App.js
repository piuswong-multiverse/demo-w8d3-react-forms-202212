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
    console.log("Coffee state: ", coffees); // just for debugging

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
                <form className="add-item">
                    <h4>Add more coffees!</h4>
                    <input type="text" placeholder="Coffee type" />
                    <label>
                        <input type="checkbox" />
                        <small>arabica?</small>
                    </label>
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