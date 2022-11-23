import {Link} from 'react-router-dom';
import Conditional from './conditional.js';
import Lists from './list.js';
import Events from './events.js';
import States from './use_states.js';
import Effect from './use_effect.js'

import Site_Logo from '../images/logo.png';
import RamyImg from '../images/ramy-ibrahim.png';

import Img1 from '../images/prod001.jpg';
import Img2 from '../images/prod002.jpg';
import Img3 from '../images/prod003.jpg';
import Img4 from '../images/prod004.jpg';
import Img5 from '../images/prod005.jpg';
import Img6 from '../images/prod006.png';



export default function Page(arg){
	
	switch(arg.name){
		case 'home':
			
			return(
			   <div className= "home-section1">
				  <div className= "container">
				     <div className="row">
				 		<div className="col-12 col-sm-6"></div>
				 		<div className="col-12 col-sm-6 home-section1-content"> 
							<h2>Welcome to ramy.pro</h2>
							<p> Let's enjoy the code!</p>
				         </div>
				     </div>
				  </div>
				</div>
			);
			
			break;
			
		case 'about':
			
			return(
				
			<>
		  <div style={{width:"100%",padding:"20px",backgroundColor:"#06283D",color:"#fff"}}>
			<div className= "container">
				   <div className="row"><div className="col-12"> <h3>About ramy.pro</h3> </div></div>
				     <div className="row">
				      
				 		<div className="col-12 col-lg-2"><img src={RamyImg}  /></div>
						<div className="col-12 col-lg-4"></div>
				 		<div className="col-12 col-lg-6"> 
							<p>Ramy Ibrahim, web developer, and instructor.
<br/>Graduated form HIGHER INSTITUTE FOR SPECIFIC STUDIES, CAIRO, EGYPT (Bachelor of Management Information System, 2010).
</p>
<p>
<h3>Achievements</h3>
<p>- The founder of "G Top Mix Academy" arabic website for a programming languages.</p>
<p>- Instructor in "G Top Mix" youtube channel for a programming languages educations in arabic.</p>
<p>- The founder of "Applexe LLC" for a web services.</p>
<p>- The founder and a developer of ramy.pro website and project.</p>
</p>
							
				         </div>
				     </div>
			 </div>
		</div>	
			
		  <div style={{width:"100%",padding:"20px",backgroundColor:"#fff",color:"#06283D"}}>
			<div className= "container">
				     <div className="row">
				 		<div className="col-12 col-sm-6">
						
				 		<p style={{fontSize:"25px"}}>ramy.pro is a unique idea to store, edit your files, and use applications online without installation.
The interface is similar to the operating systems, which can be used easily with the multi-windows system that can run many applications and open many files at the same time.</p>
						</div>
				 		<div className="col-12 col-sm-6 home-section1-content"> 
							
							<img src={Site_Logo} style={{width:"200px",margin:"auto"}} />
				         </div>
				     </div>
			 </div>	
		  </div>
			
			</>
			);
			break;
			
		case 'products':
			

			
			return(
				<>
				<h3>My Projects</h3>
				<div className="gallery">
				  <div style={{backgroundImage:"url("+Img1+")"}}></div>
				  <div style={{backgroundImage:"url("+Img2+")"}}></div>
				  <div style={{backgroundImage:"url("+Img3+")"}}></div>
				 <div style={{backgroundImage:"url("+Img4+")"}}></div>
				 <div style={{backgroundImage:"url("+Img5+")"}}></div>
				 <div style={{backgroundImage:"url("+Img6+")"}}></div>
				</div>
				</>
			);
			break;

		case 'examples':
			

			
			return(
				<>
				<h3>Examples</h3>
				<ul style={{fontSize:"20px"}}>
		
		<li><Link to="/examples/conditional">Conditional</Link></li>
		<li><Link to="/examples/lists">Lists</Link></li>
		<li><Link to="/examples/events">Events</Link></li>
	   <li><Link to="/examples/states">Use States</Link></li>
	  <li><Link to="/examples/effect">Use Effect</Link></li>
		
		</ul>
			
				</>
			);
			break;

     case 'conditional':
			

			return( <><h3>Conditional Examples</h3> <Conditional info={{name:"Ramy",age:"35"}} /> </> );
			break;
				   
	   case 'lists':
			

			return( <><h3>Lists Examples</h3> <Lists/> </> );
			break;
				   
	   case 'events':
			

			return( <><h3>Events Examples</h3> <Events/> </> );
			break;
				   
		case 'states':
			

			return( <><h3>use State Examples</h3> <States /> </> );
			break;
				   
		case 'effect':
			

			return( <><h3>use Effect Examples</h3> <Effect /> </> );
			break;
					
			
	}
}