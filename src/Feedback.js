import React, { Component } from 'react';
import Button from '@atlaskit/button';
import InlineDialog from '@atlaskit/inline-dialog';
import { colors } from '@atlaskit/theme';

class Feedback extends Component {
	constructor(props){
    super(props);
    this.state={
      dialogOpen:false
    }
    this.toggleState = this.toggleState.bind(this);
  }
  toggleState(){
    console.log('toggled')
    this.setState({dialogOpen: !this.state.dialogOpen});
  }
  render() {  
    const scrollContainer = {
      maxHeight: 'inherit',
      maxWidth: 'inherit',
      overflow: 'auto',
    };
    
    const oversizedStyles = {
      height: '200px',
      width: '200px',
      background: colors.Y300,
    };
    
 const dialogContent = (
  <div style={scrollContainer}>
    <div style={oversizedStyles}>
      The orange box and the scrollable area should not break out of the
      inline-dialog area.
    </div>
  </div>
);
      
    return (
      <div className="feedback">
        <Button onClick={()=>this.toggleState()} >Click me...</Button>
        <InlineDialog content={dialogContent} isOpen={this.state.dialogOpen}>
        </InlineDialog>
      </div>
    );
  }
}

export default Feedback;
