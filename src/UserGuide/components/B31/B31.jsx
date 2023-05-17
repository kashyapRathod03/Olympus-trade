import React from 'react';
import "./B31.css";
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b31'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b31'>
                    <div className='main-head_b31'>The withdrawal has not arrived</div>
                    <span className="main-span_b31">The withdrawal has not arrived<br /><br />
                        1. Blockchain asset transfer is divided into three stages: Royal Q payment-block confirmation-counterparty payment.

                        In the first step, we will generate TxID within 30-60 minutes, which means that the transfer processing of our platform has been completed and the currency has been transferred to the blockchain.<br /><br/>

                        The second step, please copy the TxID<br /><br/>

                        to the corresponding blockchain browser to check the confirmation number of the withdrawal.

                        The third step, if the blockchain shows that it is confirming or not confirming, please wait patiently for the confirmation of the blockchain. If the blockchain shows that the confirmation is complete, if you still can't receive the currency, but Royal Q has completed the transfer and can no longer provide help, please contact the currency collection platform to post your account.<br /><br />

                        Note: If you confirm the withdrawal, a large delay may be caused due to block congestion. If there is still no
                        TxID<br /><br />

                        generated in [My]--[Asset]--[Withdrawal Details] in your account after 6 hours, please contact online customer service!</span>

                </div>

            </div>
        </>
    )
}

export default BinancePro
