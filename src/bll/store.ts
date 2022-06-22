import {makeObservable, observable, action} from "mobx"

export type candidateType = {
    id: number
    dateOfBirth: string
    name: string
    surname: string
    fatherName: string
}

class Store {
    candidates: Array<candidateType> = [];
    modalStatus: boolean = false

    constructor() {
        makeObservable(this, {
            candidates: observable,
            removeCandidate: action,
            changeName: action,
            changeSurname: action,
            changeDateOfBirth: action,
            changeFatherName: action,
            addCandidate: action,
            modalStatus: observable,
            changeModalStatus: action,
        })
    }

    removeCandidate(idCandidate: number) {
        const newarr = this.candidates.filter(cand => cand.id !== idCandidate)
        this.candidates = newarr
    }

    changeName(idCandidate: number, newName: string) {
        const newArr = this.candidates.map(cand => {
            if (cand.id === idCandidate) {
                return {...cand, name: newName}
            }
            return cand
        })

        this.candidates = newArr
    }

    changeSurname(idCandidate: number, newSurname: string) {
        const newArr = this.candidates.map(cand => {
            if (cand.id === idCandidate) {
                return {...cand, surname: newSurname}
            }
            return cand
        })
        this.candidates = newArr
    }

    changeFatherName(idCandidate: number, newFatherName: string) {
        const newArr = this.candidates.map(cand => {
            if (cand.id === idCandidate) {
                return {...cand, fatherName: newFatherName}
            }
            return cand
        })
        this.candidates = newArr
    }

    changeDateOfBirth(idCandidate: number, newDate: string) {
        const newArr = this.candidates.map(cand => {
            if (cand.id === idCandidate) {
                return {...cand, dateOfBirth: newDate}
            }
            return cand
        })
        this.candidates = newArr
    }

    addCandidate(id: number, name: string, surname: string, fatherName: string, dateOfBirth: string) {
        const newCand = {
            id: id+4342432,
            dateOfBirth: dateOfBirth,
            name: name,
            surname: surname,
            fatherName: fatherName,
        }
        this.candidates = [...this.candidates, newCand]
    }

    changeModalStatus(status: boolean) {
        this.modalStatus = status
    }

    getCandidates() {
        fetch('https://serverfortt.herokuapp.com/')
            .then(res => res.json())
            .then(data => {
                this.candidates = [...data]
            })
    }

}

export default new Store()