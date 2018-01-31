import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    render() {
        return <div>Hello World - this is React Base!</div>;
    }

}

ReactDOM.render( <App />, document.getElementById('appRoot') );

module.hot.accept();
