import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import { useTranslation } from 'react-i18next'

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);


function App() {
  const {t} = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            {t('learnreact')}
        </a>
      </header>
      <amplify-sign-out button-text={t('logout')}></amplify-sign-out>
    </div>
  );
}

export default withAuthenticator(App)