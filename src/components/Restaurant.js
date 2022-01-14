import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import Reservation from './Reservation'

class Restaurant extends Component{
    addRes = () => {
        let name = this.props.GeneralStore.name
        let numPeople = this.props.GeneralStore.numPeople
        this.props.RestaurantStore.addRes(name,numPeople)
    }
    render () {
        return (
            <div>
                <div className='numbersData'>
                    <span>You have {this.props.RestaurantStore.openTables} open tables</span>
                    <div>There is {this.props.RestaurantStore.restPopulation} people in restaurant</div>                
                    <div>{this.props.RestaurantStore.completedTables} Completed Tables in restaurant</div>
                </div>
                <ResInput/>
                <button id="addRes" onClick={this.addRes}>Add Reservation</button>
                <div className = "reservations">
                    {this.props.RestaurantStore.reservations.map(r => <Reservation res={r} key={r.id}/>)}
                </div>
            </div>
        )
    }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant))