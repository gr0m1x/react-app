const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [
        // {id: 1, followed: true, fullName: 'Alex', status: 'Front And', location: {city:'Kharkiv', country: 'Ukraine'}, userIcon: 'https://picsum.photos/60/60'},
        // {id: 2, followed: false, fullName: 'Chernov', status: 'Full Stack', location: {city:'Kuiv', country: 'Ukraine'}, userIcon: 'https://picsum.photos/60/60'},
        // {id: 3, followed: true, fullName: 'Lera', status: 'Seals', location: {city:'Symu', country: 'Ukraine'}, userIcon: 'https://picsum.photos/60/60'},
        // {id: 4, followed: true, fullName: 'Slavon', status: 'Front And', location: {city:'Krakov', country: 'Poland'}, userIcon: 'https://picsum.photos/60/60'},
        // {id: 5, followed: false, fullName: 'Dima', status: 'React samurai', location: {city:'Minsk', country: 'Belarus'}, userIcon: 'https://picsum.photos/60/60'}
    ]
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
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UN_FOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;