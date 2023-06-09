import { createContext, useContext, useState, useEffect } from "react";
import {createUserWithEmailAndPassword, 
	signInWithEmailAndPassword, 
	signOut, 
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	onAuthStateChanged} from 'firebase/auth'

import {auth} from '../firebase';

const UserContext = createContext();

export const AuthContextProvider = ({children}) =>{

	const [user, setUser] = useState({})

	const googleSignin = ()=>{
		const provider = new GoogleAuthProvider()
		signInWithPopup(auth, provider)
	}

	const createUser = (email, password) =>{
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const signin = (email, password)=>{
		return signInWithEmailAndPassword(auth, email, password)
	}

	const logout = ()=>{
		return signOut(auth)
	}

	useEffect(()=>{
		const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
			console.log(currentUser);
			setUser(currentUser)
		})
		return ()=>{unsubscribe()}
	}, [])

	return (
		<UserContext.Provider value={{createUser, user, logout, signin, googleSignin}}>
			{children}
		</UserContext.Provider>
	)
}

export const UserAuth = () =>{
	return useContext(UserContext)
}