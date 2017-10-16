// change this to true to see test results on the black diamond section.
// export const BLACK_DIAMOND = false;

const initialState = {
    currentValue: 0
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                currentValue: state.currentValue + action.payload
            }
        case DECREMENT:
            return {
                currentValue: state.currentValue - action.payload
            }
        default:
            return state;
    }
}

export function increment(amount) {
    return {
        type: INCREMENT,
        payload: amount
    }
}

export function decrement(amount) {
    return {
        type: DECREMENT,
        payload: amount
    }
}