import React from 'react';
import "./q34.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q34() {
    return (
        <>

            <div className='lmain-div_q34'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q34'>
                    <div className='main-head_q34'>Why does it prompt an API exception when the API is bound?</div>

                    <span className="main-span_q34">Q: Why does it prompt an API exception when the API is bound?</span><br /><br />
                    <span className="main-span_q34">A: Please check if the API permissions are set correctly, and try to bind again after regenerating the API</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q34