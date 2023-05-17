import React from 'react';
import "./B29.css";
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b29'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b29'>
                    <div className='main-head_b29'>Deposit</div>
                    <span className="main-span_b29">Deposit a sufficient amount in your Royal Q Wallet to proceed. You will need:<br /><br />
                        1. Transfer USDT via TRC-20 chain from an Exchange or from another account. Using a different chain might cause asset loss. <br />
                        2. 120 USDT for annual activation fee<br />
                        3. Sufficient USDT for fuel fee (20% of your revenue) – you are advised to keep at least 20 USDT in your RQ Wallet.<br /><br />
                        Please note that there might be a transaction fee from each transfer depending on the policy from each Exchange.<br />
                        You also need sufficient USDT in your Exchange account to keep the trade running. The first order is suggested to be 15 USDT. Insufficient USDT in your Exchange account would also cause the shutdown of your trade.<br /><br />
                        Use QR code or copy the Wallet address to proceed the transfer.

                    </span>

                </div>

            </div>
        </>
    )
}

export default BinancePro
