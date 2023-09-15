import React, { useContext } from 'react'; 
import jwt_decode from 'jwt-decode'; 
import AuthContext from '../context/AuthContext';  
import { Link, useHistory } from 'react-router-dom'; 

const styles = `
    .container-fluid {
        display: flex;
        justify-content: flex-end;
        background-color: black;
        padding: 20px;
        color: #5DDF28;
    }

    .nav-link {
        color: #5DDF28;
        text-decoration: none;
    }
`;

function Navbar() {
    const { user, logoutUser } = useContext(AuthContext);
    const token = localStorage.getItem('authTokens');
    const history = useHistory();

    const handleLogout = () => {
        logoutUser();
        history.push('/login');
    };
  
    return (
        <div>
            <style>{styles}</style>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark navbar-field">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {token === null &&
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                </>
                            }

                            {token !== null &&
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link" onClick={handleLogout} style={{cursor:"pointer"}}>Logout</span>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

