import React from "react"
import $ from "jquery"
import Son from "./son"

class list extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
          	<div>      	    	
				<div className = "con">
					<div className = "con_up">
						<Son />
					</div> 
				</div>
      		</div>
    	)
	}
    
    componentDidMount() {		
    	
    }

}

export default list