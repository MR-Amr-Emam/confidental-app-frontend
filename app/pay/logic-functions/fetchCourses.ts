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

export interface CourseData {
    id: number,
    name: string,
    cost: number,
    advanced: boolean,
    doctors:Array<{id: number,name: string,}>,
    branches: Array<Branch>,
}

export function courseSelect(data:Array<Doctor>):Array<CourseData> {
    const coursesMap = new Map<number, CourseData>();
    
    data.forEach(doctor => {
        doctor.courses.forEach(course => {
            if (!coursesMap.has(course.id)) {
                coursesMap.set(course.id, {
                    id: course.id,
                    name: course.name,
                    cost: course.cost,
                    advanced: course.advanced,
                    doctors: [],
                    branches: course.branches,
                });
            }
            
            const courseData = coursesMap.get(course.id)!;
            courseData.doctors.push({ id: doctor.id, name: doctor.name });
        });
    });
    
    return Array.from(coursesMap.values());
}