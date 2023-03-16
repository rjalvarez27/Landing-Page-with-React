import React from "react";

const Card = ({name,posicion,description}) => {
    
    return (
        
        <div className=" col-12 col-md-4 col-lg-3">
            <div className="card m-3 ">
                <img className="card-img-top " src="https://picsum.photos/200" alt="" />
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text text-center">{posicion}</p>
                    <div className="card-footer bg-light d-flex justify-content-center align-items-center">
                        <p href="#" className="btn btn-primary text-center"><strong>{description}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;