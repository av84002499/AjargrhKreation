import "./ProductScreen.css";
const ProductScreen = () => {
  return (
    <div className="product-screen">
      <img className="image-icon" alt="" src="/image@2x.png" />
      <div className="product-details">
        <div className="bg">
          <div className="bg-child" />
        </div>
        <div className="button">
          <div className="bg1">
            <div className="bg-item" />
          </div>
          <div className="text">
            <div className="buy-now">Buy Now</div>
          </div>
          <img className="icon" alt="" src="/icon.svg" />
        </div>
        <div className="price">
          <div className="total-price-19800-container">
            <p className="total-price">Total Price</p>
            <p className="p">
              <b>$198.00</b>
            </p>
          </div>
        </div>
        <div className="description">
          <div className="text1">
            <div className="get-a-little">
              Get a little lift from these Sam Edelman sandals featuring ruched
              straps and leather lace-up ties, while a braided jute sole makes a
              fresh statement for summer.
            </div>
          </div>
          <div className="title">
            <div className="avaliable-in-stok">Description</div>
          </div>
        </div>
        <div className="size">
          <div className="size1">
            <div className="xl">
              <div className="xl-child" />
              <div className="xl1">XL</div>
            </div>
            <div className="xl2">
              <div className="xl-child" />
              <div className="xxl">XXL</div>
            </div>
            <div className="l">
              <div className="l-child" />
              <div className="l1">L</div>
            </div>
            <div className="m">
              <div className="xl-child" />
              <div className="m1">M</div>
            </div>
            <div className="s">
              <div className="xl-child" />
              <div className="s1">S</div>
            </div>
          </div>
          <div className="title1">
            <div className="avaliable-in-stok">Size</div>
          </div>
        </div>
        <div className="product-meta">
          <div className="stok">
            <div className="avaliable-in-stok">Avaliable in stok</div>
          </div>
          <div className="pice-range">
            <div className="pice-range-child" />
            <div className="div">- 1 +</div>
          </div>
          <div className="review">
            <img className="star-icon" alt="" src="/star.svg" />
            <div className="review1">(320 Review)</div>
          </div>
          <div className="title2">
            <div className="roller-rabbit-vado-container">
              <p className="roller-rabbit">Roller Rabbit</p>
              <p className="vado-odelle-dress">Vado Odelle Dress</p>
            </div>
          </div>
        </div>
      </div>
      <img className="menu-bar-icon" alt="" src="/menu-bar.svg" />
      <div className="mobile-tab-1-wrapper">
        <div className="mobile-tab-1">
          <div className="div1">4:46</div>
          <img className="fa-solidwifi-icon" alt="" src="/fasolidwifi.svg" />
          <img
            className="bibattery-half-icon"
            alt=""
            src="/bibatteryhalf.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
