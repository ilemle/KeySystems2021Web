import './App.css';
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import DashBoardSpace from './DashBoardSpace';

class DashBoard extends React.Component {
  render() {
    return (
      <div className='DashBoard'>
        <DashBoardSpace/>
      </div>
    );
  }
}

DashBoard.propTypes = {
  info: PropTypes.string,
  handleClicker: PropTypes.func,
};

export default DashBoard;
