import React from 'react'
import { useSelector } from 'react-redux';
import { Row } from 'reactstrap';
import CharjsAQI from './Views/CharjsAQI';
import DescriptionAQI from './Views/descriptionAQI';
function AQiIndexVier() {
  const ketquaAQI = useSelector(state => state?.GlobalApi?.value3);
  const trangthai = useSelector(state => state?.GlobalApi?.status3);
  const thoitiet7Day = useSelector(state => state?.GlobalApi?.value);
  const trangthaiThoitiet = useSelector(state => state?.GlobalApi?.status);
  return (
    <>
      <Row style={{ paddingBottom: 40 }}>
        {thoitiet7Day?.cod === "404" ? null :  <DescriptionAQI ketquaAQI={ketquaAQI} trangthai={trangthai} />}
      </Row>
      <Row className="d-flex justify-content-around" style={{ paddingBottom: 40 }}>
       
      <CharjsAQI ketquaAQI={ketquaAQI} trangthai={trangthai} thoitiet7Day={thoitiet7Day} trangthaiThoitiet={trangthaiThoitiet}/>
      </Row>
    </>
  )
}

export default AQiIndexVier
