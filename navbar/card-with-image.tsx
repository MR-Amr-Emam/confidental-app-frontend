export default function CardWithImage({img, title, text}:{img:string, title:string, text:string}){
    return(
        <div className="card flex-fill mx-4">
            <img src={img} className="card-img-top w-100" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-primary fs-4 fw-bold">{title}</h5>
              <p className="card-text fw-semibold">{text}</p>
              {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
            </div>
        </div>
    )
}