export default function StatsticsSection(){
    const statstics = [
        {key:"students", value:50},
        {key:"courses", value:21},
        {key:"years", value:5},
        {key:"teachers", value:17},

    ]
    return(
        <div className="container my-5">
            <div className="d-flex justify-content-around" >
                {statstics.map((statstic:{key:string, value:number}, index:number)=>
                    <Statsctic
                    key={index}
                    title={statstic.key}
                    value={statstic.value}/>
                )}
            </div>
        </div>
    )
}

function Statsctic({title, value}:{title:string, value:number}){
    return(
        <div className="d-flex flex-column align-items-center text-dark">
            <div className="fs-xl fw-bolder">{value}+</div>
            <div className="fs-4 fw-semibold">{title}</div>
        </div>
    )
}