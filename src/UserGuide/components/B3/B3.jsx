import React from 'react';
import "./B3.css";
import b3_2 from "../../images/b3_2.png"
import b3_3ab from "../../images/b3_3ab.png"
import b3_3cd from "../../images/b3_3cd.png"
import b3_3ab2 from "../../images/b3_3ab2.png"
import b3_3cd2 from "../../images/b3_3cd2.png"
import b3_21 from "../../images/b3_21.png"
import b3_2ab from "../../images/b3_22.png"
import b3_2cd from "../../images/b3_22cd.png"
import b3_2ab2 from "../../images/b3_22ab2.png"
import b3_2cd2 from "../../images/b3_22cd2.png"

import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {    

    return (
        <>
            <div className='bmain-div_b3'>
                <div className='side-section'>
                    <Userguide/>
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar/>
                

                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b3'>
                    <div className='main-head_b3'>Instrcutions on creating Martingale Strategy Bot</div>
                    <span className='main-span_b3'>1. Instrcutions on creating Martingale Strategy Bot</span><br/><br/>
                    <span className="main-span_b3">2. Switch to Bots and click Create Bot.Select Martingale Strategy Bot and tap create.</span><br/>
                    <img className='span-img_b3' src={b3_2} alt="process images" /><br/>
                    <span className="main-span_b3">3. You may choose to sync with a circle owner or create your own strategy when creating for the first time.<br/><br/>
                        <span className='inner-span'>-----fier staeniteeargae</span><br/>
                        <span><pre>     a. Tap Next, select the circle owner you wish to sync with and tap sync.</pre></span>
                        <span><pre>     b. Tap Sync strategy in the sync strategy settings Page.</pre></span>
                    
                        <img  className='span-img_b3' src={b3_3ab} alt="process images" /><br/>
                    
                        <span><pre>     c. Tap start and tap confirm to start the Martingale Strategy Bot.</pre></span>
                        <span><pre>     d. After starting the bot, you may see the active strategy in the Active section located in the Strategy page.</pre></span><br/>

                        <img  className='span-img_b3' src={b3_3cd} alt="process images" /><br/>

                    {/* .............................................................................. */}
                        <span className='inner-span'>-----Create Your Own Strategy:</span><br/><br/>
                        <span><pre>     a. Tap Next in the create your own section.</pre></span>
                        <span><pre>     b.Tap trade settings in the Martingale strategy page and enter the parameters accordingly. Tap start to start the Martingale Strategy Bot.</pre></span>
                    
                        <img  className='span-img_b3' src={b3_3ab2} alt="process images" /><br/>
                    
                        <span><pre>     c.Tap start and tap confirm to start the Martingale Strategy Bot.</pre></span>
                        <span><pre>     d. After starting the bot, you may see the active strategy in the Active section located in the Strategy page.</pre></span><br/>

                        <img  className='span-img_b3' src={b3_3cd2} alt="process images" /><br/>
                    
                        </span><br/>
                    {/* ............................................................................. */}
                    
                    <div className='main-head_b3'>Create From Strategy page</div>

                    <span className="main-span_b3">1. Start the APP and tap strategy. Select Bots if creating for the first time. Select Martingale Strategy Bot and tap create.</span><br/>
                    <img  className='span-img_b3' src={b3_21} alt="process images" /><br/>

                    <span className="main-span_b3">2. Start the APP and tap strategy. Select Bots if creating for the first time.Select Martingale Strategy Bot and tap create.<br/><br/>
                        <span className='inner-span'>-----Choosing to sync with a circle owner:</span><br/>
                        <span><pre>     a.Tap Next, select the circle owner you wish to sync with and tap sync.</pre></span>
                        <span><pre>     b.Tap Sync strategy in the sync strategy settings page.</pre></span>
                    
                        <img  className='span-img_b3' src={b3_2ab} alt="process images" /><br/>
                    
                        <span><pre>     c. Tap start and tap confirm to start the Martingale Strategy Bot.</pre></span>
                        <span><pre>     d. After starting the bot, you may see the active strategy in the Active section located in the Strategy page.</pre></span><br/>

                        <img  className='span-img_b3' src={b3_2cd} alt="process images" /><br/>

                    {/* .............................................................................. */}
                        <span className='inner-span'>-----Create Your Own Strategy:</span><br/><br/>
                        <span><pre>     a. Tap Next in the create your own section.</pre></span>
                        <span><pre>     b.Tap trade settings in the Martingale strategy page and enter the parameters accordingly.Tap start to.start the Martingale Strategy Bot.</pre></span>
                    
                        <img  className='span-img_b3' src={b3_2ab2} alt="process images" /><br/>
                    
                        <span><pre>     c. Tap start and tap confirm to start the MartingaleStrategy Bot.</pre></span>
                        <span><pre>     d. After starting the bot, you may see the active strategy in the Active section located in the Strategy page.</pre></span><br/>

                        <img  className='span-img_b3' src={b3_2cd2} alt="process images" /><br/>
                    
                        </span>

                </div>

            </div>
        </>
    )
}

export default BinancePro
