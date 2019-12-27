import React, { Component } from 'react'
import "../../style2.less"
export default class view extends Component {

    render() {
        return (
            <div className="ho">
                <header>
                    <img src="./img/4.png" alt=""/>
                </header>
                <section>
                <div className="main">
                <form action="">
                <h1><span className="sl">中国+86></span><input type="text"/></h1>
                <h1><input type="text"/> <i><img src="/img/01.png" alt=""/></i><span>获取验证码</span></h1>
                <h2><button >登录</button></h2>
                </form>
                <h3>未注册的手机号验证后自动创建美团用户</h3>
                <h4>账号密码登录</h4>
                </div>
                </section>
                <footer>
                <p>登录及代表您已经同意</p>

                <h5><a href="#">《美团点评用户服务协议》</a> <a href="#"> 《隐私政策》</a></h5>
                </footer>
            </div>
        )
    }
}
