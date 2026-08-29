import DoctorsSection from "./doctors-section"
import FindCourseSection from "./find-course-section"
import HeroSection from "./hero-section"
import PopularCoursesSection from "./popular-courses-section"
import StatsticsSection from "./statstic-section"
import WhyUs from "./why-us"


export default function HomePage(){
    return(
        <div className="container-fluid p-0">
            <HeroSection />
            <FindCourseSection />
            <WhyUs />
            <PopularCoursesSection />
            <DoctorsSection />
            <StatsticsSection />
        </div>
    )
}
