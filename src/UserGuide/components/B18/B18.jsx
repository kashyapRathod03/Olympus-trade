import React from 'react';
import "./B18.css";
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
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b6'>
                    <div className='main-head_b6'>Auto-renewal notice</div>
                    <span className="main-span_b6">Dear Royal Q users:<br /><br />
                        To ensure member interest, when the auto-renewal is switched on, the system will check for the Royal Q assets. If the balance is sufficient, the bot will renew the account 3-5 days early. Thank you for your support.<br /><br />
                        Thank you for your support to Royal Q!<br />
                        Royal Q Operations Team<br />
                        https://royalqs.com<br />
                        April 30, 2022
                    </span>
                </div>

            </div>
        </>
    )
}

export default BinancePro
