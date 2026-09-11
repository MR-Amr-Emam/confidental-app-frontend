export default function DoctorsSection(){
    const lista = [1, 2, 3];
    return (
        <div className="container-fluid d-flex flex-column align-items-center my-5">
            <div className="fs-xlll fw-bold text-dark mb-5">our Doctors</div>
            <div className="w-100 d-flex flex-column flex-md-row">
                {lista.map((item:number, index:number)=>
                    <DoctorCard 
                    key={index}
                    img="/amr_emam_profile_image_white_bg 1.png"
                    title="Dr Ahmed"
                    text="Dr. Ahmed is a talented and dedicated doctor who 
                        combines strong medical knowledge with excellent 
                        communication and problem-solving skills. He is committed to 
                        providing high-quality care to his patients and always takes"
                    reverse={(index)%2} />
                )}
            </div>
        </div>
    )
}



function DoctorCard({img, title, text, reverse}:{img:string, title:string, text:string, reverse:number}){
    return(
        <div className={`flex-fill h-100`}>
          <div className={`d-flex flex-column flex-md-column${reverse?"-reverse":""}`}>
            <div className={`d-flex align-items-center justify-content-center`}>
              <img src={img} className="img-fluid rounded-start w-75"
              alt="..." />
            </div>
            <div className="d-flex justify-content-center">
              <div className="card-body w-75">
                <h5 className="card-title fs-4 text-dark fw-bold">{title}</h5>
                <p className="card-text fs-6 fw-semibold">{text}</p>
                {/*<p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                */}
              </div>
            </div>
          </div>
        </div>
    )
}