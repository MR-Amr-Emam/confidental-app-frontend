export default function CoursesSection(){
    const lista = [1, 2];
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-5 mx-1">
                    <div className="fs-xlll fw-semibold">Courses</div>
                </div>
                <div className="col-5 mx-1"></div>
            </div>
            <div className="row justify-content-center">
                <div className="col-5 mx-1">
                    {
                        lista.map((value, index)=>
                            <CourseCard key={index} />
                        )
                    }
                </div>
                <div className="col-5 mx-1">
                    {
                        lista.map((value, index)=>
                            <CourseCard key={index} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}


function CourseCard(){
    return (
        <div className="card border shadow-sm rounded p-2 mb-5">
            <div className="card-header text-primary fw-bold fs-2">
              Bachelor of Oral and Dental Medicine and Surgery
            </div>
            <div className="card-body">
              <div className="card-text fw-semibold fs-5">to build on the card title and make up the bulk of the card’s content.</div>
              <div className="d-flex align-items-center justify-content-between w-100 mb-3">
                <div className="card-title fw-semibold fs-3">4500 Egy</div>
                <div className="badge text-light text-bg-dark
                fw-semibold fs-6">advanced</div>
              </div>
              <div className="card-text fw-semibold">doctor description and some text like that = Some quick example text to build on the card title and make up the bulk of the card’s content.</div>
              <a href="#" className="btn btn-dark">Go somewhere</a>
            </div>
        </div>
    )
}