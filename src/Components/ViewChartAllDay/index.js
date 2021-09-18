import React from 'react'
import { useSelector } from 'react-redux';
import { Row } from 'reactstrap';

import CharjsAQI from './Views/CharjsAQI';

function AQiIndexVier() {
  const thoitiet7Day = useSelector(state => state?.GlobalApi?.value2);
  const trangthaiThoitiet = useSelector(state => state?.GlobalApi?.status2);
  console.log(thoitiet7Day);
  return (
    <>
      <Row className="d-flex justify-content-around">
       
        <CharjsAQI thoitiet7Day={thoitiet7Day} trangthaiThoitiet={trangthaiThoitiet}/>
      </Row>
    </>
  )
}

export default AQiIndexVier
