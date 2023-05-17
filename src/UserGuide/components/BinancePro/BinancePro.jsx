import React from 'react';
import "./BinancePro.css";
import BinancePro_2 from "../../images/BinancePro_2.jpg"
import BinancePro_3 from "../../images/BinancePro_3.jpg"
import BinancePro_4 from "../../images/B_4.jpg"
import BinancePro_5 from "../../images/B_5.jpg"
import BinancePro_6 from "../../images/B_6.jpg"
import BinancePro_7 from "../../images/B_7.jpg"
import BinancePro_8 from "../../images/B_8.jpg"
import BinancePro_10 from "../../images/B_10.jpg"
import BinancePro_11 from "../../images/B_11.jpg"
import BinancePro_12 from "../../images/B_12.jpg"
import BinancePro_13 from "../../images/B_13.jpg"
import BinancePro_14 from "../../images/B_14.jpg"
import BinancePro_15 from "../../images/B_15.jpg"
import BinancePro_16 from "../../images/B_16.jpg"
import BinancePro_17 from "../../images/B_17.jpg"
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import Option from '../../../MainHelp/optionbar/Option';


function BinancePro() {    

    return (
        <>
            <div className='bmain-div'>
                <div className='side-section'>
                    <Userguide/>
                </div>
                <div className="option_b1">
                    <Option/>
                </div>
                <Sidebar/>
                

                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section'>
                    <div className='main-head'>How To Create & Bind Binance Pro API with OLYMPUS</div>
                    <span className='main-span'>1. Log in to the official Binance Application If you don't have a Binance account, please register your account first on Binance</span><br/><br/>
                    <span className="main-span">2. Select ”More” to see more options.</span><br/>
                    <img className='span-img1' src={BinancePro_2} alt="process images" /><br/>
                    <span className="main-span">3. Swipe the screen until you find the ”Others” section and Select ”API Management“</span><br/>
                    <img  className='span-img1' src={BinancePro_3} alt="process images" /><br/>
                    <span className="main-span">4. Click on Create API tab</span><br/>
                    <img  className='span-img1' src={BinancePro_4} alt="process images" /><br/>
                    <span className="main-span">5. Choose “System Generated” Then click on “Next”</span><br/>
                    <img  className='span-img1' src={BinancePro_5} alt="process images" /><br/>
                    <span className="main-span">6. Input your API label name and tap “Next”</span><br/>
                    <img  className='span-img1' src={BinancePro_6} alt="process images" /><br/>
                    <span className="main-span">7. Complete the puzzle.</span><br/>
                    <img  className='span-img1' src={BinancePro_7} alt="process images" /><br/>
                    <span className="main-span">8. Tap “Get Code” and enter the verification code, Then Click on “Submit”</span><br/>
                    <img  className='span-img1' src={BinancePro_8} alt="process images" /><br/>
                    <span className="main-span">9. Now your API Key Is Successfully Created</span><br/><br/>
                    <span className="main-span">10. Now open OLYMPUS APP and tap on “API Binding”</span><br/>
                    <img  className='span-img1' src={BinancePro_10} alt="process images" /><br/>
                    <span className="main-span">11. Tap on Binance</span><br/>
                    <img  className='span-img1' src={BinancePro_11} alt="process images" /><br/>
                    <span className="main-span">12. Tap on “Copy” to copy your IP</span><br/>
                    <img  className='span-img1' src={BinancePro_12} alt="process images" /><br/>
                    <span className="main-span">13. Then Open Binance APP and click on “Edit”</span><br/>
                    <img  className='span-img1' src={BinancePro_13} alt="process images" /><br/>
                    <span className="main-span">14. Enter your IP Address and Tap on Confirm</span><br/>
                    <img  className='span-img1' src={BinancePro_14} alt="process images" /><br/>
                    <span className="main-span">15. Check Enable Spot & Margin Trading. and Click on Save</span><br/>
                    <img  className='span-img1' src={BinancePro_15} alt="process images" /><br/>
                    <span className="main-span">16. Copy API Key and Secrete Key</span><br/>
                    <img  className='span-img1' src={BinancePro_16} alt="process images" /><br/>
                    <span className="main-span">17. Go back OLYMPUS app and Paste API Key & Secret Key and Tap “send code” and enter the verification code.</span><br/>
                    <img  className='span-img1' src={BinancePro_17} alt="process images" /><br/>
                    <span className="main-span">18. Carefully read the “Risk Notice” and check it. Then Tap on “Bind” to complete the process.</span><br/>
                    
                </div>

            </div>
        </>
    )
}

export default BinancePro
