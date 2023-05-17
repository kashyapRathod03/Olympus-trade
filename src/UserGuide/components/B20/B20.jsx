import React from 'react';
import "./B20.css";
import b6_1 from "../../images/b6/b6_1.png"
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {    

    return (
        <>
            <div className='bmain-div_b20'>
                <div className='side-section'>
                    <Userguide/>
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar/>
                

                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b20'>
                    <div className='main-head_b20'>Take Profit Rules</div>
                    <span className="main-span_b20">1. first and last tp</span><br/>
                    <img className='span-img_b20' src={b6_1} alt="process images" /><br/>
                    <span className="main-span_b20">2. combine tp</span><br/>
                    <img className='span-img_b20' src={b6_1} alt="process images" /><br/>
                    <span className="main-span_b20">3. tp all</span><br/>
                    <img className='span-img_b20' src={b6_1} alt="process images" /><br/>
                
                </div>

            </div>
        </>
    )
}

export default BinancePro
