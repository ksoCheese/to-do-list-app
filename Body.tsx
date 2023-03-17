import React from 'react';

const Body: React.FC = () => {  //creating a new functional component called body
    // => defines function takes no arguments and returns JSX (allows us to write HTML in React)
    return (
        <main>
            {
                <div className = "body">
                    <h2> My Lists</h2>
                        <ul>
                            <li>TO DO:</li>
                            <li>TO STUDY:</li>
                            <li>TO BUY:</li>
                        </ul>

                </div>
            }
        </main>
    );
};

export default Body;
