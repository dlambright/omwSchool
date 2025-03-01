import Image from "next/image";
import styles from "./page.module.css";
import { OverviewCards } from './components/overviewCards';
import { faImagePortrait } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LocationCards } from './components/locationCards';

// import globalStyles from "./globals.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="hero-container" style={{
          width: '100%',
          textAlign: 'center',
          backgroundImage: 'linear-gradient(176deg, rgba(242, 189, 0, 0.56) 0%, rgba(142, 156, 85, 0.72) 38%, rgba(12, 113, 195, 0.79) 99%), url("/hero_kids.jpg")',
          marginBottom: '20px',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '50vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center', // This ensures the middle of the image is shown
          '@media (maxWidth: 768px)': {
            backgroundPosition: 'center center', // Reinforces center positioning on mobile
            backgroundSize: 'cover'
          }
        }}>
          <Image
            src="/hero_big_round.svg"
            alt="Decorative round shape"
            width={2000}
            height={150}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: 'auto',
              zIndex: 1,
              // filter: 'brightness(0) invert(1)', // This makes the SVG white
              // fill: 'white',
            }}
          />

          {/* Content container */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            minHeight: '50vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              color: 'var(--foreground)',
              marginBottom: '20px',
              fontFamily: 'var(--font-geist-sans)'
            }}>
              Where Fun Is Learning
            </h1>
            <button style={{
              padding: '12px 24px',
              fontSize: '1.1rem',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontFamily: 'var(--font-geist-sans)',
              transition: 'background-color 0.3s ease'
            }}>
              Schedule a Tour
            </button>
          </div>
        </div>
        <div className="container" >
          <div className="row" style={{ margin: '2rem 0' }}>
            <div className="col-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h1 style={{ textAlign: 'right' }}>On My Way Preschool & Daycare: Your Child Care Destination</h1>
              <span style={{ textAlign: 'right' }}>Welcome to On My Way Preschool & Daycare, where we are committed to providing top-notch preschool services and amenities to families in Pleasant View, Roy, and Clinton, UT. Our licensed and insured child care center has been a trusted part of the community since 1992, and we take pride in creating a safe and nurturing environment for children to learn and grow.</span>
              <button style={{
                padding: '12px 24px',
                fontSize: '1.1rem',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontFamily: 'var(--font-geist-sans)',
                transition: 'background-color 0.3s ease'
              }}>
                Schedule a Tour
              </button>
            </div>
            <div className="col-6">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Image src="/kids_crafts.jpg" alt="Kids playing" width={500} height={350} style={{ borderRadius: 15 }} />
              </div>

            </div>
          </div>
        </div>

        <OverviewCards />

        <div style={{
          backgroundImage: 'url("bg2.png")',
          backgroundColor: '#f0f0f0',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
          padding: '2rem 0'
        }}>
          <div className="container" >
            <div className="row" style={{ margin: '2rem 0' }}>
              <div className="col-12">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <h1>About Us</h1>
                </div>
              </div>
              <div className="col-6">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Image src="/floor_child.jpg" alt="Kids playing" width={500} height={350} style={{ borderRadius: 15, boxShadow: '0px 20px 18px -12px rgba(0, 0, 0, 0.18)' }} />
                </div>
              </div>
              <div className="col-6">
                <h1>
                  Our Mission
                </h1>
                <div>
                  The mission of On My Way is to provide quality care in a safe, loving, and fun environment for the children of the community. On My Way is here to help the child in care develop their full potential socially, academically, mentally, and personally.            </div>
                <div>
                  <h1>
                    Our Story
                  </h1>
                  As a new mom, I founded On My Way over 24 years ago because I couldn’t find quality care for my daughter while at work. Starting in my home, I hired help to care for children as we would want our own cared for. With so many wonderful students, we moved to a larger space in August 2016 to continue teaching in our special way. We provide a well-rounded learning experience, including a preschool curriculum and music specialist.
                </div>
              </div>
            </div>


          </div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h1>
                  We Are a Part of CACFP
                </h1>
                <button style={{
                  padding: '12px 24px',
                  fontSize: '1.1rem',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-geist-sans)',
                  transition: 'background-color 0.3s ease'
                }}>
                  Learn More
                </button>
              </div>
              <div className="col-6">
                <h1>We Use Brightwheel!</h1>
                At On my Way Preschool & Daycare, we want to make sure parents feel involved and informed about their child’s day. That’s why we use Brightwheel, the #1 childcare management software. With Brightwheel, parents receive constant updates about their child’s activities, meals, diaper logs, and pictures in real-time. This software encourages parent involvement and communication, and ensures that our parents are always in the know about their child’s progress.
              </div>
            </div>
          </div>

          <LocationCards />
        </div>
      </main >
    </div >
  );
}
