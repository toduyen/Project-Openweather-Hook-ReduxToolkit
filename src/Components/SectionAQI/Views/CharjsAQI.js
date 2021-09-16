import React from 'react';
import { Col } from 'reactstrap';
import {Line , Doughnut} from 'react-chartjs-2';
const CharjsAQI = ({ketquaAQI,trangthai , thoitiet7Day , trangthaiThoitiet}) => {
    return (
        <React.Fragment>
             <Col xl="6" sm="6" className=" justify-content-center  col-6">
                 {trangthai === "That bai" && ('Error render')}
                 {trangthai === "Loading" ? ('Loading...') :   <Line
                    data={{
                        labels: ketquaAQI?.data?.forecast?.daily?.pm10?.map(value => {return(value?.day)}),
                        datasets: 
                        [
                            {
                                label: 'Tỉ số o3',
                                data: ketquaAQI?.data?.forecast?.daily?.o3?.map(value => {return(value?.max)}),
                                fill: false,
                                borderColor: 'red',
                                tension: 1
                            },
                            {
                                label: 'Tỉ số pm10',
                                data: ketquaAQI?.data?.forecast?.daily?.pm10?.map(value => {return(value?.max)}),
                                fill: false,
                                borderColor: 'gold',
                                tension: 1
                            },
                            {
                                label: 'Tỉ số pm25',
                                data: ketquaAQI?.data?.forecast?.daily?.pm25?.map(value => {return(value?.max)}),
                                fill: false,
                                borderColor: 'white',
                                tension: 1
                            },
                            {
                                label: 'Tỉ số uvi',
                                data: ketquaAQI?.data?.forecast?.daily?.uvi?.map(value => {return(value?.max)}),
                                fill: false,
                                borderColor: '#E8A87C',
                                tension: 1
                            },
                        ]
                    }}
                 />}
             </Col>


             <Col xl="6" sm="6" className=" justify-content-center  col-6" style={{width: "300px"}}>
                 {trangthaiThoitiet === "That bai" && ('Error render')}
                 {trangthaiThoitiet === "Loading" ? ('Loading...') :  <Doughnut
                    data={{ labels: [
                        'Khả năng mưa',
                        'Không mưa',
                       
                      ],
                      datasets: [{
                        label: 'My First Dataset',
                        data: [thoitiet7Day?.main?.humidity, 100 - Number(thoitiet7Day?.main?.humidity)],
                        backgroundColor: [
                            'Green',
                          'Red',
                       
                        ],
                        hoverOffset: 4
                      }]
                    }}
                 />}
             </Col>
        </React.Fragment>
    );
}
 
export default CharjsAQI;