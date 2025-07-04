// Mercedes-Benz Car Configurator Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

// Global variables to track current configuration
let currentModel = null;
let currentColor = null;
let currentWheel = null;
let currentInterior = null;
let selectedPackages = [];

// Initialize the application
function initApp() {
    // Load car models
    loadCarModels('all');
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize configurator
    initConfigurator();
}

// Load car models based on category
function loadCarModels(category) {
    const modelGrid = document.querySelector('.model-grid');
    modelGrid.innerHTML = '';
    
    let filteredModels = carModels;
    if (category !== 'all') {
        filteredModels = carModels.filter(model => model.category === category);
    }
    
    if (filteredModels.length === 0) {
        modelGrid.innerHTML = '<p class="no-results">No models found in this category.</p>';
        return;
    }
    
    filteredModels.forEach(model => {
        const modelCard = document.createElement('div');
        modelCard.className = 'model-card';
        modelCard.setAttribute('data-id', model.id);
        
        modelCard.innerHTML = `
            <div class="model-image">
                <img src="${model.image}" alt="${model.name}">
            </div>
            <div class="model-info">
                <h3>${model.name}</h3>
                <p>${model.description}</p>
                <p class="price">Starting at $${model.basePrice.toLocaleString()}</p>
                <button class="btn configure-btn" data-id="${model.id}">Configure</button>
            </div>
        `;
        
        modelGrid.appendChild(modelCard);
    });
    
    // Add event listeners to configure buttons
    document.querySelectorAll('.configure-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const modelId = parseInt(this.getAttribute('data-id'));
            selectModel(modelId);
            document.getElementById('configurator').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Set up event listeners
function setupEventListeners() {
    // Category filter buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadCarModels(this.getAttribute('data-category'));
        });
    });
    
    // Model select dropdown
    document.getElementById('model-select').addEventListener('change', function() {
        const modelId = parseInt(this.value);
        if (modelId) {
            selectModel(modelId);
        } else {
            resetConfigurator();
        }
    });
    
    // Save configuration button
    document.querySelector('.save-config').addEventListener('click', function() {
        if (currentModel) {
            saveConfiguration();
        } else {
            alert('Please select a model to configure.');
        }
    });
    
    // Mobile menu toggle (for responsive design)
    const mobileMenuBtn = document.createElement('div');
    mobileMenuBtn.className = 'mobile-menu';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('header .container').appendChild(mobileMenuBtn);
    
    mobileMenuBtn.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('active');
    });
}

// Initialize the configurator
function initConfigurator() {
    // Populate model select dropdown
    const modelSelect = document.getElementById('model-select');
    modelSelect.innerHTML = '<option value="">Choose a model</option>';
    
    carModels.forEach(model => {
        const option = document.createElement('option');
        option.value = model.id;
        option.textContent = model.name;
        modelSelect.appendChild(option);
    });
    
    // Set default image
    document.getElementById('car-image').src = 'images/cars/default.jpg';
}

// Select a model for configuration
function selectModel(modelId) {
    currentModel = carModels.find(model => model.id === modelId);
    
    if (!currentModel) return;
    
    // Update model select dropdown
    document.getElementById('model-select').value = modelId;
    
    // Update car image
    document.getElementById('car-image').src = currentModel.image;
    
    // Reset other selections
    currentColor = null;
    currentWheel = null;
    currentInterior = null;
    selectedPackages = [];
    
    // Load color options
    loadColorOptions();
    
    // Load wheel options
    loadWheelOptions();
    
    // Load interior options
    loadInteriorOptions();
    
    // Load package options
    loadPackageOptions();
    
    // Update price summary
    updatePriceSummary();
}

// Load color options for the selected model
function loadColorOptions() {
    const colorOptionsContainer = document.querySelector('.color-options');
    colorOptionsContainer.innerHTML = '';
    
    if (!currentModel) return;
    
    currentModel.colors.forEach(colorId => {
        const color = colors.find(c => c.id === colorId);
        if (color) {
            const colorOption = document.createElement('div');
            colorOption.className = 'color-option';
            colorOption.setAttribute('data-id', color.id);
            colorOption.style.backgroundColor = color.hexCode;
            colorOption.title = `${color.name} (+$${color.price.toLocaleString()})`;
            
            colorOptionsContainer.appendChild(colorOption);
            
            colorOption.addEventListener('click', function() {
                document.querySelectorAll('.color-option').forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                currentColor = color;
                updatePriceSummary();
            });
        }
    });
}

// Load wheel options for the selected model
function loadWheelOptions() {
    const wheelOptionsContainer = document.querySelector('.wheel-options');
    wheelOptionsContainer.innerHTML = '';
    
    if (!currentModel) return;
    
    currentModel.wheels.forEach(wheelId => {
        const wheel = wheels.find(w => w.id === wheelId);
        if (wheel) {
            const wheelOption = document.createElement('div');
            wheelOption.className = 'wheel-option';
            wheelOption.setAttribute('data-id', wheel.id);
            wheelOption.innerHTML = `
                <img src="${wheel.image}" alt="${wheel.name}" width="50">
                <span>${wheel.name}</span>
                <span>+$${wheel.price.toLocaleString()}</span>
            `;
            
            wheelOptionsContainer.appendChild(wheelOption);
            
            wheelOption.addEventListener('click', function() {
                document.querySelectorAll('.wheel-option').forEach(w => w.classList.remove('active'));
                this.classList.add('active');
                currentWheel = wheel;
                updatePriceSummary();
            });
        }
    });
}

// Load interior options for the selected model
function loadInteriorOptions() {
    const interiorOptionsContainer = document.querySelector('.interior-options');
    interiorOptionsContainer.innerHTML = '';
    
    if (!currentModel) return;
    
    currentModel.interiors.forEach(interiorId => {
        const interior = interiors.find(i => i.id === interiorId);
        if (interior) {
            const interiorOption = document.createElement('div');
            interiorOption.className = 'interior-option';
            interiorOption.setAttribute('data-id', interior.id);
            interiorOption.innerHTML = `
                <img src="${interior.image}" alt="${interior.name}" width="50">
                <span>${interior.name}</span>
                <span>+$${interior.price.toLocaleString()}</span>
            `;
            
            interiorOptionsContainer.appendChild(interiorOption);
            
            interiorOption.addEventListener('click', function() {
                document.querySelectorAll('.interior-option').forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                currentInterior = interior;
                updatePriceSummary();
            });
        }
    });
}

// Load package options for the selected model
function loadPackageOptions() {
    const packageOptionsContainer = document.querySelector('.package-options');
    packageOptionsContainer.innerHTML = '';
    
    if (!currentModel) return;
    
    currentModel.packages.forEach(packageId => {
        const pkg = packages.find(p => p.id === packageId);
        if (pkg) {
            const packageOption = document.createElement('div');
            packageOption.className = 'package-option';
            packageOption.setAttribute('data-id', pkg.id);
            packageOption.innerHTML = `
                <h4>${pkg.name} <span>+$${pkg.price.toLocaleString()}</span></h4>
                <p>${pkg.description}</p>
            `;
            
            packageOptionsContainer.appendChild(packageOption);
            
            packageOption.addEventListener('click', function() {
                this.classList.toggle('active');
                
                if (this.classList.contains('active')) {
                    selectedPackages.push(pkg);
                } else {
                    selectedPackages = selectedPackages.filter(p => p.id !== pkg.id);
                }
                
                updatePriceSummary();
            });
        }
    });
}

// Update the price summary
function updatePriceSummary() {
    if (!currentModel) {
        document.getElementById('base-price').textContent = '$0';
        document.getElementById('options-price').textContent = '$0';
        document.getElementById('total-price').textContent = '$0';
        return;
    }
    
    const basePrice = currentModel.basePrice;
    document.getElementById('base-price').textContent = `$${basePrice.toLocaleString()}`;
    
    let optionsPrice = 0;
    
    if (currentColor) {
        optionsPrice += currentColor.price;
    }
    
    if (currentWheel) {
        optionsPrice += currentWheel.price;
    }
    
    if (currentInterior) {
        optionsPrice += currentInterior.price;
    }
    
    selectedPackages.forEach(pkg => {
        optionsPrice += pkg.price;
    });
    
    document.getElementById('options-price').textContent = `$${optionsPrice.toLocaleString()}`;
    document.getElementById('total-price').textContent = `$${(basePrice + optionsPrice).toLocaleString()}`;
}

// Reset the configurator
function resetConfigurator() {
    currentModel = null;
    currentColor = null;
    currentWheel = null;
    currentInterior = null;
    selectedPackages = [];
    
    document.getElementById('model-select').value = '';
    document.getElementById('car-image').src = 'images/cars/default.jpg';
    
    document.querySelector('.color-options').innerHTML = '';
    document.querySelector('.wheel-options').innerHTML = '';
    document.querySelector('.interior-options').innerHTML = '';
    document.querySelector('.package-options').innerHTML = '';
    
    updatePriceSummary();
}

// Save the current configuration
function saveConfiguration() {
    if (!currentModel) return;
    
    const configuration = {
        model: currentModel,
        color: currentColor,
        wheel: currentWheel,
        interior: currentInterior,
        packages: selectedPackages,
        totalPrice: currentModel.basePrice + 
                   (currentColor ? currentColor.price : 0) + 
                   (currentWheel ? currentWheel.price : 0) + 
                   (currentInterior ? currentInterior.price : 0) + 
                   selectedPackages.reduce((sum, pkg) => sum + pkg.price, 0)
    };
    
    // In a real application, this would send the data to a server or save it locally
    // For this demo, we'll just show an alert
    alert(`Configuration saved!\n\nModel: ${configuration.model.name}\nTotal Price: $${configuration.totalPrice.toLocaleString()}`);
    
    // You could also save to localStorage for persistence
    localStorage.setItem('savedConfiguration', JSON.stringify(configuration));
}