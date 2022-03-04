import { CHANGE_ACTIVE_NAV_TAB } from './types';

export const changeActiveNavTab = (tabNumber) => {
    return {
        type: CHANGE_ACTIVE_NAV_TAB,
        payload: tabNumber
    };
};