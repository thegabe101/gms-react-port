import './App.css';
import Header from './components/Header';
import image1 from './images/20200604_113716.jpg';

function App() {
  return (
    <div>
      <Header />


      <figure className="banner">
        <img className="banner-img" src={image1} style={{ height: 200 }} />
        {/*trouble situating list. nested incorrectly in figure class and causing issues*/}
        <ul id="ul">
          <li>Developer</li>
          <li>Writer</li>
          <li>Photographer</li>
          <li>Teacher</li>
        </ul>
      </figure>
      <main>
        <section className="aboutme" id="aboutme">
          <h2 id="h2-1"><p className="textbackdrop1">About Me</p></h2>
          {/*these sections are written in a speculative manner. i don't actually have a career in this yet. one can dream*/}
          <div id="bodyparagraph">
            <p>
              I am a web developer from Seattle, Washington, USA. I focus on
              creating simple, elegant websites that are accessible and pleasant
              on the eyes while maintaining maximum utility. Keeping in mind that
              a website is often the first impressionn of a company or any other
              entity in the modern world, I ensure my client makes a good one. My
              passions outside of web development include reading, writing,
              running, and photography. My love for the outdoors often influences
              my work conceptually and aesthetically.
            </p>
          </div>
        </section>
        <section className="projects">
          <div>
            {/*heck of a time figuring out how to backdrop just the text of these headers without destroying the image entirely*/}
            <h2 id="h2-1"><p className="textbackdrop">Work</p></h2>
          </div>
          <div id="bodyparagraph">
            <p>
              Here you will find a number of my projects.<br /><br />
              Click on a thumbnail to view the project in detail.
            </p>
          </div>
          {/*realized late that I needed to make my first project larger than the rest; inline coded style but the result is not pretty. wanted to try it this way anyways just to have some inline style.*/}
          <div className="projectcards" style={{ width: 150, height: 150 }} />
          <div className="projectcards2" />
          <div className="projectcards3" />
          <a href="https://shelf-space.herokuapp.com/" style={{ color: 'white' }}><img src="./assets/images/shelfspace.jpg" style={{ height: 200, width: 200, marginLeft: 20 }} />
            Link to Project 2 (shelfspace)</a>
        </section>
        <section className="photos">
          <h2 id="h2-1"><p className="textbackdrop">Photos</p></h2>
          <div id="bodyparagraph">
            <p>
              I am also a photographer. Following you can find a sample of some of
              my photos. If you are interested in working with me, please refer to
              the contact methods listed below.
            </p>
          </div>
          <div className="photoex">
            {/*add alt text to photos*/}
            <img src="../20170521_133702.jpg" alt="A wedding photoshoot of a bride and groom in Guilin, Guangxi Province, China" />
          </div>
          <div className="photoex">
            <img src="../20200430_090055.jpg" alt="Vantage point facing downtown Seattle from Kerry Park, Lower Queene Anne" />
          </div>
          <div className="photoex">
            <img src="../20200604_113716.jpg" alt="Sharp shale rock outcroppings at Snow Lake, Washington" />
          </div>
          <div className="photoex">
            <img src="../20220531_171553.jpg" alt="Upward-facing vantage point from inside The Vessel, Chelsea, Manhattan, New York City" />
          </div>
        </section>
      </main>
      <footer>
        {/*&nbsp is just a temp trick to get words to situate on one line. this was a flexbox issue*/}
        <h3>Contact&nbsp;Me</h3>
        <p>971&nbsp;-&nbsp;895&nbsp;-&nbsp;0019</p>
        {/*dummy links*/}
        <a href="#"><span id="spang">sow</span><span id="spanm">a3</span><span id="spana">32@</span><span id="spani">gmai</span><span id="spanl">l.com</span></a>
        <a href="#"><span id="span2">GitHub</span></a>
        <a href="#"><span id="span3">Spotify</span></a>
        <a href="#"><span id="span4">LinkedIn</span></a>
      </footer>
    </div>

  );
}

export default App;
