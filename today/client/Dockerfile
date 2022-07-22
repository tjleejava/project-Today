#base image로 nginx 사용, 태그 생략 시 자동 latest
FROM nginx

#root 경로에 app 폴더 생성
RUN mkdir /app

#work dir을 소스코드를 카피할 기본 경로로 설정
WORKDIR /app

# work dir 하위에 build 폴더 생성 /app/build
RUN mkdir ./build

#앞에는 host pc 뒤에는 docker 경로
#현재 Dockerfile이 위치한 같은 경로에  > Docker 컨테이너의 work dir 경로에 복사하라는 명령어
#윈도우 dockerfile이 있는 위치의 build파일을 컨테이너 만들어서 app 밑에 build에 복사하라는 명령어

#host pc의 현재 경로의 build 폴더를 work dir의 build 폴더로 복사
ADD ./build ./build

# nginx의 default.conf를 삭제 nginx의 기본 설정파일 삭제
RUN rm -rf /etc/nginx.conf.d/default.conf

# host pc의 nginx.conf 파일을 아래 경로에 복사
COPY ./nginx.conf /etc/nginx

# 80 포트 오픈
EXPOSE 80

# nginx -g deamon off; 명령어를 실행
# container 실행 시 자동으로 실행할 커맨드 (nginx 서버 데몬으로 시작하기 위한 명령)
CMD ["nginx", "-g", "daemon off;"]




