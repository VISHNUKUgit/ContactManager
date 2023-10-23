import React from 'react'
import { useState, useEffect } from 'react';
function Footer() {
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
    return (
        <div>
            {
                screenSize > 600 ?
                    <div>
                        <div className='bg-primary w-100 px-5 d-flex'>
                            <div className='w-25 d-flex flex-column'>
                                <img className='py-3' src="https://www.truecaller.com/cms/63a42faf0b4e8344cb601acb312d97c1.avif" alt="" />
                                <img className='py-3' src="https://www.truecaller.com/cms/f0e9ab987056bd8450279de7b6ddcf1a.avif" alt="" />
                            </div>
                            <div className='w-75 d-flex pt-3'>
                                <ul className='mx-4' style={{ listStyle: 'none' }}>
                                    <li className='fs-4 mb-2 fw-bolder'> About us</li>
                                    <li>About us</li>
                                    <li>Impact</li>
                                    <li>safety Center</li>
                                    <li>Media Kit</li>
                                    <li>Carers</li>
                                    <li>Investors</li>
                                </ul>
                                <ul className='mx-4' style={{ listStyle: 'none' }}>
                                    <li className='fs-4 mb-2 fw-bolder'>Our App</li>
                                    <li>Download</li>
                                    <li>Features</li>
                                    <li>Premium</li>
                                    <li>Phone Number sreach</li>
                                    <li>Privacy</li>
                                    <li>Help</li>
                                </ul>
                                <ul className='mx-4' style={{ listStyle: 'none' }}>
                                    <li className='fs-4 mb-2 fw-bolder'>Blog</li>
                                    <li>Home</li>
                                    <li>Insights</li>
                                    <li>Scam alert</li>
                                    <li>Features</li>
                                    <li>Impact</li>
                                    <li>News</li>
                                </ul>
                                <ul className='mx-4' style={{ listStyle: 'none' }}>
                                    <li className='fs-4 mb-2 fw-bolder'>
                                        business
                                    </li>
                                    <li>For Advertisers</li>
                                    <li>For Business</li>
                                    <li>For Developers</li>
                                </ul>

                            </div>

                        </div>
                        <div className='w-100 bg-dark d-flex justify-content-between align-items-center'>
                            <p className='text-light p-3 ' style={{marginBottom:'0px'}}>© 2023 Truecaller AB
                                Privacy
                                Terms of Service
                                Cookies
                                Responsible Disclosure
                                Directory
                                Publication certificate
                                Edit cookies
                                Code of Conduct</p>
                                <div className='p-3 d-flex'>
                                    <div className='mx-2'>
                                    <i class="fa-brands fa-facebook fa-xl" style={{color:" #fff"}}></i>
                                    </div>
                                    <div className='mx-2'>
                                    <i class="fa-brands fa-x-twitter fa-xl" style={{color: '#ffffff'}}></i>
                                    </div>
                                    <div className='mx-2'>
                                    <i class="fa-brands fa-instagram fa-xl" style={{color: '#ffffff'}}></i>
                                    </div>
                                    <div className='mx-2'>
                                    <i class="fa-brands fa-youtube fa-xl" style={{color: '#ffffff'}}></i>
                                    </div>
                                    <div className='mx-2'>
                                    <i class="fa-brands fa-linkedin fa-xl" style={{color: '#ffffff'}}></i>
                                    </div>
                                </div>
                        </div>
                    </div>

                    :
                    <div className='bg-primary w-100 px-5 d-flex flex-column' >
                        <div className='d-flex w-100 flex-wrap'>
                                <ul className='mx-1 w-50' style={{ listStyle: 'none' }}>
                                    <li className='fs-4 mb-2 fw-bolder'> About us</li>
                                    <li>About us</li>
                                    <li>Impact</li>
                                    <li>safety Center</li>
                                    <li>Media Kit</li>
                                    <li>Carers</li>
                                    <li>Investors</li>
                                </ul>
                                <ul className='mx-1 w-25' style={{ listStyle: 'none' }}>
                                    <li className='fs-4 mb-2 fw-bolder'>Our App</li>
                                    <li>Download</li>
                                    <li>Features</li>
                                    <li>Premium</li>
                                    <li>Phone Number sreach</li>
                                    <li>Privacy</li>
                                    <li>Help</li>
                                </ul>
                                <ul className='mx-1 w-50' style={{ listStyle: 'none' }}>
                                    <li className='fs-4 mb-2 fw-bolder'>Blog</li>
                                    <li>Home</li>
                                    <li>Insights</li>
                                    <li>Scam alert</li>
                                    <li>Features</li>
                                    <li>Impact</li>
                                    <li>News</li>
                                </ul>
                                <ul className='mx-1 w-25' style={{ listStyle: 'none' }}>
                                    <li className='fs-4 mb-2 fw-bolder'>
                                        business
                                    </li>
                                    <li>For Advertisers</li>
                                    <li>For Business</li>
                                    <li>For Developers</li>
                                </ul>
                        </div>
                        <div className='w-100 d-flex '>
                                <img className='px-3 w-50' src="https://www.truecaller.com/cms/63a42faf0b4e8344cb601acb312d97c1.avif" alt="" />
                                <img className='px-3 w-50' src="https://www.truecaller.com/cms/f0e9ab987056bd8450279de7b6ddcf1a.avif" alt="" />
                        </div>
                        <div className='w-100 bg-primary d-flex flex-column align-items-center'>
                            <p className='text-light text-center p-3 ' style={{marginBottom:'0px'}}>© 2023 Truecaller AB
                                Privacy
                                Terms of Service
                                Cookies
                                Responsible Disclosure
                                Directory
                                Publication certificate
                                Edit cookies
                                Code of Conduct</p>
                                <div className='p-3 d-flex'>
                                    <div className='mx-2'>
                                    <i class="fa-brands fa-facebook fa-xl" style={{color:" #fff"}}></i>
                                    </div>
                                    <div className='mx-2'>
                                    <i class="fa-brands fa-x-twitter fa-xl" style={{color: '#ffffff'}}></i>
                                    </div>
                                    <div className='mx-2'>
                                    <i class="fa-brands fa-instagram fa-xl" style={{color: '#ffffff'}}></i>
                                    </div>
                                    <div className='mx-2'>
                                    <i class="fa-brands fa-youtube fa-xl" style={{color: '#ffffff'}}></i>
                                    </div>
                                    <div className='mx-2'>
                                    <i class="fa-brands fa-linkedin fa-xl" style={{color: '#ffffff'}}></i>
                                    </div>
                                </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Footer