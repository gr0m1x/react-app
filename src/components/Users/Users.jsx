import React from "react";
import "./Users.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
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
                                ? <button onClick={ () => {

                                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    //     withCredentials: true,  // в delete запросе 2-м параметром  withCredentials - проверка авторизации
                                    //     headers: {
                                    //         "API-KEY" : "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
                                    //     }
                                    // }).then(response => {
                                    //     if (response.data.resultCode === 0) { // сервер подтвердил что подписка произошла resultCode == 0
                                    //
                                    //     }
                                    // });
                                    props.unfollow(u.id) // вызываем callback unfollow
                                }}>Unfollow</button>
                                : <button onClick={ () => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {} , {
                                        withCredentials: true, // в post запросе 3-м параметром  withCredentials - проверка авторизации
                                        headers: {
                                            "API-KEY" : "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
                                        }
                                    }).then(response => {
                                            if (response.data.resultCode === 0) { // сервер подтвердил что подписка произошла resultCode == 0

                                            }
                                    });
                                    props.follow(u.id) // вызываем callback follow
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