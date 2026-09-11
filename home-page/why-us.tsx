export default function WhyUs(){
    const lista = [1,2,3];
    return(
        <div className="container-fluid p-0 bg-primary row m-0">
            <div className="col-md order-md-2 p-0">
                <img src="/dentist-image.jpg" className="object-fit-cover w-100 h-100" />
            </div>
            <div className="col-md order-md-1">
                <div className="p-5 d-flex flex-column align-items-center justify-content-center h-100">
                    <p className="fs-xl text-light fw-bold">Why our courses</p>
                    <p className="fs-6 text-light fw-semibold">
                        The course center is an educational and training institution that provides 
                        students and learners with high-quality courses designed to develop their 
                        academic, technical, and professional skills. It offers a variety of programs 
                        taught by experienced instructors using practical and interactive learning methods.
                    </p>
                </div>
            </div>
        </div>
    )
}

function WhyUsCard(){
    return(
        <div className="d-flex my-3 py-3 align-items-start">
            <div className="rounded bg-primary text-light mx-2 fs-3 fw-bold p-2 w-100
            d-flex align-items-center justify-content-center">
                <p>main title here</p>
            </div>
            <div className="mx-2 fs-5 fw-semibold">
            </div>
        </div>
    )
}