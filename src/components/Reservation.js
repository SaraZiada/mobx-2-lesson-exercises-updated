import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

class Reservation extends Component {
    completeRes = () =>{
        this.props.RestaurantStore.completeRes(this.props.res.id)
    }

    seatRes = () => {
        this.props.RestaurantStore.seatRes(this.props.res.id)
    }
    
    render() {
        let res = this.props.res
        return (
        <div className='reservation'>
            <div className={res.completed ? "conditional": res.seated ? "seated" : null}>
                <div>
                    name: {res.name}
                </div>
                <div>
                    people: {res.numPeople}
                </div>
                <button onClick={this.completeRes}>Complete Reservation</button>
                <button onClick={this.seatRes}>seat Reservation</button>
            </div>
        </div>
        )
    }
}

export default inject("RestaurantStore")(observer(Reservation))