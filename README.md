# Project React - Teach Students

https://teach-students.netlify.app/

## Pre requisites
Before you begin, make sure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)

## Instructions to Run

### 1. Clone the Repository

Open the terminal and run the following command to clone the repository:

```bash
git clone https://github.com/DennerMoraes/tech-students.git
```

### 2. Navigate to the Project Directory
After the repository is cloned, navigate to the project directory:

```bash
cd teach-students
```

### 3. Install Dependencies
Install all the necessary dependencies using npm.

```bash
npm install
```

### 4. Run the Project
After installing the dependencies, you can start the development server.

```bash
npm run dev
```

### 5. Access the Application
Open your browser and go to:

```bash
http://localhost:3000
```

The React application should be running and accessible from this address.

### Project Structure

- public/ - Static public files, images.
- src/ -  Source code files for React, including components, styles, and tests.
- package.json - Contains project metadata and a list of dependencies.

## Documentation

### 1. Button
Reusable button component.

Properties:
label (string): Button text.
variation (string): CSS class for style variation.

### 2. Carousel
Item carousel component.

Property:
carouselData (array): Item data (name, description, image, icon).

### 3. Footer
Footer component with logo and links.

Property:
footerDesc (string): Description displayed in the footer.

### 4. Header
Header with logo, navigation and "Request a quote" button.

Functionality:
Navigation menu with toggles on mobile devices.

### 5. Hero
Hero section component with title, description and profile.

### 6. ImageVariations
Component to display variable images (desktop, mobile, aux).

### 7. TextGrid
Component to display a list of items with title, description and icons.

### 8. TextTeaser
Component to display a text teaser with title and description.

### 9. Home
Core component that uses all of the above components to structure the home page.
