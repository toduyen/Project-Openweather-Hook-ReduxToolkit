import React from 'react';
import { Col, Badge } from 'reactstrap';
import {Scatter} from 'react-chartjs-2';
import styled from 'styled-components';
const Heading = styled(Badge)`
font-weight: 500;
`;
const CharjsAQI = ({thoitiet7Day,trangthaiThoitiet}) => {
    return (
        <React.Fragment>
         
          {thoitiet7Day?.cod === "404" ? null : <React.Fragment>  <Col xl="12" className="d-flex justify-content-start rounded">
          <h4 className="headerTitle"><Heading color="secondary">Tổng quan thời tiết</Heading></h4>
        </Col>  <Col xl="12" sm="12" className=" justify-content-center  col-12">
                 {trangthaiThoitiet === "That bai" && ('Error render')}
                 {trangthaiThoitiet === "Loading" ? ('Loading...') : <Scatter
                    data={{
                        labels: thoitiet7Day?.list?.map(value => {return(value?.dt_txt)}),
                          datasets: [{
                            type: 'bar',
                            label: 'Tỉ lệ mưa',
                            data: thoitiet7Day?.list?.map(value => {return(value?.main?.humidity)}),
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: '#6b5c23'
                          }, {
                            type: 'line',
                            label: 'Nhiệt độ cảm nhận',
                            data: thoitiet7Day?.list?.map(value => {return(value?.main?.feels_like)}),
                            fill: false,
                            borderColor: 'Gold'
                          },
                          {
                            type: 'line',
                            label: 'Nhiệt độ thấp nhất',
                            data: thoitiet7Day?.list?.map(value => {return(value?.main?.temp_min)}),
                            fill: false,
                            borderColor: 'white'
                          },]
                    }}
                 />}
             </Col></React.Fragment>}
            
        </React.Fragment>
    );
}
 
export default CharjsAQI;