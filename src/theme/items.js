import logo_img from '../images/logo.png';

export default function Item(arg){
	let GetSite = 'ramy.pro';
	let SiteURL = 'https://ramy.pro';
	
	switch(arg.name){
		   
		case 'logo':
			  return(<img id="logo" src={logo_img} />);
			break;
		
		case 'site_name':
			  return(<>{GetSite}</>);
			break;
					 
		case 'site_name_head':
			  return(<div id="site_name">{GetSite}</div>);
			break;
					 
		case 'site_url':
			  return(<>{SiteURL}</>);
			break;
					 
	    case 'social_media':
					
					 
			  return(
					<div className={(arg.style=='dark')? 'social_media_dark':'social_media' } >
				      <a href="https://www.linkedin.com/in/ramy-elkherbawy-471018125" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
					   <a href="https://www.facebook.com/ramy7elganzorey" target="_blank"><i className="fa-brands fa-facebook"></i></a>
					   <a href="#" target="_blank"><i className="fa-brands fa-square-twitter"></i></a>
					   <a href="https://www.instagram.com/ramy_elganzorey/" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
					   <a href="https://www.youtube.com/c/GTopMIx/playlists" target="_blank"><i className="fa-brands fa-youtube"></i></a>
						   
						   
					 </div>
					);
			break;
					 
			
			 case 'random_welcome':
			    let WelcomeList = [
					"Welcome to our App!",
					"It's amazing day, enjoy it!",
					"Hi, you found us for a reason!",
					"Cup of coffe will solve the issue!",
					"If you still here, you'r important for the world!",
					"Take a rest and enjoy it!",
					'"I\'m creating your future!" Today says! '
				];
			  
			  return(
					<div id="date_time" className="random_welcome"><i className="fa-regular fa-face-smile"></i> {WelcomeList[Math.floor(Math.random() * WelcomeList.length )]}</div>
				   
					);
			break;
			
			case 'year':
			  let GetDate = new Date();
			  return(GetDate.getFullYear());
			break;
			
		   
					 
		   }
	
}
		  