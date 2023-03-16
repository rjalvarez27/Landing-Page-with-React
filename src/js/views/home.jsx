import React from "react";
import NavBar from "../component/NavBar.jsx";
import Jumbatron from "../component/jumbotron.jsx";
import Hero from "../component/Hero.jsx"
import Footer from "../component/Footer.jsx"

//create your first component
const Home = () => {
	return (
		<>
		<NavBar/>
	    <Jumbatron/>
		<Hero/>
		<Footer/>
		</>
	);
};

export default Home;
