# Google-Review-Portal
This project is a Google Review Management System that allows users to view, reply, and manage Google reviews from a centralized dashboard. The project includes two parts:
1. **Client** (Frontend) built using **React**.
2. **Server** (Backend) built using **Node.js** and **Express**.

## Features

- View reviews fetched from Google My Business API.
- Reply to reviews via a centralized dashboard.
- Google OAuth integration for authentication.

## Installation 
1.Clone the repository
git clone https://github.com/Anugrah070/Google-Review-Portal.git<br>
cd Portal<br>

2.Install dependencies<br>
FOR CLIENT<br>
cd client<br>
npm install<br>

FOR SERVER<br>
cd ../server<br>
npm install<br>

3.Running the client<br>
navigate to client directory<br>
cd /client<br>

then start the react client by<br>
npm run dev<br>


4.Running the Server<br>
Navigate to the server directory:<br>
cd server<br>

Start the Node.js server:<br>
npm start<br>

5.API Endpoints<br>
The server has the following API endpoints:

GET /api/reviews - Fetch all reviews from mock data (as buisness api was unavailable)<br>
POST /api/reviews/<br>
/reply - Reply to a specific review by ID.

Note  
currently it doesnt make use of database to store the replied data but shoes the replies to the console of sever terminal can be stored or processed later easily

#Some snapshots



![Screenshot (35)](https://github.com/user-attachments/assets/82ec3d88-3930-4b67-b181-b89c172b080c)
![Screenshot (36)](https://github.com/user-attachments/assets/9e145b86-6f61-4d8a-b9a0-3e27fac5edc6)
![Screenshot (37)](https://github.com/user-attachments/assets/73b458b7-4a1c-4119-82a7-fea69c07c7b6)

