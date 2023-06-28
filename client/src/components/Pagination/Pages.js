import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../slices/DeviceSlice";

const Pages = () => {
    const dispatch = useDispatch()
    const device = useSelector(state => state.device)
    const pageCount = Math.ceil(device.totalCount / device.limit);
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <div>
            <Pagination className="mt-5">
                {pages.map(page =>
                    <PaginationItem
                        key={page}
                        active={device.page === page}
                        onClick={() => dispatch(setPage(page))}
                    >
                        <PaginationLink href="#">
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                )}
            </Pagination>
        </div>
    );
};

export default Pages;