// Mercedes-Benz Car Configurator Data

// Car Models Data
const carModels = [
    {
        id: 1,
        name: "A-Class Sedan",
        category: "sedan",
        basePrice: 33950,
        description: "The sporty compact sedan with advanced technology.",
        image: "images/cars/a-class.jpg",
        colors: [1, 2, 3, 4, 5],
        wheels: [1, 2, 3],
        interiors: [1, 2, 3],
        packages: [1, 2, 3]
    },
    {
        id: 2,
        name: "C-Class Sedan",
        category: "sedan",
        basePrice: 41600,
        description: "Sophisticated luxury with cutting-edge features.",
        image: "images/cars/c-class.jpg",
        colors: [1, 2, 3, 4, 5, 6],
        wheels: [2, 3, 4],
        interiors: [1, 2, 4],
        packages: [1, 2, 3, 4]
    },
    {
        id: 3,
        name: "E-Class Sedan",
        category: "sedan",
        basePrice: 54950,
        description: "Elegant design with innovative comfort and safety.",
        image: "images/cars/e-class.jpg",
        colors: [2, 3, 5, 6, 7],
        wheels: [3, 4, 5],
        interiors: [2, 3, 4, 5],
        packages: [2, 3, 4, 5]
    },
    {
        id: 4,
        name: "S-Class Sedan",
        category: "sedan",
        basePrice: 111100,
        description: "The ultimate in luxury, technology, and comfort.",
        image: "images/cars/s-class.jpg",
        colors: [3, 5, 6, 7, 8],
        wheels: [4, 5, 6],
        interiors: [3, 4, 5, 6],
        packages: [3, 4, 5, 6]
    },
    {
        id: 5,
        name: "GLA SUV",
        category: "suv",
        basePrice: 36400,
        description: "The compact SUV that's big on agility.",
        image: "images/cars/gla.jpg",
        colors: [1, 2, 3, 4, 5],
        wheels: [1, 2, 3],
        interiors: [1, 2, 3],
        packages: [1, 2, 3]
    },
    {
        id: 6,
        name: "GLC SUV",
        category: "suv",
        basePrice: 43850,
        description: "Versatile and sophisticated midsize SUV.",
        image: "images/cars/glc.jpg",
        colors: [2, 3, 4, 5, 6],
        wheels: [2, 3, 4],
        interiors: [2, 3, 4],
        packages: [2, 3, 4]
    },
    {
        id: 7,
        name: "GLE SUV",
        category: "suv",
        basePrice: 56750,
        description: "Spacious and powerful with advanced features.",
        image: "images/cars/gle.jpg",
        colors: [3, 4, 5, 6, 7],
        wheels: [3, 4, 5],
        interiors: [3, 4, 5],
        packages: [3, 4, 5]
    },
    {
        id: 8,
        name: "CLA Coupe",
        category: "coupe",
        basePrice: 38200,
        description: "Four-door coupe with striking design.",
        image: "images/cars/cla.jpg",
        colors: [1, 3, 5, 7, 8],
        wheels: [2, 3, 4],
        interiors: [1, 3, 5],
        packages: [1, 3, 5]
    },
    {
        id: 9,
        name: "AMG GT Coupe",
        category: "coupe",
        basePrice: 118600,
        description: "High-performance sports car with racing DNA.",
        image: "images/cars/amg-gt.jpg",
        colors: [3, 5, 7, 8, 9],
        wheels: [4, 5, 6],
        interiors: [3, 5, 6],
        packages: [3, 5, 6]
    },
    {
        id: 10,
        name: "EQS Sedan",
        category: "electric",
        basePrice: 102310,
        description: "All-electric luxury sedan with impressive range.",
        image: "images/cars/eqs.jpg",
        colors: [2, 4, 6, 8, 9],
        wheels: [3, 5, 6],
        interiors: [2, 4, 6],
        packages: [2, 4, 6]
    },
    {
        id: 11,
        name: "EQB SUV",
        category: "electric",
        basePrice: 54500,
        description: "Versatile all-electric SUV with seating for up to seven.",
        image: "images/cars/eqb.jpg",
        colors: [1, 3, 5, 7, 9],
        wheels: [2, 4, 6],
        interiors: [1, 3, 5],
        packages: [1, 3, 5]
    }
];

// Colors Data
const colors = [
    {
        id: 1,
        name: "Polar White",
        hexCode: "#FFFFFF",
        price: 0
    },
    {
        id: 2,
        name: "Obsidian Black",
        hexCode: "#0A0A0A",
        price: 0
    },
    {
        id: 3,
        name: "Iridium Silver",
        hexCode: "#BDC3C7",
        price: 750
    },
    {
        id: 4,
        name: "Mojave Silver",
        hexCode: "#A2A2A2",
        price: 750
    },
    {
        id: 5,
        name: "Selenite Grey",
        hexCode: "#6C6C6C",
        price: 750
    },
    {
        id: 6,
        name: "Brilliant Blue",
        hexCode: "#0066CC",
        price: 1050
    },
    {
        id: 7,
        name: "Emerald Green",
        hexCode: "#046307",
        price: 1050
    },
    {
        id: 8,
        name: "Cardinal Red",
        hexCode: "#C41E3A",
        price: 1050
    },
    {
        id: 9,
        name: "Designo Mountain Grey",
        hexCode: "#5D6D7E",
        price: 1500
    }
];

// Wheels Data
const wheels = [
    {
        id: 1,
        name: "17-inch 5-spoke wheels",
        image: "images/wheels/wheel1.jpg",
        price: 0
    },
    {
        id: 2,
        name: "18-inch 5-twin-spoke wheels",
        image: "images/wheels/wheel2.jpg",
        price: 500
    },
    {
        id: 3,
        name: "19-inch AMG 5-twin-spoke wheels",
        image: "images/wheels/wheel3.jpg",
        price: 1200
    },
    {
        id: 4,
        name: "19-inch multi-spoke wheels",
        image: "images/wheels/wheel4.jpg",
        price: 1200
    },
    {
        id: 5,
        name: "20-inch AMG multi-spoke wheels",
        image: "images/wheels/wheel5.jpg",
        price: 2000
    },
    {
        id: 6,
        name: "21-inch AMG cross-spoke forged wheels",
        image: "images/wheels/wheel6.jpg",
        price: 3500
    }
];

// Interior Options Data
const interiors = [
    {
        id: 1,
        name: "MB-Tex - Black",
        image: "images/interiors/interior1.jpg",
        price: 0
    },
    {
        id: 2,
        name: "MB-Tex - Beige",
        image: "images/interiors/interior2.jpg",
        price: 0
    },
    {
        id: 3,
        name: "Leather - Black",
        image: "images/interiors/interior3.jpg",
        price: 1500
    },
    {
        id: 4,
        name: "Leather - Brown",
        image: "images/interiors/interior4.jpg",
        price: 1500
    },
    {
        id: 5,
        name: "Nappa Leather - Black",
        image: "images/interiors/interior5.jpg",
        price: 2500
    },
    {
        id: 6,
        name: "Nappa Leather - Macchiato Beige",
        image: "images/interiors/interior6.jpg",
        price: 2500
    }
];

// Packages Data
const packages = [
    {
        id: 1,
        name: "Premium Package",
        description: "10.25-inch touchscreen, Blind Spot Assist, Keyless-Go",
        price: 1950
    },
    {
        id: 2,
        name: "Multimedia Package",
        description: "Navigation, Augmented Video, Traffic Sign Assist",
        price: 1295
    },
    {
        id: 3,
        name: "Driver Assistance Package",
        description: "Active Distance Assist, Active Steering Assist, Active Lane Change Assist",
        price: 1700
    },
    {
        id: 4,
        name: "Parking Assistance Package",
        description: "Active Parking Assist, Surround View System",
        price: 1290
    },
    {
        id: 5,
        name: "AMG Line Package",
        description: "AMG body styling, Sport suspension, Sport steering",
        price: 2550
    },
    {
        id: 6,
        name: "Executive Package",
        description: "Head-Up Display, Heated rear seats, 4-zone climate control",
        price: 3600
    }
];