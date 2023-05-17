import React from 'react';
import "./B4.css";
import b4 from "../../images/b4.png"
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b4'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b4'>
                    <div className='main-head_b4'>Royal Q operation setting instructions</div>
                    <img className='span-img_b4' src={b4} alt="process images" /><br />
                    <span className='main-span_b4'>Currency trading settings<br/><br/>
                        First order quota: The quota purchased when the robot is started for the first time
                        Double open position: After opening, the purchase amount will be doubled each time the first order is purchased in the cycle, and the position will be calculated according to the first order amount doubled
                        Replenishment upper limit: When the number of replenishment times exceeds the set replenishment times, the upper limit of replenishment will appear and the system will stop replenishment
                        Whole position stop profit ratio: Take profit will be triggered after reaching the preset stop profit ratio in the whole position mode
                        Whole position take profit callback: When the preset take profit ratio is reached, the preset take profit callback ratio needs to be called back, and the system will clear the position and sell
                        Replenishment configuration: display the number of replenishment according to the upper limit of replenishment, and set the corresponding drop and replenishment quantity
                        Callback for margin call: In full margin mode, after reaching the preset margin percentage trigger, the system will cover the margin only after rebounding the margin call callback parameters
                        Distributed position stop profit configuration: the last position of the divided position will trigger the stop profit after reaching the preset stop profit ratio
                        Distributed take profit callback: In the divided position mode, when the preset take profit ratio is reached, the preset take profit callback ratio needs to be called back before the system will trigger the take profit.
                    </span>

                </div>

            </div>
        </>
    )
}

export default BinancePro
