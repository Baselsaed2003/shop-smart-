// cart.js
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // إضافة منتج أو زيادة كميته إذا كان موجوداً
  addItem(product) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  // حذف منتج من السلة
  removeItem(productId) {
    this.items = this.items.filter(i => i.id !== productId);
  }

  // تحديث الكمية يدوياً
  updateQuantity(productId, quantity) {
    const item = this.items.find(i => i.id === productId);
    if (item && quantity > 0) {
      item.quantity = quantity;
    }
  }

  // حساب المجموع الكلي
  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}

module.exports = ShoppingCart;
