import React from 'react';
import "./q7.css";
import q7_1 from "../../images/q7_1.png";
import q7_2 from "../../images/q7_2.png";
import q7_3 from "../../images/q7_3.png";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q7() {
    return (
        <>

            <div className='lmain-div_q7'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q7'>
                    <div className='main-head_q7'>Description of sub-storage mode</div>

                    <span className="main-span_q7">Separate warehouse independent settlement operation process </span><br /><br />
                    <span className="main-span_q7"><b>Sub-bin mode-real-time settlement</b> </span><br /><br />
                    <span className="main-span_q7">In this model, the user makes up for more than 5 times of separate settlement income and fuel fee, and the income generated does not affect the average position price of the strategy</span><br /><br />
                    <span className="main-span_q7"><b>Mode switch</b> </span><br /><br />
                    <span className="main-span_q7">sub-bin mode-real-time settlement belongs to a type of "sub-bin mode", but the settlement is different after the sub-warehouse sells. The previous "sub-bin mode" sell profit from the sub-warehouse will lower the "avg price". New The added "sub-bin mode-real-time settle- ment" the profit from the sale of sub-warehouses will be counted in his income, and fuel costs will be charged, and the average price will not be lowered.</span><br /><br />
                    <span className="main-span_q7">You can switch at any time between sub-bin mode and sub-bin mode-real-time settlement</span><br /><br />
                    <span className="main-span_q7">1. Click [Quantitative] at the bottom of Royal Q, select a currency, and enter the currency details page.</span><br /><br />
                    <img className='span-img_q7' src={q7_1} alt="process images" /><br />
                    <span className="main-span_q7">2.  After setting [Trade Settings] and start it, click <br/>[Strategy Mode]</span><br /><br />
                    <img className='span-img_q7' src={q7_2} alt="process images" /><br />
                    <span className="main-span_q7">3. Select [Sub-bin mode-real-time settlement], and the number of replenishment times is greater than 4,and the Strategy List will be displayed.</span><br /><br />
                    <img className='span-img_q7' src={q7_3} alt="process images" /><br />
                   
                </div>

            </div>
        </>
    )
}

export default q7