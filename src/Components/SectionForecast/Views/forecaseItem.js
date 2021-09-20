import React from 'react';
import { useSelector } from 'react-redux';
import ViewData from './ViewData';
import { Col , Badge } from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Heading = styled(Badge)`
font-weight: 500;
`;
function ForecaseItem() {
  const ketqua = useSelector(state => state?.GlobalApi?.value2);
  const ketqua2 = useSelector(state => state?.GlobalApi?.status2);

  const thucthiHienThi = () => {
    if (String(ketqua?.cod) === '200') {
      if (ketqua2 === 'Thanhcong') {
        return ketqua?.list?.map((value, key) => {
          if (key < 6) {
            return (<ViewData giatri={value} key={key} />)
          }
          else {
            return null;
          }
        })
      }
      else {
        return null;
      }
    }
    else {
      return null;
    }
  }
  return (
    <>
      {ketqua.cod === "404" ? null :  <Col xl="12" className="d-flex justify-content-start rounded">
          <h4 className="headerTitle"><Heading color="secondary">Forecast</Heading></h4>
      </Col>}
     
      {
        thucthiHienThi()
      }
    </>
  )
}
ForecaseItem.propTypes = {
  list: PropTypes.array,
  cod: PropTypes.string
}
export default ForecaseItem
