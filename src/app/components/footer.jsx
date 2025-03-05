import '../globals.css';
// import '../page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeHeader } from './themeHeader';
import { ThemeText } from './themeText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocation, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const locationData = [
  {
    title: 'Roy',
    address: '5971 S 1900 W, Roy, UT 84067',
    mapsLink: 'https://www.google.com/maps/place/On+My+Way+Preschool+%26+Daycare/@41.1550362,-112.0271081,891m/data=!3m1!1e3!4m15!1m8!3m7!1s0x87530543cc240fdb:0xbb24637c24ce0e8c!2s5971+S+1900+W,+Roy,+UT+84067!3b1!8m2!3d41.1550362!4d-112.0271081!16s%2Fg%2F11bw3ywq5n!3m5!1s0x87530543cc22ae15:0xbdad3dd194ecf5c6!8m2!3d41.1550477!4d-112.0270986!16s%2Fg%2F11c610b6ms?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
    phone: '801-776-3880',
    email: 'royonmyway@gmail.com',
    businessHours: [
      {
        dates: 'Monday - Friday',
        times: '5:15 AM to 6:00 PM'
      },
      {
        dates: 'Saturday & Sunday',
        times: 'Closed'
      }
    ]
  },
  {
    title: 'Clinton',
    address: '1387 W 1800 N, Clinton, UT 84015',
    mapsLink: 'https://www.google.com/maps/place/On+My+Way+Preschool+and+Daycare/@41.1394935,-112.0527344,891m/data=!3m2!1e3!5s0x87531acbf7b59ae9:0x2a0b6ee95db7f1ed!4m15!1m8!3m7!1s0x87531acbf7fd0d09:0xf2e90c9c7e5a0558!2s1387+W+1800+N,+Clinton,+UT+84015!3b1!8m2!3d41.1394935!4d-112.0527344!16s%2Fg%2F11c2fwydxl!3m5!1s0x87531b9c8fd474b7:0x3645dfb6cb7aeab5!8m2!3d41.1394975!4d-112.0526896!16s%2Fg%2F11fr6322tf?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
    phone: '801-217-3026',
    email: 'clintononmyway@gmail.com',
    businessHours: [
      {
        dates: 'Monday - Friday',
        times: '5:00 AM to 6:00 PM'
      },
      {
        dates: 'Saturday & Sunday',
        times: 'Closed'
      }
    ]
  },
  {
    title: 'Pleasant View',
    address: '3885 N.Hwy 89, Pleasant View, UT 84404',
    mapsLink: 'https://www.google.com/maps/place/On+My+Way+Preschool+%26+Daycare/@41.328029,-112.0221809,673m/data=!3m1!1e3!4m14!1m7!3m6!1s0x875372ca2e12b7f7:0x4ae517d0762026af!2s3885+N+Hwy+89+Hwy,+Pleasant+View,+UT+84404!3b1!8m2!3d41.3281051!4d-112.0224171!3m5!1s0x8753732d21f67b67:0x74fc955abf4ea42c!8m2!3d41.3297113!4d-112.0238835!16s%2Fg%2F11l6jcqlkj?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D',
    phone: '801-436-5035',
    email: 'pleasantviewonmyway@gmail.com',
    businessHours: [
      {
        dates: 'Monday - Friday',
        times: '5:30 AM to 6:00 PM'
      },
      {
        dates: 'Saturday & Sunday',
        times: 'Closed'
      }
    ]
  }
]

export const Footer = () => {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #FF4D00, #f5f5f5)', padding: '0 0 30px 0' }}>
      <div className="container">
        <ThemeHeader
          text="We'd love to hear from you! If you're interested in enrolling your child at On My Way Preschool, UT get in touch with us."
          color="white"
        />
        <div className="row">
          {locationData.map( ( location ) => (
            <div key={location.title} className="col-4" >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', margin: '8px', backgroundColor: '#ffffff88', padding: '10px', borderRadius: '10px', overflow: 'hidden', textOverflow: 'ellipsis', }}>
                <h2 style={{ textAlign: 'center', marginTop: '2px', fontFamily: 'var(--font-geist-sans)' }}>
                  {location.title}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', marginBottom: '0px', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
                  <div style={{ height: '20px', width: '20px', flexShrink: 0 }}>
                    <FontAwesomeIcon icon={faMapLocation} size="10px" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', marginBottom: '0px', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
                    <a href={location.mapsLink} target="_blank" rel="noopener noreferrer" style={{ overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
                      <ThemeText
                        text={location.address}
                      />
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', marginBottom: '0px', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
                  <FontAwesomeIcon icon={faPhone} size="10px" style={{ flexShrink: 0 }} />
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', marginBottom: '0px', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
                    <a href={`tel:${location.phone}`} style={{ overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
                      <ThemeText
                        text={location.phone}
                      />
                    </a>
                  </div>
                </div>
                <a href={`mailto:${location.email}`} style={{ width: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', marginBottom: '0px', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
                    <FontAwesomeIcon icon={faEnvelope} size="10px" style={{ flexShrink: 0 }} />
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', marginBottom: '0px', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
                      <ThemeText
                        text={location.email}
                      />
                    </div>
                  </div>
                </a>
                <h3 style={{ fontFamily: 'var(--font-geist-sans)' }}>Business Hours</h3>
                {
                  location.businessHours.map( ( businessHours ) => (
                    <ThemeText
                      text={`${businessHours.dates}: ${businessHours.times}`}
                    />
                  ) )
                }
              </div>
            </div>
          ) )}
          <div className="col-3" />
          <div className="col-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', margin: '8px', backgroundColor: '#ffffff88', padding: '10px', borderRadius: '10px', overflow: 'hidden', textOverflow: 'ellipsis', }}>
            <Link href="https://www.bbb.org/us/ut/roy/profile/child-care-centers/on-my-way-preschool-daycare-llc-1166-90012789?utm_campaign=bbb_seal&utm_content=On%20My%20Way%20Preschool%20%26%20Daycare%2C%20LLC&utm_medium=website&utm_source=seal_click_90012789" target="_blank" rel="noopener noreferrer">
              <Image src="/ab-seal-horizontal-blue.svg.webp" alt="Better Business Bureau" width={175} height={61} />
              <ThemeText
                text="BBB Rating: A+"
              />
            </Link>
          </div>
          <div className="col-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', margin: '8px', backgroundColor: '#ffffff88', padding: '10px', borderRadius: '10px', overflow: 'hidden', textOverflow: 'ellipsis', }}>
            <Image src="/UPCCA-Logo-without-Words.webp" alt="UPCCA" width={61} height={61} />
            <ThemeText
              text="We are members of the UPCCA – Utah Professional Childcare Association"
            />
          </div>
        </div>
      </div>
    </div >
  )
}