import React from 'react';
import "./B6.css";
import b6_1 from "../../images/b6/b6_1.png"
import b6_2 from "../../images/b6/b6_2.png"
import b6_3 from "../../images/b6/b6_3.png"
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {    

    return (
        <>
            <div className='bmain-div_b6'>
                <div className='side-section'>
                    <Userguide/>
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar/>
                

                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b6'>
                    <div className='main-head_b6'>How to create a website shortcut</div>
                    <span className="main-span_b6">Guide to adding website shortcut</span><br/>
                    <span className="main-span_b6">1. Press the share icon</span><br/>
                    <img className='span-img_b6' src={b6_1} alt="process images" /><br/>
                    <span className="main-span_b6">2. Add to Home screen</span><br/>
                    <img  className='span-img_b6' src={b6_2} alt="process images" /><br/>
                    <span className="main-span_b6">3. Press Add</span><br/>
                    <img  className='span-img_b6' src={b6_3} alt="process images" /><br/>
                    <span className="main-span_b6">Login here: https://ssr.royalqs.com/pc/sign</span>
                
                </div>

            </div>
        </>
    )
}

export default BinancePro
