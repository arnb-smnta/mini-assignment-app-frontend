# **Mini-Assignment Tracker**

A comprehensive full-stack application designed to streamline assignment and task management, offering dedicated functionalities for administrators and users. Built with a robust architecture, this app ensures seamless communication, task tracking, and progress monitoring for both admins and users.

---

## **Features**

### **Admin Functionality**

1. **Assignment Management:**

   - Create new assignments for users.
   - Assign existing assignments to specific users.
   - View a comprehensive list of all assignments and their details.
   - Monitor the scores of different users for the assignments they are working on.

2. **Task Management:**
   - Create, update, and delete tasks within any project or assignment.
   - Assign tasks to users, ensuring only the right individuals have access.
   - View and manage all tasks for complete oversight.

---

### **User Functionality**

1. **Task Access:**

   - View tasks assigned specifically to them.
   - Search tasks on Google directly from the app to assist in task completion.

2. **Progress and Score Tracking:**

   - Monitor progress on assigned tasks.
   - View individual scores for completed tasks and assignments.

3. **Assignment Overview:**
   - Access a list of all tasks they are currently assigned to.

---

## **Tech Stack**

- **Frontend:** React.js, TypeScript, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT-based secure authentication
- **Hosting:**
  - **Frontend:** [Netlify](https://assingment-app-lonots.netlify.app/)
  - **Backend:** Hosted using Railway

---

## **Hosted Application**

Access the live application here: [Mini-Assignment Tracker](https://assingment-app-lonots.netlify.app/)

---

## **Repository Links**

- **Frontend Repository:** [GitHub - Frontend](https://github.com/arnb-smnta/mini-assignment-app-frontend)
- **Backend Repository:** [GitHub - Backend](https://github.com/arnb-smnta/mini-assignment-app-backend)

---

## **Setup and Installation**

### **Prerequisites**

- Node.js (v16 or above)
- MongoDB (installed and running locally or on a cloud service)

### **Steps to Run Locally**

1. **Clone the Repositories:**

   - Frontend:
     ```bash
     git clone https://github.com/arnb-smnta/mini-assignment-app-frontend.git
     cd mini-assignment-app-frontend
     ```
   - Backend:
     ```bash
     git clone https://github.com/arnb-smnta/mini-assignment-app-backend.git
     cd mini-assignment-app-backend
     ```

2. **Install Dependencies:**

   - For both frontend and backend:
     ```bash
     npm install
     ```

3. **Setup Environment Variables:**

   - **Backend:**
     Create a `.env` file in the backend directory with the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongo_connection_string
     JWT_SECRET=your_secret_key
     ```
   - **Frontend:**
     Create a `.env` file in the frontend directory with:
     ```env
     REACT_APP_API_URL=http://localhost:5000
     ```

4. **Run the App:**

   - Start the backend server:
     ```bash
     npm start
     ```
   - Start the frontend server:
     ```bash
     npm start
     ```

5. **Access the App:**
   Open your browser and navigate to `http://localhost:5176`.

---

## **Project Highlights**

1. **Admin Dashboards:**

   - Intuitive UI for managing assignments and tasks.
   - Role-based access ensuring secure functionality.

2. **User Experience:**

   - Simplified task tracking with direct integration to search engines for assistance.
   - Transparent progress monitoring and scoring system.

3. **Scalable Design:**
   - Modular components and REST APIs for easy extension and maintenance.

---

## **Future Enhancements**

- Integration with third-party task management tools like Trello or Jira.
- Advanced analytics for admins to track user performance over time.
- Notifications for task updates and deadlines.
- Support for multiple roles beyond admin and user.

---

## **Demo**

- **Live Demo:** [Mini-Assignment Tracker](https://assingment-app-lonots.netlify.app/)

## **Contact**

For queries or collaboration, reach out to:

- **Name:** Arnab Samanta
- **Email:** arnab.smnta@gmail.com
- **GitHub:** [Arnab's GitHub](https://github.com/arnb-smnta)

---

Here's an updated **README** section including the frontend routes with the `/dashboard` prefix:

---

### Frontend Routes

The application includes the following frontend routes to navigate through different features:

| **Route**                           | **Description**                                                 |
| ----------------------------------- | --------------------------------------------------------------- |
| `/dashboard/app`                    | Main dashboard page showing all loans applied for or approved.  |
| `/login`                            | User login page.                                                |
| `/register`                         | User registration page.                                         |
| `/dashboard/userprofile`            | Displays the user's profile information.                        |
| `/dashboard/createproject`          | Allows admins to create new projects.                           |
| `/dashboard/viewproject/:projectId` | Displays details of a specific project.                         |
| `/dashboard/viewtask/:taskId`       | Displays details of a specific task.                            |
| `/dashboard/viewallprojects`        | Allows admins to view all available projects and their details. |
| `/dashboard/edittask/:taskId`       | Allows admins to edit details of a specific task.               |
| `/dashboard/addtask/:projectId`     | Allows admins to add a task to a specific project.              |
| `/dashboard/editproject/:projectId` | Allows admins to edit details of a specific project.            |

These routes ensure easy navigation across all functionalities of the application for both **admins** and **non-admin users**.
