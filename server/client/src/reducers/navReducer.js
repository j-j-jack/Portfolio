import { CHANGE_ACTIVE_NAV_TAB, 
            OPEN_MOBILE_NAV, 
                CHANGE_CONTACTED_STATUS } 
                    from "../actions/types";

const INITIAL_STATE = {
    activeTab: 1, 
    mobileNavOpen: false
}

const navReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_ACTIVE_NAV_TAB:
            return {...state, activeTab: action.payload }
        case OPEN_MOBILE_NAV:
            return {...state, mobileNavOpen: action.payload }
        default:
            return state;
    }
};

export default navReducer;