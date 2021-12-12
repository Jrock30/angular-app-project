# Angular App Project
- Angular Cli
  - npm install -g @angular/cli@latest
  - ng new angular-app-project --no-strict
  - cd angular-app-project
  - ng serve
  - ng generate component {name}, ng g c {name} ( CLI 로 컴포넌트 팩으로 생성 )
  - ng g c {name}/{name} --skip-tests ( 테스트 파일 생성 X 옵션)
- Library
  - npm install --save bootstrap@3
    - angular.json -> styles: ["node_modules/bootstrap/dist/css/bootstrap.min.css"] 추가
      - version 6 이상은 위처럼 (angular.json), 이하는 ../ 상대경로 줄 것 (angular-cli.json)
---
## 
