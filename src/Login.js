import React, {useState} from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

export default function Login() {

    const clientId = "210618610070-58e0qri7ml6aj274ac7tvag4vkrf5cmi.apps.googleusercontent.com";

    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLogoutButton, setShowLogoutButton] = useState(false);

    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
    }

    const onFailureSuccess = (res) => {
        console.log('Login Failed:', res);
    }

    const onSignoutSuccess = () => {
        alert("You have signed out successfully");
        setShowLoginButton(true);
        setShowLogoutButton(false);
        console.clear();
    }

    return (
        <div>
            {showLoginButton ? 
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onLoginSuccess}
                onFailure={onFailureSuccess}
                cookiePolicy={'single_host_origin'}
            /> : null
            }
            {showLogoutButton ? 
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSignoutSuccess}
            >
            </GoogleLogout> : null
            }
        </div>
    )
}
