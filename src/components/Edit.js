import React, { Component } from 'react';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editUserObject.id,
            name: this.props.editUserObject.name,
            tel: this.props.editUserObject.tel,
            permision: this.props.editUserObject.permision,
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        }
        );
    }
    saveButton = () => {
        let info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permision = this.state.permision;
        this.props.getUserInfo(info);
        this.props.changeEditUserStatus()
    }
    render() {
        return (
            <div className="col-12">
            <form method="post">
                <div className="card text-white bg-secondary mb-3 mt-2">
                <div className="card-header text-center">Sửa thông tin User</div>
                <div className="card-body text-primary">
                <div className="form-group">
                    <input onChange={(event) => this.isChange(event)} defaultValue={this.props.editUserObject.name} name="name" type="text" className="form-control"  placeholder="Tên User" />
                </div>
                <div className="form-group">
                    <input onChange={(event) => this.isChange(event)} defaultValue={this.props.editUserObject.tel} name="tel" type="text" className="form-control"  placeholder="Điện thoại" />
                </div>
                <div className="form-group">
                    <select onChange={(event) => this.isChange(event)} defaultValue={this.props.editUserObject.permision} name="permision" className="custom-select"  name="permision">
                        <option value>Chọn quyền mặc định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Moderator</option>
                        <option value={3}>Normal</option>
                    </select>
                </div>
                <div className="form-group">
                    <input onClick={() => this.saveButton()} type="button" className="btn btn-block btn-primary"  value="Lưu"/>
                </div>
                </div>
                </div>
            </form>                  
        </div>
        );
    }
}

export default Edit;