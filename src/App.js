import React, {  
  Component,
} from 'react';

import { connect } from 'react-redux';

import {  
  openMessage,
  closeMessage,
} from './redux';

// App.js
export class App extends Component {

  render() {
    return (
      <div>

        <h1>{this.props.geod.title || 'This is where your message will be'}</h1>

        {this.props.geod.title ?
          <button onClick={this.props.closeMessage}>
            Click to exit message
          </button> :
          <button onClick={() => this.props.openMessage({ title: 'This is an Open Message' })}>
            Click to see message!
          </button>
       }

      </div>
    );
  }

}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({  
  geod: state.geod,
});

const mapDispatchToProps = {  
  openMessage,
  closeMessage,
};

const AppContainer = connect(  
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;  