// import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSquere from '../../../Hooks/useAxiosSquere';

const MyAssets = () => {
    const {user} = useAuth();
    const axiosSequere = useAxiosSquere();
    const [assets, setAssets] = useState([]);

    // const {data: assets = [], isLoading } = useQuery({
    //     queryKey: ['assets', user?.email],
    //     queryFn: () => axiosSequere(`/assets?email=${user?.email}`)
    // });

    useEffect(() => {
        axiosSequere(`/assets?email=${user?.email}`).then(res => {
            if(res.data){;
            setAssets(res.data);
            }
        }).catch(err => {
            console.log(err)
        })
    }, [axiosSequere, user?.email]);


    // console.log(assets, 'klskjhkfds');

    return (
        <div>
            my assets {assets.length}
        </div>
    );
};

export default MyAssets;