import React from 'react';
import { Col } from 'reactstrap';
import {Scatter} from 'react-chartjs-2';
const CharjsAQI = ({thoitiet7Day,trangthaiThoitiet}) => {
    return (
        <React.Fragment>
             <Col xl="12" sm="12" className=" justify-content-center  col-12">
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
             </Col>
        </React.Fragment>
    );
}
 
export default CharjsAQI;