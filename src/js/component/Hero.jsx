import React from "react";
import Card from "./Card.jsx";

export const Hero = () => {
    const value = {
        title: "Card Title",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odit amet adipisci expedita, iste quisquam!",
        bardown: "Find Out More!"
    }
    
    return (
        <div className="d-flex justify-content-center">
        <div className="row container ">
          

            <Card
                name={value.title}
                posicion={value.body}
                description={value.bardown}
            />
            <Card
                name={value.title}
                posicion={value.body}
                description={value.bardown}
            />
            <Card
                name={value.title}
                posicion={value.body}
                description={value.bardown}
            />
            <Card
                name={value.title}
                posicion={value.body}
                description={value.bardown}
            />

          
        </div>
        </div>
    );
};

export default Hero;