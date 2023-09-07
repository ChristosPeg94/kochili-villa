import './Services.css';
import front from '../../assets/front-2.jpg';
import kitchen from '../../assets/kouzina-2.jpg';
import yard from '../../assets/yard-3.jpg';


const Services = () => {
  return (
    <div className='service' id='service'>
      <div className='service-description'>
        <p>
        "Kochili Villa" boasts four spacious bedrooms, providing ample space for families or groups of friends. 
        Two of the bedrooms feature comfortable double beds, ensuring a restful night's sleep. 
        The third bedroom offers a single bed and a bunk bed, perfect for accommodating children or additional guests. 
        In the fourth bedroom, you will find two single beds, and there is also a sofa bed available in the living room for extra flexibility. 
        With its thoughtful layout and multiple sleeping arrangements, the villa can comfortably accommodate up to 10 guests.
        </p>
      </div>


      <div className='animated-cards'>
        <div class="container">
          <div class="card">
            <div class="img-box">
              <img src={front} alt="outside-img"/>
            </div>
            <div class="content">
              <h2>Accommodation</h2>
              <p>
                "Kochili Villa" is a luxury holiday home in Agios Andreas - Nea Peramos, Kavala. It has four spacious bedrooms and can accommodate up to 10 guests.
              </p>
              <a href="#accommodation">Read More</a>
            </div>
          </div>
        <div class="card">
          <div class="img-box">
            <img src={kitchen} alt="kitchen-img"/>
          </div>
            <div class="content">
              <h2>Amenities</h2>
              <p>
                The villa offers a fully equipped kitchen with modern appliances and two bathrooms with bathtubs or showers.
              </p>
              <a href="#service">Read More</a>
            </div>
          </div>
        <div class="card">
          <div class="img-box">
            <img src={yard} alt="yard-img"/>
          </div>
          <div class="content">
            <h2>Outdoor Paradise</h2>
            <p>
              "Kochili Villa" has an expansive courtyard with lush greenery, ancient olive trees, a cozy gazebo, and a spacious veranda with breathtaking views.
            </p>
            <a href="#outdoor">Read More</a>
          </div>
        </div>
      </div>

      </div>
    


    </div>
  )
}

export default Services