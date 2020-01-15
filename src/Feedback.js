import React, { Component } from 'react';
import Button from '@atlaskit/button';

class Feedback extends Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
      <div className="feedback">
        <Button onClick={e=> console.log('hello world')} >Click me...</Button>
      </div>
    );
  }
}

export default Feedback;
