import React from 'react';
import "./l34.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l1() {
    return (
        <>

            <div className='lmain-div_l34'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l34'>
                    <div className='main-head_l34'>Beware of false information</div>

                    <span className="main-span_l34">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l34"> Beware of false information shared by circle owners and users! <br /><br />
                        Dear Royal Q customers, <br /><br /> We have noticed some circle owners and users pretending to be the staff of Royal Q and giving out links to deceive other users.<br /> Royal Q would like to advise you to be cautious with your account information.<br /> Please do NOT scan any unofficial QR codes, click on any unknown links or sign in any unsafe websites to prevent your account information from leaking. <br /><br />
                        We will downgrade fraudsters to V1 as punishment. Please be advised that Royal Q staff will NOT in any way ask you to deposit or withdraw. If you are unsure of the information, our customer service will gladly help you through our official Royal Q App.  Royal Q cannot and will not be liable for any loss from users failing to check for false information. <br />
                        We apologize for the inconvenience and appreciate your understanding. <br /><br />
                        Thank you for your support to Royal Q!
                    </span>

                </div>

            </div>
        </>
    )
}

export default l1


// function BinancePro() {

//     return (
//         <>
//         </>
//     )
// }

// export default BinancePro
