import React from "react";
import {ArrowDownOutlined, ArrowUpOutlined, GlobalOutlined} from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import {PieChart}   from "@mui/x-charts/PieChart";
import {LineChart} from "@mui/x-charts";
import "./css/DashBoard.css";
const data = [
    {
        id: 'data-0',
        x1: 329.39,
        x2: 391.29,
        y1: 443.28,
        y2: 153.9,
    },
    {
        id: 'data-1',
        x1: 96.94,
        x2: 139.6,
        y1: 110.5,
        y2: 217.8,
    },
    {
        id: 'data-2',
        x1: 336.35,
        x2: 282.34,
        y1: 175.23,
        y2: 286.32,
    },
    {
        id: 'data-3',
        x1: 159.44,
        x2: 384.85,
        y1: 195.97,
        y2: 325.12,
    },
    {
        id: 'data-4',
        x1: 188.86,
        x2: 182.27,
        y1: 351.77,
        y2: 144.58,
    },
    {
        id: 'data-5',
        x1: 143.86,
        x2: 360.22,
        y1: 43.253,
        y2: 146.51,
    },
    {
        id: 'data-6',
        x1: 202.02,
        x2: 209.5,
        y1: 376.34,
        y2: 309.69,
    },
    {
        id: 'data-7',
        x1: 384.41,
        x2: 258.93,
        y1: 31.514,
        y2: 236.38,
    },
    {
        id: 'data-8',
        x1: 256.76,
        x2: 70.571,
        y1: 231.31,
        y2: 440.72,
    },
    {
        id: 'data-9',
        x1: 143.79,
        x2: 419.02,
        y1: 108.04,
        y2: 20.29,
    },
    {
        id: 'data-10',
        x1: 103.48,
        x2: 15.886,
        y1: 321.77,
        y2: 484.17,
    },
    {
        id: 'data-11',
        x1: 272.39,
        x2: 189.03,
        y1: 120.18,
        y2: 54.962,
    },
    {
        id: 'data-12',
        x1: 23.57,
        x2: 456.4,
        y1: 366.2,
        y2: 418.5,
    },
    {
        id: 'data-13',
        x1: 219.73,
        x2: 235.96,
        y1: 451.45,
        y2: 181.32,
    },
    {
        id: 'data-14',
        x1: 54.99,
        x2: 434.5,
        y1: 294.8,
        y2: 440.9,
    },
    {
        id: 'data-15',
        x1: 134.13,
        x2: 383.8,
        y1: 121.83,
        y2: 273.52,
    },
    {
        id: 'data-16',
        x1: 12.7,
        x2: 270.8,
        y1: 287.7,
        y2: 346.7,
    },
    {
        id: 'data-17',
        x1: 176.51,
        x2: 119.17,
        y1: 134.06,
        y2: 74.528,
    },
    {
        id: 'data-18',
        x1: 65.05,
        x2: 78.93,
        y1: 104.5,
        y2: 150.9,
    },
    {
        id: 'data-19',
        x1: 162.25,
        x2: 63.707,
        y1: 413.07,
        y2: 26.483,
    },
    {
        id: 'data-20',
        x1: 68.88,
        x2: 150.8,
        y1: 74.68,
        y2: 333.2,
    },
    {
        id: 'data-21',
        x1: 95.29,
        x2: 329.1,
        y1: 360.6,
        y2: 422.0,
    },
    {
        id: 'data-22',
        x1: 390.62,
        x2: 10.01,
        y1: 330.72,
        y2: 488.06,
    },
];
const years = [
    new Date(2019, 0, 1),
    new Date(2020, 0, 1),
    new Date(2021, 0, 1),
    new Date(2022, 0, 1),
    new Date(2023, 0, 1),
];

const FranceGDPperCapita = [
    28129, 28294.264, 28619.805, 28336.16, 28907.977,
];

const UKGDPperCapita = [
    26189, 25792.014, 25790.186, 26349.342, 27277.543,
];

const GermanyGDPperCapita = [
    25391, 26769.96, 27385.055, 27250.701, 28140.057,
];
function Dashboard() {
    return (
        <div id="main">
            <div className='sub'>
                <p>构成情况</p>
                <PieChart
                    series={[
                        {
                            data: [
                                {id: 0, value: 40, label: "农用地", color: '#51e114'},
                                {id: 1, value: 25, label: "建筑用地", color: '#f9a927'},
                                {id: 2, value: 15, label: "林地", color: '#388d3c'},
                                {id: 2, value: 10, label: "水域", color: '#3fd1c3'}
                            ],
                            innerRadius: 30,
                            outerRadius: 100,
                            paddingAngle: 5,
                            cornerRadius: 5,
                            startAngle: -90,
                            endAngle: 180,
                            cx: 150,
                            cy: 150,
                        },
                    ]}

                    height={280}
                    width={400}
                />

            </div>
            <div className='sub'>
                <p>变化</p>
                <LineChart
                    xAxis={[
                        {
                            id: 'Years',
                            data: years,
                            scaleType: 'time',
                            valueFormatter: (date) => date.getFullYear().toString(),
                        },
                    ]}
                    series={[
                        {
                            id: '1',
                            label: '林地面积',
                            data: FranceGDPperCapita,
                            stack: 'total',
                            area: true,
                            showMark: false,
                        },
                        {
                            id: '2',
                            label: '建筑用地面积',
                            data: GermanyGDPperCapita,
                            stack: 'total',
                            area: true,
                            showMark: false,
                        },
                        {
                            id: 'United Kingdom',
                            label: '农田面积',
                            data: UKGDPperCapita,
                            stack: 'total',
                            area: true,
                            showMark: false,
                        },
                    ]}
                    width={400}
                    height={280}
                    margin={{ left: 70 }}
                />

            </div>
            <div className='sub'>
                <p>指标</p>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card bordered={false}>
                            <Statistic
                                title="绿化增长率"
                                value={9.8}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card bordered={false}>
                            <Statistic
                                title="沙漠化增长率"
                                value={9.3}
                                precision={2}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<ArrowDownOutlined />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card bordered={false}>
                            <Statistic
                                title="基本农田增长"
                                value={3.5}
                                precision={1}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card bordered={false}>
                            <Statistic
                                title="林木面积减少"
                                value={1.3}
                                precision={1}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<ArrowDownOutlined />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='sub'>
                <p>资源</p>
                <div className="card">
                    <div className='item'><i className='bx bxs-tree-alt'></i></div>
                    <div className='item'>林地</div>
                    <div className='item'>120</div>
                </div>
                <div className="card">
                    <div className='item'><i className='bx bxl-sketch'></i></div>
                    <div className='item'>矿产</div>
                    <div className='item'>23</div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;