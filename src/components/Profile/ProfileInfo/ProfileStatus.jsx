import React from "react"
import "./ProfileInfo.css"

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () =>  {
        this.setState({
            editMode: true
        });
    };
    deactivateEditMode = () =>  {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    };
    onStatusChange = (e) => {
        this.setState( {
            status: e.currentTarget.value
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) { // если статус изменился и не равен текующему, перересовываем компоненту.
            this.setState( {
                status: this.props.status // обновляем локальный статус, из пропсов
            })
        }
    }
    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span className={"userStatus"} onDoubleClick={this.activateEditMode} >{this.props.status || "some status"}</span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} type="text" value={this.state.status} autoFocus={true}/>
                    </div>
                }
            </div>
        )
    }
};

export default ProfileStatus;