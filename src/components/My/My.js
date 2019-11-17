import React, { Component } from 'react'
import Tab from "../Tab/Tab";
import Header from "../Header/Header";
export default class My extends Component {
    constructor(){
        super();
        this.state={
            title:'我的',
            flag:false
        }
    }
    address=()=>{

    }
    render() {
        return (
            <div className="my-box">
                <Header back={<span onClick={()=>{this.props.history.go(-1)}}> &lt;返回 </span>} title={this.state.title} handClick={<span onClick={()=>{}}>设置</span>}></Header>
                <div className="main">
                    <div className="mark">
                        <div className="address-box">
                            <label><input type="text" placeholder="请输入收件人姓名"/></label>
                        </div>
                        <div className="address-box"></div>
                        <div className="address-box"></div>
                    </div>
                </div>
                <Tab></Tab>
            </div>
        )
    }
}
