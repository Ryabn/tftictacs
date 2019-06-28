import React, { Component } from 'react';

export class ItemStats extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                {this.props.match.params.item}
            </div>
        )
    }
}

export default ItemStats;
