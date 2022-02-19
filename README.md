# GuidinoSoftpedia
This project is created as an assignment for guidinoSoftPedia web development intern.

I created a simple CRUB application where user can create his/her posts and publish it globally and 
they can also view others posts which have published globally.

Languages used : HTML,CSS,JS
JS Frameworks used : ReactJS,NodeJS

Packages uses : Express,Nodemon,mysql2

While running make sure that you have installed Express,Nodemon,mysql2 packages through npm

No need to install create-react-app since I have addaed React JS through HTML script tag

Design of my project : https://www.figma.com/file/VSuj1OeBJBuAfj7Jit082c/Untitled

DataBase : Mysql(CREATE DATABASE guidinosoftpedia)

Tables :

CREATE TABLE users(username varchar(30) primary key,password varchar(15));
CREATE TABLE posts(username varchar(30),password varchar(15),count int auto_increment primary key);


Make sure that you have created these database and tables at your mysql server
