import './App.css';
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import {observer,inject} from 'mobx-react';

@inject('MainStore')
@observer
class CloseButton extends React.Component {
  // onClickClose = () => {
  //   const { handleClicker } = this.props;
  //   handleClicker(false);
  // };
  onClickClose=()=>{
    this.props.MainStore.changeUserAutoriseState(false)
  }

  render() {
      
    return (
      <div>
        <button className='CloseButton' 
        onClick={this.onClickClose}
        >
          Закрыть
        </button>
      </div>
    );
  }
}

Navigator.propTypes = {
  onClickClose: PropTypes.func,
};
export default CloseButton;
