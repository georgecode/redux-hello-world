// https://github.com/tylerbuchea/my-simple-app
// http://blog.tylerbuchea.com/super-simple-react-redux-application-example/

// basic Explanation of redux parts
// https://medium.com/@itsdavidthai/redux-an-explanation-for-beginners-957f268e7382




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

        <h1>{this.props.currentMessage.title || 'This is where your message will be'}</h1>

        {this.props.currentMessage.title ?
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
  currentMessage: state.currentMessage,
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






