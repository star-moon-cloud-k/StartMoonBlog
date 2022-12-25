# StartMoonBlog
## SMILE_GATE 1인 프로젝트 과제
* CRUD 기능 구현
* Detail 부분에서 아쉬운 부분이 너무 많았다.
* Frontend 개발도 생각보다 많은 부분은 신경써야한다는 것을 깨달았다.
## 추가 작성 계획
* 댓글 비밀번호 작성 기능
* 관리자 페이지
    * 아직 구상 중
* 로그인 기능
* 검색 기능
    * 태그 , 제목 , 내용 등
* 이미지 게시물 저장
## 개발 중 궁금했던 부분
* 이미지, 영상등을 저장할 때, CDN 과 같은 외부 서버를 사용하지 않는 경우 어떤 방식으로 저장해야 하는가?
* 로그인 구현시 실무에서도 spring-security + jwt + oauth2 방식을 사용하는가?
  * 다른 방식은 어떤 방식이 있을까?
* redux는 꼭 사용해야하는것인가?
* 비동기 방식의 API를 만들었을 때 spring에서는 thread를 활용하여야 하는가??
  * thread 풀 문제가 발생하지 않나?
* 좋아요 기능은 한번 눌렀을 때 발생하는 과정이 기능에 비해 복잡한 것 같은데 최대한 좋은 방법으로 구현하는 방법은?

****
### 기술 스택
**backend**
- Java 17
- spring boot
- eirslett
- mybatis

**DB**
- oracle 18c
- ubuntu server

**frontend**
- react
- redux-saga
- redux
- react-quill

## 메인 화면
![스크린샷 2022-12-26 오전 12 07 38](https://user-images.githubusercontent.com/32475430/209473472-7c6cdd23-b4b8-4b6a-8238-97863cac78af.png)
* 게시물을 간단하게 예약해서 보여준다
## 게시물
![스크린샷 2022-12-26 오전 12 05 00](https://user-images.githubusercontent.com/32475430/209473410-c19d3ea7-ed5d-4e0c-abaf-a939bd4469d9.png)
* 로그인 기능을 구현하지 않아서 이름과 댓글만 작성하면 작성된다
  * 비밀번호를 작성할 수 있게 만들 예정
* 게시물 수정, 삭제 가능
## 게시물 작성
![스크린샷 2022-12-26 오전 12 07 53](https://user-images.githubusercontent.com/32475430/209473503-d2da2666-2ab3-4970-82ae-3769c796b1e1.png)
* quill 에디터를 사용해서 게시물 작성

