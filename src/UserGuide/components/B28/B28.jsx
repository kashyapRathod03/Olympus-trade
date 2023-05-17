import React from 'react';
import "./B28.css";
import { useNavigate } from "react-router-dom";
import { GrBladesVertical } from "react-icons/gr";
import { GrCloudlinux } from "react-icons/gr";
import b28_1 from "../../images/b28/b28_1.png"
import b28_2 from "../../images/b28/b28_2.png"
import b28_3 from "../../images/b28/b28_3.png"
import b28_4 from "../../images/b28/b28_4.png"
import b28_6 from "../../images/b28/b28_6.png"
import b28_7 from "../../images/b28/b28_7.png"
import b28_8 from "../../images/b28/b28_8.png"
import b28_9 from "../../images/b28/b28_9.png"
import b28_10a from "../../images/b28/b28_10a.png"
import b28_10b from "../../images/b28/b28_10b.png"
import b28_12 from "../../images/b28/b28_12.png"
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {    
    const nevigate = useNavigate();

    return (
        <>
            <div className='bmain-div_b28'>
                <div className='side-section'>
                    <Userguide/>
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar/>
                

                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b28'>

                <div className="outer-btn_28">
                        <div className='_b28'>
                            <button className='inner-btn_b28' onClick={() => nevigate('/Binance connect tutorial')}><GrBladesVertical /></button><br /><span>Binance connect tutorial</span>
                        </div>
                        <div className='_b28'>
                            <button className='inner-btn_b28' onClick={() => nevigate('/Binance connect tutorial')}><GrCloudlinux /></button><br /><span>Binance connect tutorial</span>
                        </div>
                        <div className='_b28'>
                            <button className='inner-btn_b28' onClick={() => nevigate('/Binance connect tutorial')}><GrCloudlinux /></button><br /><span>Binance connect tutorial</span>
                        </div>
                        <div className='_b28'>
                            <button className='inner-btn_b28' onClick={() => nevigate('/Binance connect tutorial')}><GrCloudlinux /></button><br /><span>Binance connect tutorial</span>
                        </div>
                    </div>

                    <div className='main-head_b28'>Binance connect tutorial</div>
                    <span className="main-span_b28">Binance connect tutorial</span><br/><br/>
                    <span className="main-span_b28"> Log in the official Binance website.</span><br/>
                    <span className="main-span_b28"> https://www.binance.com</span><br/><br/>
                    <span className="main-span_b28"> If you don't have a Binance account, please register first.</span><br/><br/>

                    <span className="main-span_b28">1.Tap the “My” icon.</span><br/>
                    <img className='span-img_b28' src={b28_1} alt="process images" /><br/>
                    <span className="main-span_b28">2.Tap “API Management”..</span><br/>
                    <img className='span-img_b28' src={b28_2} alt="process images" /><br/>
                    <span className="main-span_b28">3.Input your API label name and tap “Create API”.</span><br/>
                    <img className='span-img_b28' src={b28_3} alt="process images" /><br/>
                    <span className="main-span_b28">4.Complete the puzzle.</span><br/>
                    <img className='span-img_b28' src={b28_4} alt="process images" /><br/>
                    <span className="main-span_b28">5.Tap “Get Code” and enter the verification code.</span><br/>
                    <span className="main-span_b28">6.Tap “Submit”.</span><br/>
                    <img className='span-img_b28' src={b28_6} alt="process images" /><br/>
                    <span className="main-span_b28">7.Tap “Edit”.</span><br/>
                    <img className='span-img_b28' src={b28_7} alt="process images" /><br/>
                    <span className="main-span_b28">8.Check Enable Spot & Margin Trading..</span><br/>
                    <img className='span-img_b28' src={b28_8} alt="process images" /><br/>
                    <span className="main-span_b28">9.Open the Royal Q App, tap “APIBind”, select Binance, copy and save “IP address”.</span><br/>
                    <img className='span-img_b28' src={b28_9} alt="process images" /><br/>
                    <span className="main-span_b28">10.Select “Restrict access to trusted IPs only”and paste the “IP address” and tap “Confirm”.</span><br/>
                    <img className='span-img_b28' src={b28_10a} alt="process images" /><br/>
                    <img className='span-img_b28' src={b28_10b} alt="process images" /><br/>
                    <span className="main-span_b28">11.Tap “Get code” and enter the verification code.</span><br/>
                    <span className="main-span_b28">12.Tap “Submit”.</span><br/>
                    <img className='span-img_b28' src={b28_12} alt="process images" /><br/>
                
                </div>

            </div>
        </>
    )
}

export default BinancePro
