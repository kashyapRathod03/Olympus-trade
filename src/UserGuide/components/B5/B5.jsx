import React from 'react';
import "./B5.css";
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b5'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b5'>
                    <div className='main-head_b5'>Introduction on Grid strategy</div>
                    <div className='main-ihead_b5'>Arithmetic</div><br />
                    <span className="main-span_b5">Arithmetic is equally divding the price to each grid. The price difference between each grid will be the same.(For example 1,2,3,4...) The profit will be based on the price difference between the grids.<br /><br />

                        Price difference between two grids=( the highest price - the lowest price)/ number of grids<br /><br />

                        Grid price distribution calculated will be as the following:<br />
                        Price_1=The lowest price<br />
                        Price_2=The lowest price+ price difference<br />
                        Price_3=The lowest price+price difference*2<br />
                        ...<br />
                        Price_n=The lowest price+price difference*(n-1)<br />
                        It will stop when it reaches the highest price. n=number of grids<br />
                    </span><br /><br /><br />
                    <div className='main-ihead_b5'>Geometric</div><br />
                    <span className='main-span_b5'>Geometric is having the same ratio between each grid for(example1,2,4,8...). The profit for each grid will be fixed.</span><br /><br />
                    <span className="main-span_b5">Geometric is taking the price range between the lowest and highest price and dividing it according the raise and drop percentage.<br />
                        The price ratio for each grid = (The highest price/ the lowest price)^(1/number of grids).<br />
                        The price percentage difference between the two grids= ((The highest price/ the lowest price)^(1/number of grids)-1)*100%.</span><br />
                    <br /><br />
                    <span className="main-span_b5">Grid price distribution calculated will be as the following:<br />
                        Price_1=The lowest price<br />
                        Price_2=The lowest price* price ratio<br />
                        Price_3=The lowest price*price ratio^2<br />
                        ...<br />
                        Price_n=The lowest price*price ratio^(n-1)<br />
                        It will stop when it reaches the highest price. n=number of grids<br />
                    </span><br /><br /><br />

                    <span className="main-span_b5">Price Range: Please enter the highest and lowest price range. The Robot will only trade within the price range.<br />
                        Number of grids: Please enter the amount of grids you wish to have.<br />
                        *The more grids you have, the more funds you will need to invest.<br />
                        Investment: Enter the amount you wish to invest<br />
                        Advanced Settings (Optional)<br />
                        Starting Condition: Please select a transaction mode you wish to use.<br />
                        Triggering price: The grid orders will be triggered when the market price reaches your set price. Please do not enter any parameters if you wish to trigger immediately.<br />
                        Stop Trigger: When the market reaches the Stop loss or Take profit, the system will stop trading.<br />
                        Stop loss: When the market drops to this price, sell all holdings and close the order.<br />
                        Take profit:When the market raises to this price, sell all holdings and close the order.</span><br /><br /><br />

                    <div className='main-ihead_b5'>How to setup a grid strategy?</div><br />

                    <span className="main-span_b5">Take BTC/USDT and the parameters below as example:<br /><br />
                        The highest price: 60000<br />
                        The lowest price: 40000<br />
                        Number of grids: 5 / Arithmetic<br />
                        Investing amount: 10000 USDT<br />
                        Assuming the BTC/USDT market price is 50000 USDT when creating the strategy.<br />
                        According to the parameters above, the price structure should be(USDT):60000，56000，52000，48000，44000，40000.<br />
                        All spot grid is using grid trading. It is placing orders from high to low price. Once a buy is made, there will be a order placed for sell above that price. Because 60000USDT is already the highest price, the system will start at 56000. The strategy will start to buy at 56000. 56000 is higher than the market price 50000. Therefore, it should buy immediately. After buying the system will place a sell order at 60000. It will continue to place a buy order at 52000. After buying at 52000, there will be a sell order placed at 56000. When continuing to reach 48000 it will not buy becuase it is lower than the current market price 50000. Therefore, it will not place a sell order at 52000. The same will apply to 44000 and 40000.
                        When starting a grid strateg, it will calulate the quantity of base currency and reserve the transaction fee needed according to the method above. It will than buy the base coins using market price. The final order placement will be as following:<br /><br />
                        Price Order details<br />
                        60000 Place sell order<br />
                        56000 Place sell order<br />
                        52000 No orders placed<br />
                        50000 Entering the market（52000 and 56000 bought and waiting to sell）<br />
                        48000 Place buy order<br />
                        44000 Place buy order<br />
                        40000 Place buy order<br />
                        After starting the grid, it will buy when the price drops to 48000USDT and place a sell at 52000USDT. It will make the sell when prices rasies back up to 52000 USDT and place another order at 48000USDT, achieving buying low and selling high.
                        When BTC market price goes above 60000USDT or below 40000USDT, the strategy will stop. It will continue trading when BTC price comes back into the range.</span><br /><br />

                    <span className="main-span_b5">Reminders:<br />
                        1.Please ensure that you always have around 2-10 USDT in your Royal Q balance to avoid the Grid strategy being closed. The strategy will be shut down if there are not enough balance for the fuel fee.<br />
                        2. The Grid strategy will NOT freeze the balance in your spot wallet. Therefore, please always make sure you have sufficient funds to make the next buy.<br />
                        3. The minum investment for each grid is 15 USDT. Number of grids *15 USDT will be the minimum investing amount.<br />
                        4.When starting a grid strategy, you will NOT be able to pause the strategy. You will only be able to stop or liquidate your holdings.<br />
                        5. The pairs that are currently using Martingale Strategy cannot simutaniously use Grid strategy.</span>

                </div>

            </div>
        </>
    )
}

export default BinancePro
