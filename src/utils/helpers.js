// Common utility functions

/**
 * Format price to Vietnamese currency
 * @param {number} price - Price in VND
 * @returns {string} Formatted price string
 */
export const formatPrice = (price) => {
  return `${price.toLocaleString('vi-VN')}₫`;
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number format (Vietnamese)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone number
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^[0-9]{10,11}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Generate a random ID
 * @returns {string} Random ID
 */
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Calculate total price with tax
 * @param {number} price - Base price
 * @param {number} taxRate - Tax rate (default 0.1 for 10%)
 * @returns {number} Total price with tax
 */
export const calculateTotalWithTax = (price, taxRate = 0.1) => {
  return price * (1 + taxRate);
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

/**
 * Get category from URL pathname
 * @param {string} pathname - URL pathname
 * @returns {string|null} Category name or null
 */
export const getCategoryFromPath = (pathname) => {
  if (pathname.includes('/fashion/')) return 'fashion';
  if (pathname.includes('/household-goods/')) return 'household-goods';
  return null;
}; 