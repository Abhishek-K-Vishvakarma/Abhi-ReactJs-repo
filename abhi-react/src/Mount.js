
import React, { Component } from 'react';

// First Component: Mount
class Mount extends Component {
  constructor(props) {
    super(props);
    this.state = { color: 'red' };
  }

  // Changes the color after 1 second
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: 'yellow' });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>My Color is : {this.state.color}</h1>
      </div>
    );
  }
}

// Second Component: Should
class Should extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Abhishek' };
  }

  // Always allows component to update
  shouldComponentUpdate() {
    return true;
  }

  // Changes the name after 1 second
  change = () => {
    this.setState({ name: 'Vishvakarma' });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.change}>Change Name</button>
      </div>
    );
  }
}


class Update extends Component{
  constructor(props){
     super(props);
     this.state = {bat : 'SS'};
  }
  componentDidMount(){
     setTimeout(() => {
       this.setState({ bat: 'Moon' });
     }, 1000);
  }
  componentDidUpdate(){
    document.getElementById('show').innerText = this.state.bat;
  }
  render(){
    return(
      <div>
        <h1>{this.state.bat}</h1>
        <div id='show'></div>
      </div>
    )
  }
}


class Snapshot extends Component{
  constructor(props){
    super(props);
    this.state = {subject : 'Chemistry'};
  }
  componentDidMount(){
    this.setState({subject : 'Mathematics'});
  }
  getSnapshotBeforeUpdate(preProp, preState){
   document.getElementById('one').innerText = "Before" +preState.subject;
  }
  componentDidUpdate(){
    document.getElementById('two').innerText ="After" +this.state.subject;
  }
  render(){
    return(
      <div>
      <h1>{}</h1>
      <div id='one'></div>
      <div id='two'></div>
      </div>
    )
  }
}


export {Mount,Should, Update, Snapshot};

