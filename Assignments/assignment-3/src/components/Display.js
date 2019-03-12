import React from 'react'
const Display = (props) => {
    const { displayInfos } = props
    console.log(props)
    const displayList = displayInfos.map(info => {
        return (
            <div className='display-card' key={info.id}>
                <p>name: {info.name}</p>
                <p>birthday: {info.birth}</p>
                <p>about: {info.about}</p>
            </div>
        )
    })
    return (
        <div>
            {displayList}
        </div>
    )
}
export default Display
