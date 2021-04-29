import './App.css';
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import {  Table } from 'antd';
import 'antd/dist/antd.css';
import { inject, observer } from 'mobx-react';

@inject('MainStore')
@observer
class Cours extends React.Component {
 constructor(props){
     super(props);
     this.state = {
        studentArray: [],
        error: '',
        columns:[],
      };
 }

  async componentDidMount() {
    let columns=[];
    let studentArray = [];

    // const url=this.getUrl(this.state.idStudent);
    const url=`https://jsonplaceholder.typicode.com/posts?userId=${this.props.MainStore.currentIdStudent}`;
    try {
      studentArray = await (await fetch(url)).json();
      
      function returnKeys(pros){
        return {
          title:pros,
          dataIndex:pros,
          key:pros,
        }
      }
      for (let key in studentArray[0]){
        columns.push(returnKeys(key));
      }

    } catch (error) {
      this.setState({
        error: 'Ошибка получения данных',
      });
      console.log(error);
    }
    this.setState({
      studentArray,
      columns,
    });
  }
/////////////////
  async componentDidUpdate(){
    let columns=[];
    let studentArray = [];
    // const url=this.getUrl(this.state.idStudent);
    const url=`https://jsonplaceholder.typicode.com/posts?userId=${this.props.MainStore.currentIdStudent}`;
    try {
      studentArray = await (await fetch(url)).json();
      
      function returnKeys(pros){
        return {
          title:pros,
          dataIndex:pros,
          key:pros,
        }
      }

      for (let key in studentArray[0]){
        columns.push(returnKeys(key));
      }
        
    } catch (error) {
      this.setState({
        error: 'Ошибка получения данных',
      });
      console.log(error);
    }
    this.setState({
      studentArray,
      columns,
    });
  }

  
  render() {
    const {error,studentArray,columns} = this.state;
    return (
      <div>
        <h1>{error}</h1>
        <h3>Курсовые студента</h3>
        <Table 
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
              }, // click row
              onDoubleClick: event => {}, // double click row
              onContextMenu: event => {}, // right button click row
              onMouseEnter: event => {}, // mouse enter row
              onMouseLeave: event => {}, // mouse leave row
            };
          }}
          dataSource={studentArray} columns={columns} />

      </div>
    );
  }
}

Cours.propTypes = {
  columns: PropTypes.array,
  studentArray: PropTypes.array,
  error: PropTypes.string,
};
export default Cours;
