import React from 'react';
import "./B24.css";
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b24'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b24'>
                    <div className='main-head_b24'>Trigger margin call price calculation</div>
                    <span className="main-span_b24">Trigger margin call price calculation<br /><br />
                        The trigger price is calculated based on the average purchase price or the last purchase price which is lower. After reaching the trigger price, the Royal Q intelligent tracking and replenishment function will be activated to achieve the maximum resistance.</span><br />

                </div>

            </div>
        </>
    )
}

export default BinancePro
