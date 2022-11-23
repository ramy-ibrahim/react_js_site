
import Item from './items.js';

export default function Head_Nav(){
	
	return(
	  
	<div className="head_nav_main">
	 <div className="container head_nav">
	    <div className="row">
		  <div className="col-12 col-sm-2"><Item name="social_media"  /> </div>
		<div className="col-12 col-sm-10"><Item name="random_welcome" /> </div>
		  
		</div>	
		
	</div>
	</div>
	);
}