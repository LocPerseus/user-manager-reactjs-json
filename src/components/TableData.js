import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    deleteClick = (idUser) => {
        this.props.deleteUser(idUser);
        
    }
    mappingDataUser = () => 
        this.props.dataUserProps.map((value, key) => {
            return ( <TableDataRow 
                deleteClick={(idUser) => this.deleteClick(idUser) }
                editFun2={(user) => this.props.editFun(value)}
                key={key}
                id={value.id}
                userName={value.name} 
                stt={key} 
                tel={value.tel} 
                permision={value.permision}
                changeEditUserStatus={() => this.props.changeEditUserStatus()}/>)       
        })
    render() {       
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                <thead className="thead-inverse">
                    <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Điện thoại</th>
                    <th>Quyền</th>
                    <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {this.mappingDataUser()}             
                </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;