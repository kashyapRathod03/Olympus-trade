import React from 'react';
import "./B12.css";
import b12_1 from "../../images/b12/b12_1.png"
import b12_2 from "../../images/b12/b12_1.png"
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b12'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b12'>
                    <div className='main-head_b12'>Introducing transaction page</div>
                    <span className="main-span_b12">This article will explain the purpose for each data shown in the trading page.<br />
                        Data displayed at the top:</span><br />
                    <img className='span-img_b12' src={b12_1} alt="process images" /><br />

                    <span className="main-span_b12">
                        *Position amount: The total amount you have for this coin.<br />

                        *Avg price: The average price of your current holding.<br />

                        *Numbers of call margin: The number of times you have made margin calls.<br />

                        *Position quantity: The total quantity you have for this coin.<br />

                        *Current price: The current market price.<br />
                        *Return rate: You current return rate according to market price.</span><br />
                    <span className="main-span_b12">Data displayed at the bottom:</span><br />
                    <img className='span-img_b12' src={b12_2} alt="process images" /><br />
                    <span className="main-span_b12">*First buy in amount:The first purchasing price when starting the robot.<br />

                        *Margin call limit: The highest number of times you want the system to make margin calls.<br />

                        *Take profit ratio: After rising the set percentage, the robot will trigger and get ready to sell.<br />

                        *Earnings callback:After triggering, the robot will only sell when the market reaches your set callback percentage.<br />

                        *Margin call drop: After dropping the set percentage from your last order, the robot will trigger and get ready to buy.<br />

                        *Buy in callback: After triggering, the robot will only buy when the market reaches your set callback percentage.</span><br />

                </div>

            </div>
        </>
    )
}

export default BinancePro
