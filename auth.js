// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLBl6vCIzSK1mOyW3-oxoGVQsiL_bOT0M",
    authDomain: "frosthacks-900b4.firebaseapp.com",
    databaseURL: "https://frosthacks-900b4-default-rtdb.firebaseio.com",
    projectId: "frosthacks-900b4",
    storageBucket: "frosthacks-900b4.firebasestorage.app",
    messagingSenderId: "256478617780",
    appId: "1:256478617780:web:1f14e703ac01f9fc3737e1",
    measurementId: "G-7MDBYJP09Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get auth instance
const auth = getAuth(app);

// Sign Up function
function signUp() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            console.log('User signed up:', user);
        })
        .catch((error) => {
            console.error('Sign up error:', error.message);
            alert(error.message);
        });
    window.location.href = 'login.html';
}

// Sign In function
function signIn() {
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log('User signed in:', user);
        })
        .catch((error) => {
            console.error('Sign in error:', error.message);
            alert(error.message);
        });
}

// Sign Out function
function signOut() {
    auth.signOut()
        .then(() => {
            console.log('User signed out');
        })
        .catch((error) => {
            console.error('Sign out error:', error.message);
            alert(error.message);
        });
}

// Auth state change listener
auth.onAuthStateChanged((user) => {
    const authForms = document.getElementById('authForms');
    const userInfo = document.getElementById('userInfo');
    const userEmail = document.getElementById('userEmail');

    if (user) {
        // User is signed in
        authForms.style.display = 'none';
        userInfo.style.display = 'block';
        userEmail.textContent = `Signed in as: ${user.email}`;
    } else {
        // User is signed out
        authForms.style.display = 'block';
        userInfo.style.display = 'none';
        userEmail.textContent = '';
    }
});