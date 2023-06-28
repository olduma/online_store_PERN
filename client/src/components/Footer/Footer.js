import React from "react";
import {Container, Row, Col, Button} from "reactstrap";
import {Envelope, Github, Clock, Telephone} from "react-bootstrap-icons";
import styles from "./Footer.module.css";

export default function Footer() {
    const handleGithubClick = () => {
        window.open("https://github.com/olduma", "_blank");
    };

    return (
        <div className={styles.footerWrapper}>
            <footer>
                <Container>
                    <Row>
                        <Col md={4} className="text-center">
                            <div className={styles.footerContact}>
                                <div className={styles.footerContactLabel}>Contact Us</div>
                                <div className={styles.footerContactValue}>
                                    <Envelope className={styles.footerIcon}/>
                                    email@example.com
                                </div>
                                <div className={styles.footerContactValue}>
                                    <i className={styles.footerIcon}></i>
                                    <Telephone className={styles.footerIcon}/>
                                    +1 123-456-7890
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="text-center">
                            <div className={styles.footerHours}>
                                <div className={styles.footerHoursLabel}>
                                    Working Hours
                                </div>
                                <div className={styles.footerHoursValue}>
                                    <Clock className={styles.footerIcon}/>
                                    Mon-Fri: 9am-5pm
                                </div>
                                <div className={styles.footerHoursValue}>
                                    Sat-Sun: Closed
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="text-center">
                            <div>
                                <h4 className={styles.follow}>
                                    Follow Us
                                </h4>
                                <Button outline color="light"
                                        onClick={handleGithubClick}>
                                    <Github className={`me-2 ${styles.footerIcon}`}/>
                                    My Github
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}
