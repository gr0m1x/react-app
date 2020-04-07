import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

const Users = ({pageSize, totalUserCount, onPageChanged, currentPage, ...props}) => {
    return (
        <div>
            <Pagination onPageChanged={onPageChanged}
                        totalUserCount={totalUserCount}
                        pageSize={pageSize}
                        currentPage={currentPage}/>
            <div className="usersList">
                { props.users.map( user =>
                    <User
                        user={user}
                        key={user.id}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}/>)
                }
            </div>
        </div>
    )
};

export default Users;