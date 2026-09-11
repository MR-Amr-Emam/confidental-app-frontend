"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"

export default function PayPage(){
    // const searchParams = useSearchParams();
     const [date, setDate] = useState<Date|null>();
    // const courseName = searchParams.get("courseName") ?? searchParams.get("course") ?? "";
    // const doctorName = searchParams.get("doctorName") ?? searchParams.get("doctor") ?? "";
    // const branchName = searchParams.get("branchName") ?? searchParams.get("branch") ?? "";
    // const cost = searchParams.get("cost") ?? searchParams.get("price") ?? "";
    const formatter = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
      timeStyle: 'short'
    });


    return (
        <div className="container">
            <div className="row fs-xl fw-semibold mb-4 text-primary">
                course Registeration
            </div>
            <div className="row mb-4 align-items-start">
                <div className="col border-start fs-5 mx-2 shadow-sm rounded p-2">
                    <div className="mb-3 fw-semibold">Course info</div>
                    <div className="mb-3">
                        <div className="fw-semibold">Course name</div>
                        <div>{"courseName"}</div>
                        <div className="fs-6">5-6-7 Apr</div>
                    </div>
                    <div className="mb-3">
                        <div className="fw-semibold">Doctor</div>
                        <div>{"doctorName"}</div>
                    </div>
                    <div className="mb-3">
                        <div className="fw-semibold">Branch</div>
                        <div>{"branchName"}</div>
                    </div>
                    <div className="mb-3">
                        <div className="fw-semibold fs-4">{"cost"} EG</div>
                    </div>
                    {!date?<div className="mb-3 d-flex justify-content-center">
                        <button className="fw-semibold w-50 btn fs-5
                        btn-info rounded-pill" onClick={()=>{setDate(new Date())}}>Pay now</button>
                    </div>
                    :<div className="mb-3">
                        <div className="fw-bold w-100">paid at {formatter.format(date)}</div>
                        <div className="d-flex justify-content-center">
                            <img src="/qr_code.png" className="w-50" />
                        </div>
                        <p className="text-center">payment QR code</p>
                    </div>}

                </div>
                <div className="col border-start fs-5 mx-2 shadow-sm rounded p-2">
                    <div className="mb-3 fw-semibold">User info</div>
                    <div className="mb-3">
                        <div className="fw-semibold">Name</div>
                        <div>Ziad Elsayed Rashad</div>
                    </div>
                    <div className="mb-3">
                        <div className="fw-semibold">Phone number</div>
                        <div>011512485</div>
                    </div>
                    <div className="mb-3">
                        <div className="fw-semibold">University</div>
                        <div>Assiut university</div>
                    </div>
                </div>
            </div>
        </div>
    )
}