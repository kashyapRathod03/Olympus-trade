import React from 'react';
import "./B25.css";
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b25'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b25'>
                    <div className='main-head_b25'>BNB as handling fee in Binance</div>
                    <span className="main-span_b25">Please note when your robot is running BNB strategies:<br /><br />
                        If you use BNB to deduct the Binance transaction fee, please reserve more BNB in your account to avoid abnormal orders.</span>

                </div>

            </div>
        </>
    )
}

export default BinancePro
