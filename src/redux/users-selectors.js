import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
};

export const getUsers = createSelector(getUsersSelector,  (users) => {
    return users.filter(u => true);
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
};

export const getTotalUserCount = (state) => {
    return state.usersPage.totalUserCount
};

export const getIsLoading = (state) => {
    return state.usersPage.isLoading
};

export const setFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
};