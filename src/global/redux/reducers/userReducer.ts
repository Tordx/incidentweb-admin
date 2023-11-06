const currentUser = (state = {}, action: any) => {
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
            case "SET_ANNOUCEMENT":
                return {
                    ...state,
                    user: action.payload,
                    loggedIn: true
                }
        case "LOG_OUT":
            return {
                ...state,
                user: {},
                loggedIn: false
            }
        default:
            return state
    }
}
export default currentUser;