import React, { Component } from 'react'
import Tab from "../Tab/Tab";
import Header from "../Header/Header";

export default class Category extends Component {
    constructor(){
        super();
        this.state={
            title:"分类列表"
        }
    }
    render() {
        return (
            <div className="category">
                <Header back={<span onClick={()=>{this.props.history.go(-1)}}> &lt;返回 </span>} title={this.state.title} handClick={<span>设置</span>}></Header>
                <div className="main"></div>
                <Tab></Tab>
            </div>
        )
    }
}
