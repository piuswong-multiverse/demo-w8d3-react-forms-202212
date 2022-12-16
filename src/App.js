import React from 'react';
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

            </section>
            <section className="step" id="coffees">
                {/* TODO: Show all coffees using Coffee component*/}
              
              
            </section>
        </div>
    );    
}

export default App;