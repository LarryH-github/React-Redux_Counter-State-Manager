export const increment = (n=1) => { //default n=1 if n isnt provided
    return {
        type: 'INCREMENT',
        payload: n
    };
}

export const decrement = (n=1) => {
    return {
        type: 'DECREMENT',
        payload: n
    };
}

export const signIn = () => {
    return {
        type: 'SIGN_IN'
    };
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
}