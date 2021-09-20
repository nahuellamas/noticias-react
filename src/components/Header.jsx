import { Fragment } from 'react';

const Header = ({titulo}) => {
    return ( 
        <Fragment>
            <nav className="nav-wrapper light-blue darken-3">
                <a href="#!" className="brand-logo center">{titulo}</a>
            </nav>
        </Fragment>
     );
}
 
export default Header;