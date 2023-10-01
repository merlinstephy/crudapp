// Filename - app.js
// important imports
import React from 'react'
import { BrowserRouter as Router, Route, Routes }
	from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/NavComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className='App'>
        <Navbar/>
			<Router>
				<Routes>
					<Route path='/'
						element={<Home />} />
					<Route path='/create'
						element={<Create />} />
					<Route path='/edit'
						element={<Edit />} />
				</Routes>
			</Router>
			<Footer/>
		</div>
		
	);
}

export default App;
