<h1 align="center">
  <img src="./src/assets/images/logo.jpg" width="150px"/><br/>
  <strong><a href="https://cloudversity.netlify.app/">Cloudversity | The Cloud University</a></strong>
</h1>
<p align="center">Cloudversity is an e-learning platform. The sole purpose of making this web-app is to minimize the gap between a student and a tutor by providing them a mediator learning platform. This is a full-stack web-app where a user can register him/ herself via Email / Google Login as a Tutor or a Student. A user can search courses, apply filters i.e. free, paid, popular and more. It has lots of features inspired by Udemy platform.
</p>

---

## 📋 **Table of Contents**

- Project Title and Description
- Table of Contents
- Quick Installation
- Front-End
  - Stacks Used
  - Features
- Back-End
  - Stacks Used
  - API Endpoints
- Hosted Links
- Authors
- License
<!-- - Demo-preview -->

---

## ⚡ **Quick Installation**

- Make sure that you have [Git](https://git-scm.com/downloads) & [Node](https://nodejs.org) installed. Node LTS version 14.15.3 or above is required.
- VS Code or any IDE with git bash setup.

Clone this repo or download zip

```
git clone <repo-url>
```

> **FrontEnd**

Go inside `front-end` folder in terminal

```
cd <folderName>
```

Install all the dependencies

```
npm install
```

To run app

```
npm start
```

> **BackEnd**

Go inside `server` folder in terminal and install all the dependencies by performing same steps as above.

To run server

```
npm run dev
```

<!-- # Demo-Preview -->

---

## ⚛️ **Front-End**

### ⚙️ Stacks Used

- `React` - Provides with a SPA setup using `npx create-react-app <project-name>`
- `React Hooks` - For managing state
- `Context APIs and Reducers` - For handling State Management in the app
- Packages used:
  - `react-dom` - For rendering the index.js
  - `react-router-dom` - For routing
  - `axios` - A package for calling apis
  - `node-sass` - To compile .scss files to .css
  - `firebase` - To handle real-time chat section
  - `jwt-decode` - To decode and check the authenticity of tokens
  - `react-google-login` - To provide Google SignIn / SignUp option
  - `react-responsive-carousel` - It provides carousel with lots of features like auto scrolling
  - `react-stripe-checkout` - It provides interface for making a payment

### 🎯 Features

- User authentications using email and google
- Search and Filter Courses
- Tutor and Student Dashboard with Stats
- Student's profile with add to Wishlist, add to Cart & enrolling options with payment
- Tutor's profile with Add, Update & Delete Course options
- Discussion section for creating chat rooms
- Course Details page with list of videos, video player & reviews
- Light & Dark Mode
- LocalStorage implementation for logged users

---

## 🚀 **Back-End**

### ⚙️ Stacks Used

- `NodeJS` - For writing all backend logic
- `Express` - For creating routes / api endpoints
- `MongoDB Atlas` - For storing data
- `Cloudinary` - For storing videos and online streaming
- `Heroku` - For hosting cloudversity backend
- Packages used:
  - `bcryptJS` - For encryting passwords
  - `cookie-parser`
  - `cors`
  - `datauri`
  - `dotenv`
  - `jsonwebtoken`
  - `mongoose`
  - `multer`
  - `stripe`

### 🖥️ API Endpoints

- **Base Url** --> `https://cloudversity-api-server.herokuapp.com/`
- **Courses apis**

  - GET
    - `/allcourses` (Get all courses)
    - `/courses/:courseId` (Get course by id)
  - POST
    - `/addcourse` (Add new course)
    - `/uploadvideo/:courseId` (Add videos in a course)
    - `/enroll/:courseId` (Enroll a course)
    - `/applydiscount/:courseId` (Apply discount to a course)
  - PATCH
    - `/updatecourse/:courseId` (Update a course)
    - `/updatethumbnail/:courseId` (Update thumbnail of a course)
  - DELETE
    - `/deletecourse/:courseId` (Delete a course)
    - `/deletevideo/:videoId` (Delete a video)

- **Tutor apis**

  - GET
    - `/tut/alltutors` (Get all tutors)
  - POST
    - `/tut/login` (Registered tutor login)
    - `/tut/signup` (For new tutor registration)

- **Student apis**

  - GET
    - `/stu/allstudents` (Get all registered students)
    - `/stu/:studentId` (Get student by id)
  - POST
    - `/stu/login` (Registered student login)
    - `/stu/signup` (For new tutor registration)
    - `/stu/addtowishlist/:courseId` (Add a course to wishlist)
    - `/stu/addtocart/:courseId` (Add a course to cart)
    - `/stu/latestcourse/:courseId` (Add recent viewed course)
  - PATCH
    - `/stu/removefromcart/:courseId` (Remove course from cart)
  - DELETE
    - `/stu/removefromwishlist/:courseId` (Remove course from wishlist)

- **Reviews apis**

  - GET
    - `/allreviews/:courseId` (Get all reviews by course id)
  - POST
    - `/addreview/:courseId` (Post a review)
  - PATCH
    - `/editreview/:reviewId` (Update a review)
  - DELETE
    - `/deletereview/:reviewId` (Delete a review)

- **Other apis**

  - POST

    - `/payment` (For making a payment)

  - PATCH
    - `/updateprofile/:userId` (For updating user's profile)
    - `/updatedp/:userId` (For updating user's photo)

---

## 🔗 **Hosted Links**

- Cloudversity Website: https://cloudversity.netlify.app/
- Cloudversity Server: https://cloudversity-api-server.herokuapp.com/

---

## 👨🏻‍💻 **Authors**

👾 [Pratik Sahu](https://github.com/pratik-sahu-au13) and 👾 [Akshay Sahu](https://github.com/akshay-sahu-au13)

---

## 📝 **License**

Copyright © 2021 Cloudversity
