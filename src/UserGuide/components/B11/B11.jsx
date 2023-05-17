import React from 'react';
import "./B11.css";
import b11_1 from "../../images/b11/b11_1.png"
import b11_2 from "../../images/b11/b11_2.png"
import b11_3 from "../../images/b11/b11_3.png"
import b11_4_1 from "../../images/b11/b11_4_1.png"
import b11_4_2 from "../../images/b11/b11_4_2.png"
import b11_5_1 from "../../images/b11/b11_5_1.png"
import b11_5_2 from "../../images/b11/b11_5_2.png"
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {    

    return (
        <>
            <div className='bmain-div_b11'>
                <div className='side-section'>
                    <Userguide/>
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar/>
                

                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b11'>
                    <div className='main-head_b11'>Google Authenticator Tutorial</div>

                    <span className="main-span_b11">1.After login, please Click the avatar icon to enter “Account Center”. Please select “Security Center” in the sidebar.</span><br/>
                    <img className='span-img_b11' src={b11_1} alt="process images" /><br/>
                    <span className="main-span_b11">2.Click the “Edit” icon in the Google Authenticator section.</span><br/>
                    <img  className='span-img_b11' src={b11_2} alt="process images" /><br/>
                    <span className="main-span_b11">3. Download the mobile APP for Google Authenticator<br/>
                        If you do not have Google Authenticator on your mobile device, you can scan the QR code to install. After finishing, please click “Next”.</span><br/>
                    <img  className='span-img_b11' src={b11_3} alt="process images" /><br/>
                    <span className="main-span_b11">4.Open the Google Authenticator APP on your mobile device. Tap the “+” button in the lower right corner. You may choose to Scan the QR code. If your device does not have a working camera, you may also choose to enter the secret key given below the QR code. Please click “Next” to continue.</span><br/>
                    <img  className='span-img_b11_1' src={b11_4_1} alt="process images" /><br/>
                    <img  className='span-img_b11' src={b11_4_2} alt="process images" /><br/>
                    <span className="main-span_b11">5. Please click the “Send verification code” to get the verification code sent to your Email. And copy the 6 digit verification code displayed in your Google Authenticator. Please enter them accordingly to finish the process. </span><br/>
                    <img  className='span-img_b11' src={b11_5_1} alt="process images" /><br/>
                    <img  className='span-img_b11' src={b11_5_2} alt="process images" /><br/>
                
                </div>

            </div>
        </>
    )
}

export default BinancePro
