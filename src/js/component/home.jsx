import React from "react";
import NavBar from "./NavBar.jsx";
import Jumbatron from "./jumbotron.jsx";
import Hero from "./Hero.jsx"
import Footer from "./Footer.jsx"

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
