import React, {  
  Component,
} from 'react';

import { connect } from 'react-redux';

import {  
  openMessage,
  closeGeod,
} from './redux';

// App.js
export class App extends Component {

  render() {
    return (
      <div>

        <h1>{this.props.geod.title || 'Hello World!'}</h1>

        {this.props.geod.title ?
          <button onClick={this.props.closeGeod}>
            Exit Geod
          </button> :
          <button onClick={() => this.props.openMessage({ title: 'This is an Open Message' })}>
            Click Me!
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
  closeGeod,
};

const AppContainer = connect(  
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;  