import { observable, computed, action, makeObservable } from 'mobx'
import { Reservation } from './ReservationStore'


export class RestaurantStore {
    constructor() {
        this.reservations = []
        this.numTables = 10

        makeObservable(this, {
            reservations: observable,
            numTables: observable,
            totalReservations: computed,
            openTables: computed,
            restPopulation: computed,
            completedTables: computed,
            addRes: action,
            seatRes: action,
            completeRes: action,
        })
    }

    get totalReservations() {
        return this.reservations.length
    }
    get openTables() {
        let counter = 0
        this.reservations.forEach(r => r.seated ? counter++ : null)
        return (this.numTables - counter)
    }
    get restPopulation() {
        let counter = 0;
        this.reservations.forEach(r => {
            if (r.seated && !r.completed)
                counter += r.numPeople
            return;
        })
        return counter;

    }
    get completedTables() {
        let counter = 0
        this.reservations.forEach(r => r.completed ? counter++ : null)
        return counter;
    }
    addRes = (name, numPeople) => {
        this.reservations.push(new Reservation(name, numPeople))
    }
    seatRes = (id) => {
        let reservation = this.reservations.find(r => r.id === id)
        reservation.seated = true
    }
    completeRes = (id) => {
        let reservation = this.reservations.find(r => r.id === id)
        reservation.completed = true
        reservation.seated = false
    }
}