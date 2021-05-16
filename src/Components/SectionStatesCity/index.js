import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Row} from 'reactstrap';
import ItemStateCity from './Future1/itemStateCity';
import {getData,getAqi} from '../../Api/GlobalApi';
import ItemStateUv from './Future1/itemStateUv';

function Statecity() {
    const dauInput = useSelector(state => state.search.value);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData({local: dauInput}));
        dispatch(getAqi({local: dauInput}))
    }, [dauInput,dispatch])
    return (
        <>
                <Row>
                <ItemStateCity/>
                <ItemStateUv/>
                </Row>
        </>
    )
}

export default Statecity
