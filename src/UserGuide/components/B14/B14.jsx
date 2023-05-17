import React from 'react';
import "./B14.css";
import b14_1 from "../../images/b14/b14_1.png"
import b14_2 from "../../images/b14/b14_2.png"
import b14_3 from "../../images/b14/b14_3.png"
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {    

    return (
        <>
            <div className='bmain-div_b14'>
                <div className='side-section'>
                    <Userguide/>
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                
                <Sidebar/>
                

                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b14'>
                    <div className='main-head_b14'>How to create a copier</div>
                    <span className="main-span_b14">Open Royel Q app and tap the "copier" page</span><br/>
                    <img className='span-img_ib14' src={b14_1} alt="process images" /><br/>
                    <span className="main-span_b14">Tap the "+" icon in the copier and select  "create copier" once you have filled out all the information, tap the "create copier" at the bottom.</span><br/>
                    <img  className='span-img_b14' src={b14_2} alt="process images" /><br/>
                    <span className="main-span_b14">3.After creating a circle, tap the “ @ ” in the top right comer and enter the “strategy synchronize page”.Choose the Exchange and set the profit sharing you wish to receive. After completing the settings, tap“Submit”,</span><br/>
                    <img  className='span-img_b14' src={b14_3} alt="process images" /><br/>
                    <span className="main-span_b14">Users that have started the strategy sync will need to wait until the strategy finishes to update to the latest circle owner's strategy settings.</span>
                
                </div>

            </div>
        </>
    )
}

export default BinancePro
