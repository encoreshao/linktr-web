import React from 'react';
import { withRouter } from 'react-router';

const Error = () => {
  return (
    <header className='App-header'>
      <div className="App">
        <p>Error: Page does not exist!</p>
      </div>
    </header>
  );
}

export default withRouter(Error);
