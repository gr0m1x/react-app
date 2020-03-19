import React from "react";
import './Users.css'
import * as axios from "axios";

class Users extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize) ;

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
            console.log(i, "hello")
        }


        return  (
            <div>
                <div className="pagination">
                    {/*{console.log(pages)}*/}
                    {pages.map( p => {
                        return <span className={this.props.currentPage === p && "selectedPage"}
                        onClick={ () => { this.onPageChanged(p) }}> {p} </span>
                    })}
                </div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {
                    this.props.users.map( u => <div className="user-item" key={u.id}>
                    <span className="user-control">
                        <div className="user-icon_wrap"><img src={u.photos.small != null ? u.photos.small : "https://picsum.photos/60/60"} alt={u.photos.small}/></div>
                        <div>
                            { u.followed
                                ? <button onClick={ () => {this.props.unfollow(u.id)} }>Unfollow</button>
                                : <button onClick={ () => {this.props.follow(u.id)} }>Follow</button>
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
        );
    };
}

export default Users;