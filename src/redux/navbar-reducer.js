let initialState = {
    navList: [
        {rout:"/profile", name:"Profile"},
        {rout:"/dialogs", name:"Messages"},
        {rout:"/news", name:"News"},
        {rout:"/users", name:"Users"},
        // {rout:"/login", name:"Login"},
        {rout:"/settings", name:"Settings"},
    ]
}

const navbarReducer = (state = initialState, action) => {
    return state
}

export default navbarReducer;