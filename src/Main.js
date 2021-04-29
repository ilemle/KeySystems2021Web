import './App.css';
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import Navigator from './Navigator';
import DashBoard from './DashBoard';
import Header from './Header';
import DevTools from 'mobx-react-devtools';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: '',
    };
  }

  render() {
    return (
      <div className='Main'>
        <Navigator/>
        <DashBoard/> 
        <Header/>
      </div>
    );
  }
}

Main.propTypes = {
  info: PropTypes.string,
  infoList: PropTypes.func,
};

export default Main;
