import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Row , Col, Badge } from 'reactstrap';
import styled from 'styled-components';
import ForecaseItem from './Future1/forecaseItem';
import {getDataFiveDay} from '../../Api/GlobalApi';
const Heading = styled(Badge) `
font-weight: 500;
`;
function Forecase() {
    const ketquatimkiem = useSelector(state => state.search.value);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataFiveDay({local: ketquatimkiem}));
       const auto = setInterval(() => {
        dispatch(getDataFiveDay({local: JSON.parse(localStorage.getItem('weather'))}))
       },1800000)
       return () => clearInterval(auto);
    }, [dispatch,ketquatimkiem])
    return (
        <>
            <Row  style={{paddingTop: 50}}>
                <Col xl="2" className="d-flex justify-content-start rounded">
                 <h4 className="headerTitle"><Heading color="secondary">Forecast</Heading></h4>
                </Col>
            </Row>
            <Row style={{paddingBottom: 120}}>
                <ForecaseItem/>
            </Row>
        </>
    )
}

export default Forecase
