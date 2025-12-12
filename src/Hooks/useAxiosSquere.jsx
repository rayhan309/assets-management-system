import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const instance = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosSquere = () => {
    const {user} = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
       const req = instance.interceptors.request.use((consfig) => {
            if(user?.accessToken) {
                // console.log(user?.accessToken);
                consfig.headers.Authorization = `Bearer ${user?.accessToken}`
            }
            return consfig
        }, (err) => {
            return Promise.reject(err);
        });

        const res = instance.interceptors.response.use((response) => {
            return response;
        }, (err) => {
            console.log('errrrrrrrr', err.status)
             if(err.status === 401) {
                alert('makskskdsdj')
            }
            return Promise.reject(err);
        })

        return () => instance.interceptors.request.eject(req), instance.interceptors.response.eject(res);
    }, [user?.accessToken, navigate]);

    return instance;
};

export default useAxiosSquere;