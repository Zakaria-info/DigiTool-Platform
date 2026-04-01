# 🚀 DigiTools Platform

A modern, responsive web application built with **React.js**, designed to provide premium digital tools in one place. Users can explore products, manage cart items, and experience a clean, interactive UI.

---

## 📌 Live Features

* 🧭 Responsive Navbar with dynamic cart badge
* 🎯 Hero / Banner section
* 📊 Rating / Stats section
* 🛍️ Featured Products (JSON-based)
* 🔄 Toggle system (Products ↔ Cart)
* 🛒 Add to Cart & Remove from Cart
* 🧾 Dedicated Cart Page / Component
* 🎨 Reusable Card Components
* 📣 Get Started / CTA Section
* 📄 Footer Section
* 📱 Fully responsive (sm / md / lg)

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** Tailwind CSS, DaisyUI
* **State Management:** React Hooks (useState)
* **Data Source:** Local JSON
* **Notifications (optional):** React-Toastify

---

## 📂 Project Structure

```id="grx6rq"
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Banner.jsx
│   ├── Rating.jsx
│   ├── Featured.jsx
│   ├── ProductCard.jsx
│   ├── Cart.jsx
│   ├── Card.jsx
│   ├── GetStarted.jsx
│   ├── Footer.jsx
│
├── data/
│   └── products.json
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash id="p7s2gy"
git clone https://github.com/your-username/digitools-platform.git
```

### 2️⃣ Navigate to project folder

```bash id="d2q3fq"
cd digitools-platform
```

### 3️⃣ Install dependencies

```bash id="b7x6qz"
npm install
```

### 4️⃣ Run the project

```bash id="m9x1kp"
npm run dev
```

---

## 🧠 Core Functionalities

### 🔹 Cart Management

* Add products via **Buy Now**
* Remove items from cart
* Real-time cart count update:

```js id="7o2m2r"
cart.length
```

---

### 🔹 Toggle System

* Switch between **Products** and **Cart**
* Controlled using:

```js id="3l9m8p"
const [activeTab, setActiveTab] = useState("products");
```

---

### 🔹 Component-Based Architecture

* Reusable components (Card, Navbar, Footer)
* Clean separation of concerns
* Scalable folder structure

---

## 🎨 UI & Design Highlights

* Gradient UI system (`#4F39F6 → #9514FA`)
* Modern card-based layout
* Badge system (Popular, New, Best Seller)
* Consistent spacing and alignment
* Fully responsive design

---

## 📈 Future Improvements

* 🔥 Quantity-based cart system (increase/decrease)
* 🔥 Prevent duplicate items
* 🔥 LocalStorage (persist cart)
* 🔥 Toast notifications (React-Toastify)
* 🔥 Product details modal
* 🔥 Backend/API integration

---

## 👨‍💻 Author

**Zakaria Hossain**
Frontend Developer (React.js)

---

## ⭐ Support

If you like this project:

* Give it a ⭐ on GitHub
* Use it in your portfolio
* Share it with others

---

## 📜 License

This project is open-source and available under the **MIT License**.
