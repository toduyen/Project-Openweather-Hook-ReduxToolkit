import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'reactstrap';
import { getDataFiveDay } from '../../Api/GlobalApi';
const ForecaseItem = React.lazy(() => import('./Views/forecaseItem'));
function Forecase() {
  const ketquatimkiem = useSelector(state => state.search.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFiveDay({ local: ketquatimkiem }));
    const auto = setInterval(() => {
      dispatch(getDataFiveDay({ local: JSON.parse(localStorage.getItem('weather')) }))
    }, 1800000)
    return () => clearInterval(auto);
  }, [dispatch, ketquatimkiem])
  return (
    <>
      <Row style={{ paddingBottom: 40 }}>
        <ForecaseItem />
      </Row>
    </>
  )
}

export default Forecase
