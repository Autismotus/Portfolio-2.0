import './About.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>About me</h1>
        <p>
                    My name is Isak Thorström and I am a recent graduate
                    (May 2023) Frontend developer.
                    During the education, we have learned everything from HTML, CSS and JavaScript, to UX/UI.
                    As well as a small insight into Back-end with MySql.
                    <br/><br/><hr/><br/>
                    We have also learned alot about JavaScript framworks, mainly working with React but also Vue. <br />
                    As part of our education program we had a LIA period/Internship which lasted for 4,5 months.<br/><br/> During this time ive learned alot about working as a developer in a work environment as well as learning new skills such as Angular and a bit of Typescript.
                    I was also in charge of designing and create 2 Wordpress websites during this time.
                    <br/><br/><hr/><br/>
                    After my education i was able go get a summer at the same company where i was a part of bigger project, implementing different inputs in the frontend parts of these projects.

                </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About