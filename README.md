<div align="center">
  <img height="400" src="https://i.ibb.co.com/k3nDpmh/git-Hub-banner.jpg"  />
</div>

###

<h1 align="left">71 Digital Sign - Employee Management System 👨‍💼</h1>

###

<p align="left">71 Digital Sign is a robust Employee Management System designed to help a well-renowned company monitor employee workload, manage payroll, verify employee contracts, and ensure smooth HR operations. This web-based application facilitates role-based authentication and provides a dynamic dashboard for employees, HR executives, and administrators.</p>

###

## 🔗 Live Link

<!-- <h3 align="left"></h3> -->

###

<p align="left">https://71-digital-sign.netlify.app/</p>

###

## ✨ Features:

###

1. **Responsive Design**

   - Fully responsive layout built with Tailwind CSS, ensuring a seamless experience on mobile, tablet, and desktop devices.

2. **User Authentication**

   - Secure login and registration using Firebase Authentication with Google Sign-in for quick access.
   - Conditional navigation based on the user's login state, displaying user information or authentication options.

3. **Role-Based Access Control**

   - Users can register as Employees or HRs via email/password authentication. 
   - Private routes ensure data privacy and secure access.

4. **Employee Work Record Management**

   - Employees can submit daily work tasks (task type, hours worked, date) through a form. These records are displayed in a table with options to edit or delete.

5. **Salary Payment History**

   - Employees can view their salary payment history, with details like month, amount, and transaction ID. HR can add, update, and track payment status.
   

6. **HR Management Interface**

   - HR can view employee data, verify employee status, and make salary payments. They can also filter work records by employee name or month/year.

7. **Admin Dashboard**

   - Admin can manage all employees, make employees HRs, and fire employees. Admin has full access to view employee details, approve payments, and adjust salaries.

8. **Employee Details & Progress Tracking**

   - HR can view employee profiles, including personal info, photo, and work records. A bar chart shows salary vs. month/year for each employee.

9. **CRUD Operations with Notifications**

   - All operations (add, edit, delete) are handled via forms and tables, with sweet alert/toast notifications for success or failure feedback.

10. **Role-specific Route Protection**
    - The app uses JWT tokens for secure authentication, ensuring that only users with the correct role (Employee, HR, Admin) can access their respective routes and functionalities.
11. **Payment Gateway Integration**
    - Admin can make salary payments to employees via a payment gateway(stripe). Payments can only be made once per month/year to avoid double payments.

###

## 🛠 Technology Used

###

 <div align="left">
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height="40" alt="firebase logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="40" alt="mongodb logo"  />
</div>

###

## 💥 Dependencies:

<!-- <h3 align="left"></h3> -->

###

<h3 align="left">"@emotion/react": "^11.13.5",<br>    "dotenv": "^16.4.7",<br>    "firebase": "^11.0.2",<br>    "lottie-react": "^2.4.0",<br>    "react": "^18.3.1",<br>    "react-awesome-reveal": "^4.2.14",<br>    "react-dom": "^18.3.1",<br>    "react-icons": "^5.4.0",<br>    "react-router-dom": "^7.0.2",<br>    "react-stars": "^2.2.5",<br>    "react-tooltip": "^5.28.0",<br>    "sweetalert2": "^11.14.5",<br>    "swiper": "^11.1.15"</h3>

###

## 🔧 Installation Guidline:

<p align="center" style="display: flex; align-items: center; justify-content: center;">
  <span style="font-size: 20px; font-weight: bold;">Front End</span>
  <img src="https://cdn-icons-png.flaticon.com/128/1055/1055666.png" alt="Front End Icon" width="15" height="15" style="margin-left: 8px;" />
</p>

1. First clone the project by running

```bash
  git clone https://github.com/shahbaz-kamal/sportify-hub-client.git
```

2. Change your directory to the cloned folder by

```bash
  cd folder_name
```

3. Run the following to install dependencies:

```bash
npm install
```

4. Create a firebase project and a file named .env.local in your root folder & use your firebase credintials as follows:

```bash
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messagingSenderId
VITE_appId=your_api_id
```

5. Run the following command and open the website locally on port 5173:

```bash
npm run dev
```

<p align="center" style="display: flex; align-items: center; justify-content: center;">
  <span style="font-size: 20px; font-weight: bold;">Backend</span>
  <img src="https://cdn-icons-png.flaticon.com/128/16318/16318927.png" alt="Front End Icon" width="15" height="15" style="margin-left: 8px;" />
</p>

###
