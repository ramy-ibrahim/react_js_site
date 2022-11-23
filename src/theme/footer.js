
import Item from './items.js';
export default function Footer(){
	let SiteURL =Item({name:"site_url"}).props.children;
	
	
	return(
	<footer>
	  <div className="container">
	  <div className="row">
		  <div className="col-12 col-sm-6">
		  <h4>Links</h4>
		  <p>
		   <Item name="social_media" />
		  </p>
		
		</div>
		
		  <div className="col-12 col-sm-6">
		      &copy; <Item name="year" /> <a href={SiteURL} target="_blank"><Item name="site_name" /></a>
		  </div>
		</div>	
		
	</div>
		
	 </footer>
	);
	
}