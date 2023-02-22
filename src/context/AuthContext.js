import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createContext } from 'react';
import { auth } from '../firebase/firebase';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    return (
        <AuthContext.Provider
            value={{loginWithGoogle}}
        >
            {children}
        </AuthContext.Provider> 

    )
} 

export { AuthProvider, AuthContext }