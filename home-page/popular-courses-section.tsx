import CardWithImage from "@/navbar/card-with-image";

export default function PopularCoursesSection(){
    return(
        <div className="container-fluid mt-5">
            <div className="d-flex flex-column align-items-center">
                <p className="fs-xl fw-bold">
                    see the most attended courses
                </p>
                <div className="w-100 d-flex justify-content-arround">
                    <CardWithImage img="/course-image.png" title="Implant Dentistry" text="Concentrates on modern 
                    rotary file systems, predictable root canal disinfection, and complex retreatment 
                    techniques." />

                    <CardWithImage img="/course-image.png" title="Implant Dentistry" text="Concentrates on modern 
                    rotary file systems, predictable root canal disinfection, and complex retreatment 
                    techniques." />

                    <CardWithImage img="/course-image.png" title="Implant Dentistry" text="Concentrates on modern 
                    rotary file systems, predictable root canal disinfection, and complex retreatment 
                    techniques." />
                    

                </div>
            </div>
        </div>
    )
}