import { ReactNode } from "react";

export default function DropDown({children, title}:{children:ReactNode, title:string}){
    return (
        <div className="dropdown">
            <button className="btn btn-primary text-light
            dropdown-toggle fs-5 fw-semibold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {title}
            </button>
            <ul className="dropdown-menu">
              {children}
            </ul>
        </div>
    )
}