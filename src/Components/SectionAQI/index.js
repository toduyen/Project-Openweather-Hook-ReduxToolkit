import React from 'react'
import {Row , Col, Badge } from 'reactstrap';
import styled from 'styled-components';
import DescriptionAQI from './Future1/descriptionAQI';
const Heading = styled(Badge) `
font-weight: 500;
`;
function AQiIndexVier() {
    return (
        <>
            <Row>
                <Col xl="2" className="d-flex justify-content-start rounded">
                 <h4 className="headerTitle"><Heading color="secondary">AQI</Heading></h4>
                </Col>
            </Row>
            <Row style={{paddingBottom: 120}}>
                <DescriptionAQI/>
            </Row>
        </>
    )
}

export default AQiIndexVier
