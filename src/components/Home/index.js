import './Home.scss';
import { Link } from 'react-router-dom';


const Home = () => {



return (
<div className="container home-page">
    <div className="text-zone">
        <h1>Hi, <br/> I'm
        Isak Thorström
        <br />
        Frontend developer
        </h1>
        <h2>JavaScript / HTML&CSS / Wordpress / <Link to="skills" className="skills-button">and more</Link>.</h2>
        <Link to="contact" className='flat-button'>Contact me</Link>
    </div>
</div>
);


}

export default Home