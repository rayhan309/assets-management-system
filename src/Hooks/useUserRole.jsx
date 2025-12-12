import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import useAxiosSquere from './useAxiosSquere';

const useUserRole = () => {
        const {user} = useAuth();
    const axiosSquere = useAxiosSquere();
    const [hrInfo, setHrInfo] = useState({});
    const [loading, setLoading] = useState(true);

      useEffect(() => {
            axiosSquere(`/users?email=${user.email}`).then(res => {
                console.log(res.data)
                setHrInfo(res.data)
            }).catch(err => {
                console.log(err)
            })
        }, [axiosSquere, user.email]);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    

    return {hrInfo, loading};
};

export default useUserRole;