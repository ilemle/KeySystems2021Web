import './App.css';
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import react from 'react';
import {observer,inject} from 'mobx-react';

@inject('MainStore')
@observer
class AutoriseForm extends react.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      name: '',
    };
  }

  handleClickAutorise=()=>{
    const newUserLogin=this.input.current.value;
    this.props.MainStore.changeUserAutoriseState(true);
    this.props.MainStore.changeUserLogin(newUserLogin);
  }

  render() {
    return (
      <div className='LoginForm'>
        <h4>Авторизация</h4>
        <input className='InputLogin' ref={this.input}
         placeholder='Введите ваш логин'/>
        <button
          className='AutorButton'
          onClick={console.log('Лог кнопки'),
           this.handleClickAutorise
         }
        >
          {' '}
          Войти в систему
        </button>
      </div>
    );
  }
}

AutoriseForm.propTypes = {
  handleClicker: PropTypes.func,
};

export default AutoriseForm;
