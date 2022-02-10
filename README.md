NestJS-Auth

> NestJS 기반 인증서버

JWT기반으로 인증서버를 구현
Redis를 사용하여 JWT에서 로그아웃기능을 구현

>로직
1. 로그아웃 한 유저의 토큰을 Redis에 저장
2. 로그인시 해당 토근이 Redis에 존재할 경우 로그인 불가 처리
3. 기한지 지난 토큰은 자동적으로 Redis에서 삭제 처리

- [ ] 환경세팅
- [ ] 회원가입 기능
- [ ] JWT
- [ ] 로그인, 로그아웃
- [ ] 권한 부여

```
nest g resource [name]
```


> 유저 테이블
TABLE NAME : user

| Col         | Type           | comment  |
| ------------- |:-------------:| -----:|
| idx           | right-aligned | 유저 idx |
| username      | char(20)      | 유저 이름 |
| nickname      | char(20)      | 닉네임 |
| password      | char(50)      | 비밀번호 |
| last_login      | datetime      | 마지막 로그인 날짜 |
| auth      | char(10)      | 접근 권한 |
| create_date      | datetime      | 최초 가입 날짜 |
| last_login_date      | datetime      | 마지막 로그인 날짜 |
