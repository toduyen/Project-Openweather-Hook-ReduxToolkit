import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'reactstrap';
import { getData, getAqi } from '../../Api/GlobalApi';
const ItemStateUv = React.lazy(() => import('./Views/itemStateUv'));
const ItemStateCity = React.lazy(() => import('./Views/itemStateCity'));
function Statecity() {
  const dauInput = useSelector(state => state?.search?.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData({ local: dauInput }));
    dispatch(getAqi({ local: dauInput }))
  }, [dauInput, dispatch])
  return (
    <>
      <Row className="d-flex justify-content-around">
        <ItemStateCity />
        <ItemStateUv />
      </Row>
    </>
  )
}

export default Statecity
