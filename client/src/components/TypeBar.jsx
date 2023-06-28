import React from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {setPage, setSelectedType} from "../slices/DeviceSlice";

const TypeBar = () => {
    const types = useSelector(state => state.device.types)
    const selectedType = useSelector(state => state.device.selectedType)
    const dispatch = useDispatch()

    return (
        <ListGroup>
            {types.map(type =>
                <ListGroupItem
                    key={type.id}
                    action
                    active={type.id === selectedType.id}
                    onClick={() => {
                        dispatch(setSelectedType(type));
                        dispatch(setPage(1));
                    }}
                    href="#"
                    tag="a"
                >
                    {type.name}
                </ListGroupItem>
            )}
        </ListGroup>
    );
};

export default TypeBar;