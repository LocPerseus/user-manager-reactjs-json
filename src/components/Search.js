import React, { Component } from 'react';
import Edit from './Edit';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObject:{}
        }
    }
    
    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.getTextSearch(this.state.tempValue); 
    }
    hienThiNut = () => {
        if(this.props.hienThiForm === true) {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.doiTrangThai()}>Đóng lại</div>
        }
        else{
            return  <div className="btn btn-block btn-outline-info" onClick={() => this.props.doiTrangThai()}>Thêm mới</div> 
        }            
    }
    isShowEditUser = () => {
        if(this.props.editUserStatus === true){
            return (
                <Edit 
                    changeEditUserStatus={() => this.props.changeEditUserStatus()}
                    editUserObject={this.props.editUserObject}
                    getUserInfo={(info) => this.getUserInfo(info)}/>
            )
        }
    }
    getUserInfo = (info) => {
        this.setState({
            userObject:info
        });
        this.props.getUserEditInfoApp(info);
    }
    render() {       
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Nhập từ khóa ..." />
                        <div onClick={(data) => this.props.getTextSearch(this.state.tempValue)} className="btn btn-info">Tìm</div>
                    </div>
                </div>
                <div className="form-group">                   
                    {this.hienThiNut()}                 
                </div>
                <div className="row">
                    {this.isShowEditUser()}
                </div>
            </div>
        );
    }
}

export default Search;