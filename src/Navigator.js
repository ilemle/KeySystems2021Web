import './App.css';
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import StudentList from './StudentList';
import Cours from './Cours'
import { inject , observer} from 'mobx-react';

@inject('MainStore')
@observer
class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: '',
      check: false,
      buttonIndex:-1,
      button:'',
      buttonArray:[],
    };
  }

  buttonList = [
    {
      icon: '',
      content: 'Петров Александр Артурович',
      previevButton: 'Имя',
    },
    {
      icon: '',
      content: 'КТ-42-18, ЧГУ',
      previevButton: 'Группа',
    },
    {
      icon: '',
      content: '20',
      previevButton: 'Возраст',
    },
    {
      icon: '',
      content: <StudentList/>,
      previevButton: 'Студенты',
    },
    {
      icon: '',
      content:<Cours 
     
      />,
      previevButton: 'Работы',
    },
  ];

  render() {
   const {MainStore}=this.props;
    return (
      <div className='Navigator'>
        <div className='ButtonSpace'>
        {this.buttonList.map((button,i) => (
          <button
            key={i}
            className='TypeButton'
            onClick={() => {
              MainStore.currentIdStudent=-1;
              let currentContent = button.content;
              MainStore.setButtonContent(currentContent);
            }}
          >
            {button.previevButton}
          </button>
        ))}
        </div>
      </div>
    );
  }
}

Navigator.propTypes = {
  content: PropTypes.string,
  infoList: PropTypes.func,
};

export default Navigator;
