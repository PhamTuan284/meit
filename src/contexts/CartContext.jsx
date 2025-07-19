import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Cart item structure
const CartContext = createContext();

// Cart reducer for state management
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      { const existingItem = state.items.find(
        item => item.id === action.payload.id && item.size === action.payload.size
      );
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && item.size === action.payload.size
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      } }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => 
          !(item.id === action.payload.id && item.size === action.payload.size)
        )
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.size === action.payload.size
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };

    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload.items || []
      };

    default:
      return state;
  }
};

// Cart provider component
export const CartProvider = ({ children }) => {
  // Initialize state with localStorage data
  const getInitialState = () => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (parsedCart.items && Array.isArray(parsedCart.items)) {
          console.log('Initializing cart from localStorage:', parsedCart.items.length, 'items');
          return { items: parsedCart.items };
        }
      }
    } catch (error) {
      console.error('Error loading initial cart from localStorage:', error);
      localStorage.removeItem('cart');
    }
    return { items: [] };
  };

  const [state, dispatch] = useReducer(cartReducer, getInitialState());

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    // Skip saving on initial load to prevent overwriting with empty state
    if (state.items.length > 0 || localStorage.getItem('cart')) {
      try {
        localStorage.setItem('cart', JSON.stringify(state));
        console.log('Saving cart to localStorage:', state.items.length, 'items');
      } catch (error) {
        console.error('Error saving cart to localStorage:', error);
      }
    }
  }, [state]);

  // Calculate total items in cart
  const totalItems = state.items.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price
  const totalPrice = state.items.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    return total + (price * item.quantity);
  }, 0);

  // Add item to cart
  const addToCart = (product, size, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.images ? product.images[0] : product.image,
        size: size,
        quantity: quantity,
        category: product.category || 'fashion'
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id, size) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { id, size }
    });
  };

  // Update item quantity
  const updateQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
    } else {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id, size, quantity }
      });
    }
  };

  // Clear entire cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Debug function to check localStorage
  const debugCart = () => {
    const saved = localStorage.getItem('cart');
    console.log('Current localStorage cart:', saved);
    console.log('Current state cart:', state);
  };

  const value = {
    items: state.items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    debugCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 