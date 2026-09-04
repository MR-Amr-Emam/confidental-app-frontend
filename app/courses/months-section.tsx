import { useQuery } from "@tanstack/react-query";
import { MonthData, monthSelect } from "./logic-functions/fetch-months";
import { useCoursesPageContext } from "./logic-functions/page-context";

export default function MonthsSection() {
    const { data } = useQuery({
        queryKey: ["doctors_query"],
        queryFn: () => fetch("http://localhost:3000/doctors.json").then((res) => res.json()),
        select: monthSelect,
    });

    const courses = data ?? [];
    const rows = [] as MonthData[][];

    for (let i = 0; i < courses.length; i += 2) {
        rows.push(courses.slice(i, i + 2));
    }

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
                    {row.map((month, index) => (
                        <div className="col-5 mx-1" key={index}>
                            <MonthCard monthData={month} />
                        </div>
                    ))}
                    {row.length%2?<div className="col-5 mx-1" />:""}
                </div>
            ))}
        </div>
    );
}

function MonthCard({ monthData }: { monthData: MonthData }) {
    const {setDataPointer, setCourseScroll} = useCoursesPageContext();
    return (
        <div className="card border shadow rounded p-2">
            <div className="card-header text-primary fw-bold fs-2">
                {getMonthName(monthData.month)}
            </div>
            <div className="card-body">
                <div className="fw-semibold fs-5">Courses</div>
                {monthData.courses?.map((course, index) =>
                    <div key={course.id ?? index}  className="fw-semibold mx-2 pointer"
                    onClick={()=>{
                        setDataPointer(1);
                        setCourseScroll(course.id);
                    }}>
                        {index + 1}. {course.name} 
                        <span className="fw-regular fs-6 ms-3">
                            {course.days.map((day, index)=>
                            <span key={index}>{String(day) + (((course.days.length-1)==index)?" ":"-")}</span>
                            )}
                            day
                        </span>
                    </div>
                )}
                {/*<div className="card-text fw-semibold">{courseData.description}</div>*/}
                <a href="#" className="btn btn-dark">Go somewhere</a>
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