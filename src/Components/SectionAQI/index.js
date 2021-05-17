import React from 'react'
import { useSelector } from 'react-redux';
import {Row , Col, Badge } from 'reactstrap';
import styled from 'styled-components';
import DescriptionAQI from './Future1/descriptionAQI';
const Heading = styled(Badge) `
font-weight: 500;
`;
function AQiIndexVier() {
    const ketquaAQI = useSelector(state => state.GlobalApi.value3);
    const trangthai = useSelector(state => state.GlobalApi.status3);
    return (
        <>
            <Row>
                <Col xl="12" className="d-flex justify-content-start rounded">
                 <h4 className="headerTitle"><Heading color="secondary">AQI (Chất lượng không khí)</Heading></h4>
                </Col>
            </Row>
            <Row style={{paddingBottom: 120}}>
                <DescriptionAQI ketquaAQI={ketquaAQI} trangthai={trangthai}/>
            </Row>
        </>
    )
}

export default AQiIndexVier
