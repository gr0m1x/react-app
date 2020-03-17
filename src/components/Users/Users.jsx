import React from "react";
import './Users.css'

const UsersContainer = (props) => {

    return  (
        <div>
            {
                props.users.map( u => <div className="user-item" key={u.id}>
                    <span>
                        <div className="user-icon_wrap"><img src={u.userIcon} alt={u.userIcon}/></div>
                        <div>
                            <button>
                                Follow
                            </button>
                        </div>
                    </span>
                    <span className="user-info">
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );

};

export default UsersContainer;