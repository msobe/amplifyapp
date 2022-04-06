import logo from './logo.svg';
import './App.css';
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
      <Authenticator hideSignUp>
          { ({ signOut, user }) => (
              <div className="App">
                  <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo" />
                      <h1>Hello from V2</h1>
                      <p>
                          Edit <code>src/App.js</code> and save to reload.
                      </p>
                      <a
                          className="App-link"
                          href="https://reactjs.org"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          Learn React
                      </a>
                      <button onClick={signOut}>Sign out</button>
                  </header>
              </div>
          )}
      </Authenticator>
  );
}

export default App;
