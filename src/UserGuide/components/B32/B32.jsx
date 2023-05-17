import React from 'react';
import "./B32.css";
import { useNavigate } from "react-router-dom";
import { GrBladesVertical } from "react-icons/gr";
import { GrCloudlinux } from "react-icons/gr";
import b3_1 from "../../images/b32/b3_1.png"
import b3_2 from "../../images/b32/b3_2.png"
import b3_3 from "../../images/b32/b3_3.png"
import b3_4 from "../../images/b32/b3_4.png"
import b3_5 from "../../images/b32/b3_5.png"
import b3_6 from "../../images/b32/b3_6.png"
import b3_7 from "../../images/b32/b3_7.png"
import b3_81 from "../../images/b32/b3_81.png"
import b3_82 from "../../images/b32/b3_82.png"
import b3_83 from "../../images/b32/b3_83.png"
import b3_9 from "../../images/b32/b3_9.png"
import b3_10 from "../../images/b32/b3_10.png"

import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {
    const nevigate = useNavigate();

    return (
        <>
            <div className='bmain-div_b32'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b32'>

                    <div className="outer-btn_16">
                        <div className='_b32'>
                            <button className='inner-btn_b32' onClick={() => nevigate('/Userguide/How to Choose a Copier to Join')}><GrBladesVertical /></button><br /><span>Choose copier to join</span>
                        </div>
                        <div className='_b32'>
                            <button className='inner-btn_b32' onClick={() => nevigate('/Userguide/Quantitative trading parameter setting tutorial')}><GrCloudlinux /></button><br /><span>Create Your Own</span>
                        </div>
                    </div>

                    <div className='main-head_b32'>How to Choose a Copier to Join</div>
                    <span className="main-span_b32">Step-by-Step Instructions</span><br /><br/>
                   
                    <span className="main-span_b32">1. Tap "Copier" in the navi- gation bar at the bottom.</span><br />
                    <img className='span-img_b32' src={b3_1} alt="process images" /><br />
                    <span className="main-span_b32">2. Tap "Copier" on the top</span><br />
                    <img className='span-img_b32' src={b3_2} alt="process images" /><br />
                    <span className="main-span_b32">3. Choose the Copier you want to join and tap "View".</span><br />
                    <img className='span-img_b32' src={b3_3} alt="process images" /><br />
                    <span className="main-span_b32">4. Tap "Apply to join" in the lower right corner</span><br />
                    <img className='span-img_b32' src={b3_4} alt="process images" /><br />
                    <span className="main-span_b32">5. Tap "Strategy for Copier</span><br />
                    <img className='span-img_b32' src={b3_5} alt="process images" /><br />
                    <span className="main-span_b32">6. Choose the "Exchange".</span><br />
                    <img className='span-img_b32' src={b3_6} alt="process images" /><br />
                    <span className="main-span_b32">7. Tap "Sync Strategy" at the bottom.</span><br />
                    <img className='span-img_b32' src={b3_7} alt="process images" /><br /><br />
                    <span className="main-span_ib32"> Sync settings</span><br /><br />
                    <span className="main-span_b32">8. Set up each field based on your preference. If you don't know how to set it up, you could consult the Circle Owner</span><br /><br />
                    <span className="main-span_b32">First, set the price for the "First Buy in amount" The minimum First Buy in amount is 10 USDT due to the limitation from the Ex- change.</span><br />
                    <img className='span-img_b32' src={b3_81} alt="process images" /><br />
                    <span className="main-span_b32">Second, Enter the number of strategies (the number of crypto you wish to invest).</span><br />
                    <img className='span-img_b32' src={b3_82} alt="process images" /><br />
                    <span className="main-span_b32">Third, you may choose to switch on "Synchronous Position Opening Double" to enable doubling your opening position amount</span><br />
                    <img className='span-img_b32' src={b3_83} alt="process images" /><br />
                    <span className="main-span_b32">9. Tap "Sync Strategy" after all the setup is com- plete.</span><br />
                    <img className='span-img_b32' src={b3_9} alt="process images" /><br />
                    <span className="main-span_b32">10. You can find the strate- gy you follow from Home.</span><br />
                    <img className='span-img_b32' src={b3_10} alt="process images" /><br />

                </div>

            </div>
        </>
    )
}

export default BinancePro
