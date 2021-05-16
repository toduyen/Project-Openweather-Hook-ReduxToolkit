import React from 'react'
import { useSelector } from 'react-redux';
import Styled from 'styled-components';
import {Col} from 'reactstrap';
const DescriptionHeading3 = Styled.h2 `
color: white;
font-size: 20px;
`;
const IconSun = Styled.svg `
color: white;
`;
const ColStyle2 = Styled(Col) `
padding-top: 6px;
`;
function ItemStateUv() {
    const ketqua3 = useSelector(state => state.GlobalApi.status3);
    const ketqua33 = useSelector(state => state.GlobalApi.value3);
    const renderDateUvIndex = () => {
        if(ketqua33.data==="Unknown station")
        {
            return('Unknown station');
        }else{
            try{
                return(ketqua33.data.forecast.daily.uvi[2].day);
            }
            catch(error){
                return("Unknown station");
            }
        }
    }
    const renderUvIndex = () => {
        if(ketqua33.data==="Unknown station")
        {
            return('Unknown station');
        }else{
           try{
            switch (ketqua33.data.forecast.daily.uvi[2].max) {
                case 1:
                case 2:
                    return(ketqua33.data.forecast.daily.uvi[2].max + " (Mức thấp)");
                case 3:
                case 4:
                case 5:
                    return(ketqua33.data.forecast.daily.uvi[2].max + " (Mức trung bình)");
                case 6:
                case 7:
                    return(ketqua33.data.forecast.daily.uvi[2].max + " (Mức cao)");
                case 8:
                case 9:
                case 10:
                case 11:
                    return(ketqua33.data.forecast.daily.uvi[2].max + " (Mức cực kỳ cao)");
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
    const renderIconUvi = () => {
        if(ketqua33.data==="Unknown station")
        {
            return('Unknown station');
        }else{
            try{
                switch (ketqua33.data.forecast.daily.uvi[2].max) {
                    case 1:
                    case 2:
                       return(
                        <IconSun  xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                           <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                        </IconSun>
                       )
                    case 3:
                    case 4:
                    case 5:
                        return(
                            <IconSun xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-emoji-neutral" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4 10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5zm3-4C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5S9.448 8 10 8s1-.672 1-1.5z"/>
                            </IconSun>
                        );
                    case 6:
                    case 7:
                        return(
                            <IconSun xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-emoji-frown" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                            </IconSun>
                        );
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                        return(
                            <IconSun xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-emoji-angry" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zm6.991-8.38a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5s-1-.672-1-1.5c0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761l2-1zm-6.552 0a.5.5 0 0 0-.448.894l1.009.504A1.94 1.94 0 0 0 5 6.5C5 7.328 5.448 8 6 8s1-.672 1-1.5c0-.247-.04-.48-.11-.686a.502.502 0 0 0-.166-.761l-2-1z"/>
                            </IconSun>
                        );
                    default:
                        return ("loading");
                }
            }
            catch(error){
                return('Unknown station')
            }
        }
    }
    return (
        <>
              <ColStyle2 xl="3">
                    <DescriptionHeading3 className="display-6 display-6 d-flex justify-content-start mt-4">Tỉ số tia UV ngày {ketqua3 === "thanhcong" ? renderDateUvIndex() : "loading"}</DescriptionHeading3>
                    <DescriptionHeading3 className="display-6 display-6 d-flex justify-content-start mt-1">UV: {ketqua3 === "thanhcong" ? renderUvIndex() : "loading"}</DescriptionHeading3>
                    <DescriptionHeading3 className="display-6 display-6 d-flex justify-content-start mt-1">Hãy mang: {ketqua3 === "thanhcong" ? renderAws() : "loading"}</DescriptionHeading3>
                </ColStyle2>
                <ColStyle2 xl="1"  className="d-flex justify-content-center mt-5">
                   {renderIconUvi()}
                </ColStyle2>
        </>
    )
}

export default ItemStateUv
