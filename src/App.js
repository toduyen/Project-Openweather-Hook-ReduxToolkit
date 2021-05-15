import Header from './Components/Header';
import { Container } from 'reactstrap';
import Search from './Components/Search';
import Styled from 'styled-components';
import Statecity from './Components/SectionStatesCity';
import Title from './Components/SectionTitle';
import Forecase from './Components/SectionForecast';
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
     <Header/>
     <Search/>
     <Statecity/>
     <Title/>
     <Forecase/>
     </Container>
    </DivStyled>
  );
}

export default App;
