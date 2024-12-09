# Medify

Medify is a student project designed as a front-end web application for healthcare services. It provides users with functionalities to find doctors, browse hospitals, view medical services, and manage bookings. This app is a part of a course project and is intended for educational purposes.

## Features

- **Responsive Navigation**: With a mobile-friendly sidebar that contains links to various pages like doctors, hospitals, medicines, and more.
- **Doctor & Hospital Finder**: Users can explore doctors, hospitals, and services in different medical specializations.
- **My Bookings**: A section for users to manage their medical bookings and appointments.
- **Latest Blogs & News**: Displays the latest news and blogs related to healthcare.
- **Our Customers**: Displays statistics about the app's reach and impact.
- **Medical Specializations**: Allows users to explore different medical specialties and associated services.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material UI**: A React component library for building stylish and functional UIs.
- **CSS Modules**: For scoped styling within components.
- **React Router**: For handling navigation between different pages.
- **React Icons**: For using various icons from the `react-icons` library.

## Folder Structure

```
/src
  /assets                # Images and icons used throughout the app
  /components            # Reusable components (e.g., Navbar, Button, SearchBox)
  /pages                 # Pages representing sections of the app (e.g., Home, MyBookings)
  /styles                # Global and component-specific styles (e.g., NavBar.module.css)
  /utils                 # Utility functions like uniqueId
  App.js                 # Main application component
  index.js               # Entry point for React
```

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/medify.git
   cd medify
   ```

2. **Install dependencies**:
   Make sure you have `Node.js` and `npm` installed, then run:
   ```bash
   npm install
   ```

3. **Run the application**:
   After installing the dependencies, you can run the application locally with:
   ```bash
   npm start
   ```

4. **Visit the app**:
   Open your browser and go to `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License.

## Acknowledgments

- This app was built as part of a student project for learning purposes.
- React and Material UI were chosen for their efficiency and ease of use in building modern web apps.