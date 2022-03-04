import { CHANGE_ACTIVE_NAV_TAB } from "../actions/types";

const INITIAL_STATE = {
    activeTab: 1
}

const navReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_ACTIVE_NAV_TAB:
            return {...state, activeTab: action.payload }
        default:
            return state;
    }
};

export default navReducer;