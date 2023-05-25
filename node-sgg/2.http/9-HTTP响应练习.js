// 响应一个四行三列，点击变色的页面

const http = require('http')

const server = http.createServer((request, response) => {
    response.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            #myTable {
                width: 100%;
                border-collapse: collapse;
            }
    
            #myTable td {
                padding: 10px;
                border: 1px solid black;
                cursor: pointer;
            }
    
            #myTable tr:nth-child(even) td {
                background-color: lightgray;
            }
            .selected {
                background-color: red;
                color: white;
            }
    
    
        </style>
    </head>
    <body>
        <table id="myTable">
            <tr>
                <td>1</td><td>2</td><td>3</td>
            </tr>
            <tr>
                <td>4</td><td>5</td><td>6</td>
            </tr>
            <tr>
                <td>7</td><td>8</td><td>9</td>
            </tr>
            <tr>
                <td>10</td><td>11</td><td>12</td>
            </tr>
        </table>
        <script>
            let cells = document.querySelectorAll('td')
            cells.forEach(item => {
                item.addEventListener('click',()=> {
                    console.log(item.style.background);
                    if(item.style.background == 'rgb(34, 34, 34)') {
                        item.style.background = ''
                        return
                    }
                    item.style.background = '#222'
                })
            })
    
        </script>
    </body>
    </html>`)
})

// 监听端口，启动服务
server.listen(9000, () => {  //http默认端口是80 ，https默认端口是443
    console.log(('服务已启动..'));
})