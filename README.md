# app

# studetns-application
react+spring boot

### Функционал

---
* просмотр всех студентов
* редактирование студента 
* удаление студента
* добавление студента

### Технологии

---
* JDK 11
* сервлет: Spring MVC
* доступ к данным: Spring Data JPA, Hibernate
* фронтэнд: React.js
* база данных: h2database (embeded)
* контейнер сервлетов: Apache Tomcat

### Запуск c Docker

---
* склонировать репозиторий
* Выполнить следующие команды

```
 cd ./app
 mvn clean install
 docker-compose up
```
 перейти по http://localhost:3000/
 
 
### Запуск без Docker
* склонировать репозиторий
* Выполнить следующие команды

```
 //back
 cd ./app
 mvn clean install
 mvn spring-boot:run
 
 //front
 cd ./app/frontend/students
 npm install
 npm start
```
 перейти по http://localhost:3000/
