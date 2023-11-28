import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useState, useEffect } from 'react'
import img1 from '../img/img1.jpg';

function Home() {
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize', function () {
            const screenWidth = window.innerWidth;
            setScreenSize(screenWidth);
        });

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('resize', () => { });
        };
    }, []);
    const divStyle = screenSize > 600
        ? {
            width: '30%',
            height: '600px',
            display: 'flex',
            alignItems: 'center',
        }
        : {
            width: '100%',
            height: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

        };
    return (
        <>
            <div className='w-100 position-fixed' style={{ backdropFilter: 'sepia(10%)' }}>
                <Navbar />
            </div>
            <div className='w-100' style={{ backgroundImage:`url(${img1})`, height: '600px', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div style={divStyle}>
                    <h1 style={{
                        color: '#fff'
                    }}>
                        The World’s best <br />
                        Contact Manaagement <br />
                        App
                    </h1>
                </div>
            </div>
            <div style={{backgroundColor:'#e5e7eb'}}>
                <div className='text-center p-5' ><h1>What we do</h1></div>
                <div className={`w-100 d-flex ${screenSize > 600?'':'flex-column'}`}>
                    <div className={`${screenSize > 600?'w-25 p-5':'w-100 p-5 text-center'}`}>
                        <img className='w-100' src="https://www.truecaller.com/cms/56efefd4da30e9814f9e1de39fef0feb.avif" alt="" />
                        <h4>#1 trusted Caller ID app</h4>
                        <p>Trusted and used by over 356 million people to identify calls and SMS from around the world.</p>
                    </div>
                    <div className={`${screenSize > 600?'w-25 p-5':'w-100 p-5 text-center'}`}>
                        <img className='w-100' src="https://www.truecaller.com/cms/5b3e44ef04a2635fbbf8acd3f89c0d98.avif" alt="" />
                        <h4>Community-based spam reporting</h4>
                        <p>Real-time spam reporting allows for accurate and quick protection from scams, telemarketer­s, fraud and more.</p>
                    </div>
                    <div className={`${screenSize > 600?'w-25 p-5':'w-100 p-5 text-center'}`}>
                        <img className='w-100' src="https://www.truecaller.com/cms/f81f7e7c9d5a6e1334ff1f1708e4ed08.avif" alt="" />
                        <h4>Auto-block spam calls and SMS</h4>
                        <p>Stop spam in its tracks - or before it rings. You’ll never have to worry about another spammer getting through.</p>
                    </div>
                    <div className={`${screenSize > 600?'w-25 p-5':'w-100 p-5 text-center'}`}>
                        <img className='w-100' src="https://www.truecaller.com/cms/c8a78287e3a07421f9b3cabf628411d4.avif" alt="" />
                        <h4>Safe and efficient communicatio­n</h4>
                        <p>Choose a better way to communicate by letting Truecaller make smart choices.</p>
                    </div>
                </div>
            </div>
            <div className={`${screenSize > 600?'w-100 d-flex':'w-100 d-flex flex-column '}`}>
                <div className={`${screenSize > 600?'w-50 py-2':'w-100'}`}>
                    <div className={`${screenSize > 600?'ps-5':'ps-3'}`}>
                    <h4 className='py-3'>IPHONE</h4>
                    <h1 className='py-2'>Caller ID on iPhone is now 10x better <span className='text-primary'>.</span></h1>
                    <p className='py-2'>Truecaller's iPhone app has been completely re-written from the ground up to be lighter, more efficient, but most important of all, 10 times better spam, scam and business call identificati­on compared to previous versions of the app.</p>
                    <button className='btn btn-primary '>Learn More</button>
                    </div>
                </div>
                <div className={`${screenSize > 600?'w-50':'w-100'}`}>
                    <img className='w-100' src="https://www.truecaller.com/cms/8dff8bb7f1cd44125c0f168784535245.avif" alt="" />
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Home