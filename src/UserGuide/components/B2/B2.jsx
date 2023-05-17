import React from 'react';
import "./B2.css";
import b2_0 from "../../images/b2_0.png";
import b2_1 from "../../images/b2_1.png"
import b2_3 from "../../images/b2_3.png"
import b2_4 from "../../images/b2_4.png"

import OptionL from '../../../MainHelp/optionbar/Option';
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';


function BinancePro() {    
    
    return (
        <>
            <div className='bmain-div_b2'>
                <div className='side-section'>
                    <Userguide/>
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar/>
                

                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b2'>
                    <div className='main-head_b2'>Instructions on binding Telegram</div>

                    <img className='span-img_b2' src={b2_0} alt="process images" /><br/>
                    <span className='main-span_b2'>1. Tap the Notification Settings located in system setting in Mine page</span><br/><br/>
                    <img className='span-img_b2' src={b2_1} alt="process images" /><br/>
                    <span className="main-span_b2">2. Tap Telegram notification</span><br/>
                    <span className="main-span_b2">3.  Tap the link to join Royal Q</span><br/>
                    <img  className='span-img_b2' src={b2_3} alt="process images" /><br/>
                    <span className="main-span_b2">4. Copy the code below</span><br/>
                    <img  className='span-img_b2' src={b2_4} alt="process images" /><br/>
                    <span className="main-span_b2">5. Paste the code to the Royal Q chatroom you have just joined on Telegram</span><br/>
            
                </div>

            </div>
        </>
    )
}

export default BinancePro
