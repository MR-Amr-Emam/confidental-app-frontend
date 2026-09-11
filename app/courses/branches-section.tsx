import { useQuery } from "@tanstack/react-query";
import { BranchData, branchSelect } from "./logic-functions/fetchBranches";
import { useCoursesPageContext } from "./logic-functions/page-context";

export default function CoursesSection() {
    const { data } = useQuery({
        queryKey: ["doctors_query"],
        queryFn: () => fetch("/doctors.json").then((res) => res.json()),
        select: branchSelect,
    });

    const branches = data ?? [];
    const rows = [] as BranchData[][];

    for (let i = 0; i < branches.length; i += 2) {
        rows.push(branches.slice(i, i + 2));
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-5 mx-1">
                    <div className="fs-xlll fw-semibold">Branches</div>
                </div>
                <div className="col-5 mx-1"></div>
            </div>

            {rows.map((row, rowIndex) => (
                <div className="row justify-content-center mb-md-5" key={rowIndex}>
                    {row.map((course, index) => (
                        <div className="col-md-5 mx-1" key={course.id ?? `${rowIndex}-${index}`}>
                            <BranchCard branchData={course} />
                        </div>
                    ))}
                    {row.length%2?<div className="col-5 mx-1" />:""}
                </div>
            ))}
        </div>
    );
}


function BranchCard({ branchData }: { branchData: BranchData }) {
    const {setDataPointer, setCourseScroll} = useCoursesPageContext();
    return (
        <div className="card border shadow rounded p-2 mx-3 mx-md mb-5 mb-md">
            <div className="card-header text-primary fw-bold fs-2">
                {branchData.name}
            </div>
            <div className="card-body">
                <div className="fw-semibold fs-5">Courses</div>
                {branchData.courses?.map((course, index) =>
                    <div key={index}  className="fw-semibold mx-2 pointer text-highlight-hover mb-2"
                    onClick={()=>{setDataPointer(1); setCourseScroll(course.id)}}>
                        {index + 1}. {course.name} 
                    </div>
                )}
                {/*<div className="card-text fw-semibold">{courseData.description}</div>*/}
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