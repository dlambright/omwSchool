'use client';
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './header.css';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState( false );

  return (
    <div className="header" style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '0px', color: '#0C71C3' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#cc1111', width: '100%', padding: '2px 0' }}>

        <h1 style={{ color: 'white', margin: 0 }}>Welcome to our new website!</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff', height: '100px', padding: '8px 16px' }}>
        <Image src="/OnMyWayLogo-1200w.jpg" alt="logo" width={150} height={80} />
        <div className="desktopMenu">
          <Link href="/" className="headerLink">
            Home
          </Link>
          <Link href="/infants-toddlers" className="headerLink">
            Infants & Toddlers
          </Link>
          <Link href="/early-preschool" className="headerLink">
            Early Preschool
          </Link>
          <Link href="/preschool" className="headerLink">
            Preschool
          </Link>
          <Link href="/school-age-program" className="headerLink">
            School Age Program
          </Link>
          <Link href="/contact" className="headerLink">
            Contact
          </Link>
        </div>
        <div className="burgerMenu">
          <div style={{ position: 'relative' }}>
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => {
                setIsMobileMenuOpen( !isMobileMenuOpen );
              }}
              style={{
                fontSize: '24px',
                cursor: 'pointer',
                padding: '12px'
              }}
            />
            <div
              id="mobileMenu"
              style={{
                display: isMobileMenuOpen ? 'flex' : 'none',
                position: 'absolute',
                right: 0,
                top: '100%',
                backgroundColor: '#ffffff',
                flexDirection: 'column',
                padding: '16px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                borderRadius: '4px',
                zIndex: 1000,
                minWidth: '300px'
              }}
            >
              <Link href="/" className='mobileMenuLink' onClick={() => setIsMobileMenuOpen( false )}>
                Home
              </Link>
              <Link href="/infants-toddlers" className='mobileMenuLink' onClick={() => setIsMobileMenuOpen( false )}>
                Infants & Toddlers
              </Link>
              <Link href="/early-preschool" className='mobileMenuLink' onClick={() => setIsMobileMenuOpen( false )}>
                Early Preschool
              </Link>
              <Link href="/preschool" className='mobileMenuLink' onClick={() => setIsMobileMenuOpen( false )}>
                Preschool
              </Link>
              <Link href="/school-age-program" className='mobileMenuLink' onClick={() => setIsMobileMenuOpen( false )}>
                School Age Program
              </Link>
              <Link href="/contact" className='mobileMenuLink' onClick={() => setIsMobileMenuOpen( false )}>
                Contact
              </Link>
            </div>
          </div>

        </div >
      </div >
    </div >
  )
}