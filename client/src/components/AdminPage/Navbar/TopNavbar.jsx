import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

function TopNavbar({ handlerSelect }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div style={{background:"#212529"}}>
            <Navbar expand color>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret style={{color:"white"}}>
                                <b>Замовлення</b>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Список замовлень</DropdownItem>
                                <DropdownItem>Статуси замовлення</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret right style={{color:"white"}}>
                                <b>Каталог товарів</b>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={() => handlerSelect("Categories")}>
                                    Категорії товарів
                                </DropdownItem>
                                <DropdownItem onClick={() => handlerSelect("List")}>
                                    Список товарів</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={() => handlerSelect("Brands")}>
                                    Бренди</DropdownItem>
                                <DropdownItem>Властивості</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default TopNavbar;