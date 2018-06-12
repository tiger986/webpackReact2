import React from "react"

class home extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
          	<div>      	    	
				<div className = "head">
					<p>L O L</p>
				</div>
				<div className = "content">
					{this.props.children}
				</div>
				<div className = "foot">
					<p>请抽选属于你的英雄吧!</p>
				</div>
      		</div>
    	)
	}

}

export default home