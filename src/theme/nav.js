


import {Link} from 'react-router-dom';

export default function Nav(){
		
	return(
	  <nav>
		<ul>
		
		<li><Link to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
		<li><Link to="/about"><i className="fa-solid fa-circle-info"></i> About</Link></li>
		<li><Link to="/products"><i className="fa-solid fa-store"></i> Products</Link></li>
		<li><Link to="/examples"><i className="fa-solid fa-code"></i> Examples</Link></li>
		</ul>
	  </nav>
	);
	
}