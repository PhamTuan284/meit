// Shared product data for consistency across components

// Simple seeded random function for deterministic data
const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Generate 100 fashion products
export const generateFashionProducts = () => {
  const products = [];
  const brands = ['FEAR OF GOD', 'ESSENTIALS', 'MEIT FASHION', 'LUXURY COLLECTION', 'STREET STYLE'];
  const categories = ['Hoodie', 'T-Shirt', 'Jeans', 'Jacket', 'Sweater', 'Pants', 'Shirt', 'Dress', 'Skirt', 'Coat'];
  const colors = ['Black', 'White', 'Gray', 'Navy', 'Brown', 'Beige', 'Olive', 'Burgundy'];
  
  // Fashion product images with different variations
  const fashionImages = [
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=800&fit=crop'
  ];
  
  // Additional fashion images for gallery
  const fashionGalleryImages = [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop'
  ];
  
  // Detail and lifestyle images
  const fashionDetailImages = [
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop'
  ];
  
  for (let i = 1; i <= 100; i++) {
    const brand = brands[Math.floor(seededRandom(i * 100) * brands.length)];
    const category = categories[Math.floor(seededRandom(i * 200) * categories.length)];
    const color = colors[Math.floor(seededRandom(i * 300) * colors.length)];
    const price = Math.floor(seededRandom(i * 400) * 50000000) + 1000000; // 1M to 50M VND
    
    // Select deterministic images for this product
    const imageIndex = Math.floor(seededRandom(i * 500) * fashionImages.length);
    const galleryIndex = Math.floor(seededRandom(i * 600) * fashionGalleryImages.length);
    const detailIndex = Math.floor(seededRandom(i * 700) * fashionDetailImages.length);
    
    // Create array of all images for this product
    const allImages = [
      fashionImages[imageIndex],
      fashionGalleryImages[galleryIndex],
      fashionDetailImages[detailIndex],
      fashionImages[(imageIndex + 1) % fashionImages.length],
      fashionGalleryImages[(galleryIndex + 1) % fashionGalleryImages.length]
    ];
    
    products.push({
      id: i,
      name: `${category} ${color}`,
      price: `${price.toLocaleString('vi-VN')}₫`,
      image: allImages[0], // Main image
      imageHover: allImages[1], // Hover image
      images: allImages, // All images for gallery
      brand: brand,
      preorder: seededRandom(i * 800) > 0.8, // 20% chance of preorder
      description: `Premium ${category.toLowerCase()} in ${color.toLowerCase()} color. Made with high-quality materials for ultimate comfort and style. Perfect for everyday wear and special occasions.`,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      inStock: seededRandom(i * 900) > 0.1, // 90% chance of being in stock
    });
  }
  
  return products;
};

// Generate 100 household products
export const generateHouseholdProducts = () => {
  const products = [];
  const brands = ['MEIT HOME', 'LUXURY KITCHEN', 'PREMIUM LIVING', 'SMART HOME', 'ECO FRIENDLY'];
  const categories = ['Bộ nồi', 'Máy xay', 'Bộ bát đĩa', 'Tủ lạnh', 'Máy giặt', 'Lò vi sóng', 'Bình nước', 'Ghế sofa', 'Bàn ăn', 'Tủ quần áo'];
  const materials = ['Inox cao cấp', 'Sứ cao cấp', 'Gỗ tự nhiên', 'Thép không gỉ', 'Nhựa cao cấp', 'Thủy tinh', 'Gốm sứ', 'Kim loại'];
  
  // Household product images
  const householdImages = [
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop'
  ];
  
  // Additional household images for gallery
  const householdGalleryImages = [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop'
  ];
  
  // Detail and lifestyle images
  const householdDetailImages = [
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop'
  ];
  
  for (let i = 1; i <= 100; i++) {
    const brand = brands[Math.floor(seededRandom(i * 100) * brands.length)];
    const category = categories[Math.floor(seededRandom(i * 200) * categories.length)];
    const material = materials[Math.floor(seededRandom(i * 300) * materials.length)];
    const price = Math.floor(seededRandom(i * 400) * 10000000) + 500000; // 500K to 10M VND
    
    // Select deterministic images for this product
    const imageIndex = Math.floor(seededRandom(i * 500) * householdImages.length);
    const galleryIndex = Math.floor(seededRandom(i * 600) * householdGalleryImages.length);
    const detailIndex = Math.floor(seededRandom(i * 700) * householdDetailImages.length);
    
    // Create array of all images for this product
    const allImages = [
      householdImages[imageIndex],
      householdGalleryImages[galleryIndex],
      householdDetailImages[detailIndex],
      householdImages[(imageIndex + 1) % householdImages.length],
      householdGalleryImages[(galleryIndex + 1) % householdGalleryImages.length]
    ];
    
    products.push({
      id: i,
      name: `${category} ${material}`,
      price: `${price.toLocaleString('vi-VN')}₫`,
      image: allImages[0], // Main image
      imageHover: allImages[1], // Hover image
      images: allImages, // All images for gallery
      brand: brand,
      preorder: seededRandom(i * 800) > 0.85, // 15% chance of preorder
      description: `Chất lượng cao ${category.toLowerCase()} làm từ ${material.toLowerCase()}. Thiết kế hiện đại, bền bỉ và an toàn cho gia đình.`,
      sizes: ['Nhỏ', 'Vừa', 'Lớn', 'Đặc biệt'],
      inStock: seededRandom(i * 900) > 0.1, // 90% chance of being in stock
    });
  }
  
  return products;
};

// Generate the products once and export them
export const fashionProducts = generateFashionProducts();
export const householdProducts = generateHouseholdProducts(); 