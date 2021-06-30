class Student {
    constructor(jmbg, ime, prezime, nizOcena, prosecnaOcena) {
        this.jmbg = jmbg;
        this.ime = ime;
        this.prezime = prezime;
        this.nizOcena = nizOcena;
    }

    // Seteri
    set jmbg(jmbg) {
        if (typeof jmbg == "number" && jmbg.toString().length == 13) {
            this._jmbg = jmbg;
        }
        else {
            alert("JMBG is a 13 character number");
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
}
