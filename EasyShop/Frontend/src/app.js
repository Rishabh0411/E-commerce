// Application-wide configuration and settings
export const APP_CONFIG = {
    name: 'EasyShop',
    version: '1.0.0',
    description: 'Your one-stop shop for everything you need!',
    contact: {
        email: 'support@easyshop.com',
        phone: '+1-XXX-XXX-XXXX'
    }
}

// Theme configuration
export const THEME = {
    colors: {
        primary: '#6050DC',
        secondary: '#4c3fd1',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#343a40'
    },
    fonts: {
        primary: "'Roboto', sans-serif",
        heading: "'Poppins', sans-serif"
    },
    spacing: {
        section: '5rem',
        container: '1rem',
        element: '0.5rem'
    }
}

// API Configuration (importing from services/api.js)
export { API_BASE_URL, API_ENDPOINT } from './services/api'

// Route Configuration
export const ROUTES = {
    home: '/',
    products: '/products',
    product: '/product/:id',
    cart: '/cart',
    checkout: '/checkout',
    about: '/about',
    contact: '/contact'
}

// Validation Rules
export const VALIDATION = {
    password: {
        minLength: 8,
        requireUppercase: true,
        requireLowercase: true,
        requireNumber: true,
        requireSpecialChar: true
    },
    username: {
        minLength: 3,
        maxLength: 20
    }
}

// Image Configuration
export const IMAGE_CONFIG = {
    placeholder: 'https://via.placeholder.com/150',
    thumbnailSize: {
        width: 150,
        height: 150
    },
    productSize: {
        width: 300,
        height: 300
    }
}

// Local Storage Keys
export const STORAGE_KEYS = {
    token: 'easyshop_token',
    user: 'easyshop_user',
    cart: 'easyshop_cart',
    theme: 'easyshop_theme'
}

// Feature Flags
export const FEATURES = {
    enableAuth: true,
    enableCart: true,
    enableWishlist: false,
    enableReviews: true,
    darkMode: true
}

// Social Media Links
export const SOCIAL_LINKS = {
    facebook: 'https://facebook.com/easyshop',
    twitter: 'https://twitter.com/easyshop',
    instagram: 'https://instagram.com/easyshop'
}
