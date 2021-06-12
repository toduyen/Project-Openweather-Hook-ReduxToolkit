import React from 'react';
import { Row, Col, Badge } from 'reactstrap';
import styled from 'styled-components';
const Heading = styled(Badge)`
font-weight: lighter;
`;
function Header() {
  return (
    <>
      <Row>
        <Col xl="12" className="d-flex justify-content-start rounded">
          <h4 className="headerTitle"><Heading color="secondary">WEATHER WINX</Heading></h4>
        </Col>
      </Row>
    </>
  )
}

export default Header
