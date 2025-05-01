import { Link } from 'react-router-dom';

export default function MainNavbar () {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to="store">Store</Link>
                </li>
            </ul>
        </div>
    );
};