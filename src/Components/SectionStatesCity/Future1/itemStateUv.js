import React from 'react'
import { useSelector } from 'react-redux';
import Styled from 'styled-components';
import {Col} from 'reactstrap';
const DescriptionHeading3 = Styled.h2 `
color: white;
font-size: 20px;
`;
const ColStyle2 = Styled(Col) `
padding-top: 6px;
`;
const Heading = Styled.h2 `
color: white;
font-size: 50px;
`;
function ItemStateUv() {
    const ketqua3 = useSelector(state => state.GlobalApi.status3);
    const ketqua33 = useSelector(state => state.GlobalApi.value3);
    const renderUvIndex = () => {
        if(ketqua33.data==="Unknown station")
        {
            return('Unknown station');
        }else{
           try{
            switch (ketqua33.data.forecast.daily.uvi[2].max) {
                case 1:
                case 2:
                    return(ketqua33.data.forecast.daily.uvi[2].max + " (thấp)");
                case 3:
                case 4:
                case 5:
                    return(ketqua33.data.forecast.daily.uvi[2].max + " (trung bình)");
                case 6:
                case 7:
                    return(ketqua33.data.forecast.daily.uvi[2].max + " (cao)");
                case 8:
                case 9:
                case 10:
                case 11:
                    return(ketqua33.data.forecast.daily.uvi[2].max + " (rất cao)");
                default:
                    return null;
            }
           }
           catch(error){
               return('Unknown station');
           }
        }
    }
    const renderAws = () => {
        if(ketqua33.data==="Unknown station")
        {
            return('Unknown station');
        }else{
          try{
            switch (ketqua33.data.forecast.daily.uvi[2].max) {
                case 1:
                case 2:
                    return('ô nhỏ');
                case 3:
                case 4:
                case 5:
                    return('áo chống nắng, kính dâm, Kem chống nắng');
                case 6:
                case 7:
                    return('áo chống nắng, kính dâm, Kem chống nắng, Hạn chế tiếp xúc dưới nắng');
                case 8:
                case 9:
                case 10:
                case 11:
                    return('áo chống nắng, kính dâm, Kem chống nắng, Không nên ra ngoài lúc này');
                default:
                    return null;
            }
          }
          catch(error){
              return("Unknown station");
          }
        }
    }
    return (
        <>
              <ColStyle2 xl="4" sm="6">
                    <Heading className="d-flex justify-content-start mt-4">{ketqua3 === "thanhcong" ? "UV:"+ renderUvIndex() : "loading"}</Heading>
                    <DescriptionHeading3 className="display-6 display-6 d-flex justify-content-center mt-1">{ketqua3 === "thanhcong" ?"Hãy mang: " + renderAws() : "loading"}</DescriptionHeading3>
                </ColStyle2>
        </>
    )
}

export default ItemStateUv
