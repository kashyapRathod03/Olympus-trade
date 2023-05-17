import React from 'react';
import "./B27.css";
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b27'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b27'>
                    <div className='main-head_b27'>Detailed explanation of common professional terms in the transaction process</div>
                    <span className="main-span_b27">
                        Detailed explanation of common professional terms in the transaction process<br /><br />

                        1. Position: Refers to the ratio of the investor's actual investment to the actual investment capital.<br /><br/>
                        2. Full position: buy virtual currency with all funds.<br /><br />
                        3. Lighten up: Sell part of the virtual currency, but not all of it.<br /><br />
                        4. Heavy warehouse: Compared with virtual currency, available funds have a larger share of virtual currency.<br /><br />
                        5. Weak warehouse: Compared with virtual currency, available funds account for more shares of available funds.<br /><br />
                        6. Short position: sell all the virtual currency held in the hand and transfer all of it to funds.<br /><br />
                        7. Take profit: After gaining a certain amount of profit, sell the virtual currency held in order to maintain profit.<br /><br />
                        8. Stop loss: After the loss reaches a certain level, sell the virtual currency held to prevent the loss from further expanding.<br /><br />
                        9. Bull market: Prices continue to rise and the outlook is optimistic.<br /><br />
                        10. Bear market: Prices continue to fall and the outlook is bleak.<br /><br />
                        11. Long (long): The buyer believes that the currency price will rise in the future, buy the currency, and after the currency price rises, sell it at a high price to make a profit.<br /><br />
                        12. Short position (short position): The seller believes that the currency price will fall in the future, and sells the currency held in his hand (or borrows the currency from the trading platform). After the currency price falls, he buys it at a low price to make a profit.<br /><br />
                        13. Open a position: buy virtual currency.<br /><br />
                        14. Closing positions: buying virtual currencies in batches, such as: buying 1 BTC first, and then buying 1 BTC.<br /><br />
                        15. Full position: Buy all funds in virtual currency at once.<br /><br />
                        16. Rebound: When the currency price falls, the price rebounds and adjusts due to the rapid decline.<br /><br />
                        17. Consolidation (sideways): The price volatility is small and the currency price is stable.<br /><br />
                        18. Yindie: The currency price slowly declined.<br /><br />
                        19. Diving (waterfall): The currency price dropped rapidly, with a large magnitude.<br /><br />
                        20. Cut meat: After buying virtual currency, the currency price drops. In order to avoid expanding losses, sell the virtual currency at a loss. Or after borrowing the currency to go short, the currency price rises, and the virtual currency is bought at a loss.<br /><br />
                        21. Hold-in: the currency price is expected to rise, but the currency price drops after buying; or the currency price is expected to fall, but after selling, the currency price rises.<br /><br />
                        22. Unwinding: After buying virtual currency, the currency price fell and caused a temporary book loss, but then the currency price rebounded, turning losses into profits.<br /><br />
                        23. Going short: After selling the virtual currency because of the bearish outlook, the price of the currency rose all the way and failed to buy in time, so it failed to make a profit.<br /><br />
                        24. Overbought: The currency price continues to rise to a certain height, the buyer's power is basically exhausted, and the currency price is about to fall.<br /><br />
                        25. Oversold: The currency price continues to fall to a certain low point, the seller's power is basically exhausted, and the currency price is about to rebound.<br /><br />
                        26. Inducing many: The currency price has been consolidating for a long time, and the possibility of falling is relatively high. Most of the short positions have sold virtual currencies. Suddenly the short side has raised the price of the currency, which induces many parties to think that the price of the currency will rise, and they buy one after another. The side suppressed the price of the currency, so that many parties were locked in.<br /><br />
                        27. Inducing shorts: After buying virtual currency, the bulls deliberately suppress the price of the currency, making the bears think that the price of the currency will fall, and throw them out one after another. As a result, they fall into the trap of long<br /><br />

                    </span>


                </div>

            </div>
        </>
    )
}

export default BinancePro
