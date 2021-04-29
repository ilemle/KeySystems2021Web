import './App.css';
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import {  Table } from 'antd';
import 'antd/dist/antd.css';
import { inject, observer } from 'mobx-react';

// const dataSource = [
//   {
//     key: '1',
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street',
//   },
//   {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '10 Downing Street',
//   },
// ];

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
// ];


//var columns = [];
//const url = 'https://jsonplaceholder.typicode.com/comments';
const url = 'https://jsonplaceholder.typicode.com/users';

@inject('MainStore')
@observer
class StudentList extends React.Component {
  constructor(props){
    super(props);
    this.state={
    studentArray: [],
    error: '',
    columns:[],
    };
   
  };

  async componentDidMount() {
    let columns=[];
    let studentArray = [];
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
    const {MainStore}=this.props;
    const ar=document.getElementsByClassName('ant-table-row ant-table-row-level-0')

    return (
      <div>
        <h1>{error}</h1>
        <h3>Список студентов</h3>
        <Table 
          
          onRow={(record, rowIndex) => {
            return { 
              onClick: event => {
                MainStore.checkOrAddCheckedUser(record.id,ar);
                MainStore.setSelectIdStudent(record.id);   
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

StudentList.propTypes = {
  columns: PropTypes.array,
  studentArray: PropTypes.array,
  error: PropTypes.string,
};
export default StudentList;
