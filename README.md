# Classic Men's Collection

An elegant and modern **e-commerce platform** tailored for showcasing and selling high-quality men's fashion. This platform combines a sleek design with robust functionality, offering a seamless shopping experience.

## Features

### **User Features**

-   **Product Catalog**:
    -   Explore a variety of men's clothing categories (e.g., suits, shirts, accessories).
    -   Advanced filters for size, price, color, and style.
-   **Product Details**:
    -   High-resolution images, detailed descriptions, and pricing.
-   **Shopping Cart**:
    -   Add/remove items and update quantities.
-   **Secure Checkout**:
    -   Multiple payment options and order confirmation.
-   **User Authentication**:
    -   Login, registration, and order history tracking.

### **Admin Features**

-   **Product Management**:
    -   Add, edit, and delete products with category assignments.
-   **Order Management**:
    -   View, update, and track customer orders.
-   **Dashboard**:
    -   Overview of sales, inventory, and user activity.

### **Additional Features**

-   **Responsive Design**:
    -   Optimized for desktop, tablet, and mobile devices.
-   **SEO-Optimized**:
    -   Ensures visibility in search engines.
-   **Performance and Security**:
    -   Fast load times and secure data handling.

---

## Tech Stack

### **Frontend**

-   **Next.js**: Fast and dynamic React-based framework for the UI.
-   **TailwindCSS**: Utility-first styling for responsiveness and clean design.

### **Backend**

-   **Strapi**: Headless CMS for efficient content management and API creation.
-   **Cloudinary**: Media storage and delivery for high-quality product images.

### **Database**

-   **MongoDB**: Flexible NoSQL database for storing products, users, and orders.

### **Deployment**

-   **Render**: Cloud hosting platform for scalable deployments.
-   **Docker**: Containerized environment for seamless hosting.

---

## Installation

Follow these steps to set up the project locally:

1.  **Clone the repository**:

    ```bash
    git clone [https://github.com/Andu-alem/classic-mens-collection.git](https://github.com/Andu-alem/classic-mens-collection.git)
    cd classic-mens-collection
    ```

2.  **Install dependencies**:

    For the frontend:

    ```bash
    cd frontend
    npm install
    ```

    For the backend:

    ```bash
    cd backend
    npm install
    ```

3.  **Set up environment variables**:

    Create a `.env` file in the `backend` directory.
    Add your variables for Strapi and Cloudinary:

    ```
    STRAPI_URL=<your-strapi-url>
    CLOUDINARY_NAME=<your-cloudinary-name>
    CLOUDINARY_KEY=<your-cloudinary-key>
    CLOUDINARY_SECRET=<your-cloudinary-secret>
    MONGO_URI=<your-mongodb-uri>
    PORT=5000
    ```

4.  **Run the application**:

    Start the backend server:

    ```bash
    npm run start
    ```

    Start the frontend development server:

    ```bash
    npm run start
    ```

5.  **Access the application**:

    Frontend: `http://localhost:3000`
    Backend (Strapi): `http://localhost:1337`

## Screenshots

Include screenshots such as:

-   Product catalog page.
-   Detailed product view.
-   Admin dashboard for managing products and orders.

![Product Catalog](public/screenshoots/products.PNG)

## Contributing

Contributions are welcome! To contribute:

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature-name`).
3.  Submit a pull request.

## License

This project is licensed under the MIT License.
