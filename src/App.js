import React from 'react';

import './App.css';

import { withAuthenticator } from 'aws-amplify-react';

function App() {
  return (
    <div className='App'>
      <h1>AWS-AMPLIFY TEST</h1>
      <h3>Deployment successful</h3>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
