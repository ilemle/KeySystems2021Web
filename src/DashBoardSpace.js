import './App.css';
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import Cours from './Cours';
import { inject , observer} from 'mobx-react';


@inject('MainStore')
@observer
class DashBoardSpace extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const {MainStore}=this.props;
    return (
      <div className='DashBoardSpace'>
        <h1>{MainStore.contentButton}</h1>
        {MainStore.currentIdStudent!=-1 && MainStore.currentIdStudent!='undefiend'?
        <Cours/>:null
          }
      </div>
    );
  }
}

DashBoardSpace.propTypes = {
  info: PropTypes.string,
};

export default DashBoardSpace;
