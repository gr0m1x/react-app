import React from "react";
import "./Users.css";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize) ;

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className="pagination">
                {/*{console.log(pages)}*/}
                {pages.map( p => {
                    return <span className={props.currentPage === p ? "selectedPage" : ""}
                                 onClick={ () => { props.onPageChanged(p) }}> {p} </span>
                })}
            </div>
            {
                props.users.map( u => <div className="user-item" key={u.id}>
                    <span className="user-control">
                        <div className="user-icon_wrap">
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : "https://picsum.photos/60/60"} alt={u.photos.small}/>
                            </NavLink>
                        </div>
                        <div>
                            { u.followed
                                ? <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={ () => {
                                    props.toggleFollowingInProgress(true , u.id)
                                    usersAPI.unfollowUsers(u.id).then(data => {
                                        if (data.resultCode === 0) { // сервер подтвердил что отписка произошла resultCode == 0
                                            props.unfollow(u.id) // вызываем callback unfollow
                                        }
                                        props.toggleFollowingInProgress(false, u.id )
                                    });

                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={ () => {
                                    props.toggleFollowingInProgress(true, u.id)
                                    usersAPI.followUsers(u.id).then(data => {
                                            if (data.resultCode === 0) { // сервер подтвердил что подписка произошла resultCode == 0
                                                props.follow(u.id) // вызываем callback follow
                                            }
                                        props.toggleFollowingInProgress(false , u.id)
                                    });

                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span className="user-info">
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
};

export default Users;