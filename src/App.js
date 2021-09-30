
import {Container} from 'reactstrap';
import Styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import React, {Suspense} from 'react';
const Header = React.lazy(() => import('./Components/Header'));
const Search = React.lazy(() => import('./Components/Search'));
const Statecity = React.lazy(() => import('./Components/SectionStatesCity'));
const Title = React.lazy(() => import('./Components/SectionTitle'));
const Forecase = React.lazy(() => import('./Components/SectionForecast'));
const AQiIndexVier = React.lazy(() => import('./Components/SectionAQI'));
const ViewChartAllDay = React.lazy(() => import('./Components/ViewChartAllDay'));
const DivStyled = Styled.div `
background-image: url(${process.env.PUBLIC_URL + '/2850815.jpg'});
/* Center and scale the image nicely */
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;
function App() {
    return (
        <DivStyled>
            <Container className="themed-container">
                <Suspense fallback={< p > Loading </p>}>
                    <React.Fragment>{< Header /> || <Skeleton/>}</React.Fragment>
                    <React.Fragment>{< Search /> || <Skeleton/>}</React.Fragment>
                    <React.Fragment>{< Statecity /> || <Skeleton/>}</React.Fragment>
                    <React.Fragment>{< Title /> || <Skeleton/>}</React.Fragment>
                    <React.Fragment>{< Forecase /> || <Skeleton/>}</React.Fragment>
                    <React.Fragment>{< AQiIndexVier /> || <Skeleton/>}</React.Fragment>
                    <React.Fragment>{< ViewChartAllDay /> || <Skeleton/>}</React.Fragment>
                </Suspense>
            </Container>
        </DivStyled>
    );
}

export default App;
