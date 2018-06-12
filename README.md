## A small example of the use of webpack and react
#### webpack.config.js
```javascript
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  entry: './src/script/index.js',

  output: {
    path: __dirname + '/build',
    //filename: 'index_[hash].js'
    filename: 'index.js'
  },

  devServer: {
    contentBase: './build',
    host: 'localhost',
    port: 9000,
    historyApiFallback: false,
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      }
    ]
  },

  plugins: [
    /*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),*/
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: 'index.html',
      title: 'react小例子'
    }),
    new ExtractTextPlugin({
      //filename: 'index_[hash].css',
      filename: 'index.css',
      disable: false,
      allChunks: true
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:9000'
    })
  ],

  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'react-router': 'window.ReactRouter',
    'redux': 'window.Redux',
    'react-redux': 'window.ReactRedux',
    "jquery": 'window.$'
  }
}
```
#### index.js
```javascript
require('../style/index.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory, hashHistory } from 'react-router'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import Home from './comp/home'
import List from './comp/list'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
        <IndexRedirect to="/list"></IndexRedirect>
        <Route path="list" title="首页" component={List}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
```
#### home.js
```javascript
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
```
#### list.js
```javascript
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
```
#### son.js
```javascript
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



