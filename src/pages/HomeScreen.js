import "./HomeScreen.css";
const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="new-arrivals">
        <div className="product-01">
          <img className="image-icon1" alt="" src="/image1@2x.png" />
          <img className="love-icon" alt="" src="/love.svg" />
          <div className="text2">
            <div className="the-marc-jacobs-container">
              <p className="the-marc-jacobs">The Marc Jacobs</p>
              <p className="traveler-tote">Traveler Tote</p>
              <p className="the-marc-jacobs">$195.00</p>
            </div>
          </div>
        </div>
        <div className="product-02">
          <img className="image-icon1" alt="" src="/image11@2x.png" />
          <img className="love-icon" alt="" src="/love.svg" />
          <div className="text3">
            <div className="the-marc-jacobs-container">
              <p className="the-marc-jacobs">Axel Arigato</p>
              <p className="traveler-tote">Clean 90 Triple Sneakers</p>
              <p className="the-marc-jacobs">$245.00</p>
            </div>
          </div>
        </div>
        <div className="title3">
          <div className="view-all">View All</div>
          <b className="new-arrivals1">New Arrivals</b>
        </div>
      </div>
      <div className="navegation-bar">
        <div className="bg2">
          <div className="bg-inner" />
        </div>
        <img className="profile-icon" alt="" src="/profile.svg" />
        <img className="notification-icon" alt="" src="/notification.svg" />
        <img className="cart-icon" alt="" src="/cart.svg" />
        <div className="home">
          <div className="bg3">
            <div className="rectangle-div" />
          </div>
          <div className="text4">
            <div className="home1">Home</div>
          </div>
          <img className="home-icon" alt="" src="/home.svg" />
        </div>
      </div>
      <div className="features">
        <div className="features-02">
          <img className="image-icon3" alt="" src="/image2@2x.png" />
          <div className="offer">
            <div className="button1">
              <div className="button-child" />
              <b className="get-now">Get Now</b>
            </div>
            <div className="code">
              <div className="with-codefscreation">With code:FSCREATION</div>
            </div>
            <div className="title4">
              <div className="the-marc-jacobs-container">
                <p className="off">
                  <b>70% Off</b>
                </p>
                <p className="on-everything-today">On everything today</p>
              </div>
            </div>
          </div>
        </div>
        <div className="features-01">
          <img className="image-icon3" alt="" src="/image3@2x.png" />
          <div className="offer">
            <div className="button1">
              <div className="button-child" />
              <b className="get-now">Get Now</b>
            </div>
            <div className="code">
              <div className="with-codefscreation">With code:FSCREATION</div>
            </div>
            <div className="title4">
              <div className="the-marc-jacobs-container">
                <p className="off">
                  <b>50% Off</b>
                </p>
                <p className="on-everything-today">On everything today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sesrch-bar">
        <img className="filtter-icon" alt="" src="/filtter.svg" />
        <div className="search-bar">
          <div className="search-bar">
            <div className="bg-child1" />
          </div>
          <img className="icon1" alt="" src="/icon1.svg" />
          <div className="text5">
            <div className="search">Search...</div>
          </div>
        </div>
      </div>
      <div className="title6">
        <div className="welcome-our-fashions-container">
          <p className="off">
            <b>Welcome,</b>
          </p>
          <p className="our-fashions-app">Our Fashions App</p>
        </div>
      </div>
      <img className="menu-bar-icon1" alt="" src="/menu-bar1.svg" />
      <img className="home-screen-child" alt="" src="/rectangle-97@2x.png" />
    </div>
  );
};

export default HomeScreen;
