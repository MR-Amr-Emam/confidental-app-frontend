"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import CourseInfo from "./course-info";



export default function PayPage(){
    const searchParams = useSearchParams();
    
    const courseId = searchParams.get("course-id") ?? "1";
    const [queryClient] = useState(() => new QueryClient());    
    


    return (
        <QueryClientProvider client={queryClient}>
        <div className="container">
            <div className="row fs-xll fw-semibold mb-4 text-primary mx-3">
                course Registeration
            </div>
            <div className="row">
                <CourseInfo courseId={Number(courseId)} />
            </div>
            
        </div>
        </QueryClientProvider>
    )
}

