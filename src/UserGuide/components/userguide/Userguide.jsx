import React from 'react';
import  './Userguide.css'
import Option from '../../../MainHelp/optionbar/Option';
import { useNavigate } from "react-router-dom";

function Userguide() {
    const nevigate = useNavigate();
    return (
        <>
            <Option/>
            <div className='main-div'>
                <ul>
                    <li onClick={() => nevigate('/Userguide')} className='main-list'>USERGUIDE</li>
                    <hr/>
                    <ol className='ol-list'>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/BinancePro')}>Binance Pro Api Binding</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Instructions on binding Telegram')}>Instructions on binding Telegram</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Instrcutions on creating Martingale Strategy Bot')}>Instrcutions on creating Martingale Strategy Bot</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Olympus Trade operation setting instructions')}>Olympus Trade operation setting instructions</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Introduction on Grid strategy')}>Introduction on Grid strategy</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/How to create a website shortcut')}>How to create a website shortcut</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/What will happen if my account expires?')}>What will happen if my account expires?</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/How to check the security questions?')}>How to check the security questions?</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/What are Rewards Lost?')}>What are Rewards Lost?</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/First present buy in price')}>First present buy in price</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Google Authenticator Tutorial')}>Google Authenticator Tutorial</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Introducing transaction page')}>Introducing transaction page</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/How to find my counselor?')}>How to find my counselor?</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/How to create a copier')}>How to create a copier</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Transaction Records and Revenue Details')}>Transaction Records and Revenue Details</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Quantitative trading parameter setting tutorial')}>Quantitative trading parameter setting tutorial</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Unable to receieve the verfication email')}>Unable to receieve the verfication email</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Double opening function')}>Double opening function</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Take Profit Rules')}>Take Profit Rules</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Description of margin call configuration')}>Description of margin call configuration</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/One-shot strategy and Cycle strategy')}>One-shot strategy and Cycle strategy</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Batch setting function')}>Batch setting function</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Trigger margin call price calculation')}>Trigger margin call price calculation</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/BNB as handling fee in Binance')}>BNB as handling fee in Binance</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/How do I bind to the new Binance or Huobi API?')}>How do I bind to the new Binance or Huobi API?</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Detailed explanation of common professional terms in the transaction process')}>Detailed explanation of common professional terms in the transaction process</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Binance connect tutorial')}>Binance connect tutorial</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Deposit')}>Deposit</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/Activation')}>Activation</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/The withdrawal has not arrived')}>The withdrawal has not arrived</li><br/><hr/><br/>
                        <li className="ol-child" onClick={() => nevigate('/Userguide/How to Choose a Copier to Join')}>How to Choose a Copier to Join</li><br/><hr/><br/>

                    </ol>
                </ul>
            </div>
        </>
    )
}

export default Userguide
