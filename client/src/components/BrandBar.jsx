import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Card, Form} from "reactstrap";
import {setPage, setSelectedBrand} from "../slices/DeviceSlice";

const BrandBar = () => {
    const brands = useSelector(state => state.device.brands)
    const selectedBrand = useSelector(state => state.device.selectedBrand)
    const dispatch = useDispatch()

    return (
        <Form className="d-flex flex-wrap">
            {brands.map(brand =>
                <Card
                    className="me-1 p-2 mt-1"
                    key={brand.id}
                    style={{cursor:"pointer"}}
                    color={brand.id !== selectedBrand.id ? "light" : "danger"}
                    inverse={brand.id === selectedBrand.id}
                    onClick={() => {
                        dispatch(setSelectedBrand(brand));
                        dispatch(setPage(1));
                    }}
                >
                    {brand.name}
                </Card>
            )}
        </Form>
    );
};

export default BrandBar;