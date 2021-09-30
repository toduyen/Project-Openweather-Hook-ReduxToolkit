import React, { Suspense } from 'react'
import { useSelector } from 'react-redux';
import { Row } from 'reactstrap';
const CharjsAQI = React.lazy(() => import('./Views/CharjsAQI'));

function AQiIndexVier() {
  const thoitiet7Day = useSelector(state => state?.GlobalApi?.value2);
  const trangthaiThoitiet = useSelector(state => state?.GlobalApi?.status2);
  return (
    <>
      <Row className="d-flex justify-content-around">
        <Suspense fallback={<p>Loading...</p>}>
          <CharjsAQI thoitiet7Day={thoitiet7Day} trangthaiThoitiet={trangthaiThoitiet}/>
        </Suspense>
      </Row>
    </>
  )
}

export default AQiIndexVier
