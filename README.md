Todooly
========

A todo list app built with React, Django, Django Rest Framework, and MySQL.

This repo is a tutorial for how to create a full-stack app using React, Django, and MySQL. The front-end web client is built using React and initiated with Create React App. The backend is built with Django, Django Rest Framework, and MySQL. This project runs behind a Docker virtual environment.

To view the completed source code, visit the "completed" branch:

[**View full source code**](https://github.com/rashadrussell/todooly/tree/completed)

**Pre-requisites**
1. Install NodeJS - https://nodejs.org/en/
2. Install Docker Desktop - https://www.docker.com/get-started

**Docker Commands**

- Run Python and Django Commands in api container: `$ docker-compose run api [COMMAND]`


- Create Django Project: `$ docker-compose run api django-admin startproject api .`
- Run Django Migration: `$ docker-compose run api python manage.py migrate`
- Create Django Migration Files: `$ docker-compose run api python manage.py makemigrations`
- Create a Django App: `$ docker-compose run api django-admin startapp todolist`
- Start MySQL Server and API Server: `$ docker-compose up`
