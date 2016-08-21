import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GeckoOMeter from './GeckoOMeter';
import './index.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            geckoOMeter: null,
        };
    }

    componentDidMount() {
        fetch('https://widgister.herokuapp.com/challenge/frontend')
            .then(response => response.json())
            .then(data => {
                this.setState({ geckoOMeter: data });
            })
            .catch(error => {
                /* TODO error handling */
                console.error(error);
            });
    }

    render() {
        const { geckoOMeter } = this.state;

        return geckoOMeter !== null ? (
            <GeckoOMeter
              value={geckoOMeter.value}
              min={geckoOMeter.min}
              max={geckoOMeter.max}
              format={geckoOMeter.format || 'currency'}
              unit={geckoOMeter.unit || 'GBP'}
            />
        ) :
            // TODO loading message / spinner
            null
        ;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
