import React from 'react';
import "./q11.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q11() {
    return (
        <>

            <div className='lmain-div_q11'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q11'>
                    <div className='main-head_q11'>The robot is running, can I operate it on my account?</div>

                    <span className="main-span_q11">Q: The robot is running, can I operate it on my account?</span><br />
                    <span className="main-span_q11">Q: ACan I operate on my account while the robot is running?</span><br /><br />
                    <span className="main-span_q11">A: A. In order to create higher returns for the currency held by individuals in the exchange, do not open this currency robot, otherwise the robot will recognize the sale.<br /> It is recommended that the currency type to be activated be separated from the currency type of your own currency.<br /><br /> B. Do not sell manually by yourself. After selling, the robot will prompt an abnormality and the corresponding fuel fee will be deducted, so that the robot can execute it automatically.<br /><br /> Solution:<br /><br /> 1. Transfer the currency you have stocked to a fiat currency account or another account <br />2. Choose fixed deposit, freeze and other currencies, do not open the robot of that currency <br />3. If you want to stop a certain currency transaction, please click Stop in the currency setting and "one-click clearance".<br /><br />
                        Royal Q quantitative platform will not be responsible if you go to the exchange to sell manually and cause an abnormally excessive deduction of handling fees.<br /><br />
                        4. It is forbidden for robots of multiple quantitative platforms to connect to the same exchange account, so as to avoid data confusion and bring you losses.
                    </span>

                </div>

            </div>
        </>
    )
}

export default q11