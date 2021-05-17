import React, { useCallback,useEffect,useState } from 'react'
import { useDispatch } from 'react-redux';
import {Row, Col, InputGroup, Input, Button } from 'reactstrap';
import {inputDataSearch} from './Future1/searchSlice';
import {getData,getAqi} from '../../Api/GlobalApi';
import styled from 'styled-components';
const InputLocalGroup = styled(InputGroup) `
width: 40%;
padding-top: 50px;
padding-bottom: 50px;
`;
const InputText = styled(Input) `
  padding: 10px;
  border-radius: 25px;
`;
const ButtonStyled = styled(Button) `
border-radius: 25px;
`;
function Search() {
    const dispatch = useDispatch();
    const [listen, setlisten] = useState('');
    const [InputData, setInputData] = useState('');
    const ListenInput = useCallback((event) => {setlisten(event.target.value)},[]);
    useEffect(() => {
        const kiemtra = localStorage.getItem('weather');
        if(kiemtra)
        {
            const Auto = setInterval(()=>{
            dispatch(getData({local: JSON.parse(localStorage.getItem('weather'))}));
            dispatch(getAqi({local: JSON.parse(localStorage.getItem('weather'))}));
            },1800000);
            setInputData(JSON.parse(kiemtra))
            return () => clearInterval(Auto);
        }
     }, [setInputData,dispatch])
     useEffect(() => {
        localStorage.setItem('weather',JSON.stringify(InputData));
     }, [InputData])
     const ButtonClickMe = useCallback(
        () => {
            setInputData(listen);
            dispatch(inputDataSearch(listen));
        },
         [listen,setInputData,dispatch]
     )
    return (
        <>
            <Row>
                <Col xl="12" className="d-flex justify-content-center">
                    <InputLocalGroup>
                        <InputText placeholder="Tăng độ chính xác bạn có thể nhập không dấu" onChange={ListenInput}/>
                        <ButtonStyled color="success" onClick={ButtonClickMe}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        </ButtonStyled>
                    </InputLocalGroup>
                </Col>
            </Row>
        </>
    )
}

export default Search
