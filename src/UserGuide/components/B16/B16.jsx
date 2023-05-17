import React from 'react';
import "./B16.css";
import { useNavigate } from "react-router-dom";
import { GrBladesVertical } from "react-icons/gr";
import { GrCloudlinux } from "react-icons/gr";
import b16_a from "../../images/b16_17_18/b16_a.png"
import b16_b from "../../images/b16_17_18/b16_b.png"
import b16_c from "../../images/b16_17_18/b16_c.png"
import b16_d from "../../images/b16_17_18/b16_d.png"
import b16_e from "../../images/b16_17_18/b16_e.png"
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {
    const nevigate = useNavigate();

    return (
        <>
            <div className='bmain-div_b16'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b16'>

                    <div className="outer-btn_16">
                        <div className='_b16'>
                            <button className='inner-btn_b16' onClick={() => nevigate('/Userguide/How to Choose a Copier to Join')}><GrBladesVertical /></button><br /><span>Choose copier to join</span>
                        </div>
                        <div className='_b16'>
                            <button className='inner-btn_b16' onClick={() => nevigate('/Userguide/Quantitative trading parameter setting tutorial')}><GrCloudlinux /></button><br /><span>Create Your Own</span>
                        </div>
                    </div>

                    <div className='main-head_b16'>Quantitative trading parameter setting tutorial</div>
                    <span className="main-span_b16">Check before quantitative trading</span><br /><br/>
                    <span className="main-span_b16">After binding Binance or Huobi API, make sure that the transaction funds are transferred to the spot trading account, and the "Read" and "Trans- action" permissions are checked when the API is bound. The Royal Q account has a pre-charged fuel fee greater than 2USDT, and the soft- ware will remind you if it is less than 10USDT.</span><br />
                    <span className="main-span_b16">Quantitative trading setup instructions</span><br /><br/>
                    <span className="main-span_b16">A. Click Quantify, select the currency to be billed, click the currency to be billed, first click "Trade Set- tings" in the lower left corner of the page</span><br />
                    <img className='span-img_b16' src={b16_a} alt="process images" /><br />
                    <span className="main-span_b16">B. Open the trading settings interface, set the strategy parameters (or click "Get a suggested strategy" to get the platform's default recommended strategy), and click "Confirm" in the upper right corner after setting the parameters</span><br />
                    <img className='span-img_b16' src={b16_b} alt="process images" /><br />
                    <span className="main-span_b16">Parameter noun explanation:<br/><br/>
                        First buy in amount: The quota purchased when the robot is started for
                        the first time<br/><br/>
                        open position doubled: After opening, the purchase amount will be doubled each time the first order is purchased in the cycle, and the po- sition will be calculated according to the first order amount doubled margin call limit: When the number of replenishment times exceeds the set replenishment times, the upper limit of replenishment will appear and the system will stop replenishment<br/><br/>
                        Whole position take profit ratio: Take profit will be triggered after reaching the preset stop profit ratio in the whole position mode Whole position take profit callback: When the preset take profit ratio is reached, the preset take profit callback ratio needs to be called back, and the system will clear the position and sell<br/><br/>
                        Margin configuration: display the number of replenishment according to the upper limit of replenishment, and set the corresponding drop and replenishment quantity<br/><br/>
                        Buy in callback: In full margin mode, after reaching the preset margin percentage trigger, the system will cover the margin only after the call- back parameter of margin call needs to be rebounded. Distributed and take profit allocation: the last position of the divided position will trigger the stop profit after reaching the preset stop profit
                        ratio<br/><br/>
                        Sub-position take-profit callback: In the divided position mode, when the preset take profit ratio is reached, the preset take profit callback ratio needs to be called back before the system will trigger the take
                        profit.<br/>
                    </span><br/><br/>
                    <span className="main-span_b16">C. After the "Trade Settings" is completed, click "Start" in the lower right corner and confirm the start-up strategy</span><br />
                    <img className='span-img_b16' src={b16_c} alt="process images" /><br />
                    <span className="main-span_b16">D. Function description of currency page</span><br />
                    <img className='span-img_b16' src={b16_d} alt="process images" /><br />
                    <span className="main-span_b16">one-shot: When activated, the robot will stop operating after the currency is sold at a profit;<br/><br/>
                        Sell: You can perform partial clearance sale according to the
                        position ratio or manually enter the quantity. After the setting is completed, the "remaining position amount" will be displayed Buy: You can manually enter the replenishment amount, after the setting is completed, the "estimated position average price" and "estimated position profit and loss" will be displayed; stop margin call: close the replenishment function (sell will still be triggered when profit is taken, mostly used for extreme plung-
                        es)<br/><br/>
                        call margin trigger: When the closing price is not triggered, the closing trigger price is lower than the market price; when the market drops and touches the closing trigger price, the system will start tracking the closing of the position, and the displayed "closing callback price" is higher than The market price, the status will be changed to "Call for position is triggered, waiting for callback to cover". If the market continues to fall, the "Call- back price for cover" will also be adjusted; when the market stops falling and callback rises and touches the callback price for call, the robot will receive a cover Signal, then the robot will buy Log & Transaction Record: View all operations performed by the
                        robot
                    </span><br /><br/>
                    <span className="main-span_b16">E. Click to quantify-batch settings, to operate on mul- tiple currencies (unbound API users do not display batch settings)</span><br />
                    <img className='span-img_b16' src={b16_e} alt="process images" /><br />


                </div>

            </div>
        </>
    )
}

export default BinancePro
