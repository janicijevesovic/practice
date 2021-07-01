export class Student {
    constructor(jmbg, ime, prezime, nizOcena) {
        this.jmbg = jmbg;
        this.ime = ime;
        this.prezime = prezime;
        this.nizOcena = nizOcena;
        this.prosecnaOcena = this.prosecnaOcena();
    }

    // Seteri
    set jmbg(jmbg) {
        if (typeof jmbg == "string" && jmbg.length == 13) {
            this._jmbg = jmbg;
        }
        else {
            alert("JMBG is a 13 character string");
        }
    }

    set ime(ime) {
        this._ime = ime;
    }

    set prezime(prezime) {
        this._prezime = prezime;
    }

    set nizOcena(nizOcena) {
        let correctCount = 0;
        nizOcena.forEach(ocena => {
            if (Number.isInteger(ocena) && ocena >= 6 && ocena <= 10) {
                correctCount += 1;
            }
        });
        if (correctCount == nizOcena.length) {
            this._nizOcena = nizOcena;
        }
        else {
            alert("Ocena must be an integer between 6 and 10");
        }
    }

    // Geteri
    get jmbg() {
        return this._jmbg;
    }

    get ime() {
        return this._ime;
    }

    get prezime() {
        return this._prezime;
    }

    get nizOcena() {
        return this._nizOcena;
    }

    // Metode
    prosecnaOcena() {
        let sum = 0;
        this.nizOcena.forEach(ocena => {
            sum += ocena;
        });
        return sum / this.nizOcena.length;
    }

    ispis() {
        console.log(this.jmbg, this.ime, this.prezime, this.nizOcena, this.prosecnaOcena);
    }
}
