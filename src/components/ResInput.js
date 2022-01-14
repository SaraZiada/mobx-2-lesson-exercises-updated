import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'


class ResInput extends Component {
    inputHandler = (e) => {
        this.props.GeneralStore.handleInput(e.target.name, e.target.value)
    }
    render () {
        return (
            <div className='inputs'>
                <input onChange = {this.inputHandler}
                        name = "name"
                        placeholder = "Name"/>
                <input onChange = {this.inputHandler}
                        name = "numPeople"
                        type = "number"
                        placeholder = "Number of people"/>
            </div>
        )
    }
}

export default inject("GeneralStore")(observer(ResInput))