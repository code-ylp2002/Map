import "./css/Home.css";
import "./css/Slider.css";
import Map from "./map";
import { ChangeEvent, useEffect, useState } from "react";
import MMenu from "./menu";
import Papa from "papaparse";
import { Button, Drawer, Space, Input } from "antd";
import Dashboard from "./dashboard";
import {ReactComponent as UIcon} from "./icon/login.svg";
import {Link} from "react-router-dom";

export interface IData {
  longitude: string;
  latitude: string;
  info: string;
}
// 判断是否登录， 若无登录则跳转到登录页面
const isLogin = localStorage.getItem('isLogin');
if(isLogin === "false" || isLogin === null) {
}

function Home() {
  useEffect(() => {
    const stylesheet = document.createElement("link");
    stylesheet.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
    stylesheet.rel = "stylesheet";
    document.head.appendChild(stylesheet);
    return () => {
      document.head.removeChild(stylesheet);
    };
  }, []);
  const [open, setOpen] = useState(false);
  const [, setOpen1] = useState(false);
  const [subWindow, setSubWindow] = useState(1);
  const onClose = () => {
    setOpen(false);
  };
  const [data, setData] = useState<IData[]>();
  const handleFileChange = (event: ChangeEvent) => {
    const file = (event.target as HTMLInputElement).files;

    let x;
    // csv 解析
    if (file !== null) {
      x = file[0];
      Papa.parse(x, {
        header: true,
        complete: (results: Papa.ParseResult<unknown>) => {
          setData(results.data as IData[]);
        },
      });
    }
    console.log(data);
  };
  return (
    <div className="container">
      <div className="top-container">
        <div className="text-2xl p-5 width-auto">
          <i> 自然资源一张图 </i>
        </div>
      </div>
      <div className="main-container">
        <div className="slider">
          <MMenu func={setOpen} func2={setOpen1} func3={setSubWindow} type={"user"}></MMenu>
          <div className="absolute bottom-0 p-2 flex flex-row items-center">
            <UIcon width="40px" height="40px"></UIcon><Link to="/login"><span className="text-black text-xl">用户登录</span></Link>
          </div>
        </div>
        {{
            1: <Map markers={data}></Map>,
            2: <Dashboard/>,
            }[subWindow]
        }
        <Drawer
            id="w1"
            title="添加数据"
            placement={"top"}
            width={500}
            onClose={onClose}
            open={open}
            extra={
              <Space>
                <Button onClick={onClose}>取消</Button>
                <Button type="primary" onClick={onClose}>
                  确认
                </Button>
              </Space>
            }
        >

          <Space direction="vertical">
            <Input type="file" onChange={handleFileChange} addonBefore={"点标记"}></Input>
            <Input type="file" onChange={handleFileChange} addonBefore={"区域标记"}></Input>
          </Space>
        </Drawer>
      </div>
    </div>
  );
}

export default Home;
