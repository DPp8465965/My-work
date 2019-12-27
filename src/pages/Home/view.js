import React, { Component } from 'react'
import "../../style1.less"
import axios from "axios"
import {NavLink} from "react-router-dom"

export default class view extends Component {
    state = {
        arr: [],
        arr1: []
      }
      componentDidMount() {
        axios.get("/data.json").then(res => {
          this.setState({
            arr: res.data.goods,
            arr1: res.data.shows
          })
    
        })
      }
     
    render() {
        let { arr, arr1 } = this.state

        return (
            <div className="ham">
            <header>
            <select >
              <option> 北京</option>
            </select>
            <div className="head_d">
              <input type="text" placeholder="请输入..." />
            </div>
            <p>
              <NavLink to="/login"><i className="fa fa-angellist"></i></NavLink>
            </p>
          </header>
  
          <section >
            <div className="Ap">
              <p><img src="./img/1.png" alt="" /></p>
              <div className="Ap_d">
                <span>省钱利器 购物超划算</span>
                <span>吃喝玩乐尽在美团</span>
              </div>
              <h4><img src="./img/2.png" alt="" /></h4>
            </div>
            <div className="goods">
              {
                arr.map((v, i) => {
                  return (
                    <dl key={v.id}>
                    <NavLink to={v.path+v.id}>
                      <dt><img src={v.img} alt="" /></dt>
                      <dd>{v.name}</dd>
                      </NavLink>

                    </dl>
                  )
                })
              }
  
            </div>
  
            <div className="main">
              <h1>猜你喜欢</h1>
              <div className="show">
  
                {
                  arr1.map((v, i) => {
                    return (
                      <dl key={v.id}>
                        <dt><img src={v.img}alt="" /></dt>
                        <dd>
                          <p>{v.name}</p>
                          <p>{v.address}</p>
                          <h2>
                            <span>{v.price}元</span>
                            <b>门市价:{v.del}</b>
                            <i> 已售{v.num}</i>
                          </h2>
                        </dd>
                      </dl>
  
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
