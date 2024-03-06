'use client'
import React, { useContext,useEffect } from 'react'
import { Context } from '@/context/Context';
const AdminPanel = () => {
    const { setAdmin,setAdminPassword } = useContext(Context);
    
    useEffect(() => {
        setAdmin(true);
        setAdminPassword('');
        return () => {
            setAdmin(false);
        };
    })
    return (
        <div style={{
            height : 'calc(100vh - 50px)'
        }} className='h-[400px]'>
            AdminPanel
        </div>
    )
}

export default AdminPanel
