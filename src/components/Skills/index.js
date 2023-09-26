import './skills.scss'
import image1 from '../../assets/img/html.svg'
import image2 from '../../assets/img/css.svg'
import image3 from '../../assets/img/javascript.svg'
import image4 from '../../assets/img/react.svg'
import image5 from '../../assets/img/angular-icon.svg'
import image6 from '../../assets/img/wordpress-icon-alt.svg'


const Skills = () => {
    return (
        <div className='inner'>
            <div className='header'>
                <h1>Skills</h1>
                </div>
            <div className="skill-container">
                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                        <img src={image6} alt="text" className="skill-icon"/>
                        </div>
                        <h3 className="text-below">Wordpress</h3>
                    </div>
                   
                </div>

                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                        <img src={image1} alt="text" className="skill-icon"/>
                        </div>
                        <h3 className="text-below">HTML</h3>
                    </div>
                   
                </div>

                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                        <img src={image2} alt="text" className="skill-icon"/>
                        </div>
                        <h3 className="text-below">CSS</h3>
                    </div>
                   
                </div>

                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                        <img src={image3} alt="text" className="skill-icon"/>
                        </div>
                        <h3 className="text-below">Javascript</h3>
                    </div>
                   
                </div>

                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                        <img src={image4} alt="text" className="skill-icon"/>
                        </div>
                        <h3 className="text-below">React</h3>
                    </div>
                   
                </div>

                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                        <img src={image5} alt="text" className="skill-icon"/>
                        </div>
                        <h3 className="text-below">Angular</h3>
                    </div>
                    
                </div>
            </div>
            </div>
        
    )
}

export default Skills;