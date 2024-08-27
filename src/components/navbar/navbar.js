import './navbar.css';
import { useEffect, useState } from 'react';
import { jwtVerify } from 'jose';

export default function Navbar() {
    function moveBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    const [login, setLogin] = useState(false);
    const [userName,setUserName] = useState("")

    useEffect(() => {
        const verifyToken = async () => {
            const accessToken = localStorage.getItem("accessToken");
            if (accessToken) {
                const secret = new TextEncoder().encode('nikash13579');  // Ensure this is your secret key
                try {
                    const { payload } = await jwtVerify(accessToken, secret);
                    console.log(payload);
                    setLogin(true);
                    setUserName(payload.userName)
                } catch (error) {
                    console.error('Token verification failed:', error.message);
                }
            }
        };
        verifyToken();
    }, []);

    return (
        <nav className="nav">
            <div className="logo1">
                <h2 className="logo">explo<span className="logo-vr">VR</span></h2>
            </div>

            <div className="nav-options">
                <ul className="nav-list">
                    <li className="user">{userName}</li>
                    <li><a href="http://localhost:3000/explore">EXPLORE</a></li>
                    {!login && <li className="darkB"><a href='http://localhost:3000/register'>REGISTER</a></li>}
                    {!login && <li className="darkB"><a href='http://localhost:3000/login'>SIGN IN</a></li>}
                    <li onClick={moveBottom}><a href='#'>CONTACT US</a></li>
                </ul>
            </div>
        </nav>
    );
}
