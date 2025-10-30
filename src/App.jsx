import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, X, Check } from 'lucide-react';

const menuItems = [
    {
        id: 1,
        name: 'Spring Rolls',
        category: 'Appetizers',
        price: 8.99,
        description: 'Crispy vegetable spring rolls served with sweet chili sauce',
        image: 'https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaW5nJTIwcm9sbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800'
    },
    {
        id: 2,
        name: 'Chicken Dumplings',
        category: 'Appetizers',
        price: 10.99,
        description: 'Steamed dumplings filled with seasoned chicken',
        image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop'
    },
    {
        id: 3,
        name: 'Edamame',
        category: 'Appetizers',
        price: 6.99,
        description: 'Steamed soybeans with sea salt',
        image: 'https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVkYW1hbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800'
    },
    {
        id: 4,
        name: 'Pad Thai',
        category: 'Main Course',
        price: 15.99,
        description: 'Classic Thai stir-fried noodles with shrimp, peanuts, and lime',
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop'
    },
    {
        id: 5,
        name: 'Teriyaki Chicken',
        category: 'Main Course',
        price: 16.99,
        description: 'Grilled chicken glazed with teriyaki sauce, served with rice',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop'
    },
    {
        id: 6,
        name: 'Beef Stir Fry',
        category: 'Main Course',
        price: 18.99,
        description: 'Tender beef with mixed vegetables in savory sauce',
        image: 'https://media.istockphoto.com/id/165955462/photo/beef-and-vegetable-stir-fry.webp?a=1&b=1&s=612x612&w=0&k=20&c=zjd8XsdNPlTzUNubMB9kwQugCRWntayk_Htjy2n5P3Y='
    },
    {
        id: 7,
        name: 'Vegetable Fried Rice',
        category: 'Main Course',
        price: 12.99,
        description: 'Wok-fried rice with fresh vegetables and egg',
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop'
    },
    {
        id: 8,
        name: 'Sushi Platter',
        category: 'Main Course',
        price: 22.99,
        description: 'Assorted fresh sushi rolls and nigiri',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop'
    },
    {
        id: 9,
        name: 'Mango Sticky Rice',
        category: 'Desserts',
        price: 7.99,
        description: 'Sweet coconut sticky rice with fresh mango',
        image: 'https://images.unsplash.com/photo-1705234384751-84081009588e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuZ28lMjBzdGlja3klMjByaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800'
    },
    {
        id: 10,
        name: 'Matcha Ice Cream',
        category: 'Desserts',
        price: 5.99,
        description: 'Premium green tea ice cream',
        image: 'https://plus.unsplash.com/premium_photo-1663853489900-3f24ea776dea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWF0Y2hhJTIwaWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800'
    },
    {
        id: 11,
        name: 'Thai Iced Tea',
        category: 'Drinks',
        price: 4.99,
        description: 'Sweet and creamy Thai tea over ice',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop'
    },
    {
        id: 12,
        name: 'Fresh Lemonade',
        category: 'Drinks',
        price: 3.99,
        description: 'Freshly squeezed lemonade',
        image: 'https://images.unsplash.com/photo-1665582295782-eecc2e25b74f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlc2glMjBsZW1vbmFkZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800'
    }
];

const categories = ['All', 'Appetizers', 'Main Course', 'Desserts', 'Drinks'];

const styles = {
    container: {
        minHeight: '100vh',
        backgroundColor: '#fef3e2',
        fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
        background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
        color: 'white',
        padding: '24px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
    },
    headerContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
    },
    logo: {
        fontSize: '32px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    },
    cartButton: {
        backgroundColor: 'white',
        color: '#ff6b35',
        padding: '12px 24px',
        borderRadius: '24px',
        border: 'none',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        transition: 'transform 0.2s',
        position: 'relative'
    },
    cartBadge: {
        position: 'absolute',
        top: '-8px',
        right: '-8px',
        backgroundColor: '#ff3b3b',
        color: 'white',
        borderRadius: '50%',
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 'bold'
    },
    main: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '32px 24px'
    },
    hero: {
        textAlign: 'center',
        marginBottom: '48px'
    },
    heroTitle: {
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#2d3436',
        marginBottom: '16px'
    },
    heroSubtitle: {
        fontSize: '20px',
        color: '#636e72',
        marginBottom: '8px'
    },
    categoryFilter: {
        display: 'flex',
        gap: '12px',
        marginBottom: '32px',
        overflowX: 'auto',
        paddingBottom: '8px',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    categoryButton: {
        padding: '10px 20px',
        borderRadius: '20px',
        border: '2px solid #ff6b35',
        backgroundColor: 'white',
        color: '#ff6b35',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s',
        whiteSpace: 'nowrap'
    },
    categoryButtonActive: {
        backgroundColor: '#ff6b35',
        color: 'white'
    },
    menuGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
        marginBottom: '48px'
    },
    menuCard: {
        backgroundColor: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer'
    },
    menuCardImage: {
        width: '100%',
        height: '200px',
        objectFit: 'cover'
    },
    menuCardContent: {
        padding: '20px'
    },
    menuCardTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#2d3436',
        marginBottom: '8px'
    },
    menuCardDescription: {
        fontSize: '14px',
        color: '#636e72',
        marginBottom: '16px',
        lineHeight: '1.5'
    },
    menuCardFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    price: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#ff6b35'
    },
    addButton: {
        backgroundColor: '#ff6b35',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        transition: 'background-color 0.3s'
    },
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px'
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: '16px',
        maxWidth: '500px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        position: 'relative'
    },
    modalHeader: {
        background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
        color: 'white',
        padding: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1
    },
    closeButton: {
        background: 'none',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        padding: '4px'
    },
    modalBody: {
        padding: '24px'
    },
    cartItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        marginBottom: '12px'
    },
    cartItemInfo: {
        flex: 1
    },
    cartItemName: {
        fontWeight: '600',
        fontSize: '16px',
        marginBottom: '4px'
    },
    cartItemPrice: {
        color: '#ff6b35',
        fontWeight: 'bold'
    },
    quantityControls: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
    },
    quantityButton: {
        backgroundColor: '#ff6b35',
        color: 'white',
        border: 'none',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s'
    },
    quantity: {
        fontWeight: 'bold',
        fontSize: '16px',
        minWidth: '30px',
        textAlign: 'center'
    },
    deleteButton: {
        backgroundColor: '#ff3b3b',
        color: 'white',
        border: 'none',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '12px'
    },
    summary: {
        marginTop: '24px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '12px'
    },
    summaryRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '12px',
        fontSize: '16px'
    },
    summaryTotal: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '16px',
        paddingTop: '16px',
        borderTop: '2px solid #dee2e6',
        fontSize: '20px',
        fontWeight: 'bold'
    },
    checkoutButton: {
        width: '100%',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        padding: '16px',
        borderRadius: '12px',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '16px',
        transition: 'background-color 0.3s'
    },
    emptyCart: {
        textAlign: 'center',
        padding: '48px 24px',
        color: '#636e72'
    },
    successMessage: {
        textAlign: 'center',
        padding: '48px 24px'
    },
    successIcon: {
        width: '80px',
        height: '80px',
        backgroundColor: '#28a745',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 24px'
    }
};

function ChopChopRestaurant() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const filteredItems = selectedCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === selectedCategory);

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const updateQuantity = (id, change) => {
        setCart(cart.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + change;
                return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
            }
            return item;
        }).filter(item => item.quantity > 0));
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    const placeOrder = () => {
        setOrderPlaced(true);
        setTimeout(() => {
            setOrderPlaced(false);
            setCart([]);
            setShowCart(false);
        }, 3000);
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <div style={styles.headerContent}>
                    <div style={styles.logo}>
                        🍜 Chop Chop
                    </div>
                    <button
                        style={styles.cartButton}
                        onClick={() => setShowCart(true)}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        <ShoppingCart size={20} />
                        Cart
                        {totalItems > 0 && (
                            <span style={styles.cartBadge}>{totalItems}</span>
                        )}
                    </button>
                </div>
            </header>

            <main style={styles.main}>
                <div style={styles.hero}>
                    <h1 style={styles.heroTitle}>Welcome to Chop Chop!</h1>
                    <p style={styles.heroSubtitle}>Fast, Fresh, Delicious Asian Cuisine</p>
                    <p style={{ color: '#95a5a6' }}>Order now for delivery or pickup</p>
                </div>

                <div style={styles.categoryFilter}>
                    {categories.map(category => (
                        <button
                            key={category}
                            style={{
                                ...styles.categoryButton,
                                ...(selectedCategory === category ? styles.categoryButtonActive : {})
                            }}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div style={styles.menuGrid}>
                    {filteredItems.map(item => (
                        <div
                            key={item.id}
                            style={styles.menuCard}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                            }}
                        >
                            <img src={item.image} alt={item.name} style={styles.menuCardImage} />
                            <div style={styles.menuCardContent}>
                                <h3 style={styles.menuCardTitle}>{item.name}</h3>
                                <p style={styles.menuCardDescription}>{item.description}</p>
                                <div style={styles.menuCardFooter}>
                                    <span style={styles.price}>${item.price.toFixed(2)}</span>
                                    <button
                                        style={styles.addButton}
                                        onClick={() => addToCart(item)}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#e85d2a'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6b35'}
                                    >
                                        <Plus size={16} />
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {showCart && (
                <div style={styles.modal} onClick={() => setShowCart(false)}>
                    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div style={styles.modalHeader}>
                            <h2>Your Cart</h2>
                            <button style={styles.closeButton} onClick={() => setShowCart(false)}>
                                <X size={24} />
                            </button>
                        </div>
                        <div style={styles.modalBody}>
                            {orderPlaced ? (
                                <div style={styles.successMessage}>
                                    <div style={styles.successIcon}>
                                        <Check size={48} color="white" />
                                    </div>
                                    <h2 style={{ marginBottom: '16px', color: '#28a745' }}>Order Placed!</h2>
                                    <p style={{ color: '#636e72' }}>Thank you for your order. We'll have it ready soon!</p>
                                </div>
                            ) : cart.length === 0 ? (
                                <div style={styles.emptyCart}>
                                    <ShoppingCart size={64} color="#dee2e6" style={{ marginBottom: '16px' }} />
                                    <h3>Your cart is empty</h3>
                                    <p>Add some delicious items to get started!</p>
                                </div>
                            ) : (
                                <>
                                    {cart.map(item => (
                                        <div key={item.id} style={styles.cartItem}>
                                            <div style={styles.cartItemInfo}>
                                                <div style={styles.cartItemName}>{item.name}</div>
                                                <div style={styles.cartItemPrice}>${item.price.toFixed(2)}</div>
                                            </div>
                                            <div style={styles.quantityControls}>
                                                <button
                                                    style={styles.quantityButton}
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#e85d2a'}
                                                    onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6b35'}
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span style={styles.quantity}>{item.quantity}</span>
                                                <button
                                                    style={styles.quantityButton}
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#e85d2a'}
                                                    onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6b35'}
                                                >
                                                    <Plus size={16} />
                                                </button>
                                                <button
                                                    style={styles.deleteButton}
                                                    onClick={() => removeFromCart(item.id)}
                                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#cc0000'}
                                                    onMouseLeave={(e) => e.target.style.backgroundColor = '#ff3b3b'}
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}

                                    <div style={styles.summary}>
                                        <div style={styles.summaryRow}>
                                            <span>Subtotal:</span>
                                            <span>${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div style={styles.summaryRow}>
                                            <span>Tax (8%):</span>
                                            <span>${tax.toFixed(2)}</span>
                                        </div>
                                        <div style={styles.summaryTotal}>
                                            <span>Total:</span>
                                            <span>${total.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <button
                                        style={styles.checkoutButton}
                                        onClick={placeOrder}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
                                    >
                                        Place Order
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChopChopRestaurant;
