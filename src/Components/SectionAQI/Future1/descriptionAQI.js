import React from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';
const Temp2 = styled.h1 `
color: white;
font-size: 20px;
`;
const Temp3 = styled.h1 `
color: white;
font-size: 20px;
font-weight: normal;
`;
const DesTemp2 = styled.h2 `
color: white;
font-size: 20px;
`;
const SetBackgroud = styled(Col) `
background-color: #ffffff2e;
`;
function descriptionAQI() {
    return (
        <>
              <SetBackgroud xl="2" className="d-flex justify-content-center pt-3 pb-3 rounded">
                    <div>
                        <Temp2 style={{textAlign: 'center'}}>1</Temp2>
                        <Temp3 style={{textAlign: 'center'}}>2</Temp3>
                        <DesTemp2 className="display-6" style={{textAlign: 'center'}}>
                        {/* <img src={`https://openweathermap.org/img/wn/${giatri.weather[0].icon}.png`} style={{width: 50}} alt="icon"/> */}
                        </DesTemp2>
                        <Temp3 style={{textAlign: 'center'}}>3</Temp3>
                    </div>
                </SetBackgroud>
        </>
    )
}

export default descriptionAQI
