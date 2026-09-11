import { useQuery } from "@tanstack/react-query";
import { CourseData, courseSelect } from "./logic-functions/fetchCourses";
import { useEffect, useRef } from "react";
import { useCoursesPageContext } from "./logic-functions/page-context";
import Link from "next/link";

export default function CoursesSection() {
    const { data } = useQuery({
        queryKey: ["doctors_query"],
        queryFn: () => fetch("/doctors.json").then((res) => res.json()),
        select: courseSelect,
    });

    const courses = data ?? [];
    const rows = [] as CourseData[][];

    //scrolling thing
    const {courseScroll, setCourseScroll} = useCoursesPageContext();
    const coursesRef = useRef<Record<number, HTMLDivElement|null>>({});

    for (let i = 0; i < courses.length; i += 2) {
        rows.push(courses.slice(i, i + 2));
    }

    useEffect(()=>{
        if(!courseScroll || !coursesRef.current[courseScroll]){
            return;
        }
        coursesRef.current[courseScroll].scrollIntoView({ behavior: 'smooth', block: 'start' });
        //setCourseScroll(0); // change it
    })

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-5 mx-1">
                    <div className="fs-xlll fw-semibold">Courses</div>
                </div>
                <div className="col-5 mx-1"></div>
            </div>

            {rows.map((row, rowIndex) => (
                <div className="row justify-content-center mb-5" key={rowIndex}>
                    {row.map((course, index) => (
                        <div className="col-5 mx-1" key={course.id ?? `${rowIndex}-${index}`}
                        ref={(ele)=>{coursesRef.current[course.id]=ele}}>
                            <CourseCard courseData={course} />
                        </div>
                    ))}
                    {row.length%2?<div className="col-5 mx-1" />:""}
                </div>
            ))}
        </div>
    );
}

function CourseCard({ courseData }: { courseData: CourseData }) {
    const {courseScroll} = useCoursesPageContext();
    const payParams = new URLSearchParams({
        doctorName: courseData.doctors.map((doctor) => doctor.name).join(", "),
        courseName: courseData.name,
        courseId: String(courseData.id),
        branch: courseData.branches?.map((branch) => branch.name).join(", ") ?? "",
        price: String(courseData.cost),
    });

    return (
        <div className={`card rounded p-2 border
        ${courseScroll==courseData.id?"border-highlight shadow-highlight":"shadow"}`}>
            <div className="card-header text-primary fw-bold fs-2">
                {courseData.name}
            </div>
            <div className="card-body">
                {/*<div className="card-text fw-semibold fs-5">{courseData.shortDescription}</div>*/}
                <div className="d-flex align-items-center justify-content-between w-100 mb-3">
                    <div className="card-title fw-semibold fs-3">{courseData.cost} Egy</div>
                    {courseData.advanced?<div className="badge text-light text-bg-danger fw-semibold fs-6">advanced</div>:""}
                </div>
                <div className="text-primary fw-semibold fs-5 d-flex">{courseData.doctors.map((doctor, index)=>
                    <span key={doctor.id} className="me-2">{doctor.name}</span>
                )}</div>
                <div>
                    <div className="fw-semibold fs-5">Branches</div>
                    {courseData.branches?.map((branch, index) =>
                        <div key={index}  className="fw-semibold mx-2">
                            {index + 1}. {branch.name} 
                            <span className="fw-regular fs-6 ms-3">
                                {branch.days.map((day, index)=>
                                <span key={index}>{day} </span>
                                )}
                                {getMonthName(branch.month)}
                            </span>
                        </div>
                    )}
                </div>
                {/*<div className="card-text fw-semibold">{courseData.description}</div>*/}
                <Link href={`/pay?${payParams.toString()}`} className="btn btn-dark">apply</Link>
            </div>
        </div>
    );
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