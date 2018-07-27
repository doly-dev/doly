import React from 'react';
import Transition from 'react-transition-group/Transition';
 
 const duration = 300;
 
 const defaultStyle = {
   transition: `opacity ${duration}ms ease-in-out`,
   opacity: 0,
 }
 
 const transitionStyles = {
   entering: { opacity: 0 },
   entered:  { opacity: 1 },
 };

 const Fade = ({ in: inProp }) => (
   <Transition in={inProp} timeout={duration}>
     {(state) => (
       <div style={{
         ...defaultStyle,
         ...transitionStyles[state]
       }}>
         I'm a fade Transition!
       </div>
     )}
   </Transition>
 );

export default class Example extends React.Component{
    state = {
        in: false
    }

    toggleEnterState = () => {
      this.setState({ in: !this.state.in });
    }

    render(){
        return (
            <div>
              <Fade in={this.state.in} />
              <button onClick={this.toggleEnterState}>Click to Enter</button>
            </div>
        );
    }
}

