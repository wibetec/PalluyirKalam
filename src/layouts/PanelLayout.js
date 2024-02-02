import React from 'react'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const PanelLayout = () => {
    return (
        <>
            <Helmet>
            <title>Palluyirkalam-Admin Panel</title>
            </Helmet>            
            <Outlet/>
        </>
    )
}

export default PanelLayout