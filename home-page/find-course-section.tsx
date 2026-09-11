import DropDown from "@/navbar/drop-down";

export default function FindCourseSection(){
    return (
        <div className="container mb-5">
            <div className="d-flex flex-column align-items-center">
                <p className="fs-xll fw-bold mb-3">
                    find your course
                    <span className="text-primary"> NOW!!</span>
                </p>
                <div className="d-flex align-items-center justify-content-between flex-column flex-md-row">
                    <div className="d-flex align-items-center flex-wrap
                    justify-content-center">
                        <DropDown title="select Doctor">
                            <li>Amr Emam</li>
                            <li>ziad Elsayed</li>
                            <li>Omar Abdo</li>
                        </DropDown>
                        <DropDown title="select Branch">
                            <li>Amr Emam</li>
                            <li>ziad Elsayed</li>
                            <li>Omar Abdo</li>
                        </DropDown>
                        <DropDown title="select Course">
                            <li>Amr Emam</li>
                            <li>ziad Elsayed</li>
                            <li>Omar Abdo</li>
                        </DropDown>
                    </div>
                    <button className="btn btn-dark fs-6 fw-semibold mx-md-4">search</button>
                </div>
            </div>
        </div>
    )
}