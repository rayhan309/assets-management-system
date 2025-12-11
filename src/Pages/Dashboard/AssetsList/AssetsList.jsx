import React, { useEffect, useState } from 'react';
import useAxiosSquere from '../../../Hooks/useAxiosSquere';

const AssetsList = () => {
        const axiosSequere = useAxiosSquere();
    const [assets, setAssets] = useState([]);


     useEffect(() => {
            axiosSequere(`/assets`).then(res => {
                if(res.data){;
                setAssets(res.data);
                }
            }).catch(err => {
                console.log(err)
            })
        }, [axiosSequere]);
    
    
        console.log(assets, 'klskjhkfds');

    return (
        <div>
            
        </div>
    );
};

export default AssetsList;