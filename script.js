function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}ReactModal.setAppElement('#app');

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .8)' },

  content: {
    position: 'absolute',
    top: '40px',
    left: '100px',
    right: '100px',
    bottom: 'auto',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '0px',
    outline: 'none' } };




let movies= [
{
  title: 'Kizz Daniel ft EMPIRE',
  genre: ['Cough'],
  rating: 8.3,
  poster: 'Kiss-Daniel-wallpaper.png',
  description: 'Oluwatobiloba Daniel Anidugbe, who is better known as Kizz Daniel, is a Nigerian singer and songwriter. He rose to fame in 2014 with his debut single, "Woju". He signed a record deal with G-Worldwide Entertainment in 2013, but left the label following a publicized contract dispute and court case.',
  duration: '2m',
  rated: '2022',
  score: 90,
  awards: 88 },

{
  title: 'Davido ft Musa keys',
  genre: ['Unavailable'],
  rating: 8.8,
  poster: 'davido_agiye_gutanga_inkunga_ku_bigo_by_imfubyi_byo_muri_nigeria.png',
  description: 'David Adedeji Adeleke OON, who is known professionally as Davido, is a Nigerian singer, songwriter and record producer. He is regarded as one of the most important Afrobeats artists of the 21st century, and is credited alongside Burna Boy and Wizkid for popularizing the genre globally.',
  duration: '3m',
  rated: '2023',
  score: 84,
  awards: 10 },

{
  title: 'Tyla',
  genre: ['Water'],
  rating: 7.2,
  poster: '9db5c82b34f24f23a53ec858766979bf.png',
  description: 'Tyla Laura Seethal, known mononymously as Tyla, is a South African singer and songwriter. Born and raised in Johannesburg, she signed with Epic Records in 2021 after the domestic success of her 2019 debut single, "Getting Late" featuring Kooldrink.',
  duration: '3m',
  rated: '2023',
  score: 80,
  awards: 4 },

{
  title: 'Ayra starr',
  genre: ['Rush'],
  rating: 7.4,
  poster: 'AYRAxx-2c.png',
  description: 'Oyinkansola Sarah Aderibigbe, known professionally as Ayra Starr, is a Beninese-born Nigerian singer. She began a fashion career at the age of 16 with Quove Model Management before deciding to pursue a career in music.',
  duration: '3m',
  rated: '2022',
  score: 70,
  awards: 2 },

{
  title:'Burna boy',
  genre: ['on the low'],
  rating: 7.3,
  poster: 'burna-boy.png',
  description: 'Damini Ebunoluwa Ogulu MFR, known professionally as Burna Boy, is a Nigerian singer, songwriter and record producer. He is credited alongside Wizkid for popularizing Afrobeats and Afrofusion globally. He rose to stardom in 2012 after releasing "Like to Party", the lead single from his debut studio album L.I.F.E.',
  duration: '3m',
  rated: '2018',
  score: 70,
  awards: 5 },

{
  title: 'Wizkid',
  genre: ['Joro'],
  rating: 8,
  poster: 'Wizkid-Grammys.png',
  description: 'Ayodeji Ibrahim Balogun, known professionally as Wizkid, is a Nigerian singer and songwriter. A prominent figure in the modern day Afrobeats music scene, he is regarded as one of the most commercially successful and most influential African recording artists of the 21st century.',
  duration: '4m',
  rated: '2019',
  score: 82,
  awards: 15 },

  {
    title: 'Afro Type Beatz',
    genre: ['Afrobeat 2023 Mixtape'],
    rating: 7,
    poster: 'channels4_profile.jpg',
    description: 'Welcome to the ultimate collection of 2023 hottest Afrobeat tracks! Dive into the rhythms and beats that have taken the world by storm  Whether you a long-time fan or new to the genre this mixtape promises to keep you moving.',
    duration: '29m',
    rated: '2023',
    score: 82,
    awards: 1 },

    {
      title: 'DJ Goat',
      genre: ['HIPHOP 2024 VIDEO MIX (CLEAN) R&B, DANCEHALL, AFROBEAT, HIP HOP (24, 23, 22) - RAP, TRAP, DRILL'],
      rating: 7,
      poster: '1000_F_581676163_QUiHjiYWir1SwdlkGY4IGpN7l2TMysQB.jpg',
      description: '',
      duration: '29m',
      rated: '2023',
      score: 82,
      awards: 1 },

{
  title: 'DJ Remix 2024',
  genre: ['Mashups & Remix of Popular Songs'],
  rating: 8,
  poster: 'channels4_profile.png',
  description: '',
  duration: '11h 54m',
  rated: '2024',
  score: 82,
  awards: 4 }];




const text_truncate = function (str, length, ending) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

const Nav = () => /*#__PURE__*/
React.createElement("nav", null, /*#__PURE__*/

React.createElement("ul", { className: "nav" }, /*#__PURE__*/
React.createElement("li", { className: "active" }, "music"), /*#__PURE__*/
React.createElement("li", null, "celebs & photos"), /*#__PURE__*/
React.createElement("li", null, "community"), /*#__PURE__*/
React.createElement("li", null, "news")), /*#__PURE__*/

React.createElement("div", { className: "user" }, /*#__PURE__*/
React.createElement("i", { className: "fa fa-gear user-settings" }), /*#__PURE__*/
React.createElement("img", { className: "user-icon", src: "images.png" })));





class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      popularMovies: [
      {
        name: "DJ Remix 2024",
        genre: ["Mashups & Remix of Popular Songs"],
        releaseDate: "2024",
        img: "channels4_profile.png" },

      {
        name: 'Afro Type Beatz',
        genre: ["Afrobeat 2023 Mixtape"],
        releaseDate: " Sep 18, 2023 ",
        img: "channels4_profile.jpg" },

      {
        name: "DJ Goat",
        genre: ["HIPHOP 2024 VIDEO MIX (CLEAN) R&B, DANCEHALL, AFROBEAT, HIP HOP (24, 23, 22) - RAP, TRAP, DRILL"],
        releaseDate: "25 Jan, 2024",
        img: "1000_F_581676163_QUiHjiYWir1SwdlkGY4IGpN7l2TMysQB.jpg" }]};

  }
  render() {
    const { popularMovies } = this.state;
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      vertical: true,
      autoplay: true,
      autoplaySpeed: 6500,
      speed: 1300,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false };

    return /*#__PURE__*/(
      React.createElement("header", null, /*#__PURE__*/
      React.createElement(Slider, settings,

      popularMovies.map((m) => /*#__PURE__*/
      React.createElement("div", {
        key: m.name,
        style: {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          height: '600px' } }, /*#__PURE__*/


      React.createElement("img", { src: m.img,
        style: {
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          verticalAlign: 'top' } }), /*#__PURE__*/

      React.createElement("div", { className: "movie-info", style: { zIndex: 2 } }, /*#__PURE__*/
      React.createElement("h1", null, m.name), /*#__PURE__*/
      React.createElement("ul", { className: "genre" },

      m.genre.map((g) => /*#__PURE__*/
      React.createElement("li", null, g))), /*#__PURE__*/


      React.createElement("button", null, "play", /*#__PURE__*/React.createElement("i", { className: "fa fa-play-circle-o" })), /*#__PURE__*/
      React.createElement("h3", null, "In Album"), /*#__PURE__*/
      React.createElement("h4", null, m.releaseDate)))))));







  }}


const Tabs = () => /*#__PURE__*/
React.createElement("ul", { className: "options" }, /*#__PURE__*/
React.createElement("li", { className: "active" }, "in album"), /*#__PURE__*/
React.createElement("li", null, "coming soon"), /*#__PURE__*/
React.createElement("li", null, "charts"), /*#__PURE__*/
React.createElement("li", null, "music studio"), /*#__PURE__*/
React.createElement("li", null, "playlist"), /*#__PURE__*/
React.createElement("li", null, "more"));



class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(newSearch) {
    this.props.updateSearch(newSearch);
  }

  render() {
    // console.log(this.props);
    const { search } = this.props;
    return /*#__PURE__*/(
      React.createElement("div", { id: "forms" }, /*#__PURE__*/

      React.createElement("form", { id: "range-form" }, /*#__PURE__*/
      React.createElement("p", null, "Tripple T studio"), /*#__PURE__*/
      React.createElement("div", { className: "group" }, /*#__PURE__*/
      React.createElement("input", { id: "range",
        type: "range",
        min: "6.0",
        max: "8.3",
        step: "0.1",
        value: "6" }), /*#__PURE__*/

      React.createElement("p", { id: "results" }, "10"))), /*#__PURE__*/



      React.createElement("div", { id: "search-input" }, /*#__PURE__*/
      React.createElement("input", { id: "search",
        type: "search",
        results: "5"
        // placeholder="Search Movies..."
        , value: search,
        onChange: this.updateSearch }), /*#__PURE__*/

      React.createElement("i", { className: "fa fa-search" }))));



  }}


class Movie extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "openModal",





    () => {
      this.setState({ showModal: true });
    });_defineProperty(this, "closeModal",

    () => {
      this.setState({ showModal: false });
    });this.state = { showModal: false };}

  render() {
    const { showModal } = this.state;
    const { movie } = this.props;

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("figure", { onClick: this.openModal }, /*#__PURE__*/
      React.createElement("img", { src: movie.poster }), /*#__PURE__*/
      React.createElement("figcaption", null, /*#__PURE__*/
      React.createElement("h5", null, text_truncate(movie.title, 26)), /*#__PURE__*/
      React.createElement("p", null, movie.genre.join(', ')), /*#__PURE__*/
      React.createElement("div", { className: "rating" }, /*#__PURE__*/
      React.createElement("i", { className: "fa fa-heart" }), /*#__PURE__*/
      React.createElement("h4", null, movie.rating)))), /*#__PURE__*/




      React.createElement(Modal, { showModal: showModal, closeModal: this.closeModal, movie: movie })));



  }}


const Modal = ({ showModal, closeModal, movie }) => /*#__PURE__*/
React.createElement(ReactModal, {
  className: "modal",
  isOpen: showModal,
  onRequestClose: closeModal,
  shouldCloseOnOverlayClick: true,
  style: customStyles }, /*#__PURE__*/

React.createElement("p", { onClick: closeModal, className: "close-modal" }, "X"), /*#__PURE__*/
React.createElement("img", { src: movie.poster, alt: movie.title }), /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement("div", { className: "modal-movie-title" }, /*#__PURE__*/
React.createElement("h1", null, movie.title), /*#__PURE__*/
React.createElement("div", { className: "modal-genre" }, /*#__PURE__*/
React.createElement("p", { className: "genre" }, movie.genre.join(', ')), /*#__PURE__*/
React.createElement("span", { className: "rated" }, movie.rated), /*#__PURE__*/
React.createElement("span", { className: "duration" }, movie.duration)), /*#__PURE__*/

React.createElement("div", { className: "movie-numbers" }, /*#__PURE__*/
React.createElement("div", { className: "modal-rating" }, /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement("i", { className: "fa fa-heart" }), /*#__PURE__*/
React.createElement("h4", null, movie.rating)), /*#__PURE__*/

React.createElement("p", null, "Rating")), /*#__PURE__*/


React.createElement("div", { className: "score" }, /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement("i", { className: movie.score < 70 ? 'fa fa-thumbs-down' : 'fa fa-thumbs-up' }), /*#__PURE__*/
React.createElement("h4", null, movie.score)), /*#__PURE__*/

React.createElement("p", null, "Score")), /*#__PURE__*/


React.createElement("div", { className: "awards" }, /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement("i", { className: "fa fa-trophy" }), /*#__PURE__*/
React.createElement("h4", null, movie.awards)), /*#__PURE__*/

React.createElement("p", null, "Awards")))), /*#__PURE__*/




React.createElement("p", { className: "movie-description" },
movie.description), /*#__PURE__*/

React.createElement("a", { href: "#" }, "full movie profile"), /*#__PURE__*/
React.createElement("div", { className: "modal-buttons" }, /*#__PURE__*/
React.createElement("button", null, "play", /*#__PURE__*/React.createElement("i", { className: "fa fa-caret-right" })), /*#__PURE__*/
React.createElement("button", null, "to playlist ", /*#__PURE__*/React.createElement("i", { className: "fa fa-music" })))));





class Movies extends React.Component {
  render() {
    // console.log(this.props);
    const { movies, search } = this.props;
    let filterMovies = movies.
    filter(movie => movie.title.toLowerCase().
    includes(search.toLowerCase()));
    return /*#__PURE__*/(
      React.createElement("section", { id: "movies" },

      filterMovies.map(movie => /*#__PURE__*/React.createElement(Movie, { movie: movie }))));



  }}


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
    this.state = {
      movies: movies,
      search: '' };

  }
  updateSearch(e) {
    e.preventDefault();
    this.setState({
      search: e.target.value.substr(0, 26) });

  }
  render() {
    const { movies, search } = this.state;
    return /*#__PURE__*/(
      React.createElement("main", null, /*#__PURE__*/
      React.createElement(Tabs, null), /*#__PURE__*/
      React.createElement(Forms, { search: search, updateSearch: this.updateSearch }), /*#__PURE__*/
      React.createElement(Movies, { movies: movies, search: search })));


  }}


const LoadingIcon = () => /*#__PURE__*/
React.createElement("div", { className: "loading" }, /*#__PURE__*/
React.createElement("i", { className: "fa fa-spinner fa-spin" }));



const Footer = () => /*#__PURE__*/
React.createElement("footer", null, /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement("h3", null, "Tripple T"), /*#__PURE__*/

React.createElement("div", { className: "social-links" }, /*#__PURE__*/
React.createElement("i", { className: "fa fa-twitter social-link" }), /*#__PURE__*/
React.createElement("i", { className: "fa fa-facebook social-link" }), /*#__PURE__*/
React.createElement("i", { className: "fa fa-instagram social-link" })), /*#__PURE__*/


React.createElement("p", null, "2024-2070 Tripple T, inc")), /*#__PURE__*/

React.createElement("a", { href: "#" }, "show menu"));



class App extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "wrapper" }, /*#__PURE__*/
      React.createElement(Nav, null), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(Main, null), /*#__PURE__*/
      React.createElement(LoadingIcon, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }}


const app = document.getElementById('app');
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), app);