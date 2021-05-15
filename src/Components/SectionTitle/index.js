import React from 'react'
import { useSelector } from 'react-redux';
import {Row, Col } from 'reactstrap';
import Styled from 'styled-components';
const Temp = Styled.h1 `
color: white;
padding-left: 20px;
font-size: 70px;
`;
const Temp2 = Styled.h1 `
color: white;
font-size: 20px;
`;
const DesTemp = Styled.h2 `
color: white;
font-size: 20px;
padding-left: 20px;
`;
const DesTemp2 = Styled.h2 `
color: white;
font-size: 20px;
`;
const SetBackgroud = Styled(Col) `
background-color: #ffffff2e;
`;
function Title() {
    const ketqua = useSelector(state => state.GlobalApi.value);
    const ketqua2 = useSelector(state => state.GlobalApi.status);
    const sunsireView = () => {
        if(ketqua2 === "Thanh cong")
        {
            const sunrises = new Date(ketqua.sys.sunrise * 1000);
            return(`${sunrises.getHours()} : ${sunrises.getMinutes()} : ${sunrises.getSeconds()}`);
        }
        else
        {
            return('Loading')
        }
    }
    const sunsetView = () => {
        if(ketqua2 === "Thanh cong")
        {
            const Secon = new Date(ketqua.sys.sunset * 1000);
            return(`${Secon.getHours()} : ${Secon.getMinutes()} : ${Secon.getSeconds()}`);
        }
        else
        {
            return('Loading')
        }
    }
    const renderAws = () => {
        if(String(ketqua.cod) === "200")
        {
            return(
                <Row style={{paddingTop: 50}} className="d-flex justify-content-center">
                <Col sm="12" xl="3" className="d-flex justify-content-end pt-3 pb-3 rounded">
                    <div className="imageIcon">
                       <img src={ketqua2 === "Thanh cong" ? `http://openweathermap.org/img/wn/${ketqua.weather[0].icon}.png` : `http://openweathermap.org/img/wn/02d.png`} style={{width: 150}} alt="icon"/>
                    </div>
                </Col>
                <Col sm="12" xl="3" className="d-flex justify-content-start pt-4 pb-3 rounded">
                    <div>
                        <Temp>{ketqua2 === "Thanh cong" ? Math.round(ketqua.main.temp) : "loading"}&#8451;</Temp>
                        <DesTemp className="display-6">{ketqua2 === "Thanh cong" ? ketqua.weather[0].description : "loading"}</DesTemp>
                    </div>
                </Col>
                
                <SetBackgroud sm="12" xl="2" className="d-flex justify-content-center pt-3 pb-3 rounded" >
                    <div>
                        <Temp2 style={{textAlign: 'center'}}>{ketqua2 === "Thanh cong" ? Math.round(ketqua.main.temp_max) : "loading"}&#8451;</Temp2>
                        <DesTemp2 className="display-6" style={{textAlign: 'center'}}>Hight</DesTemp2>
                        <br/>
                        <Temp2 style={{textAlign: 'center'}}>{ketqua2 === "Thanh cong" ? Math.round(ketqua.main.temp_min) : "loading"}&#8451;</Temp2>
                        <DesTemp2 className="display-6" style={{textAlign: 'center'}}>Low</DesTemp2>
                    </div>
                </SetBackgroud>
                <SetBackgroud sm="12" xl="2" className="d-flex justify-content-center pt-3 pb-3 rounded">
                    <div>
                        <Temp2 style={{textAlign: 'center'}}>{ketqua2 === "Thanh cong" ? Math.round(ketqua.wind.speed) : "loading"} mph</Temp2>
                        <DesTemp2 className="display-6" style={{textAlign: 'center'}}>Wind</DesTemp2>
                        <br/>
                        <Temp2 style={{textAlign: 'center'}}>{ketqua2 === "Thanh cong" ? ketqua.main.humidity : "loading"} %</Temp2>
                        <DesTemp2 className="display-6" style={{textAlign: 'center'}}>Rain</DesTemp2>
                    </div>
                </SetBackgroud>
                <SetBackgroud sm="12" xl="2" className="d-flex justify-content-center pt-3 pb-3 rounded" >
                    <div>
                        <Temp2 style={{textAlign: 'center'}}>{sunsireView()}</Temp2>
                        <DesTemp2 className="display-6" style={{textAlign: 'center'}}>Sunrise</DesTemp2>
                        <br/>
                        <Temp2 style={{textAlign: 'center'}}>{ketqua2 === "Thanh cong" ? sunsetView() : "loading"}</Temp2>
                        <DesTemp2 className="display-6" style={{textAlign: 'center'}}>Sunset</DesTemp2>
                    </div>
                </SetBackgroud>
            </Row>
            )
        }
        else
        {
            return null;
        }
    }
    return (
        <>
           {renderAws()}
        </>
    )
}

export default Title
