import { CHANGE_ACTIVE_NAV_TAB, OPEN_MOBILE_NAV, 
    CHANGE_CONTACTED_STATUS, CHANGE_LIGHT_MODE } from './types';

export const changeActiveNavTab = (tabNumber) => {
    return {
        type: CHANGE_ACTIVE_NAV_TAB,
        payload: tabNumber
    };
};

export const openMobileNav = (open) => {
    return {
        type: OPEN_MOBILE_NAV,
        payload: open
    };
};

export const changeContactedStatus = (status) => {
    return {
        type: CHANGE_CONTACTED_STATUS,
        payload: status
    };
};

export const changeLightMode = (mode) => {
    return {
        type: CHANGE_LIGHT_MODE, 
        payload: mode
    }
}