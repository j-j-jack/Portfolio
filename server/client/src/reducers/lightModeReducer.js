import { CHANGE_LIGHT_MODE } from "../actions/types";

const INITIAL_STATE = {
        lightMode: "light", 
}

const lightModeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_LIGHT_MODE:
            return {...state, lightMode: action.payload }
        default:
            return state;
    }
};

export default lightModeReducer;