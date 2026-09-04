export interface Doctor{
    id: number,
    name: string,
    description: string,
    courses: Array<Course>,
}

export interface Course {
    id: number,
    name: string,
    advanced: boolean,
    cost: number,
    branches: Array<Branch>
}

export interface Branch {
    id: number,
    name: string,
    month: number,
    days: Array<number>,
}

export interface DoctorData {
    id: number,
    name: string,
    description: string,
    courses: Array<{id:number, name:string}>
}

export function doctorSelect(data:Array<Doctor>):Array<DoctorData> {
    return data.map(doctor => ({
        id: doctor.id,
        name: doctor.name,
        description: doctor.description,
        courses: doctor.courses.map(course => ({
            id: course.id,
            name: course.name
        }))
    }));
}


export interface DoctorImages {
    id: number,
    image: string,
}