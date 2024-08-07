import './style.css'

type Grade = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined;

type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades: Grade[];
}

const students: Student[] = [
    {
        firstName: "Simon",
        lastName: "Staß",
        age: 29,
        grades: [undefined, 3, "A", 2, "C", 2, "F", 1]
    },
    {
        firstName: "Anton",
        lastName: "Meier",
        age: 17,
        grades: [1, 4, 3, undefined, 'A', 'B', 'C', 2]
    },
    {
        firstName: "Maria",
        lastName: "Schmidt",
        age: 18,
        grades: [5, 2, 'A', undefined, 'B', 'C', 3, 1]
    },
    {
        firstName: "John",
        lastName: "Doe",
        age: 20,
        grades: [3, 4, 5, 6, undefined, 'A', 'B']
    }
]

function outputStudent(student: Student): void {
    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    console.log("==============================");
    const gradesOutput = student.grades.map(grade => grade === undefined ? "*" : grade).join(",");
    console.log(`Grades: ${gradesOutput}`);
}

function outputAllStudents(students: Student[]): void {
    students.forEach(student => {
        outputStudent(student);
        console.log("\n");
    });
}

outputAllStudents(students)