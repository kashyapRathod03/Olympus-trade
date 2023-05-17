import React from 'react';
import "./B26.css";
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b26'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b26'>
                    <div className='main-head_b26'>How do I bind to the new Binance or Huobi API?</div>
                    <span className="main-span_b26">Q: How do I bind the new Binance or Huobi API?<br /><br />
                        A: It is recommended that you end all running strategies first, enter the new Access Key (API Key) and Secret Key, fill in the verification code, tick the risk reminder, and then click Replace to complete the replacement!</span>

                </div>

            </div>
        </>
    )
}

export default BinancePro
