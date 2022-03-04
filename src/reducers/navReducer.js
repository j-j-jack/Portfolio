import { CHANGE_ACTIVE_NAV_TAB } from "../actions/types";

const navReducer = (state = 1, action) => {
    switch (action.type) {
        case CHANGE_ACTIVE_NAV_TAB:
            return {...state, activeTab: action.payload }
        default:
            return state;
    }
};

export default navReducer;