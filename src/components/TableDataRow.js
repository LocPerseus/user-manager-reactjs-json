import React, { Component } from 'react';

class TableDataRow extends Component {
    permisionShow = () => {
        if(this.props.permision == 1){
            return "Admin"
        }
        else if(this.props.permision == 2){
            return "Moderator";
        }
        else{
            return "Normal";
        }
    }
    editClick = () => {
        this.props.editFun2();
        this.props.changeEditUserStatus();
    }
    deleteClick = (idUser) => {
        this.props.deleteClick(idUser);
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permisionShow()}</td>
                <td>
                    <div className="btn-group">
                    <div className="btn btn-warning sua" onClick={() => this.editClick()}>
                        <i className="fa fa-edit" />Sửa
                    </div>
                    <div className="btn btn-success xoa" onClick={(idUser) => this.deleteClick(this.props.id)}>
                        <i className="fa fa-trash" />Xóa
                    </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;