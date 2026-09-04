import { useQuery } from "@tanstack/react-query";
import { ReactNode, useEffect, useState } from "react";
import { DoctorImages, doctorSelect } from "./logic-functions/fetchDoctors";
import { useCoursesPageContext } from "./logic-functions/page-context";


export default function DoctorsSection(){
    const {data}= useQuery({
        queryKey: ["doctors_query"],
        queryFn: ()=>fetch("http://localhost:3000/doctors.json").then((res)=>res.json()),
        select:doctorSelect,
    })
    
    const {data:doctorImages} = useQuery({
        queryKey: ["doctors_images"],
        queryFn: ()=>fetch("http://localhost:3000/doctors-images.json").then((res)=>res.json()),
    })

    const doctors = data ?? [];
    const rows = [];

    for (let i = 0; i < doctors.length; i += 2) {
        rows.push(doctors.slice(i, i + 2));
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-5 mx-1"><div className="fs-xlll fw-semibold">Doctors</div></div>
                <div className="col-5 mx-1"></div>
            </div>

            {rows.map((rowDoctors, rowIndex) => (
                <div key={`row-${rowIndex}`} className="row justify-content-center">
                    {rowDoctors.map((doctor, colIndex) => (
                        <div key={doctor.id ?? `${rowIndex}-${colIndex}`} className="col-5 mx-1">
                            <DoctorCard
                                name={doctor.name}
                                description={doctor.description}
                                courses={doctor.courses}
                                image = {doctorImages?doctorImages[doctor.id-1].image:""}
                            />
                        </div>
                    ))}

                    {rowDoctors.length === 1 && <div className="col-5 mx-1"></div>}
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
        <div className="card border rounded shadow mb-5">
            <img src={image} className="card-img-top w-100" alt="..." />
            <div className="card-body p-1">
              <div className="card-title text-primary fw-bold fs-3">{name}</div>
              <div className="card-text fw-semibold mx-2">{description}</div>
              <div className="card-title text-primary fw-bold fs-5">courses</div>
              <div className="card-text fw-semibold mx-2">
                {courses.map((course, index) => (
                    <div key={course.id ?? index} className="pointer" onClick={()=>{
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



