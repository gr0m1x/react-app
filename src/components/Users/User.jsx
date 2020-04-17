import React from "react";
import "./User.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../img/avatar.jpg"

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className="user-item">
            <span className="user-control">
                <div className="user-photo_wrap">
                    <NavLink className={"user-photo__link"} to={'/profile/' + user.id}>
                        <img className={"user-photo"} src={user.photos.small != null ? user.photos.small : userPhoto}
                             alt={user.photos.small}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}
                        >Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}
                        >Follow</button>
                    }
                </div>
            </span>
            <span className="user-info">
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>
    )
};

export default User;