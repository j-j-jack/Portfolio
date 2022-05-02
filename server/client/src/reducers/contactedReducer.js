import { CHANGE_CONTACTED_STATUS } from "../actions/types";

const INITIAL_STATE = {
        contacted: "failed", 
}

const contactedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_CONTACTED_STATUS:
            return {...state, contacted: action.payload }
        default:
            return state;
    }
};

export default contactedReducer;