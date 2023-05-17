import React from 'react';
import "./B30.css";
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b30'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b30'>
                    <div className='main-head_b30'>Activation</div>
                    <span className="main-span_b30">Activate your robot with 120 USDT as the annual fee. You can cancel anytime. The cancellation will be effected in the next run. That means, you will NOT be charged on your next billing date. You can turn on the renewal before your next billing date OR re-activate your membership after your next billing date.<br /><br />
                        Please note that Royal Q will NOT refund your subscription fee. Therefore, please make sure that we have your inviter name and invitation code correctly.
                    </span>

                </div>

            </div>
        </>
    )
}

export default BinancePro
