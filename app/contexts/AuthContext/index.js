import React, { createContext, useMemo, useReducer, useContext } from 'react';
import AuthReducer, { initialState } from './reducer';

const AuthContext = createContext();

AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const authAction = useMemo(
        () => ({
            restoreToken: async data => {
                dispatch({ type: 'RESTORE_TOKEN' });
            },
            signIn: async data => {
                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
            signOut: () => dispatch({ type: 'SIGN_OUT' }),
            signUp: async data => {
                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
        })
    );

    return (
        <AuthContext.Provider value={{ state, authAction }}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthProvider;


export const useAuth = () => useContext(AuthContext);
