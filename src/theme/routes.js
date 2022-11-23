import {BrowserRouter , Route, Link, Routes} from 'react-router-dom';
import Page from './pages.js';




export default function SitePages(){
	return(
	<Routes>
	      <Route path="/" element={<Page name="home" />} />
          <Route path="/about" element={<Page name="about" />} />
          
	      <Route path="/products" element={<Page name="products" />} />
		  <Route path="/examples" element={<Page name="examples" />} />
		
		 <Route path="/examples/conditional" element={<Page name="conditional" />} />
		<Route path="/examples/lists" element={<Page name="lists" />} />
		<Route path="/examples/events" element={<Page name="events" />} />
		<Route path="/examples/states" element={<Page name="states" />} />
		<Route path="/examples/effect" element={<Page name="effect" />} />
		
		  <Route path="*" element={<h3>The page not found!</h3>} />
     </Routes>
	
	);
}