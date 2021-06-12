import React from 'react'
import Styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
const ColStyle = Styled(Col)`
padding-top: 25px;
`;
const ColStyle2 = Styled(Col)`
padding-top: 6px;
padding-right: 40px;
`;
const Heading = Styled.h2`
color: white;
font-size: 50px;
`;
const DescriptionHeading = Styled.h2`
color: white;
font-size: 20px;
`;
const DescriptionHeading2 = Styled.h2`
color: white;
font-size: 14px;
`;

const IconSun = Styled.svg`
color: white;
`;
function ItemStateCity() {
  const ketqua2 = useSelector(state => state.GlobalApi.status);
  const ketqua = useSelector(state => state.GlobalApi.value);

  const renderCity = () => {
    if (String(ketqua.cod) === "200") {
      return (ketqua.name)
    }
    else {
      return ('Oops!');
    }
  }
  const renderContry = () => {
    if (String(ketqua.cod) === "200") {
      return (ketqua.sys.country)
    }
    else {
      return ('Country not found');
    }
  }
  const ngaythangnam = () => {
    var d = new Date();
    d.setDate(d.getDate() + (1 + 7 - d.getDay()) % 7);
    return ('' + d)
  }
  return (
    <>
      <ColStyle xl="6" sm="12">
        <Heading className="d-flex justify-content-center">{ketqua2 === "Thanh cong" ? renderCity() : "loading"}, {ketqua2 === "Thanh cong" ? renderContry() : "loading"}</Heading>
        <DescriptionHeading className="display-6 d-flex justify-content-center">{String(ketqua.cod) === "200" ? ngaythangnam() : null}</DescriptionHeading>
        <DescriptionHeading2 className="display-6 d-flex justify-content-center">{String(ketqua.cod) === "200" ? `Đã thiết lập tự động cập nhật 30 phút` : null}</DescriptionHeading2>
      </ColStyle>
      <ColStyle2 xl="2" sm="6" className="d-flex justify-content-end mt-5 col-6">
        <IconSun xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" className="bi bi-sun" viewBox="0 0 16 16">
          <path d={String(ketqua.cod) === "200" ? `M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z` : null} />
        </IconSun>
      </ColStyle2>

    </>
  )
}

export default ItemStateCity
