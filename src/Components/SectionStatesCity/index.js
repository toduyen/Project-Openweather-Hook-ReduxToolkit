import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Row} from 'reactstrap';
import ItemStateCity from './Future1/itemStateCity';
import {getData} from '../../Api/GlobalApi';

function Statecity() {
    const dauInput = useSelector(state => state.search.value);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData({local: dauInput}))
    }, [dauInput,dispatch])
    return (
        <>
                <Row>
                <ItemStateCity/>
                </Row>
        </>
    )
}

export default Statecity
