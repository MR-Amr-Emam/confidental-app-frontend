import { useQuery } from "@tanstack/react-query";
import { ReactNode, useEffect, useState } from "react";
import { DoctorImages, doctorSelect } from "./logic-functions/fetchDoctors";
import { useCoursesPageContext } from "./logic-functions/page-context";
import { Doctor } from "./logic-functions/fetch-months";


export default function DoctorsSection(){
    const {data}= useQuery({
        queryKey: ["doctors_query"],
        queryFn: ()=>fetch("/doctors.json").then((res)=>res.json()),
        select:doctorSelect,
    })
    
    const {data:doctorImages} = useQuery({
        queryKey: ["doctors_images"],
        queryFn: ()=>fetch("/doctors-images.json").then((res)=>res.json()),
    })

    const doctors = data ?? [];
    const doctorPairs = doctors.reduce((acc: any[], doctor, index) => {
        if (index % 2 === 0) {
            acc.push([doctor, doctors[index + 1]]);
        }
        return acc;
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-5 mx-1"><div className="fs-xlll fw-semibold">Doctors</div></div>
                <div className="col-5 mx-1"></div>
            </div>

            {doctorPairs.map((pair, index) => (
                <div className="row justify-content-center" key={`${pair[0].id}-${pair[1]?.id || ''}`}>
                    {pair.map((doctor:Doctor) => (
                        doctor && (
                            <div className="col-md-5 mx-md-1" key={doctor.id}>
                                <DoctorCard
                                    name={doctor.name}
                                    description={doctor.description}
                                    courses={doctor.courses}
                                    image = {doctorImages?doctorImages[doctor.id-1].image:""}
                                />
                            </div>
                        )
                    ))}
                </div>
            ))}
        </div>
    )
}


function DoctorCard(
    {name, description, courses, image}:
    {name:string, description: string, courses:Array<{id:number, name:string}>, image:string}
){
    console.log(image);
    const {setDataPointer, setCourseScroll} = useCoursesPageContext();

    return(
        <div className="card border rounded shadow mb-5 mx-3 mx-md">
            {image?
            <div className="ratio ratio-16x9"><img src={image} className="card-img-top w-100 object-fit-cover"/></div>
            :""}
            <div className="card-body p-1">
              <div className="card-title text-primary fw-bold fs-3">{name}</div>
              <div className="card-text fw-semibold mx-2">{description}</div>
              <div className="card-title text-primary fw-bold fs-5">courses</div>
              <div className="card-text fw-semibold mx-2">
                {courses.map((course, index) => (
                    <div key={course.id ?? index} className="pointer text-highlight-hover mb-2" onClick={()=>{
                        setDataPointer(1);
                        setCourseScroll(course.id);
                    }}>{index + 1}. {course.name}</div>
                ))}
              </div>
              {/*<a href="#" className="btn btn-primary text-light fw-semibold">Go somewhere</a>*/}
            </div>
        </div>
    )
}



