EHTS: Bias Detector
=======================================

EHTS is a full-stack web application designed to help companies monitor employee health test data like heart rate and oxygenation levels to detect potential bias. Users can register, add employees, and view detailed test results via interactive charts.

Live Demo
---------
> [Link to deployed version -> (https://ehts-project.web.app/Login)]

Features
--------
- User registration with company key authentication
- Add & manage employee profiles
- View individual test results with heart rate data visualized using Recharts
- Search & filter employees
- Delete employees (long press on mobile, hover on desktop)
- Dynamic report pages per employee

Technologies Used
-----------------
- Frontend: React.js, Tailwind CSS
- Backend/Database: Firebase Realtime Database & Firebase Auth
- Data Visualization: Recharts
- Authentication: Firebase Auth (email/password)
- Deployment: Firebase Hosting or Vercel (optional)

Firebase Structure
------------------
EHTS/
  └── COMPANY_KEY/
      ├── accounts/
      │   └── userUID: { email, companyKey }
      └── employees/
          └── employeeID/
              ├── fullName, age, height, weight, sex, createdBy
              └── tests/
                  └── Test_08:12:15/
                      ├── heartRate: { 0: 90, 1: 91, ... }
                      └── sp02: 97

Getting Started
---------------
Prerequisites:
- Node.js and npm installed
- Firebase project with Realtime Database and Auth enabled

Installation:
$ git clone https://github.com/YOUR_USERNAME/EHTSweb.git
$ cd EHTSweb
$ npm install

Firebase Setup:
1. Add your Firebase config to firebase-config.js
2. Make sure you have the correct rules for read/write access

Commands
--------
# Start dev server
$ npm run dev

# Build for production
$ npm run build

# Deploy to Firebase (if set up)
$ firebase deploy

Author
------
Benedict Hong
Software Engineer @ University of Michigan - Dearborn
LinkedIn: https://www.linkedin.com/in/benedict-hong-5396091a1/
