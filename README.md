# Mercedes-Benz Car Configurator

A responsive Mercedes-Benz branded car configuration website that allows users to explore different car models and customize them with various options. This project is designed to be hosted on GitHub Pages.

## Features

- Responsive design that works on desktop, tablet, and mobile devices
- Car model browsing with category filtering (Sedan, SUV, Coupe, Electric)
- Detailed car configurator with the following options:
  - Exterior color selection
  - Wheel options
  - Interior options
  - Optional packages
- Real-time price updates as options are selected
- Configuration saving functionality

## Project Structure

```
mercedes-benz-configurator/
│
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # CSS styles
├── js/
│   ├── data.js             # Car models and options data
│   └── main.js             # Main JavaScript functionality
├── images/
│   ├── mercedes-logo.png   # Mercedes-Benz logo
│   ├── hero-bg.jpg         # Hero section background
│   ├── about-mercedes.jpg  # About section image
│   ├── cars/               # Car model images
│   ├── wheels/             # Wheel option images
│   └── interiors/          # Interior option images
└── README.md               # Project documentation
```

## Image Requirements

Before deploying the website, you need to add the following images:

### Required Images

1. **Logo**: 
   - `images/mercedes-logo.png` - Mercedes-Benz star logo (preferably white or black version)

2. **Background Images**:
   - `images/hero-bg.jpg` - A high-quality image of a Mercedes-Benz car for the hero section
   - `images/about-mercedes.jpg` - An image for the about section (e.g., Mercedes-Benz headquarters or historical photo)

3. **Car Images**:
   - `images/cars/default.jpg` - Default car image
   - `images/cars/a-class.jpg` - A-Class Sedan
   - `images/cars/c-class.jpg` - C-Class Sedan
   - `images/cars/e-class.jpg` - E-Class Sedan
   - `images/cars/s-class.jpg` - S-Class Sedan
   - `images/cars/gla.jpg` - GLA SUV
   - `images/cars/glc.jpg` - GLC SUV
   - `images/cars/gle.jpg` - GLE SUV
   - `images/cars/cla.jpg` - CLA Coupe
   - `images/cars/amg-gt.jpg` - AMG GT Coupe
   - `images/cars/eqs.jpg` - EQS Sedan
   - `images/cars/eqb.jpg` - EQB SUV

4. **Wheel Images**:
   - `images/wheels/wheel1.jpg` through `images/wheels/wheel6.jpg` - Images of different wheel options

5. **Interior Images**:
   - `images/interiors/interior1.jpg` through `images/interiors/interior6.jpg` - Images of different interior options

## Image Placeholder Solution

Until you have the actual images, you can use placeholder services like:

1. For specific dimensions: `https://via.placeholder.com/800x600`
2. For car-specific placeholders: `https://placehold.co/600x400/e4e4e4/000000?text=Mercedes+A-Class`

## Deploying to GitHub Pages

1. Create a new GitHub repository
2. Push your code to the repository:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/mercedes-benz-configurator.git
   git push -u origin main
   ```

3. Go to your repository settings on GitHub
4. Scroll down to the "GitHub Pages" section
5. Select the branch you want to deploy (usually `main` or `master`)
6. Click "Save"
7. Your site will be published at `https://yourusername.github.io/mercedes-benz-configurator/`

## Customization

- To add or modify car models, edit the `carModels` array in `js/data.js`
- To change color options, edit the `colors` array in `js/data.js`
- To modify wheel options, edit the `wheels` array in `js/data.js`
- To change interior options, edit the `interiors` array in `js/data.js`
- To modify package options, edit the `packages` array in `js/data.js`

## Legal Disclaimer

This project is for educational purposes only. Mercedes-Benz is a registered trademark of Daimler AG. This project is not affiliated with, endorsed by, or connected to Mercedes-Benz or Daimler AG in any way.

## License

This project is available for personal and educational use.