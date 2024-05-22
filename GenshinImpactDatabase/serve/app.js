import express from 'express'
import core from 'cors'
import fs from 'fs'
import path from 'path'
const app = express();
const port = 5173; // 设置端口号
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const corsOptions = {
    origin: '*', // 允许指定域名进行跨域访问
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 允许的HTTP请求方法
    allowedHeaders: '*', // 允许的请求头字段
    credentials: false, // 是否允许带上Cookie信息
    optionsSuccessStatus: 200 // 预检请求成功的HTTP状态码
};

app.use(core(corsOptions))

let backTemplate = {
    code: 200,
    info: '操作成功',
    data: {}
}

// 启动服务器
app.listen(port, () => {
    console.log(`已成功启动，端口号为： ${port}`);
});

// 测试内容
app.get('/ysjlq/ceshi', (req, res) => {
    let isExistence = false
    let passWordIsTF = false
    let userData = {
        account: req.query.userName,
        passWord: req.query.userPass,
        sex: "",
        age: "",
        avtar: ""
    }
    let readFileData = JSON.parse(fs.readFileSync(`../public/userInfo.json`, 'utf-8'))
    readFileData['userInfo'].map(item=>{
        if(item.account && item.account === userData['account']) {
            isExistence = true
            if(item['passWord'] === userData['passWord']) {
                passWordIsTF = true
            }
            return
        }
    })
    if(isExistence && passWordIsTF) {
        backTemplate.info = '登录成功'
        res.json(backTemplate)
    } else if(isExistence && !passWordIsTF) {
        backTemplate.code = 500
        backTemplate.info = '密码错误'
        res.json(backTemplate)
    } else if(!isExistence) {
        readFileData['userInfo'].push(userData)
        fs.writeFileSync(`../public/userInfo.json`, JSON.stringify(readFileData), 'utf-8')
        backTemplate.info = '登录成功'
        res.json(backTemplate)
    }
});
