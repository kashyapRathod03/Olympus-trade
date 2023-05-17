import React from 'react';
import "./q37.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q37() {
    return (
        <>

            <div className='lmain-div_q37'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q37'>
                    <div className='main-head_q37'>Why did my deposit or withdrawal not arrive?</div>

                    <span className="main-span_q37">Q: Why did my deposit or withdrawal not arrive?</span><br /><br />
                    <span className="main-span_q37">A:  1. Blockchain asset transfer is divided into three stages:<br /><br /> Royal Q payment-block confirmation-counterparty payment. <br /> In the first step, we will generate TXID within 30-60 minutes, which means that the transfer processing of our platform has been completed and the currency has been transferred to the blockchain. <br /><br /> In the second step, please click the "check" link at the end of Txid and open the corresponding blockchain browser to check the number of confirmations of the withdrawal. <br /> The third step, if the blockchain shows that it is confirming or not confirming, please wait patiently for the confirmation of the blockchain.<br /><br /> If the blockchain shows that the confirmation is complete, if you have not received the currency, but Royal Q has completed the transfer and cannot provide any more help, please contact the currency collection platform to post your account.<br /><br />  Note: If you click on the withdrawal confirmation email, a large delay may be caused due to block congestion. If there is still no Txid generated in the asset management-withdrawal history of your account after 6 hours, please re-feed the problem and attach: <br /><br /> ‘Recharge or withdrawal or recharge history’ screenshot of the transfer; We will process it as soon as possible. The priority of processing tickets without screenshots is very low.
                    </span>

                </div>

            </div>
        </>
    )
}

export default q37