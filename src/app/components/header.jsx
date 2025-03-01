'use client';

import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './header.css';

export const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100px', backgroundColor: '#ffffff' }}>
      <Image src="/OnMyWayLogo-1200w.jpg" alt="logo" width={150} height={80} />
      <div className="desktopMenu">
        <Link href="/">
          Home
        </Link>
        <Link href="/infants-toddlers">
          Infants & Toddlers
        </Link>
        <Link href="/early-preschool">
          Early Preschool
        </Link>
        <Link href="/preschool">
          Preschool
        </Link>
        <Link href="/school-age-program">
          School Age Program
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </div>
      <div className="burgerMenu">
        <div style={{ position: 'relative' }}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => {
              const menu = document.getElementById( 'mobileMenu' );
              menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
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
              display: 'none',
              position: 'absolute',
              right: 0,
              top: '100%',
              backgroundColor: '#ffffff',
              flexDirection: 'column',
              padding: '16px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              borderRadius: '4px',
              zIndex: 1000,
              minWidth: '200px'
            }}
          >
            <Link href="/" style={{ padding: '8px 0', textDecoration: 'none', color: 'inherit' }}>
              Home
            </Link>
            <Link href="/infants-toddlers" style={{ padding: '8px 0', textDecoration: 'none', color: 'inherit' }}>
              Infants & Toddlers
            </Link>
            <Link href="/early-preschool" style={{ padding: '8px 0', textDecoration: 'none', color: 'inherit' }}>
              Early Preschool
            </Link>
            <Link href="/preschool" style={{ padding: '8px 0', textDecoration: 'none', color: 'inherit' }}>
              Preschool
            </Link>
            <Link href="/school-age-program" style={{ padding: '8px 0', textDecoration: 'none', color: 'inherit' }}>
              School Age Program
            </Link>
            <Link href="/contact" style={{ padding: '8px 0', textDecoration: 'none', color: 'inherit' }}>
              Contact
            </Link>
          </div>
        </div>

      </div >
    </div >
  )
}