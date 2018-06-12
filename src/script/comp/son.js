import React from "react"
import $ from "jquery"

class son extends React.Component {
    constructor (props) {
        super(props)
    	this.state = {
			choosed: 1,
			close: 1
        }
    }
    
    choose = (index) => {
    	let n = this.state.choosed
    	n += 1
    	this.setState({
    		choosed: n,
    	})
    	if(this.state.choosed <= 3){    		
    		$(".person").find("div").eq(index).addClass("hover");
    		$(".person").find("div").eq(index).find("img").eq(0).animate({"left": "-180px"})
    		$(".person").find("div").eq(index).find("img").eq(1).animate({"left": "0px"})
    	}else{
    		this.setState({
    			close: 0
    		})
    		return false
    	}
    }
    
    closeTell = () => {
		this.setState({
    		close: 1
    	})
    }

    render() {    	
        return (
          	<div className = "person"> 
				<div onClick = { this.choose.bind(this, 0)}>
					<img src = "imgs/logo.jpg" />
					<img src = "imgs/0.jpg" />
				</div>
				<div onClick = { this.choose.bind(this, 1)}>
					<img src = "imgs/logo.jpg" />
					<img src = "imgs/1.jpg" />
				</div>
				<div onClick = { this.choose.bind(this, 2)}>
					<img src = "imgs/logo.jpg" />
					<img src = "imgs/2.jpg" />
				</div>
				<div onClick = { this.choose.bind(this, 3)}>
					<img src = "imgs/logo.jpg" />
					<img src = "imgs/3.jpg" />
				</div>
				<div onClick = { this.choose.bind(this, 4)}>
					<img src = "imgs/logo.jpg" />
					<img src = "imgs/4.jpg" />
				</div>
				<div onClick = { this.choose.bind(this, 5)}>
					<img src = "imgs/logo.jpg" />
					<img src = "imgs/5.jpg" />
				</div>
				<div onClick = { this.choose.bind(this, 6)}>
					<img src = "imgs/logo.jpg" />
					<img src = "imgs/6.jpg" />
				</div>
				<div onClick = { this.choose.bind(this, 7)}>
					<img src = "imgs/logo.jpg" />
					<img src = "imgs/7.jpg" />
				</div>
				<div onClick = { this.choose.bind(this ,8)}>
					<img src = "imgs/logo.jpg" />
					<img src = "imgs/8.jpg" />
				</div>
				<div onClick = { this.choose.bind(this, 9)}>
					<img src = "imgs/logo.jpg" />
					<img src = "imgs/9.jpg" />
				</div>
				<p className = { this.state.choosed > 3 && this.state.close ==0 ? "tellbg" : "hide" }></p>
				<b className = { this.state.choosed > 3 && this.state.close ==0 ? "tell" : "hide" }>
					对不起! 您今天的可选次数已用完, 明天再来吧……
					<i onClick = {this.closeTell.bind(this)}>×</i>
				</b>
      		</div>
    	)
        
	}
    
    componentDidMount() {		

    }

}

export default son