const CHANGE_AUTH = 'CHANGE_AUTH';

const defaultState = {
    isAuth: false,
    authData: null
}
const changeAuth = (form, value) => ({
    type: CHANGE_AUTH,
    payload:  {
        form,
        value,
    }
});

const authReducer = (state = defaultState, action) => {
    const { payload, type } = action;
    switch (type) {
        case CHANGE_AUTH:
            return {
                ...state,
                [payload.form] : payload.value
            }
        default:
            return state
    }
}

export {
    CHANGE_AUTH,
    changeAuth,
    authReducer
};