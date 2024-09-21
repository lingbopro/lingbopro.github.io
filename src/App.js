import React from 'react';
import { withTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render() {
        // const { t } = this.props;
        return (
            <s-page class="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </s-page>
        );
    }
}

export default withTranslation()(App);
