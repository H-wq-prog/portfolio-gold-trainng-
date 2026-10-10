import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
export default function MainPage() {

    return (
        <>
            <div className="w-full">
                <div className="grid grid-cols-12">
                    <div className="col-span-2">
                        <SideBar />
                    </div>
                    <div className="col-span-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
