import React from "react";
import './Users.css'

const UsersContainer = (props) => {


    if (props.users.length === 0) {
        props.setUsers(
            [
                {id: 1, followed: true, fullName: 'Alex', status: 'Front And', location: {city:'Kharkiv', country: 'Ukraine'}, userIcon: 'https://picsum.photos/60/60'},
                {id: 2, followed: false, fullName: 'Chernov', status: 'Full Stack', location: {city:'Kuiv', country: 'Ukraine'}, userIcon: 'https://picsum.photos/60/60'},
                {id: 3, followed: true, fullName: 'Lera', status: 'Sells', location: {city:'Symu', country: 'Ukraine'}, userIcon: 'https://picsum.photos/60/60'},
                {id: 4, followed: true, fullName: 'Slavon', status: 'Front And', location: {city:'Krakov', country: 'Poland'}, userIcon: 'https://picsum.photos/60/60'},
                {id: 5, followed: false, fullName: 'Dima', status: 'React samurai', location: {city:'Minsk', country: 'Belarus'}, userIcon: 'https://picsum.photos/60/60'}
            ]
        )
    }


    return  (
        <div>
            {
                props.users.map( u => <div className="user-item" key={u.id}>
                    <span className="user-control">
                        <div className="user-icon_wrap"><img src={u.userIcon} alt={u.userIcon}/></div>
                        <div>
                            { u.followed
                                ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                                : <button onClick={ () => {props.follow(u.id)} }>Follow</button>
                            }
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