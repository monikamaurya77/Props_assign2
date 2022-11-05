import Cards from './Cards';
import logo from '../assets/poster1.png';
import logo2 from '../assets/poster2.png';
import bg from '../assets/bgimg1.png';
import bg2 from '../assets/bgimg2.png';

const Home = _ => {
    return(
        <div className="box">
        <div className="upperCard">
        <Cards img={logo} name="Bright" year="2017,David Ayer" 
        time="117 min" type="Action,Crime,Fantasy" detail="Set in a world where fantasy creatures live side by side with humans.
         A humans cop is forced to work with an Orc to find a weapon everyone is prepared to kill for."
         image={bg}
        />
</div>
<div className="lowerCard">
        <Cards img={logo2} name="Tomb Raider" year="2018,Roar Uthaug" 
        time="125 min" type="Action,Fantasy" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat."
         image={bg2}
        />
        </div>
        </div>
        
    );
}

export default Home;