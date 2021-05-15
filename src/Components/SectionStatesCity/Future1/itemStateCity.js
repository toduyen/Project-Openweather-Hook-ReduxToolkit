import React from 'react'
import Styled from 'styled-components';
import {useSelector} from 'react-redux';
import { Col } from 'reactstrap';
const ColStyle = Styled(Col) `
padding-top: 25px;
`;
const ColStyle2 = Styled(Col) `
padding-top: 6px;
`;
const Heading = Styled.h2 `
color: white;
font-size: 50px;
`;
const DescriptionHeading = Styled.h2 `
color: white;
font-size: 20px;
`;
const DescriptionHeading2 = Styled.h2 `
color: white;
font-size: 14px;
`;
function ItemStateCity() {
    const ketqua2 = useSelector(state => state.GlobalApi.status);
    const ketqua = useSelector(state => state.GlobalApi.value);
    const renderCity = () => {
        if(String(ketqua.cod) === "200")
        {
            return(ketqua.name)
        }
        else
        {
            return('Oops!');
        }
    }
    const renderContry = () => {
        if(String(ketqua.cod) === "200")
        {
            return(ketqua.sys.country)
        }
        else
        {
            return('Country not found');
        }
    }
    const ngaythangnam = () => {
        var d = new Date();
        d.setDate(d.getDate() + (1 + 7 - d.getDay()) % 7);
        return(''+d)
    }
    return (
        <>
                 <ColStyle xl="6">
                <Heading className="d-flex justify-content-center">{ketqua2 === "Thanh cong" ? renderCity() : "loading"}, {ketqua2 === "Thanh cong" ?  renderContry() : "loading"}</Heading>
                <DescriptionHeading className="display-6 d-flex justify-content-end">{ngaythangnam()}</DescriptionHeading>
                <DescriptionHeading2 className="display-6 d-flex justify-content-end">Đã thiết lập tự động cập nhật 30 phút</DescriptionHeading2>
                </ColStyle>
                <ColStyle2 xl="6">
              
                </ColStyle2>
        </>
    )
}

export default ItemStateCity
