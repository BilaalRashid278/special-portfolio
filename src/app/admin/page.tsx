'use client'
import React, { useContext, useEffect, useLayoutEffect } from 'react'
import { Context } from '@/context/Context';
import LogoModification from './components/LogoModification';
const AdminPanel = () => {
    const { setAdmin, setAdminPassword } = useContext(Context);

    useLayoutEffect(() => {
        setAdmin(true);
        setAdminPassword('');
    }, []);
    useEffect(() => {
        return () => {
            setAdmin(false);
        };
    }, []);
    return (
        <div style={{
            marginTop : '80px',
            height: 'calc(100vh - 130px)'
        }} className='overflow-y-auto px-10 pt-3'>
            <LogoModification />
        </div>
    )
}

export default AdminPanel;
