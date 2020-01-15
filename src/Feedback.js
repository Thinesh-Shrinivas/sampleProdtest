import React, { Component } from 'react';
import Button from '@atlaskit/button';
import InlineDialog from '@atlaskit/inline-dialog';

class Feedback extends Component {
	constructor(props){
    super(props);
    this.state={
      dialogOpen:false
    }
  }
  toggleState(){
    this.setState({dialogOpen: !this.state.dialogOpen});
  }
  render() {
    const content=(
      <p>Hello world</p>
    );
      
    return (
      <div className="feedback">
        <Button onClick={e=> console.log('hello world')} >Click me...</Button>
        <Button onClick={()=>this.toggleState.bind(this)} >Click me...</Button>
        <InlineDialog isOpen={this.state.dialogOpen} content={content}>
        </InlineDialog>
      </div>
    );
  }
}

export default Feedback;
