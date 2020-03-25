const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = " SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_LOADING = "TOGGLE-IS-LOADING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE-FOLLOWING-PROGRESS";

let initialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: [],
    // isfollowingInProgress: false,

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.count
            };
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollow
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)

            };
        default:
            return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const toggleLoader = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});
export const toggleFollowingInProgress = (isFollow , userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFollow , userId});

export default usersReducer;