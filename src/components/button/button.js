import React from 'react';
import './button.css'

class Button extends React.Component {
  redirectToStaticSite = () => {
    window.location.href = 'http://localhost:4000/rishi.html'; // Replace 'https://example.com' with the URL of your static site
  };

  render() {
    return (
      <div className='mainB'>
        <button onClick={this.redirectToStaticSite} className='button'>explore VR</button>
      </div>
    );
  }
}

export default Button;
