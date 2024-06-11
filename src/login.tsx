import React, {useState} from "react";
import {User} from "./util/type";
import {Link} from "react-router-dom";
import {login} from "./util/api";
import "./css/login.css"
import {useNavigate} from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>(
        {
            name: "",
            password: "",
            sex: "",
            age: 0,
            email: "",
        }
    );
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value
            }
        )
    }
    function submit(user: User,userType:string){
        let status = 0;
        login(user).then((res)=>{
            status = res.status;
        })
        if(status === 200){
            console.log("登录成功")
            navigate("/",{state: {userType: "user"}})
        }
    }
    return(
        <div className="login-container">
            <div className="login-form">
                <h1>登录</h1>
                <div className="login-line">
                    <input
                        type="text"
                        placeholder="输入用户名"
                        name="name"
                        value={user.name}
                        onChange={handleChange}/>
                </div>
                <div className="login-line">
                    <input
                        type="password"
                        placeholder="输入密码"
                        name={"password"}
                        value={user.password}
                        onChange={handleChange}/>
                </div>
                <div className="btn-line">
                    <button onClick={() => {
                        submit(user, "user")
                    }}>用户登录
                    </button>
                    <button onClick={() => {
                        submit(user, "user")
                    }}>管理员登录
                    </button>
                </div>
                <div className="lst-line">
                    <p> 新用户？ <span><Link className="text-blue-400" to="/register">去注册</Link></span></p>
                </div>
            </div>
        </div>
    )
}