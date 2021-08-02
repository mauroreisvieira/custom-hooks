import * as React from 'react';
import ReactDOM from 'react-dom';

const App = (): React.ReactElement => (
    <div>Hey Folks 👋🏼</div>
);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
