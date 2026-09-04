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

export interface MonthData {
    month: number,
    courses:Array<{id: number,name: string, days:number[]}>,
}

export function monthSelect(data:Array<Doctor>):Array<MonthData> {
    const monthMap = new Map<number, MonthData>();

    data.forEach(doctor => {
        doctor.courses.forEach(course => {
            course.branches.forEach(branch => {
                const monthKey = branch.month;
                if (!monthMap.has(monthKey)) {
                    monthMap.set(monthKey, { month: monthKey, courses: [] });
                }
                const monthData = monthMap.get(monthKey)!;
                const existingCourse = monthData.courses.find(c => c.id === course.id);
                if (existingCourse) {
                    existingCourse.days = [...new Set([...existingCourse.days, ...branch.days])];
                } else {
                    monthData.courses.push({ id: course.id, name: course.name, days: branch.days });
                }
            });
        });
    });

    return Array.from(monthMap.values()).sort((a, b) => a.month - b.month);
}