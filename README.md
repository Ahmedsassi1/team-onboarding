# AYV
## _Onboarding Test_

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)

This project is an introduction to the current tech stack used in AYV.

- Start by Forking this rep
- Clone your project localy
- ✨Do your magic✨
- Push you're work
- Notify US

## Instructions

- You need to deliver in 6 days (max)
- You are allowed to use any thrid party ressources (Git, stack overflow, etc...)
- Make sure that you're commits are organized
- Use only the libraries mentioned bellow

The purpose of this project is not to mesure your tech skills, but to make sure that you know how to google things, adpat to the situation and get things done ASAP.

### FRONT END LIBRARIES (NEXT)
> Styled Components
> Styled Icons
> Tailwind CSS
> Next Auth
> React Query
> Axios


### FRONT END LIBRARIES (NEST)
> Passport (+ derivatives)
> TypeORM
> pg
> bcryptjs


## Installation

Start by setting up the next project.

```sh
yarn create next-app --typescript
```

Then go ahead and setup your nest project in another septerate folder

```sh
nest new backend
```

## APP

In this project we will be building a simple app that contains two modules
1. A user management module (based on roles {Admin or User})
2. A brand management module 
3. A car management module (Each car is associated to a brand)

_NB: AA stands for "as a"_

| ADMIN | US |
| ------ | ------ |
| ADMIN | AA ADMIN i want to be able to create a user |
| ADMIN | AA ADMIN i want to be able to update a user |
| ADMIN | AA ADMIN i want to be able to delete a user |
| ADMIN | AA ADMIN i want to be able to retrieve a user |
| ADMIN | AA ADMIN i want to be able to retrieve all users |
| ADMIN | AA ADMIN i want to be able to create a car brand |
| ADMIN | AA ADMIN i want to be able to delete a car brand |
| ADMIN | AA ADMIN i want to be able to update a car brand |
| ADMIN | AA ADMIN i want to be able to retrieve a car brand |
| ADMIN | AA ADMIN i want to be able to retrieve all car brands |
| ADMIN | AA ADMIN i want to be able to create a car |
| ADMIN | AA ADMIN i want to be able to update a car |
| ADMIN | AA ADMIN i want to be able to delete a car |
| ADMIN | AA ADMIN i want to be able to retrieve a car |
| ADMIN | AA ADMIN i want to be able to retrieve all cars |


| USER | US |
| ------ | ------ |
| USER | AA USER i want to retrieve one of my cars |
| USER | AA USER i want to update one of my cars |
| USER | AA USER i want to delete one of my  cars |
| USER | AA USER i want to create a new car |
| USER | AA USER i want to retrieve all my cars |


NB: Each car is associated to a client

## DON'T FORGET TO

- Encapsulate the postgres DB in a docker file
- Deliver in time
- keep googling things until you figure it out
- To use free tailwind UI [Tailwind UI](https://tailwindui.com/#product-application-ui) components
- Everything which is not forbidden is allowed


**Good Luck!**



## Plan for the Project 

1. Setup :
creating a front end with next.js 
creating a back end with nest.js
installing postgresql
installing docker