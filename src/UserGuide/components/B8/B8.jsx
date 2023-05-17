import React from 'react';
import "./B8.css";
import b8_1 from "../../images/b8/b8_1.png"
import b8_2 from "../../images/b8/b8_2.png"
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {    

    return (
        <>
            <div className='bmain-div_b7'>
                <div className='side-section'>
                    <Userguide/>
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar/>
                

                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b7'>
                    <div className='main-head_b7'>How to check the security questions?</div>
                    
                    <img className='span-img_b8' src={b8_1} alt="process images" /><br/><br/>
                    <img className='span-img_b8' src={b8_2} alt="process images" /><br/>
                    
                </div>

            </div>
        </>
    )
}

export default BinancePro
