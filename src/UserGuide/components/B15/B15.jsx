import React from 'react';
import "./B15.css";
import b15_1 from "../../images/b14/b15_1.png"
import b15_2 from "../../images/b14/b15_2.png"
import b15_3 from "../../images/b14/b15_3.png"
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';


function BinancePro() {    

    return (
        <>
            <div className='bmain-div_b6'>
                <div className='side-section'>
                    <Userguide/>
                </div>
                <Sidebar/>
                

                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b6'>
                    <div className='main-head_b6'>Transaction Records and Revenue Details</div>
                    <span className="main-span_b6">How to find your transaction records?</span><br/>
                    <span className="main-span_b6">1. Choose the trading pair that you wish to check.</span><br/>
                    <img className='span-img_b6' src={b15_1} alt="process images" /><br/>
                    <span className="main-span_b6">2.Tap on the transaction record in the upper right corner.</span><br/>
                    <img  className='span-img_b6' src={b15_2} alt="process images" /><br/>
                    <span className="main-span_b6">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br/><br/>
                    <span className="main-span_b6">How to find your profit records?</span><br/><br/>
                    <span className="main-span_b6">1. Tap on the revenue details in Home page</span><br/>
                    <img  className='span-img_b6' src={b15_3} alt="process images" /><br/>
                    <span className="main-span_b6">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span>
                
                </div>

            </div>
        </>
    )
}

export default BinancePro
