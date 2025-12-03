# 🛍️ Shopora — Full-Stack E-Commerce Web Apllication

A simple full-stack eCommerce-style application built with **Next.js App Router**, **Firebase Authentication**, **Express.js**, and **MongoDB**.  
Includes public pages, protected pages, product management, authentication, and a polished responsive UI.

---

## 🚀 Technologies Used

### Frontend
- Next.js 14 (App Router)
- Tailwind CSS
- Firebase Authentication
- Context API
- SweetAlert2

### Backend
- Express.js
- MongoDB (Atlas)
- CORS
- dotenv

---

## 📁 Features

### 1. Landing Page
- Sticky Navbar (logo, routes, login/register)
- After login → user dropdown (Profile, Add Product, Manage Products, Logout)
- Hero section
- 4 additional sections (features/items/testimonials/banners)
- Responsive grid & card UI
- Footer

### 2. Authentication
- Login/Register with Email + Password
- Google Login
- Redirect to `/` after login

### 3. Products List Page (`/products`)
- Search bar
- Category filter (UI only)
- Grid of 6+ product cards (image, title, description, price, button)

### 4. Product Details Page
- Large image/banner
- Full description
- Price, meta info
- Back button

### 5. Protected Pages
#### `/add-product`
- Only logged-in users can access
- Form:
  - Title
  - Short description
  - Full description
  - Price
  - Date / priority
  - Image URL
- Success message with SweetAlert

#### `/manage-products`
- Table/grid layout
- View product
- Delete product

---

## 🔥 Backend API (Express)
- GET /products
- GET /products/:id
- POST /products
- DELETE /products/:id
  
## 🛠️ Installation & Setup
### Clone Repo
```jsx
client- git clone https://github.com/mahmud014/Shoporo-next-app
server- https://github.com/mahmud014/Shoporo-next-app-server

cd shopora
```
### 🔧 Backend Setup
```jsx
npm install
```
### Start Server
```jsx
npm start
```
## 🌐 Deployment
### Frontend → Vercel
### Backend → Vercel
### Database → MongoDB Atlas

----

## Live Link
- client- https://shoporo-next-app.vercel.app
- Server- https://shoporo-next-app-server.vercel.app

  
## 👨‍💻 Developer
- Author: Md. Shukur Mahmud
- 📧 Email: anik955720@gmail.com
- 🔗 GitHub: https://github.com/mahmud014
- 🔗 LinkedIn: https://www.linkedin.com/in/shukurmahmud
