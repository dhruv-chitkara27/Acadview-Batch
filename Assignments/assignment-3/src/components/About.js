import React, { Component } from 'react'
import AddInfo from './AddInfo'
import Display from './Display'
import './addInfo.css'
class About extends Component {
    state = {
        displayInfos: []
    }
    addInfo = (info) => {
        info.id = Math.floor(Math.random() * 10);
        console.log(info.id);
        let displayInfos = [...this.state.displayInfos, info];
        this.setState({
            displayInfos
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <AddInfo addInfo={this.addInfo} />
                <Display displayInfos={this.state.displayInfos} />
            </div>
        )
    }
}
export default About;
