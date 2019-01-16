import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    Fa
} from 'mdbreact';

class NavbarPage extends React.Component {
    state = {
        collapseID: ''
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));

    render() {
        return (
            <Navbar color="info-color" dark expand="md">
                <NavbarBrand>
                    <strong className="white-text">Navbar</strong>
                </NavbarBrand>
                <NavbarToggler
                    onClick={this.toggleCollapse('navbarCollapse3')}
                />
                <Collapse
                    id="navbarCollapse3"
                    isOpen={this.state.collapseID}
                    navbar>
                    <NavbarNav right>
                        <NavItem>
                            <NavLink
                                className="waves-effect waves-light"
                                to="#!">
                                <Fa icon="envelope" className="mr-1" />
                                Contact
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="waves-effect waves-light"
                                to="#!">
                                <Fa icon="gear" className="mr-1" />
                                Settings
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>
                                    <Fa icon="user" className="mr-1" />
                                    Profile
                                </DropdownToggle>
                                <DropdownMenu
                                    className="dropdown-default"
                                    right>
                                    <DropdownItem href="#!">
                                        My account
                                    </DropdownItem>
                                    <DropdownItem href="#!">
                                        Log out
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavbarPage;
