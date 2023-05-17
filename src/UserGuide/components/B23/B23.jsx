import React from 'react';
import "./B23.css";
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b23'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b23'>
                    <div className='main-head_b23'>Batch setting function</div>
                    <span className="main-span_b23">You can set multiple currencies at one time for the selected currency in batches, single strategy, cycle strategy, transaction settings, clearance sale, start or stop.<br /><br />
                        The first-time preset price in batches must be set first before setting the first-time preset price, otherwise the first-time preset price will be cleared after confirmation after setting</span>

                </div>

            </div>
        </>
    )
}

export default BinancePro
