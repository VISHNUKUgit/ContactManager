import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

  function Navbar() {
    const [mobSlide, setMobSlide] = useState(false)
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    useEffect(() => {
      window.addEventListener('resize', function () {
        const screenWidth = window.innerWidth;
        setScreenSize(screenWidth);
        setMobSlide(false)

      });

      // Cleanup the event listener on unmount
      return () => {
        window.removeEventListener('resize', () => { });
      };
    }, []);
    const handleSlide = () => {
      setMobSlide(!mobSlide)
    }
    const [scrollLimit, setScrollLimit] = useState(false)
    window.onscroll = () => {
      let y = window.scrollY;
      if (screenSize < 600) {
        y > 41 ? setScrollLimit(true) : setScrollLimit(false)
      } else {
        y > 24 ? setScrollLimit(true) : setScrollLimit(false)
      }

      // console.log(y);


    }
    const bg = scrollLimit ? { backgroundColor: "#fff",borderBottom:"1px solid #b0b0b0" } :
      { backgroundColor: "" }
    const tx = scrollLimit ? { color: "#000000" } :
      { color: "#fff" }
    const lg = scrollLimit ? { color: "#0087FF" } :
      { color: "#fff" }
    return (
      <div style={bg}>
        {screenSize > 600 ?
          <div className='w-100 d-flex justify-content-center ' style={{ height: '90px', }}>
            <div className='d-flex justify-content-between align-items-center' style={{ width: "90%" }}>
              {/* logo */}
              <Link to={'/'} style={{ textDecoration: 'none' }}>
                <div className='d-flex align-items-center ' style={{ fontFamily: "Mintaka" }}>

                  <i className="fa-brands fa-pied-piper-hat fa-2xl" style={lg}></i>
                  <h1 className='text-decoration-underline' style={lg}>Contact-manager</h1>
                </div>
              </Link>
              {/* category */}
              <div style={tx}>
                <span className='me-1 fs-5 cat-hover'>User</span>
                <Link to={'/all-contact'} style={tx} className='text-decoration-none' >
                  <span className='mx-1 fs-5 cat-hover'>All-contact</span>
                </Link>
                <Link to={'/add-Contact'} style={tx} className='text-decoration-none'><span className='mx-1 fs-5 cat-hover'>Add-contact</span></Link>
                <Link to={'/category'} style={tx} className='text-decoration-none'>
                  <span className='mx-1 fs-5 cat-hover'>Category</span>
                </Link>

                <span className='ms-1 fs-5 cat-hover'>About us</span>
              </div>


              {/* search box */}
              <div>
                <input className="search p-1 ps-2" type="search" placeholder="Search..." style={{ backgroundColor: "#e2dddd", borderRadius: '20px' }} />
              </div>
              {/* account details */}
              <div className='d-flex'>
                {/* <div>
                <i class="fa-regular fa-heart fa-lg acc-hover" style={{ cursor: 'pointer' }}></i>
              </div> */}
                <div className='mx-4'>
                  <i class="fa-regular fa-user fa-lg acc-hover" style={{ cursor: 'pointer' }}></i>
                </div>
                {/* <div>
                <i class="fa-solid fa-cart-shopping fa-lg acc-hover" style={{ cursor: 'pointer' }}></i>
              </div> */}
              </div>
            </div>
          </div>
          :
          // logo
          < div className='w-100 d-flex justify-content-center mob' style={{ height: '90px' }} >
            <div className='d-flex justify-content-between align-items-center' style={{ width: "90%" }}>
              <div className='d-flex align-items-center ' style={{ fontFamily: "Mintaka" }}>
                <i class="fa-brands fa-pied-piper-hat fa-2xl " style={lg}></i>
                <h1 className='text-decoration-underline' style={lg}>Contact-manager</h1>
              </div>
              <div onClick={handleSlide} className='rounded border d-flex justify-content-center align-items-center hh'>
                {
                  mobSlide ? <i class="fa-solid fa-x fa-2xl" style={{ color: '#000000', cursor: 'pointer' }}></i> : <i class="fa-solid fa-bars fa-2xl" style={{ color: '#000000', cursor: 'pointer' }} ></i>

                }
              </div>
            </div>

            <div className={`mob-slide ${mobSlide ? 'active' : ''}`}>
              <div className='d-flex align-items-center p-4 ' style={{ fontFamily: "Mintaka" }}>
                <i class="fa-brands fa-pied-piper-hat fa-2xl"></i>
                <h1 style={{ textDecoration: 'underline', color: '#fff' }}>Contact-manager</h1>
              </div>
              <ul className='p-4 text-uppercase' style={{ listStyle: 'none', color: '#fff',position:'fixed' }}>
                <li className='p-4 border-bottom' style={{ cursor: 'pointer',color:'blue' }}>User</li>
                <Link to={'/all-contact'} style={{color:'#fff',cursor: 'pointer'}} className='text-decoration-none' >
                  <li className='p-4 border-bottom'>All-contact</li>
                </Link>
                <Link to={'/add-Contact'} style={{color:'#fff',cursor: 'pointer'}} className='text-decoration-none'><li className='p-4 border-bottom'>Add-contact</li></Link>
                <Link to={'/category'} style={{color:'#fff'}} className='text-decoration-none'>
                  <li className='p-4 border-bottom'>Category</li>
                </Link>
                <li className='p-4 ' style={{ cursor: 'pointer' }}>About us</li>

              </ul>
            </div>

          </div>

        }
      </div >
    )
  }

export default Navbar