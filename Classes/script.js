import { Student } from "./student.js";

let student1 = new Student("1904995720019", "Pera", "Peric", [10, 7, 9]);
let student2 = new Student("0202995725034", "Mika", "Mikic", [10, 9, 8]);
let student3 = new Student("1206962720019", "Laza", "Lazic", [7, 7, 7, 9]);

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

let najmanjaOcena = arrStudent => {
    let min = arrStudent[0].nizOcena[0];
    arrStudent.forEach(student => {
        student.nizOcena.forEach(ocena => {
            if (ocena < min) {
                min = ocena;
            }
        });
    });
    return min;
}

let najcescaOcena = arrStudent => {
    let br6 = 0;
    let br7 = 0;
    let br8 = 0;
    let br9 = 0;
    let br10 = 0;
    arrStudent.forEach(student => {
        student.nizOcena.forEach(ocena => {
            switch (ocena) {
                case 6:
                    br6 += 1;
                    break;
                case 7:
                    br7 += 1;
                    break;
                case 8:
                    br8 += 1;
                    break;
                case 9:
                    br9 += 1;
                    break;
                case 10:
                    br10 += 1;
            }
        });
    });
    let nizUkupno = [br6, br7, br8, br9, br10];
    let max = Math.max(...nizUkupno);
    return nizUkupno.indexOf(max) + 6;
}

let rodjeniGodine = (arrStudent, godina) => {
    arrStudent.forEach(student => {
        if (godina == "1" + student.jmbg.slice(4, 7)) {
            console.log(student.ime, student.prezime);
        }
    });
}
