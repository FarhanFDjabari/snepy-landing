import "./Header.scss";

function Header() {
  return (
    <div className="jumbotron mb-5">
      <div className="hero d-flex flex-column container-header">
        {/* Item 1 */}
        <h1 className="jumbotron__text jumbotron__text__main jumbotron__text__color-white">
          Bantal Leher <br /> Jaman Now Paling Hit
        </h1>
        <h2 className="jumbotron__text jumbotron__text__color-white mt-5">
          Pegal dan kaku leher hilang dalam 5 menit
        </h2>
        <div className="d-flex justify-content-end pt-5">
          <div
            className="btn-buy jumbotron__text__btn-buy jumbotron__text__color-white me-4"
            onClick={() =>
              window.open("https://forms.gle/XcdB1xeLUW9ZZwNo7", "_blank")
            }
          >
            Miliki SNEPY! mu
          </div>
          <a
            className="btn-buy learn-more jumbotron__text__color-white jumbotron__text__btn-buy"
            // href="#coba-ngetes"
            onClick={() => {window.scrollTo({ top: "700", behavior: "smooth"})}}
          >
            Pelajari lebih
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
