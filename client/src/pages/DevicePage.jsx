import React, {useEffect, useState} from 'react';
import {Image} from "react-bootstrap";
// import Loading from "../../../spinner/loading";
import styles from "./DevicePage.module.css"
import Tabs from "../components/DevicePage/Tabs";
import {Alert, Col, Container, Row} from "reactstrap";
import Delivery from "../components/DevicePage/Delivery";
import {CheckCircle} from "react-bootstrap-icons";
import ModalWindow from "../components/Modal/Modal";
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {

    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    console.log(id)

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    const shortDescription = <div dangerouslySetInnerHTML={{ __html: '<p style="text-align: justify;"><span>Адаптер VCDS 21.3, Вася Диагност - профессиональный прибор для полнофункциональной диагностики по всем электронным блокам автомобилей VW, Audi, Seat и Skoda с 1990 по 21 год включительно.&nbsp;Работает через USB интерфейс с ПК или ноутбуком.&nbsp;В комплекте поставляется программное обеспечение полностью на русском языке.</span></p>'}}></div>
    const description = <div dangerouslySetInnerHTML={{ __html: '<p style="text-align: justify;"><span><strong>Адаптер VCDS 21.3, Вася Диагност</strong> - профессиональный прибор для полнофункциональной диагностики по всем электронным блокам автомобилей VW, Audi, Seat и Skoda с 1990 по 21 год включительно. Работает через USB интерфейс с ПК или ноутбуком. В комплекте поставляется программное обеспечение полностью на русском языке.&nbsp;Сканер поддерживает протоколы по <strong>K-line</strong>, <strong>L-line</strong>, <strong>CAN-шину</strong> и высокоскоростной, современный <strong>UDS</strong>.</span><br />&nbsp; &nbsp;<br /><strong>Функциональные возможности адаптера VCDS 21.3:</strong></p>\n' +
            '<ul>\n' +
            '<li><span>Отображение реального пробега автомобиля при автоматическом сканировании систем автомобиля по протоколу UDS;</span></li>\n' +
            '<li><span>Полная совместимость со всем модельным рядом автомобилей концерна Volkswagen AG: VW, Audi, Seat и Skoda по 2021 год включительно, а также модели, которые используют прямое CAN-соединение для компьютерной диагностики;</span></li>\n' +
            '<li><span>Полная диагностика всех элекесистем автомобиля: двигателя, трансмиссии, подвески, кузова, АБС, Подушек безопасности, Панели приборов, климат-контроля и т.д.;</span></li>\n' +
            '<li><span>Определение каталожных номеров электронных блоков и версий кодирования;</span></li>\n' +
            '<li><span>Память ошибок неисправностей (DTC Мемоry) - чтение, расшифровка и стирание кодов;</span></li>\n' +
            '<li><span>Отображения параметров в режиме реального времени (в цифровом или графическом виде);</span></li>\n' +
            '<li><span>Активация/тест исполнительных механизмов;</span></li>\n' +
            '<li><span>Кодирование и программирование различных электронных блоков; - Code new control modules (большинство моделей после 2002 г.в., снабженных Can-шиной);</span></li>\n' +
            '<li><span>Чтение, сброс, изменение сервисных интервалов;</span></li>\n' +
            '<li><span>Чтение/изменение настроек электронных блоков управления (ЭБУ);</span></li>\n' +
            '<li><span>Чип-ключи - прописка ключей в иммобилайзере;</span></li>\n' +
            '<li><span>Возможность использования новых семизначных PIN/SKC кодов для привязки ключей для всех иммобилайзеров, которыми оборудованы VW/Audi/Seat/Skoda;</span></li>\n' +
            '<li><span>Отображение, запись в лог-файл и постройка графиков одновременно для трёх блоков;</span></li>\n' +
            '<li><span>Возможность доступа ко всем электронным блокам управления, для которых необходим специальный режим VAG, при использовании протокола KWP-2000 (2001+ Teves Mk.60 ABS, многочисленные блоки в автомобилях после 2002 г.);</span></li>\n' +
            '<li><span>Возможность отображение критически важной информации значений регулировки впрыска для двигателей TDI в графической форме;</span></li>\n' +
            '</ul>\n' +
            '<p><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></p>\n' +
            '<p><strong>Список поддерживаемых автомобилей VW Group:</strong></p>\n' +
            '<ul>\n' +
            '<li><span>Audi - весь модельный ряд до 2021 года включительно;</span></li>\n' +
            '<li><span>Volkswagen - весь модельный ряд до 2021 года включительно;</span></li>\n' +
            '<li><span>Seat - весь модельный ряд до 2021 года включительно;</span></li>\n' +
            '<li><span>Skoda - весь модельный ряд до 2021 года включительно.</span></li>\n' +
            '</ul>' }}>
    </div>




    const [modalIsOpen, setModalIsOpen] = useState(false);

    function toggleModal() {
        setModalIsOpen(!modalIsOpen)
    }

    // if (!product) {
    //     return <Loading/>
    // }

    return (
        <Container className="p-1 w-100">
            <Row>
                <Col>
                    <h3 className="p-3 m-2">{device.name}</h3>
                </Col>
            </Row>
            <Row>
                <Col md="3" className="d-flex align-items-center">
                    <div className="">
                        <Image
                            onClick={toggleModal}
                            src={process.env.REACT_APP_API_URL + device.img} fluid
                            className={styles.mainPhoto}
                        />
                    </div>
                </Col>
                <Col md="6" className="d-flex flex-column align-items-start justify-content-end mt-5">
                    <Row className="mb-2 d-block">
                        <Col className="d-flex align-baseline mt-2">
                            <Alert className="p-2">
                                <CheckCircle size={15} className="me-1"/>
                                In stock
                            </Alert>
                            <p className="text-muted mb-0 p-2">Code: {device.art}</p>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <h5 className={`${styles.price} mb-2 al p-3`}>{device.price} грн</h5>
                            <button className="btn btn-success btn-lg">Add to cart</button>
                        </Col>
                    </Row>
                    <hr className="d-block d-md-none"/>
                    <Row>

                        <Col>
                            <hr/>
                            <p className="mt-3">{shortDescription}</p>
                            <hr/>
                        </Col>
                    </Row>
                </Col>
                <Col md="3" className="d-none d-lg-block p-3">
                    <Delivery/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="col-md-12 p-2 mt-5">
                        <Tabs description={description}/>
                    </div>
                </Col>
            </Row>
            <div>
                <ModalWindow img={process.env.REACT_APP_API_URL + device.img} modalIsOpen={modalIsOpen} toggleModal={toggleModal}/>
            </div>
        </Container>
    );
};

export default DevicePage;