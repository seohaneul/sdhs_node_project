type Student = Record<string, number | string> 

function getStudentInfo <T extends Student> (student: Student, key: T): number | string {
    return student[key]
}

// const asd = getStudentInfo<number>({ age: 1 } as Student, 13423)