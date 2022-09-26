import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import "./header.css";

function Header() {
    return <div>
    
    <nav className="navbar navbar-light navbar-expand-lg">
        <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
                <Button className='loginButton' href="/login">Login</Button>
            </li>
            <li className="nav-item">
                <Button className='applyButton' href="/apply">Apply</Button>
            </li>
        </ul>
</nav>

    </div>
}

export default Header;