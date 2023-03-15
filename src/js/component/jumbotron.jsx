import React from "react"


const jumbatron = () => {

    return (
        <div>
            <div className="container">
                <div className="card m-2 p-2  border-0">
                    <div className="card-body bg-light ">
                        <h1 className="card-title m-3 pt-5 display-1 "><b>A Warm Welcome!</b></h1>
                        <p className="card-text m-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eaque neque eveniet non labore animi, et quisquam accusamus pariatur magnam dolor autem debitis qui eum itaque tempora eligendi ipsum. Voluptate reprehenderit laudantium tenetur nesciunt dolorum voluptates consequatur. Non, maxime aspernatur.</p>
                        <div className="pb-5">
                            <p className="btn btn-primary m-3 px-4 "><strong>Call to action!</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default jumbatron;