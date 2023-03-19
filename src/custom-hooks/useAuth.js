import {useState, useEffect} from 'react';
import { auth } from '../firebaseconfig';
import { onAuthStateChanged } from 'firebase/auth';

const useAuth = () =>{

    const [currentUser,setCurrentUser] = useState({});

    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth,(user)=>{
            if (user){
                setCurrentUser(user)
            }else{
                setCurrentUser(null)
            }
        })

        return ()=> unsuscribe();
    })

    return {currentUser};
}


export default useAuth;