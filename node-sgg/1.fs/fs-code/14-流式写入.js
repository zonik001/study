/**
 * 观书有感.txt
 */

// 1.导入fs
const fs = require('fs')

// 2.创建写入流对象
const ws = fs.createWriteStream('./5-观书有感.txt')

// 3.write
ws.write('半亩方塘一鉴开\r\n');
ws.write('半亩方塘一鉴开\r\n');
ws.write('半亩方塘一鉴开\r\n');
ws.write('半亩方塘一鉴开\r\n');

// 流式写入方式适用于大文件写入或者频繁写入场景，writeFile适合频率低的场景

// 文件写入场景 下载文件 安装软件 保存日志

// 当需要持久化保存数据时，用文件写入