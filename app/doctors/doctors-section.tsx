import { useQuery } from "@tanstack/react-query";
import { ReactNode, useEffect, useState } from "react";


export default function DoctorsSection(){
    const lista = [1, 2];
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-5 mx-1"><div className="fs-xlll fw-semibold">Doctors</div></div>
                <div className="col-5 mx-1"></div>
            </div>
            <div className="row justify-content-center">
                <div className="col-5 mx-1">
                    {
                        lista.map((value, index)=>
                            <DoctorCard key={index} />
                        )
                    }
                </div>
                <div className="col-5 mx-1">
                    {
                        lista.map((value, index)=>
                            <DoctorCard key={index} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}


function DoctorCard(){
    return(
        <div className="card border rounded shadow-sm mb-5">
            <img src="/course-image.png" className="card-img-top w-100" alt="..." />
            <div className="card-body p-1">
              <div className="card-title text-primary fw-bold fs-3">Doctor name</div>
              <div className="card-text fw-semibold mx-2">doctor description and some text like that = Some quick example text to build on the card title and make up the bulk of the card’s content.</div>
              <div className="card-title text-primary fw-bold fs-5">courses</div>
              <div className="card-text fw-semibold mx-2">
                <div>1. Bachelor of Oral and Dental Medicine and Surgery</div>
                <div>2. Bachelor of Oral and Dental Medicine and Surgery</div>
                <div>3. Bachelor of Oral and Dental Medicine and Surgery</div>
              </div>
              <a href="#" className="btn btn-primary text-light fw-semibold">Go somewhere</a>
            </div>
        </div>
    )
}


