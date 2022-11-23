
import Head_Nav from './head_nav.js';
import Nav from './nav.js';
import Item from './items.js';

export default function Head(){
	let SiteURL =Item({name:"site_url"}).props.children;
	return(
	<>
	<Head_Nav />
	<header>
	<div className="container">
	  <div className="row">
		  <div className="col-12 col-sm-1">
		   <a href={SiteURL} target="_blank"><Item name="logo" /> </a>
		
		</div>
		  <div className="col-12 col-sm-2">
		     <a href={SiteURL} target="_blank" ><Item name="site_name_head" /></a>
		</div>
		  <div className="col-12 col-sm-9"><Nav /></div>
		</div>	
		
	</div>
		
	</header>
	</>
	);
}