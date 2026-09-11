"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react"
import {CourseInfo} from "./course-info";


export default function PayPage({params}:{params:any}){
    const [queryClient] = useState(() => new QueryClient());
    const [courseId, setCourseId] = useState(0);
    useEffect(()=>{
        params.then(({id}:{id:number})=>setCourseId(id))
    }, [])
    return (
        <QueryClientProvider client={queryClient}>
        <div className="container">
            <div className="row fs-xll fw-semibold mb-4 text-primary mx-3">
                course Registeration
            </div>
            <div className="row">
                {courseId?<CourseInfo courseId={courseId} />:""}
            </div>
            
        </div>
        </QueryClientProvider>
    )
}

