import React from 'react';
import { render } from 'react-dom';

import Pet from './Pet'


const App = () => {
    return (
        <div>
            <h1>Adopt me!</h1>
            <Pet name="Luna" animal="Dog" breed="Havanees" />
            <Pet name="Pepper" animal="Bird" breed="Cockatail" />
            <Pet name="Doink" animal="Cat" breed="Mixed" />
        </div>
    )
}


render(React.createElement(App), document.getElementById("root"));