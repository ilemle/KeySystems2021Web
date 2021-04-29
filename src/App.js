import './App.css';
import React from 'react';
import './index.css';
import Main from './Main.js';
import PropTypes from 'prop-types';
import AutoriseForm from './AutoriseForm';
import {observer,inject} from 'mobx-react';


@inject('MainStore')
@observer

class App extends React.Component {

  render() {
     const {
      MainStore
    }=this.props;
    return (
      <div className='App'>
        {MainStore.isAutorise? (
          <Main/>
        ) : (
          <AutoriseForm/>
        )}
      </div>
    );
  }
}

// App.propTypes = {
//   isAutorise: PropTypes.bool,
//   handleClicker: PropTypes.func,
// };

export default App;
