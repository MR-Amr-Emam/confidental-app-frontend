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

export interface BranchData {
    id: number,
    name: string,
    courses:Array<{id: number,name: string, days:number[]}>,
}

export function branchSelect(data:Array<Doctor>):Array<BranchData> {
    const branchMap = new Map<number, BranchData>();

    data.forEach((doctor) => {
        doctor.courses.forEach((course) => {
            course.branches.forEach((branch) => {
                const existingBranch = branchMap.get(branch.id);

                if (existingBranch) {
                    existingBranch.courses.push({
                        id: course.id,
                        name: course.name,
                        days: branch.days,
                    });
                    return;
                }

                branchMap.set(branch.id, {
                    id: branch.id,
                    name: branch.name,
                    courses: [{
                        id: course.id,
                        name: course.name,
                        days: branch.days,
                    }],
                });
            });
        });
    });

    return Array.from(branchMap.values());
}