import React from 'react'
import { BrowserRouter, Route, Routes as Routing } from 'react-router-dom'
import { Home, SamplePage, MenuDetail } from '../pages'

const Routes = () => {
    return (
        <BrowserRouter>
            <Routing>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/sample-page" element={<SamplePage />} />
                <Route path="/menu-detail/:id" element={<MenuDetail />} />
            </Routing>
        </BrowserRouter>
    )
}

export default Routes