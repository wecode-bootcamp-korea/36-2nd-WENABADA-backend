# WENABADA
  > 클론 대상 : 번개 장터 (https://m.bunjang.co.kr/) </br>

  > 개발 기간 : 2022년 08월 29일 ~ 09월 08일 (11일) 

## 기술 스택
- FE : <img src="https://img.shields.io/badge/JavaScript-FFCA28?style=flat-square&logo=javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React.js-58c3cc?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/CRA-58c3cc?style=flat-square&logo=Create-React-App&logoColor=white"/>
  <img src="https://img.shields.io/badge/React Router Dom-gray?style=flat-square&logo=React-Router&logoColor=F6BB43"/>
  <img src="https://img.shields.io/badge/eslint-000066?style=flat-square&logo=eslint&logoColor=white"/>
  <img src="https://img.shields.io/badge/prettier-00CC00?style=flat-square&logo=eslint&logoColor=white"/>


- BE : 
<img src="https://img.shields.io/badge/JavaScript-FFCA28?style=flat-square&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-008000?style=flat-square&logo=Node.js&logoColor=white"/> <img src="https://img.shields.io/badge/Express-000080?style=flat-square&logo=Express&logoColor=white"/> <img src="https://img.shields.io/badge/ MySQL8.0-6441a5?style=flat-square&logo=MySQL&logoColor=white"/>
  <img src="https://img.shields.io/badge/Postman-F6BB43?style=flat-square&logo=Postman&logoColor=white"/> <img src="https://img.shields.io/badge/AWS-232F3E?style=round&logo=Amazon%20AWS&logoColor=white"/>

- 협업 툴 : <img src="https://img.shields.io/badge/Slack-553830?style=flat-square&logo=Slack&logoColor=white"/> <img src="https://img.shields.io/badge/Trello-F6BB43?style=flat-square&logo=Trello&logoColor=white">



## 팀원 소개
- <b>FE (3명)</b>
  > **문준기** </br>
  - 구현사항 : 메인 페이지, 리스트 페이지, 상세 페이지
  
  > **박승민** </br>
  - 구현사항 : Nav , Footer , 상품 등록 페이지
  
  > **조민재** </br>
  - 구현사항 : 소셜 로그인, 상점 페이지
  
- <b>BE (2명)</b>
  > **문정진** </br>
  - 구현사항 : 소셜 로그인 API, 메인 페이지 API, AWS 배포
  
  > **정재하** </br>
  - 구현사항 : 카테고리, 제품 상세 페이지, 내상점 페이지, 상품등록 API 구현</br>
  


# 시연 영상
[![WENABADA](https://img.youtube.com/vi/HDuGehcfV14/0.jpg)](https://www.youtube.com/watch?v=HDuGehcfV14) 
<br/>

**클릭하면 영상으로 이동합니다.**

# ERD
![Lightning ERD](https://user-images.githubusercontent.com/99805929/189044097-ae6f1b58-f80b-498e-98d1-07e2aa9af6b0.png)


# API Documentation
- [WENABADA](https://documenter.getpostman.com/view/22699914/VVBQX9Cy)


# 프로젝트 회고록
- 문준기
  - 백엔드와 소통이 잘 이루어지지 않아 서로 다른 카테고리 id를 뒤늦게 통합할 시간이 없어 연산으로 돌아가게 한 점, 전역으로 카테고리를 바꿔주어야 할 때, 원활히 되지 않아 리코일을 뒤늦게 도입한 점, 게다가 자연재해 및 공휴일로 더 적어진 시간 때문에 리팩토링에 신경 쓰지 못해 완성도 높은 코드를 구현하지 못한 점이 아쉬웠다. 
  
  - 그래도 팀 프로젝트에서 상태 관리 라이브러리를 사용하여 원리 및 이점을 크게 체감하였고, 1차 프로젝트에서는 하지 않은 여러 알고리즘과 통신들을 한 점이 좋았다.

- 박승민
  - 1차 프로젝트에서 겪었던 스프린트별 티켓 분배의 아쉬움을 2차에서는 겪지 않겠다고 다짐했었는데 다른 부분에서 비슷한 느낌으로 이슈가 있었다.. 티켓을 전부 처리했지만 리뷰를 받는 데에 있어서 너무  오래 걸렸다. 
  
  - 추가로 이런저런 사유들이 2주 차에  한 번에 몰려들어 스노우볼이 굴러가버렸다 마지막에는 손쓸 방법이 없는 코드를 트러블슈팅 하고자 치트키로 Recoil 라이브러리를 도입하는 지경에 이르렀는데, 어찌어찌 프로젝트를 완료해서 다행이지만 완벽한 프로젝트라고 말할 수는 없었다. 
  
  - 오히려 이런 과정을 겪어서 프로젝트답다고 생각한다, 또 처음으로 FormData를 사용해 봤는데, 적용하는 과정에서 여러 가지 정보를 접하고 부수적으로 지식을 많이 얻어 간다고 생각한다. FormData의 형식, fetch의 header에 붙는 binaryData라든지 처음 알게 되는 지식을 많이 얻어 갈 수 있었다.

- 조민재
  - **좋았던 점** : 스타일드 컴포넌트와 리베이스를 바로 배워 바로 사용하는 것이 쉽지는 않았지만, 현업에서 충분히 일어날 수 있을만한 일(급히 새 기술을 배워 실사용)을 경험할 수 있는 기회였다고 생각합니다. 소셜 로그인 API 사용은 어렵고 재밌었어요. 새로운 거 해볼 수 있어서 즐거웠습니다. 
  
  - **아쉬웠던 점** : 분명히 좀 더 효율적인 코드로 구현할 수 있을 것 같은 부분임에도, 시간 부족과 경험 부족, 실력 부족으로 더 나은 퀄리티의 코드를 뽑아내지 못한 점이 너무 아쉬웠습니다. 그리고 코드 치기 전에 충분히 백엔드와 소통이 이루어져야 했음을 깨달았습니다. 
무엇보다, 자기가 맡은 일에만 너무 몰입되어 프로젝트 전체와 팀원들의 일에 신경을 많이 쓰지 못했던 것에 대해 반성하고 있습니다. 

- 문정진
  - **좋았던 점** : 이번 프로젝트에서는 1차 때 사용하지 않은 외부 api도 사용하고 (카카오 소셜 로그인) aws를 통해 실제 배포도 해보고 (EC2, RDS) 기업 협업 전 큰 경험을 했다고 생각한다.
  
  - **아쉬웠던 점** : 1차 때 했던 경험이 있어서 2차 때는 계획을 잘 세웠다고 생각했지만 오산이었습니다. 리뷰 이슈, 화재 이슈, 태풍 이슈 3개의 이슈 덕분에 마지막 날 밤을 새웠습니다. 시간 배분과 일정 관리를 더욱 타이트하게 짜지 않았던 점이 아쉬웠습니다.

  - **배운 점** : jest를 사용하여 실제 내가 만든 api를 테스트해 보면서 테스트의 중요성을 배웠고 프로젝트를 2번 하면서 제일 중요한 소통 능력을 배웠습니다.

- 정재하
  - 플로우에 따라 차근차근 작업을 진행했어야 했는데 조급한 마음에 연관된 페이지를 맞물려 작업을 하다 보니 기능 구현 면에서 놓치는 부분도 많았고, 작업 효율이 떨어져서 아쉬움이 많이 남는 것 같습니다. 
  
  - 그래도 블로커였던 S3를 이용한 이미지 업로드 기능 구현을 성공하여 좋은 경험이 되었던 것 같습니다 

# Reference

- 이 프로젝트는 [번개 장터](https://m.bunjang.co.kr/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
