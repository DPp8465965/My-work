import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "../../style3.less"
import axios from "axios"
export default class view extends Component {
    state = {
        arr: []
    }
    componentDidMount() {
        axios.get("/data.json").then(res => {
            let { id } = this.props.match.params
            let am = res.data.goods
            am.map((v, i) => {
                if (v.id == id) {
                    this.setState({
                        arr: v.child
                    })
                }
            })
        })
    }
    onscrolll=(e)=>{
        if(e.target.scrollTop>100){
            this.refs.headers.style.background="#ccc"
            this.refs.imp.style.background="#eee"
        }else{
            this.refs.headers.style.background="none"
            this.refs.imp.style.background="white"
        }
    }
   
    render() {
        let { arr } = this.state
        return (
            <div className="foods">
                <header ref='headers'>
                    <p><Link to="/home"><i className="fa fa-angle-left"></i></Link></p>
                    <div className="head_d"><input type="text" placeholder="输入商家名、品类或商圈"  ref="imp"/></div>
                    <p><i className="fa fa-user"></i></p>
                </header>
                <section  onScroll={(e)=>{this.onscrolll(e)}}>
                    <div className="top">
                        <img src="/img/8.png" alt="" />

                    </div>
                    <div className="navs">
                        <dl>
                            <dt><img src="/imgs/1.png" alt="" /></dt>
                            <dd>火锅</dd>
                        </dl>
                        <dl>
                            <dt><img src="/imgs/2.png" alt="" /></dt>
                            <dd>甜点饮品</dd>
                        </dl>
                        <dl>
                            <dt><img src="/imgs/3.png" alt="" /></dt>
                            <dd>自助餐</dd>
                        </dl>
                        <dl>
                            <dt><img src="/imgs/4.png" alt="" /></dt>
                            <dd>小吃快餐</dd>
                        </dl>
                        <dl>
                            <dt><img src="/imgs/5.png" alt="" /></dt>
                            <dd>西餐</dd>
                        </dl>

                        <dl>
                            <dt><img src="/imgs/6.png" alt="" /></dt>
                            <dd>烧烤烤肉</dd>
                        </dl>
                        <dl>
                            <dt><img src="/imgs/7.png" alt="" /></dt>
                            <dd>香锅烤鱼</dd>
                        </dl>
                        <dl>
                            <dt><img src="/imgs/8.png" alt="" /></dt>
                            <dd>海鲜</dd>
                        </dl>
                    </div>

                    <div className="main">
                        <ul>
                            <li>全部类目</li>
                            <li>附近商家</li>
                            <li>智能排序</li>
                            <li>筛选</li>
                        </ul>
                        <div className="shows">
                            {
                                arr.map((v, i) => {
                                    return (
                                        <div className="goods" key={i}>
                                            <dl>
                                                <dt><img src={v.img} alt="" /></dt>
                                                <dd>
                                                    <p>{v.name}</p>
                                                    <h1>￥{v.price}/人 <span>{v.address}{v.km}km</span></h1>
                                                    <h2>{v.style}  {
                                                        v.people!=[]?v.people.map((vi,it)=>{
                                                            return(
                                                                <span key={it}>{vi}</span>
                                                            )
                                                        }):[]

                                                    }</h2>
                                                    <h3>{v.song}</h3>
                                                </dd>
                                            </dl>
                                            <h6><span>新客减{v.del}</span><p>{
                                                v.can!=[]?v.can.map((vn,im)=>{
                                                    return (
                                                        <b key={im}>{vn}</b>
                                                    )
                                                }):[]

                                            }</p></h6>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>

                </section>
            </div>
        )
    }
}