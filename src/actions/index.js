const CHANGE_BREAK_LENGTH = "CHANGE_BREAK_LENGTH";
const CHANGE_SESSION_LENGTH = "CHANGE_SESSION_LENGTH";
const ADVANCE_TIMER = 'ADVANCE_TIMER';
const RESET_TIMER = 'RESET_TIMER';


export const changeBreakLength = (change) => {
    return { type: CHANGE_BREAK_LENGTH, payload: change };
};

export const changeSessionLength = (change) => {
    return { type: CHANGE_SESSION_LENGTH, payload: change };
};

export const advanceTimer = () => {
    return { type: ADVANCE_TIMER };
}

export const resetTimer = () => {
    return { type: RESET_TIMER };
}