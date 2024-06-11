import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import "./css/register.css";
import {User} from "./util/type";
import {register} from "./util/api";
export  default function Register(){
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
    function submit(){
        register(user).then((res) =>{
            if(res.status === 200){
                console.log("注册成功")
                navigate("/login")
            }
        })
    }
    return (
        <div className="login-container">
            <div className="login-form">
                <h1>注册</h1>
                <div className="login-line">
                    <input
                        type="text"
                        placeholder="输入用户名"
                        value={user.name}
                        onChange={handleChange}/>
                </div>
                <div className="gap-3 flex-row items-start w-48">
                    <span className="mr-10">性别</span>
                    <label>
                        <input
                            type="radio"
                            name="sex"
                            value="male"
                            checked={user.sex === "male"}
                            onChange={handleChange}
                        />
                        男
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="sex"
                            value="female"
                            checked={user.sex === "female"}
                            onChange={handleChange}
                        />
                        女
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="sex"
                            value="unknown"
                            checked={user.sex === "unknown"}
                            onChange={handleChange}
                        />
                        其他
                    </label>
                </div>
                <div className="login-line">
                    <input
                        type="text"
                        placeholder="输入邮箱"
                        value={user.email}
                        onChange={handleChange}/>
                </div>
                <div className="login-line">
                    <input
                        type="text"
                        placeholder="输入用户名"
                        value={user.name}
                        onChange={handleChange}/>
                </div>
                <div className="login-line">
                    <input
                        type="password"
                        placeholder="输入密码"
                        value={user.password}
                        onChange={handleChange}/>
                </div>
                <div className="login-line">
                    <input
                        type="password"
                        placeholder="确认密码"
                        value={user.name}
                        onChange={handleChange}/>
                </div>
                <div className="btn-line">
                    <button onClick={submit}>注册
                    </button>
                </div>
            </div>
        </div>
    )
}