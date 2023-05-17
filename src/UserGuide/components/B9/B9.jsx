import React from 'react';
import "./B9.css";
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b9'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b9'>
                    <div className='main-head_b9'>What are Rewards Lost?</div>
                    <span className="main-span_b9">Dear Royal Q users:<br /><br />
                        When the user’s account expires, system will accumulate the rewards that the user has lost after expiration. Please pay attention to the renewal dates to avoid missing bonuses.<br/>

                        Please note, the rewards lost can NOT be claimed.<br/><br/>

                        Thank you for your support to Royal Q!<br/>
                        Royal Q Operations Team<br/>
                        https://royalqs.com<br/>
                        November 14, 2022</span>

                </div>

            </div>
        </>
    )
}

export default BinancePro
