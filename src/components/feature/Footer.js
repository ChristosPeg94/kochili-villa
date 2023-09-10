import './Footer.css';
import {RiCopyrightLine, RiLinkM, RiFacebookCircleFill, RiInstagramFill, } from 'react-icons/ri';
import airbnb from '../../assets/airbnb.png';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div>
        <h3>Kochili Villa</h3>
        <h3 className='letter-a'>A</h3>
        <h3>Luxury Villa</h3>

        <div className='footer-links'>
          <a href='https://www.facebook.com/profile.php?id=100094392341996'>
            <RiFacebookCircleFill className='footer-icons' />
          </a>

          <a href='https://www.instagram.com/kochilivilla/'>
            <RiInstagramFill className='footer-icons' />
          </a>

          <a href='https://www.booking.com/hotel/gr/kochili-villa.en-gb.html?aid=2311236&label=en-gr-booking-desktop-g0NTjyoVQeaYY91Ak1lfHwS652796015895%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9075557%3Ali%3Adec%3Adm&sid=6c4afd79a81c9aeda70ac15d47198047&dest_id=-815305;dest_type=city;dist=0;group_adults=5;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=5;req_children=0;room1=A%2CA%2CA%2CA%2CA;sb_price_type=total;sr_order=popularity;srepoch=1694167018;srpvid=0d8b45f359ad0226;type=total;ucfs=1&#hotelTmpl'>       
            <RiLinkM className='footer-icons' />
          </a>

          <a href='https://www.airbnb.gr/rooms/872293489104996408?check_in=2023-09-01&check_out=2023-09-04&source_impression_id=p3_1689760916_G%2BCUyBY6KEhXfIx8&previous_page_section_name=1000&federated_search_id=6e927716-d1a0-4480-887f-66c253b395c5'>
            <img className='footer-icons' src={airbnb} alt='airbnb-img'/>
          </a>

        </div>

      </div>
      <div>

      <div className='footer-copyright'>
        <RiCopyrightLine />
        <p>Copyright Kochili Villa 2023</p>
      </div>

      <div className='footer-copyright'>
        <RiCopyrightLine />
        <p> Designed & Developed by Christos Pengaras</p>
      </div>

      </div>
    </div>
  )
}

export default Footer