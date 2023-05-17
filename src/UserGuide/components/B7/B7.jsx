import React from 'react';
import "./B7.css";
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b7'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b7'>
                    <div className='main-head_b7'>What will happen if my account expires?</div>
                    <span className='main-span_b7'>
                        Dear Royal Q users:<br /><br />
                        After the account expires:<br /><br />
                        1. You can't start new strategies.<br />
                        Members with expired accounts cannot start a new strategy.<br /><br />
                        2. You will not be able to continue enjoying the benefits of being a member.<br />
                        Members with expired accounts will not be able to receive referral bonuses, direct quantification bonuses or team bonuses. All bonus and rewards will be suspended during expiration.
                        You will be able to start receiving bonuses again after the account is renewed. Please note that bonuses given during expiration cannot be claimed.
                        <br /><br />
                        3. Active strategies will continue trading for 30 days. Trade settings cannot be changed after expiration. The system will not process trading after 30 days of expiration.<br />

                        Members with on-going strategies will be able to continue their strategy after expiration for 30 days. After 30 days, the system will stop trading until further renewal. The settings will not be changeable after expiration.
                        Strategies stopped due to insufficient balance in the exchange or Royal Q assets will also not be able to restart the strategy.<br /><br />
                        4. Mentors with expired accounts<br />
                        Mentors will be removed of their mentor qualification as soon as the account expires.<br /><br />
                        Thank you for your support to Royal Q!<br />
                        Royal Q Operations Team<br />
                        July 28, 2022</span>

                </div>

            </div>
        </>
    )
}

export default BinancePro
