import React, { useState } from 'react';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import styles from "./Tabs.module.css"

const Tabses = [
    { id: '1', label: 'Description' },
    { id: '2', label: 'More Tabs' },
];

function Tabs({ description }) {
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = (tabId) => {
        if (activeTab !== tabId) {
            setActiveTab(tabId);
        }
    };

    return (
        <div className="p-2">
            <Nav tabs>
                {Tabses.map(({ id, label }) => (
                    <NavItem key={id}>
                        <NavLink
                            className={activeTab === id
                                ? `active tab-link ${styles.tabsButton}`
                                : `tab-link ${styles.tabsButton}`}
                            onClick={() => toggleTab(id)}
                        >
                            {label}
                        </NavLink>
                    </NavItem>
                ))}
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <p className="lead p-2">{description}</p>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <p className="lead p-2">Tab 2 Contents</p>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default Tabs;
