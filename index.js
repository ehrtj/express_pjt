const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors());

//json으로 된 post의 body를 읽기위해 필요
app.use(express.json())

const PORT = 3000;
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.db');



app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});

app.post('/articles', (req,res)=>{

    let {title , content} = req.body

    db.run(`INSERT INTO articles (title, content) VALUES (?, ?)`,
    [title, content],
    function(err) {
      if (err) {
        return res.status(500).json({error: err.message});
      }
      res.json({id: this.lastID, title, content});
    });
})


app.get('/articles', (req,res)=>{

    //db.all은 반환되는것 + (여러가지 가져올 때 사용)
    db.all('SELECT * FROM articles', [], (err, rows) => {
        //err가 있다면 500err 매시지 주고 끝
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        //err가 없다면 이거 줌
        res.json(rows);
    });
})

app.get('/articles/:id', (req,res)=>{

    //id 가져오기 (params 사용)
    let id = req.params.id

    //id에 해당하는 article만 리턴
    //get은 한개 받아롤 때 사용
    db.get('SELECT * FROM articles WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        //!row = row가 없을 때
        if (!row) {
            return res.status(404).json({ error: 'Article not found' });
        }
        //1개이기 때문에 s빼기
        res.json(row);
    });

})


//https://kihyeonkwon.notion.site/1b9c3ce583dd808f9a18ec08c1437bcd
