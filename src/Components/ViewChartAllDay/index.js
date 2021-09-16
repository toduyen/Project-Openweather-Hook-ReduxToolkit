import React from 'react'
import { useSelector } from 'react-redux';
import { Row, Col, Badge } from 'reactstrap';
import styled from 'styled-components';
import CharjsAQI from './Views/CharjsAQI';
const Heading = styled(Badge)`
font-weight: 500;
`;
function AQiIndexVier() {
  const thoitiet7Day = useSelector(state => state?.GlobalApi?.value2);
  const trangthaiThoitiet = useSelector(state => state?.GlobalApi?.status2);
  console.log(thoitiet7Day);
  return (
    <>
      <Row className="d-flex justify-content-around">
        <Col xl="12" className="d-flex justify-content-start rounded">
          <h4 className="headerTitle"><Heading color="secondary">Tổng quan thời tiết</Heading></h4>
        </Col>
        <CharjsAQI thoitiet7Day={thoitiet7Day} trangthaiThoitiet={trangthaiThoitiet}/>
      </Row>
    </>
  )
}

export default AQiIndexVier
