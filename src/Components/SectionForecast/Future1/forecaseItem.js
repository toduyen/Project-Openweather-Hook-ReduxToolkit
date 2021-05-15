import React from 'react';
import { useSelector } from 'react-redux';
import ViewData from './ViewData';

function ForecaseItem() {
    const ketqua = useSelector(state => state.GlobalApi.value2);
    const ketqua2 = useSelector(state => state.GlobalApi.status2);

    const thucthiHienThi = () => {
        if(String(ketqua.cod) === '200')
        {
            if(ketqua2==='Thanhcong')
            {
               return ketqua.list.map((value,key) => {
                    if(key < 6)
                    {
                       return (<ViewData giatri={value} key={key}/>)
                    }
                    else
                    {
                        return null;
                    }
                 })
            }
            else
            {
               return null;
            }
        }
        else
        {
            return null;
        }
    }
    return (
        <>
            {
               thucthiHienThi()
            }
        </>
    )
}

export default ForecaseItem
