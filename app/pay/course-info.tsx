import { useQuery } from "@tanstack/react-query";
import { courseSelect } from "./logic-functions/fetchCourses";
import { useState } from "react";


export default function CourseInfo({courseId}:{courseId:number}){
    const [date, setDate] = useState<Date|null>();
    const formatter = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
      timeStyle: 'short'
    });
    const { data } = useQuery({
        queryKey: ["doctors_query"],
        queryFn: () => fetch("/doctors.json").then((res) => res.json()),
        select: courseSelect,
    });
    const course = data?data[courseId-1]:null;
    return(
        <div className="row mb-md-4 align-items-start">
            <div className="col-md border-start fs-5 mx-2 shadow-sm rounded p-2 shadow mb-4 mb-md mx-4 mx-md">
                <div className="mb-3 fw-semibold">Course info</div>
                <div className="mb-3">
                    <div className="fw-semibold text-primary">Course name</div>
                    <div>{course?course.name:""}</div>
                    <div className="fs-6 fw-bold">{course?.branches[0].days.join("-")} {getMonthName(course?.branches[0].month||0)}</div>
                </div>
                <div className="mb-3">
                    <div className="fw-semibold text-primary">Doctor</div>
                    <div>{course?.doctors[0].name}</div>
                </div>
                <div className="mb-3">
                    <div className="fw-semibold text-primary">Branch</div>
                    <div>{course?.branches[0].name}</div>
                </div>
                <div className="mb-3">
                    <div className="fw-semibold fs-4">{course?.cost} EG</div>
                </div>
                {!date?<div className="mb-3 d-flex justify-content-center">
                    <button className="fw-semibold w-50 btn fs-5
                    btn-info rounded-pill" onClick={()=>{setDate(new Date())}}>Pay now</button>
                </div>
                :<div className="mb-3">
                    <div className="fw-bold w-100">paid at {formatter.format(date)}</div>
                    <div className="d-flex justify-content-center">
                        <img src="/qr_code.png" className="w-50" />
                    </div>
                    <p className="text-center">payment QR code</p>
                </div>}
            </div>


            <div className="col-md border-start fs-5 mx-2 shadow-sm rounded p-2 shadow mb-4 mb-md mx-4 mx-md">
                <div className="mb-3 fw-semibold">User info</div>
                <div className="mb-3">
                    <div className="fw-semibold text-primary">Name</div>
                    <div>Ziad Elsayed Rashad</div>
                </div>
                <div className="mb-3">
                    <div className="fw-semibold text-primary">Phone number</div>
                    <div>011512485</div>
                </div>
                <div className="mb-3">
                    <div className="fw-semibold text-primary">University</div>
                    <div>Assiut university</div>
                </div>
            </div>
        </div>
    )
}




function getMonthName(month: number): string {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return months[month - 1] || "";
}