import React from 'react';
import "./B10.css";
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b10'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b10'>
                    <div className='main-head_b10'>First present buy in price</div>
                    <span className="main-span_b10">The first present buy in price :<br /><br />
                        To use the first present buy in price , please set a lower price. When the market price is triggered, the robot will active automatically.<br />
                        The first present buy in price can achieve lower cost purchases.</span><br />

                </div>

            </div>
        </>
    )
}

export default BinancePro
