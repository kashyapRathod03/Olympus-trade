import React from 'react';
import "./B22.css";
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b22'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b22'>
                    <div className='main-head_b22'>One-shot strategy and Cycle strategy</div>
                    <span className="main-span_b22">One-shot strategy and Cycle strategy</span><br />
                    <span className="main-span_b22">One-shot strategy: when it is activated, it is a strategy from buying to selling, the robot will stop operating after selling<br /><br />
                        Cycle strategy: when it’s started, it’s a strategy from buying to selling. After selling, the robot will continue to buy and continue to operate</span>

                </div>

            </div>
        </>
    )
}

export default BinancePro
