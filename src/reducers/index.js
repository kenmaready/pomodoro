import { combineReducers } from 'redux';

const CHANGE_BREAK_LENGTH = "CHANGE_BREAK_LENGTH";
const CHANGE_SESSION_LENGTH = "CHANGE_SESSION_LENGTH";
const ADVANCE_TIMER = 'ADVANCE_TIMER';
const RESET_TIMER = 'RESET_TIMER';
const SESSION_TIMER = 'SESSION_TIMER';
const BREAK_TIMER = 'BREAK_TIMER'
const ON = 1;
const NO = 0;
const YES = 1;
const DEFAULT_SESSION_LENGTH = 25;
const DEFAULT_BREAK_LENGTH = 5;
const MAX_LENGTH = 60;
const MIN_LENGTH = 1;
const INITIAL_STATE = { sessionLength: DEFAULT_SESSION_LENGTH, 
                        breakLength: DEFAULT_BREAK_LENGTH, 
                        clock: DEFAULT_SESSION_LENGTH * 60, 
                        pause: ON, 
                        activeTimer: SESSION_TIMER,
                        active: NO };

const countdownReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_BREAK_LENGTH:
            if (action.payload==="up") { 
                return { ...state, breakLength: Math.min(state.breakLength + 1, MAX_LENGTH) }; 
            } else { 
                return { ...state, breakLength: Math.max(state.breakLength - 1, MIN_LENGTH) }; 
            }
        case CHANGE_SESSION_LENGTH:
            if (action.payload==="up") {
                let newSessionLength = Math.min(state.sessionLength + 1, MAX_LENGTH);
                if (state.active) {
                    return { ...state, sessionLength: newSessionLength };
                } else {
                    return {...state, sessionLength: newSessionLength, clock: newSessionLength * 60 };
                } 
            } else {
                let newSessionLength = Math.max(state.sessionLength - 1, MIN_LENGTH);
                if (state.active) {
                    return { ...state, sessionLength: newSessionLength };
                } else {
                return { ...state, sessionLength: newSessionLength, clock: newSessionLength * 60 }; 
                }
            }
        case ADVANCE_TIMER:
            if (state.clock < 1) {
                if (state.activeTimer===SESSION_TIMER) { 
                    return { ...state, activeTimer: BREAK_TIMER, clock: state.breakLength * 60 };
                } else { 
                    return { ...state, activeTimer: SESSION_TIMER, clock: state.sessionLength * 60 }; 
                }
            } else {
                return { ...state, clock: state.clock - 1, active: YES };
            }
        case RESET_TIMER:
            return INITIAL_STATE;
        default:
            return state;
    }
};




export default combineReducers({
    countdown: countdownReducer
});