import React from 'react';
import {Col, Badge} from 'reactstrap';
import {Line, Doughnut} from 'react-chartjs-2';
import styled from 'styled-components';
const Heading = styled(Badge)`
font-weight: 500;
`;
const CharjsAQI = ({ketquaAQI, trangthai, thoitiet7Day, trangthaiThoitiet}) => {
    return (
        <React.Fragment>
            {thoitiet7Day
                ?.cod === "404"
                    ? null
                    : <React.Fragment>
                        <Col xl="12" className="d-flex justify-content-start rounded">
                            <h4 className="headerTitle">
                                <Heading color="secondary">AQI (Biểu đồ chất lượng không khí toàn cảnh)</Heading>
                            </h4>
                        </Col>
                        {ketquaAQI.status === "error" ? null : <Col xl="6" sm="6" className=" justify-content-center  col-6">
                            {trangthai === "That bai" && ('Error render')}
                            {trangthai === "Loading"
                                ? ('Loading...')
                                : <Line
                                    data={{
                                    labels: ketquaAQI
                                        ?.data
                                            ?.forecast
                                                ?.daily
                                                    ?.pm10
                                                        ?.map(value => {
                                                            return (value
                                                                ?.day)
                                                        }),
                                    datasets: [
                                        {
                                            label: 'Tỉ số o3',
                                            data: ketquaAQI
                                                ?.data
                                                    ?.forecast
                                                        ?.daily
                                                            ?.o3
                                                                ?.map(value => {
                                                                    return (value
                                                                        ?.max)
                                                                }),
                                            fill: false,
                                            borderColor: 'red',
                                            tension: 1
                                        }, {
                                            label: 'Tỉ số pm10',
                                            data: ketquaAQI
                                                ?.data
                                                    ?.forecast
                                                        ?.daily
                                                            ?.pm10
                                                                ?.map(value => {
                                                                    return (value
                                                                        ?.max)
                                                                }),
                                            fill: false,
                                            borderColor: 'gold',
                                            tension: 1
                                        }, {
                                            label: 'Tỉ số pm25',
                                            data: ketquaAQI
                                                ?.data
                                                    ?.forecast
                                                        ?.daily
                                                            ?.pm25
                                                                ?.map(value => {
                                                                    return (value
                                                                        ?.max)
                                                                }),
                                            fill: false,
                                            borderColor: 'white',
                                            tension: 1
                                        }, {
                                            label: 'Tỉ số uvi',
                                            data: ketquaAQI
                                                ?.data
                                                    ?.forecast
                                                        ?.daily
                                                            ?.uvi
                                                                ?.map(value => {
                                                                    return (value
                                                                        ?.max)
                                                                }),
                                            fill: false,
                                            borderColor: '#E8A87C',
                                            tension: 1
                                        }
                                    ]
                                }}/>}
                        </Col>
                        }
                        
                        <Col
                            xl="6"
                            sm="6"
                            className=" justify-content-center  col-6"
                            style={{
                            width: "300px"
                        }}>
                            {trangthaiThoitiet === "That bai" && ('Error render')}
                            {trangthaiThoitiet === "Loading"
                                ? ('Loading...')
                                : <Doughnut
                                    data={{
                                    labels: [
                                        'Khả năng mưa', 'Không mưa'
                                    ],
                                    datasets: [
                                        {
                                            label: 'My First Dataset',
                                            data: [
                                                thoitiet7Day
                                                    ?.main
                                                        ?.humidity,
                                                100 - Number(thoitiet7Day
                                                    ?.main
                                                        ?.humidity)
                                            ],
                                            backgroundColor: [
                                                'Green', 'Red'
                                            ],
                                            hoverOffset: 4
                                        }
                                    ]
                                }}/>}
                        </Col>
                    </React.Fragment>
}

        </React.Fragment>
    );
}

export default CharjsAQI;