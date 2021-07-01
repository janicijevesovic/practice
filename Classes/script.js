import { Student } from "./student.js";

let student1 = new Student("1904995720019", "Pera", "Peric", [10, 9, 6]);
let student2 = new Student("0202965725034", "Mika", "Mikic", [10, 9, 8]);
let student3 = new Student("1206962720019", "Laza", "Lazic", [7, 7, 7, 6]);

let arrStudent = [student1, student2, student3];

let imePrezime = (arrStudent, ime, prezime) => {
    let counter = 0;
    arrStudent.forEach(student => {
        if (student.ime == ime && student.prezime == prezime) {
            counter += 1;
        }
    });
    return counter;
}

let srednjaOcena = arrStudent => {
    let sum = 0;
    let counter = 0;
    arrStudent.forEach(student => {
        student.nizOcena.forEach(ocena => {
            sum += ocena;
            counter += 1;
        });
    });
    return sum / counter;
}

let osrednji = arrStudent => {
    let average = srednjaOcena(arrStudent);
    let minDiff = Math.abs(arrStudent[0].prosecnaOcena - average);
    let outputStudent = arrStudent[0];
    arrStudent.forEach(student => {
        if (Math.abs(student.prosecnaOcena - average) < minDiff) {
            outputStudent = student;
        }
    });
    outputStudent.ispis();
}

let najmanjaOcenaNajboljeg = arrStudent => {
    let bestStudent = arrStudent[0];
    let bestAvg = arrStudent[0].prosecnaOcena;
    arrStudent.forEach(student => {
        if (student.prosecnaOcena > bestAvg) {
            bestStudent = student;
        }
    });
    let min = bestStudent.nizOcena[0];
    bestStudent.nizOcena.forEach(ocena => {
        if (ocena < min) {
            min = ocena;
        }
    });
    console.log(min);
}
