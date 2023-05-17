import React from 'react';
import "./B13.css";
import b13_1 from "../../images/b13/b13_1.png"
import b13_2 from "../../images/b13/b13_2.png"
import b13_3 from "../../images/b13/b13_3.png"
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b6'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL />
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b6'>
                    <div className='main-head_b6'>How to find my counselor?</div>
                    <span className="main-span_b6">
                        Are you having problems with trade settings or how to set up your account? Please follow the steps below to contact your inviter.</span><br />
                    <span className="main-span_b6">1.Please tap “More” in the Home page.</span><br />
                    <img className='span-img_b6' src={b13_1} alt="process images" /><br />
                    <span className="main-span_b6">2.Please tap “My counselor”.</span><br />
                    <img className='span-img_b6' src={b13_2} alt="process images" /><br />
                    <span className="main-span_b6">3.Please enter your question here and send it. You will be able to reach your up-line.</span><br />
                    <img className='span-img_b6' src={b13_3} alt="process images" /><br />

                </div>

            </div>
        </>
    )
}

export default BinancePro
