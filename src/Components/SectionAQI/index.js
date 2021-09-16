import React from 'react'
import { useSelector } from 'react-redux';
import { Row, Col, Badge } from 'reactstrap';
import styled from 'styled-components';
import CharjsAQI from './Views/CharjsAQI';
import DescriptionAQI from './Views/descriptionAQI';
const Heading = styled(Badge)`
font-weight: 500;
`;
function AQiIndexVier() {
  const ketquaAQI = useSelector(state => state?.GlobalApi?.value3);
  const trangthai = useSelector(state => state?.GlobalApi?.status3);
  const thoitiet7Day = useSelector(state => state?.GlobalApi?.value);
  const trangthaiThoitiet = useSelector(state => state?.GlobalApi?.status);
  return (
    <>
      <Row>
        <Col xl="12" className="d-flex justify-content-start rounded">
          <h4 className="headerTitle"><Heading color="secondary">AQI (Chất lượng không khí)</Heading></h4>
        </Col>
      </Row>
      <Row style={{ paddingBottom: 40 }}>
        <DescriptionAQI ketquaAQI={ketquaAQI} trangthai={trangthai} />
      </Row>
      <Row className="d-flex justify-content-around" style={{ paddingBottom: 40 }}>
        <Col xl="12" className="d-flex justify-content-start rounded">
          <h4 className="headerTitle"><Heading color="secondary">AQI (Biểu đồ chất lượng không khí toàn cảnh)</Heading></h4>
        </Col>
        <CharjsAQI ketquaAQI={ketquaAQI} trangthai={trangthai} thoitiet7Day={thoitiet7Day} trangthaiThoitiet={trangthaiThoitiet}/>
      </Row>
    </>
  )
}

export default AQiIndexVier
