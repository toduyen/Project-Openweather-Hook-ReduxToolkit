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
                <Col xl="6" sm="12" className="d-flex justify-content-center pt-3 pb-3">
                    <div className="imageIcon">
                       <img src={ketqua2 === "Thanh cong" ? `https://openweathermap.org/img/wn/${ketqua.weather[0].icon}.png` : `http://openweathermap.org/img/wn/02d.png`} style={{width: 150}} alt="icon"/>
                    </div>
                      <div>
                        <Temp>{ketqua2 === "Thanh cong" ? Math.round(ketqua.main.temp) : "loading"}&#8451;</Temp>
                        <DesTemp className="display-6">{ketqua2 === "Thanh cong" ? ketqua.weather[0].description : "loading"}</DesTemp>
                    </div>
                </Col>
                <SetBackgroud xl="2" sm="4" className="d-flex justify-content-center pt-3 pb-3 rounded col-4" >
                    <div>
                        <Temp2 style={{textAlign: 'center'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-thermometer-high" viewBox="0 0 18 18">
                            <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"/>
                            <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
                            </svg>
                            {ketqua2 === "Thanh cong" ? Math.round(ketqua.main.temp_max) : "loading"}&#8451;
                        </Temp2>
                        <DesTemp2 className="display-6" style={{textAlign: 'center'}}>Hight</DesTemp2>
                        <br/>
                        <Temp2 style={{textAlign: 'center'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-thermometer-low" viewBox="0 0 18 18">
                            <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585a1.5 1.5 0 0 1 1 1.415z"/>
                            <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
                            </svg>
                            {ketqua2 === "Thanh cong" ? Math.round(ketqua.main.temp_min) : "loading"}&#8451;
                        </Temp2>
                        <DesTemp2 className="display-6" style={{textAlign: 'center'}}>Low</DesTemp2>
                    </div>
                </SetBackgroud>
                <SetBackgroud xl="2" sm="4" className="d-flex justify-content-center pt-3 pb-3 rounded  col-4">
                    <div>
                        <Temp2 style={{textAlign: 'center'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-wind" viewBox="0 0 18 18">
                            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            {ketqua2 === "Thanh cong" ? Math.round(ketqua.wind.speed) : "loading"} 
                            mph
                        </Temp2>
                        <DesTemp2 className="display-6" style={{textAlign: 'center'}}>Wind</DesTemp2>
                        <br/>
                        <Temp2 style={{textAlign: 'center'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cloud-lightning-rain" viewBox="0 0 18 18">
                            <path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-.753-8.499a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2z"/>
                            </svg>
                            {ketqua2 === "Thanh cong" ? ketqua.main.humidity : "loading"} %</Temp2>
                        <DesTemp2 className="display-6" style={{textAlign: 'center'}}>Rain</DesTemp2>
                    </div>
                </SetBackgroud>
                <SetBackgroud xl="2" sm="4" className="d-flex justify-content-center pt-3 pb-3 rounded  col-4" >
                    <div>
                        <Temp2 style={{textAlign: 'center'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-sunrise" viewBox="0 0 18 18">
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            {sunsireView()}</Temp2>
                        <DesTemp2 className="display-6" style={{textAlign: 'center'}}>Sunrise</DesTemp2>
                        <br/>
                        <Temp2 style={{textAlign: 'center'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-sunset" viewBox="0 0 18 18">
                            <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            {ketqua2 === "Thanh cong" ? sunsetView() : "loading"}</Temp2>
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
