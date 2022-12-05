import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        //console.log(e.target[0].value);
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            
            await updateProfile(res.user, {
                displayName,
            });
            //console.log(res);
            await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
            })

            navigate("/");
        } catch(err) {
            setErr(true);
        }
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Hallrousell</span>
                <span className="title">Register</span>
                <form onSubmit={submitHandler}>
                    <input type="name" placeholder="name"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button>Sign Up</button>
                    {err && <span>Something went wrong.</span>}
                </form>
                <p><Link to="/login">Login</Link> instead?</p>
            </div>
        </div>
    );
};

export default Register;