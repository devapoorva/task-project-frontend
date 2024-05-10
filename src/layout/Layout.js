import { Link, Outlet } from "react-router-dom";
import React from "react";
const Layout = ()=>{
    return (
        <React.Fragment>
            <div className="container">
                <h1 className="text-center">Task Crud Application </h1>
                
                <Outlet />
            </div>
        </React.Fragment>
    )
}
export default Layout;