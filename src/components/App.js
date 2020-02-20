import '../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';

import React, { Component } from 'react';
import DataUser from './Data.json';

const uuidv1 = require('uuid/v1')
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: DataUser,
      searchText:'',
      editUserStatus: false,
      editUserObject:{}
    }
  }
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }
  getTextSearch = (dl) => {
   
    this.setState({
      searchText: dl
    });
  }
  getNewUserData = (name, tel, permision) => {
    let item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permision = permision;
    let items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
    console.log(items);
    
  }
  editUser = (user) => {
    this.setState({
      editUserObject: user
    })
    // console.log(this.state.editUserObject);
    
  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permision = info.permision;
      }
    })
    
  }
  deleteUser = (idUser) => {
    let tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser);
    this.setState({
      data:tempData
    });
    
  }
  render() {
    var ketqua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    })
    // console.log(ketqua);
    // console.log(this.state.searchText);
    return (

      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search 
                getTextSearch={(data) => this.getTextSearch(data)} 
                doiTrangThai={() => this.doiTrangThai()} 
                hienThiForm={this.state.hienThiForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                editUserObject={this.state.editUserObject}
                getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}/>
              <div className="col-12">
                <hr/>
              </div>
              <TableData 
                deleteUser={(idUser) => this.deleteUser(idUser)}
                editFun={(user) => this.editUser(user)} 
                dataUserProps={ketqua}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}/>
              <AddUser addUser={(name, tel, permision) => this.getNewUserData(name, tel, permision)} hienThiForm={this.state.hienThiForm}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
