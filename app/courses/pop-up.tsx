import { useRouter } from "next/navigation";
import { useCoursesPageContext } from "./logic-functions/page-context";
import { useQuery } from "@tanstack/react-query";
import { courseSelect } from "./logic-functions/fetchCourses";

export default function PopUp(){
    const {coursePopUp, setCoursePopUp} = useCoursesPageContext();
    const router = useRouter();
    const { data } = useQuery({
        queryKey: ["doctors_query"],
        queryFn: () => fetch("/doctors.json").then((res) => res.json()),
        select: courseSelect,
    });
    return(
        <div className="position-fixed start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-start">
            <div className="position-fixed start-0 top-0 w-100 h-100 bg-white opacity-50"
            onClick={()=>{setCoursePopUp(0);document.body.style.overflow = "scroll";}} />
            
            <div className="w-75 w-md-50 border rounded p-3 opacity-100 bg-white z-1 mt-5 shadow
            h-75 overflow-y-scroll bg-light-subtle">
                <div className="fs-1 fw-semibold text-primary">{data?data[coursePopUp-1].name:""}</div>
                <div className="fs-6 fw-semibold">{description()}</div>
                <div className="d-flex w-100 justify-content-center">
                    <button className="btn btn-dark w-50 fw-semibold fs-5"
                    onClick={()=>{router.replace(`/pay?course-id=${coursePopUp}`);
                    document.body.style.overflow = "scroll";}}>apply</button>
                </div>
            </div>
        </div>
    )
} 







function description(){
    return `
    Program*
*Comprehensive Implantology Training Program*

A complete clinical program designed to provide a strong foundation in Implant Dentistry, covering all essential modules from diagnosis and treatment planning to surgery, prosthetics, and peri-implant tissue management.

*🔹 Implant Radiology Module With ( 👨‍⚕️ Dr. Mahmoud Sayed )*
Focused on mastering CBCT interpretation and implant planning:

• Introduction to CBCT and its role in modern dentistry
• Principles, advantages, and limitations of CBCT
• CBCT evaluation and interpretation
• Basics of CBCT software navigation
• Implant treatment planning using CBCT

🛠 Hands-on Workshop:
✔️ Practical training on different CBCT software
✔️ Step-by-step implant planning

*🔹 Implant Surgery Module With ( 👨‍⚕️ Dr. Mohamed Noaman & 👨‍⚕️ Dr. Mahmoud Shalash )*
Focused on surgical fundamentals and clinical execution:

• Introduction to Implant Dentistry
• Osseointegration principles
• Macro & micro implant design
• Implant components
• Case selection and diagnosis
• Applied surgical anatomy
• Treatment planning for single and multiple implants
• Prosthetically driven implantology
• Step-by-step surgical protocols
• Conventional vs guided surgery
• Types of surgical guides
• Immediate implant workflow
• Post-operative care
• Prevention and management of complications
• Clinical case discussions

🛠 Hands-on Workshop:
✔️ Implant components
✔️ Drilling protocols

*🔹 Implant Perio Module With ( 👩‍⚕️ Dr. Soulafa Belal )*
Focused on hard and soft tissue management around implants:

Hard Tissue Management
• Indications for grafting
• Types of barrier membranes
• Bone graft materials
• Growth factors in implant dentistry
• Biological principles of bone grafting
• Guided Bone Regeneration (GBR) for ridge augmentation

Soft Tissue Management
• One-stage vs two-stage surgery
• Flap designs and indications
• Second-stage surgical techniques
• Suturing materials and techniques

🛠 Hands-on Workshop (on sheep head):
✔️ Suturing techniques
✔️ Basic flap designs
✔️ Ridge augmentation (bone graft + membrane fixation)

*🔹 Implant Prosthetic Module With ( 👨‍⚕️ Dr. Mustafa Noor )*
Focused on prosthetic workflows from impression to final delivery:

• Introduction to implant prosthetics
• Prosthetic treatment planning
• Prosthetic challenges & 3D implant positioning
• Prosthetically driven implantology
• Loading protocols
• Implant prosthetic components (analog workflow)
• Healing abutments: selection and indications
• Customized healing abutments
• Impression techniques (open tray / closed tray)
• Lab processing & soft tissue models

🎥 Live Demo & Hands-on:
✔️ Implant prosthetic components and accessories
✔️ Custom healing techniques
✔️ Different impression techniques

• Verification jig: indications and technique
• Implant connections (external vs internal)
• Implant abutment solutions
• Custom abutments
• Abutment materials
• Prosthetic materials (ceramics, hybrid ceramics, high-performance polymers)
• Screw-retained vs cement-retained restorations
• Implant-protected occlusion
• Occlusal considerations
• Digital workflow in implant prosthetics

🎥 Live Demo:
✔️ Different abutment solutions
✔️ Screw-retained and cement-retained restorations

⭐️ Ideal for clinicians seeking comprehensive, hands-on training in Implant Dentistry with direct clinical application.
    `
}