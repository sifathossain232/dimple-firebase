import { useState } from 'react'
import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const signInUser = result.user;
        console.log(signInUser);
        setUser(signInUser);
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <>
      <h1>Firebase + React</h1>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      {user && <div className="card">
        <h4>User: {user.displayName}</h4>
      </div>}
    </>
  )
}

export default App
