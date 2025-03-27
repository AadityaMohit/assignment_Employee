# EmployWise React Assignment

## Overview
This is a React application that integrates with the Reqres API to perform basic user management functions, including authentication, user listing, editing, and deletion.

## Features
### Level 1: Authentication
- Users can log in using credentials:
  - **Email**: `eve.holt@reqres.in`
  - **Password**: `cityslicka`
- On successful login, a token is stored in local storage, and the user is redirected to the **User List** page.

### Level 2: List All Users
- Fetches users from the API and displays them in a structured layout.
- Includes pagination for navigating through users.
- **Client-side filtering**: Users can be searched by first name, last name, or email.

### Level 3: Edit, Delete, and Update Users
- **Edit:** Users can update their first name, last name, and email.
- **Delete:** Users can be removed from the list.
- Displays appropriate success/error messages.

## Tech Stack
- **Frontend:** React (Vite)
- **HTTP Requests:** Fetch API
- **State Management:** React Hooks
- **Routing:** React Router
- **Styling:** Inline CSS

## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/employwise-assignment.git
   cd employwise-assignment
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the application**
   ```bash
   npm run dev
   ```
4. **Open in browser**
   - Navigate to `http://localhost:5173/`
   
## API Endpoints Used
- **Login:** `POST https://reqres.in/api/login`
- **Fetch Users:** `GET https://reqres.in/api/users?page=1`
- **Update User:** `PUT https://reqres.in/api/users/{id}`
- **Delete User:** `DELETE https://reqres.in/api/users/{id}`

## Bonus Features
- ✅ Client-side search for users
- ✅ React Router for navigation
- ✅ Token persistence in local storage
- ✅ Responsive design

## Deployment
The app is hosted on **[Your Hosting Service](#)**.

## License
This project is open-source and free to use.

---
### **Contributors**
👨‍💻 **Your Name**  
📧 your.email@example.com  
🔗 [GitHub Profile](https://github.com/yourusername)

