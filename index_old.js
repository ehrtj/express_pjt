const express = require('express');
const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors());

//json으로 된 post의 body를 읽기위해 필요
app.use(express.json())



const users =  [
    {
      "id": 1,
      "name": "홍길동",
      "email": "hong@example.com",
      "signup_date": "2023-03-18T12:00:00Z"
    },
    {
      "id": 2,
      "name": "김철수",
      "email": "kim@example.com",
      "signup_date": "2023-02-17T09:30:00Z"
    },
    {
      "id": 3,
      "name": "이영희",
      "email": "lee@example.com",
      "signup_date": "2022-11-16T15:20:00Z"
    },
    {
      "id": 4,
      "name": "박준호",
      "email": "park@example.com",
      "signup_date": "2022-10-15T10:10:00Z"
    },
    {
      "id": 5,
      "name": "최민수",
      "email": "choi@example.com",
      "signup_date": "2022-09-14T18:45:00Z"
    },
    {
      "id": 6,
      "name": "정다은",
      "email": "jung@example.com",
      "signup_date": "2022-08-13T14:00:00Z"
    },
    {
      "id": 7,
      "name": "김지수",
      "email": "kim2@example.com",
      "signup_date": "2022-07-12T11:30:00Z"
    },
    {
      "id": 8,
      "name": "이수민",
      "email": "lee2@example.com",
      "signup_date": "2022-06-11T17:15:00Z"
    },
    {
      "id": 9,
      "name": "박지현",
      "email": "park2@example.com",
      "signup_date": "2022-05-10T08:40:00Z"
    },
    {
      "id": 10,
      "name": "최지우",
      "email": "choi2@example.com",
      "signup_date": "2022-04-09T20:00:00Z"
    }
  ]
  
  
const articles = [
    {
      "id": 1,
      "title": "첫 번째 게시글 제목",
      "content": "첫 번째 게시글 내용입니다.",
      "author_id": 1,
      "date": "2025-03-18T12:00:00Z"
    },
    {
      "id": 2,
      "title": "두 번째 게시글 제목",
      "content": "두 번째 게시글 내용입니다.",
      "author_id": 2,
      "date": "2025-03-17T09:30:00Z"
    },
    {
      "id": 3,
      "title": "세 번째 게시글 제목",
      "content": "세 번째 게시글 내용입니다.",
      "author_id": 3,
      "date": "2025-03-16T15:20:00Z"
    },
    {
      "id": 4,
      "title": "네 번째 게시글 제목",
      "content": "네 번째 게시글 내용입니다.",
      "author_id": 4,
      "date": "2025-03-15T10:10:00Z"
    },
    {
      "id": 5,
      "title": "다섯 번째 게시글 제목",
      "content": "다섯 번째 게시글 내용입니다.",
      "author_id": 5,
      "date": "2025-03-14T18:45:00Z"
    },
    {
      "id": 6,
      "title": "여섯 번째 게시글 제목",
      "content": "여섯 번째 게시글 내용입니다.",
      "author_id": 6,
      "date": "2025-03-13T14:00:00Z"
    },
    {
      "id": 7,
      "title": "일곱 번째 게시글 제목",
      "content": "일곱 번째 게시글 내용입니다.",
      "author_id": 7,
      "date": "2025-03-12T11:30:00Z"
    },
    {
      "id": 8,
      "title": "여덟 번째 게시글 제목",
      "content": "여덟 번째 게시글 내용입니다.",
      "author_id": 8,
      "date": "2025-03-11T17:15:00Z"
    },
    {
      "id": 9,
      "title": "아홉 번째 게시글 제목",
      "content": "아홉 번째 게시글 내용입니다.",
      "author_id": 9,
      "date": "2025-03-10T08:40:00Z"
    },
    {
      "id": 10,
      "title": "열 번째 게시글 제목",
      "content": "열 번째 게시글 내용입니다.",
      "author_id": 10,
      "date": "2025-03-09T20:00:00Z"
    }
  ]





app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});


app.get('/ping', (req, res) => {
    res.send('pong');
  });

  app.get('/tic', (req, res) => {
    res.send('tac');
  });

  app.get('/asdf', (req, res) => {
    res.send('qwerty');
  });

  app.get('/abc', (req, res) => {
    res.send('가나다');
  });

  app.get('/users', (req, res) => {
    res.send(users);
  });


  app.get('/post',(req,res)=>{
    //console.log(req.query);
    console.log(req);
  })


  app.get('/user/:id',(req, res)=>{

    console.log(req.params.id);
    let id = req.params

    let user_ien = users.length
    for(let i = 0; 1< users_ien ; i++){
        if(users[i].id==id){
            return res.send(users[i])
        }
    }
    res.json("없었습니다")
  })

  app.get('/articles/:id',(req,res)=>{

    let articles_id = req.params.id

    let article = articles[articles_id - 1]

    res.json(article);

  })

  app.get('/articles',(req,res)=>{
    console.log(req);
    res.json(articles)
  })

  /*app.post('/articles' , (req,res)=>{
    let headers = req.headers
    console.log(headers);
    const date = req.body
    console.log(date);

    articles.push(date);
    return res.json("ok")
  })

  app.post('/articles' , (req,res)=>{

    
    let data = req.body
    //id 증가가
    let lastId = articles[articles.length - 1].id
    data.id = lastId + 1
    //데이트 추가
    const now = new Date().toISOString().split('.')[0] + "Z";
    data.data = now;
    
    articles.push(data);
    return res.json("ok")
  })

  app.delete('/articles/:id', (req, res) => {
      let articleId = parseInt(req.params.id); // 요청된 ID를 숫자로 변환
      let index = articles.findIndex(article => article.id === articleId); // ID로 게시글 찾기
  
      if (index === -1) {
          return res.status(404).json({ message: "게시글을 찾을 수 없습니다." }); // 게시글이 없을 때 오류 반환
      }
  
      articles.splice(index, 1); // 해당 인덱스에서 1개 요소 삭제
  
      
      res.status(200).json({ message: "게시글이 성공적으로 삭제되었습니다." }); // 삭제 완료 메시지 반환
  })*/
  
  app.delete('/articles/:id',(req,res)=>{

    let id = req.params.id

    console.log(id);

    articles.splice(id-1, 1);

    res.send("ok")

  })

  app.put('/articles/:id', (req,res)=>{
    let id = req.params.id -1
    let data = req.body
    console.log(data)

    articles[id] = data

    console.log(id)

    res.send("ok")
  })

  /*https://kihyeonkwon.notion.site/1b9c3ce583dd808f9a18ec08c1437bcd
  CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    profile_url TEXT,
    nickname TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

  CREATE TABLE article (                 새로운 Artocle 테이블 반들어줘
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);





    INSERT INTO user (email, password, profile_url, nickname) VALUES
('alice@example.com', 'hashed_password1', 'https://example.com/profiles/alice.jpg', '홍길돌'),
('bob@example.com', 'hashed_password2', 'https://example.com/profiles/bob.jpg', 'Bobby99'),
('charlie@example.com', 'hashed_password3', 'https://example.com/profiles/charlie.jpg', 'CharlieC'),
('david@example.com', 'hashed_password4', 'https://example.com/profiles/david.jpg', 'DaveD'),
('eve@example.com', 'hashed_password5', 'https://example.com/profiles/eve.jpg', 'EveEve');

DELETE FROM user
WHERE id = 3;


SELECT * FROM user;



INSERT INTO article (user_id, title, content) VALUES        유저들이 각각 2개씩 게시물을 작성하는 sql문을 만들어줘
(1, '첫 번째 글 - Alice', '이것은 Alice의 첫 번째 게시물입니다.'),
(1, '두 번째 글 - Alice', '이것은 Alice의 두 번째 게시물입니다.'),
(2, '첫 번째 글 - Bob', '이것은 Bob의 첫 번째 게시물입니다.'),
(2, '두 번째 글 - Bob', '이것은 Bob의 두 번째 게시물입니다.'),
(3, '첫 번째 글 - Charlie', '이것은 Charlie의 첫 번째 게시물입니다.'),
(3, '두 번째 글 - Charlie', '이것은 Charlie의 두 번째 게시물입니다.'),
(4, '첫 번째 글 - David', '이것은 David의 첫 번째 게시물입니다.'),
(4, '두 번째 글 - David', '이것은 David의 두 번째 게시물입니다.'),
(5, '첫 번째 글 - Eve', '이것은 Eve의 첫 번째 게시물입니다.'),
(5, '두 번째 글 - Eve', '이것은 Eve의 두 번째 게시물입니다.');

UPDATE article        3번 id를 가진 게시글의 글을 '바뀜'으로 바꿔주는 sql문 작성해줘
SET content = '바뀜'
WHERE id = 3;

DELETE FROM user    아이디가 4번인 유져를 지워줘
WHERE id = 4;



SELECT * FROM article WHERE id = 3;

*/

    
  

  