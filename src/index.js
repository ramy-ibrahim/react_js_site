import React from 'react';
import ReactDOM from 'react-dom/client';

import './theme/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import './fontawesome-free-6.2.0-web/css/all.min.css';

import Head from './theme/header.js';
import Footer from './theme/footer.js';
import Container from './theme/container.js';
import Page from './theme/pages.js';

import Events from './theme/events.js';
import Conditional, {IF_Condition,Ternary_Operator, Ternary_Operator2,Ternary_Operator3,Logical_and_Operator1,Logical_and_Operator2} from './theme/conditional.js';

import {SimpleExample,GetStudents,StudentById,StudentInfoForm} from './theme/list.js';


import reportWebVitals from './reportWebVitals';
import {BrowserRouter , Link} from 'react-router-dom';
import SitePages from './theme/routes.js';





const root = ReactDOM.createRoot(document.getElementById('root'));
//full_width="true" 
//<Page name="events" /> <SitePages />
root.render(
   <>
	<BrowserRouter>
	<Head />
	
	<Container  full_width="true"  content={<SitePages />} />
	
	<Footer />
	</BrowserRouter>
   </>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
