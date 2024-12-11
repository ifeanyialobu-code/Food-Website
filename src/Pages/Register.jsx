import React from 'react';
import { useRef, useState, useEffect } from 'react';
import {faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX =/^[a-zA-Z][a-zA-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    
    const [user, setUser] = useState("");
    const [validName, setValidname] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidpwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchpwd, setmatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX. test(user);
        console.log(result);
        console.log(user);
        setValidname(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX. test(pwd);
        console.log(result);
        console.log(pwd);
        setValidpwd(result);
        const match = pwd ===matchpwd;
        setValidMatch(match);
    }, [pwd, matchpwd])

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd, matchpwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
  return (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" :
      "offscreen"} aria-live="assertive">{errMsg}</p>
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">
            Username:
            <span className={validName ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validName || !user ?"hide" :
            "invalid"}>
                <FontAwesomeIcon icon= {faTimes} />

            </span>
            </label>
            <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            required
            aria-invalid={validName ? "false": "true"}
            aria-describedby='uidnote'
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            />
            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.<br />
                Letters, numbers, underscores, hyphens allowed.
            </p>

            <label htmlFor="password">
            Password:
            <span className={validPwd ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validPwd || !pwd ?"hide" :
            "invalid"}>
                <FontAwesomeIcon icon= {faTimes} />

            </span>
            </label>
            <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            required
            aria-invalid={validPwd ? "false": "true"}
            aria-describedby='pwdnote'
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            />
            <p id="pwdnote" className={pwdFocus && user && !validPwd? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lower case letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span>
                <span aria-label="at symbol">@</span> <span arial-label="hashtag">#</span> 
                <span arial-label="dollar sign">$</span> <span arial-label="percent">%</span>
            
            </p>

            <label htmlFor="confirm_pwd">
            Confirm Pasword:
            <span className={validMatch && matchpwd ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validMatch || !matchpwd ?"hide" : "invalid"}>
                <FontAwesomeIcon icon= {faTimes} />
            </span>
            </label>
            <input
            type="password"
            id="confirm_pwd"
            onChange={(e) => setmatchPwd(e.target.value)}
            required
            aria-invalid={validMatch ? "false": "true"}
            aria-describedby='confirmnote'
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            />
            <p id="confirmnote" className={matchFocus && !validMatch? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />

                Must match the first password input field.            
            </p> 
            <button disabled={!validName || !validPwd ||validMatch ? true : false}
            >Sign Up</button>
    </form>
    <p>
        Already registered?<br />
        <span className="line">
            {/*put router link here*/}
            <a href="#">Sign In</a>
        </span>
    </p>
    </section>
  )
}

export default Register
