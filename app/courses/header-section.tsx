import {useCoursesPageContext, CoursesPageContext} from "./logic-functions/page-context"


export default function HeaderSection(){
    const {dataPointer, setDataPointer} = useCoursesPageContext();
    const headerItems = ["courses", "doctors", "months", "branches"];
    return (
    <div className="w-100 d-flex p-2 border-bottom justify-content-center fw-semibold fs-5">
        {headerItems.map((value, index)=>
            <div key={index} className={`${(index+1==dataPointer)?"bg-dark text-light":""}
            rounded p-1 mx-2 pointer`} onClick={()=>{setDataPointer(index+1)}}>{value}</div>
        )}
    </div>
    )
}