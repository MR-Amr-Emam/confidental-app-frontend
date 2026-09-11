import { ReactNode } from "react";

export default function DropDown({children, title}:{children:ReactNode, title:string}){
    return (
        <div className="dropdown m-1 mx-md-4">
            <button className="btn btn-primary text-light
            dropdown-toggle fs-6 fw-semibold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {title}
            </button>
            <ul className="dropdown-menu">
              {children}
            </ul>
        </div>
    )
}