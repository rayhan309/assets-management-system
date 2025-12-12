import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSquere from '../../../Hooks/useAxiosSquere';
import useUserRole from '../../../Hooks/useUserRole';


const Profile = () => {
    const {user} = useAuth();
    const axiosSquere = useAxiosSquere();
    const [hrInfo, setHrInfo] = useState({});
    const {hrInfo: hr, loading} = useUserRole();

        useEffect(() => {
        axiosSquere(`/users?email=${user.email}`).then(res => {
            setHrInfo(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [axiosSquere, user.email]);


        if(loading) {
        return <p>Loading...</p>
    }

    console.log(hr)

    return (
        <div>
            {" "}
        </div>
    );
};

export default Profile;