import React from 'react';
import "./B19.css";
import b19_1 from "../../images/b16_17_18/b19.png"
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {    

    return (
        <>
            <div className='bmain-div_b19'>
                <div className='side-section'>
                    <Userguide/>
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar/>
                

                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b19'>
                    <div className='main-head_b19'>Double opening function</div>
                    <span className="main-span_b19">Description of the advantages of the double position opening function: In order to increase user benefits, the double position opening function upgrade is mainly for the overall rise in the market + after a sharp drop, the position will be pulled back and the position will continue to rise to achieve more benefits.</span><br/>
                    <img className='span-img_b19' src={b19_1} alt="process images" /><br/>
                
                    <span className="main-span_b19">The first order amount users can follow their original settings and do not need to change. After doubling the position, the system will automatically double the position after opening the position for the first time and after each time the position is cleared, without affecting the subsequent replenishment quota.</span>
                
                </div>

            </div>
        </>
    )
}

export default BinancePro
