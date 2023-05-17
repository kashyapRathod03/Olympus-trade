import React from 'react';
import "./B21.css";
import b21_1 from "../../images/b16_17_18/b21.png"
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b21'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b21'>
                    <div className='main-head_b21'>Description of margin call configurationt</div>
                    <span className="main-span_b21">When setting up the position call configuration parameters, it will be displayed according to the number of times you set up the position, and you can set the position call drop and the position call multiple</span><br />
                    <img className='span-img_b21' src={b21_1} alt="process images" /><br />
                    <span className="main-span_b21">Glossary:<br /><br />

                        Margin call drop: When it falls to the percentage of the drop-out, the function of tracking cover-up will be turned on<br />
                        Margin call multiple  : When the replenishment price is reached, the amount of the first order will be multiplied by the multiple<br />
                        First call : Set the down ratio of the first call for position<br />
                        2nd call: the fall ratio setting for the second position call</span>

                </div>

            </div>
        </>
    )
}

export default BinancePro
