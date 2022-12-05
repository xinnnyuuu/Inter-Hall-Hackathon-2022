import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {

    const {currentUser} = useContext(AuthContext);

    return (
        <div className='navbar'>
            <span className='logo'>Hallrousell</span>
            <div className="user">
                <div>Hello, {currentUser.displayName}</div>
                <button onClick={() => signOut(auth)}>LogOut</button>
            </div>
        </div>
    )
}

export default NavBar;