import React from 'react'
import axios from 'axios'

class Friends extends React.Component {
    state = {
        friends: []
    };

componentDidMount(){
    this.getData();
}

getData = () => {
    axios
    .get('http://localhost:5000')
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

render(){
    return(
        <div>
            The friends will go here!
        </div>
    )
}

}

export default Friends