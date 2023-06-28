import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'reactstrap';
import DeviceItem from './DeviceItem';

const DeviceList = () => {
    const devices = useSelector(state => state.device.devices);

    return (
        <ListGroup className="d-flex mt-3 flex-row justify-content-evenly flex-wrap">
            {devices.length > 0 ? (
                devices.map(device => (
                    <DeviceItem key={device.id} device={device} />
                ))
            ) : (
                <div>No devices found</div>
                )}
        </ListGroup>
    );
};

export default DeviceList;
