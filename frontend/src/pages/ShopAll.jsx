import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../Style.css";
import banner from "../assets/banner.webp";
import model1 from "../assets/model1.png";
import model2 from "../assets/model2.png";
import model3 from "../assets/model3.png";
import { ShopContext } from "../context/ShopContext";

const imageMap = {
    model1,
    model2,
    model3
};

function ShopAll() {
    const { fetchCounts } = useContext(ShopContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/shop/products");
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);
                } else {
                    console.error("Failed to fetch products");
                }
            } catch (error) {
                console.error("API error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const handleQuickView = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleWishlist = async (productId) => {
        try {
            await fetch("http://localhost:5000/api/shop/add-to-wishlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ productId })
            });
            fetchCounts();
            navigate("/wishlist");
        } catch (e) {
            console.error(e);
            navigate("/wishlist");
        }
    };

    const handleAddToCart = async (productId) => {
        try {
            await fetch("http://localhost:5000/api/shop/add-to-cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ productId })
            });
            fetchCounts();
            alert("Added to cart successfully!");
        } catch (e) {
            console.error(e);
        }
    };

    const [moreFiltersOpen, setMoreFiltersOpen] = useState(true);
    const [brandOpen, setBrandOpen] = useState(true);
    const [availabilityOpen, setAvailabilityOpen] = useState(true);
    const [showMoreBrands, setShowMoreBrands] = useState(false);

    const brands = [
        "ARDEN & CO",
        "ARDEN OUTERWEAR",
        "ATLAS URBANWEAR",
        "BELLE MODE",
        "CARTER & CO.",
        "HUGO STREETWEAR",
        "HUNTER & CO.",
        "LIORA ATELIER",
        "LUNE STUDIO",
        "MARLOW ATELIER"
    ];

    return (
        <div className="container-fluid mt-4 mb-5">
            <div className="row">
                <div className="col-lg-3 col-md-4 sidebar d-none d-md-block">
                    <div className="filter-sidebar">

                        <h6>CATEGORIES</h6>
                        <ul className="list-unstyled">
                            <li>Theme Demo</li>
                            <li>Collections</li>
                            <li>Product</li>
                            <li>Blog</li>
                            <li>Pages</li>
                            <li>New In</li>
                            <li>Trend</li>
                            <li>Shop</li>
                        </ul>
                        <hr />
                        <h6>Category</h6>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="sweaters" />
                            <label className="form-check-label" htmlFor="sweaters">Sweaters</label>
                        </div>


                        <div className="mt-5 filter-section">

                            <div
                                className="filter-header"
                                onClick={() => setMoreFiltersOpen(!moreFiltersOpen)}
                            >

                                <h6>MORE FILTERS</h6>
                                <i className={`fa-solid ${moreFiltersOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>

                            </div>

                            {moreFiltersOpen && (

                                <div className="filter-content">

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label">NEW</label>
                                    </div>

                                </div>

                            )}

                        </div>


                        <div className="filter-section">

                            <div
                                className="filter-header"
                                onClick={() => setBrandOpen(!brandOpen)}
                            >

                                <h6>BRAND</h6>
                                <i className={`fa-solid ${brandOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>

                            </div>

                            {brandOpen && (

                                <div className="filter-content">

                                    {brands
                                        .slice(0, showMoreBrands ? brands.length : 5)
                                        .map((brand, index) => (

                                            <div className="form-check" key={index}>

                                                <input className="form-check-input" type="checkbox" />
                                                <label className="form-check-label">{brand}</label>

                                            </div>

                                        ))}

                                    <button
                                        className="show-more-btn"
                                        onClick={() => setShowMoreBrands(!showMoreBrands)}
                                    >

                                        {showMoreBrands ? "- Show less" : "+ Show more"}

                                    </button>

                                </div>

                            )}

                        </div>

                        <div className="filter-section">

                            <div
                                className="filter-header"
                                onClick={() => setAvailabilityOpen(!availabilityOpen)}
                            >

                                <h6>AVAILABILITY</h6>
                                <i className={`fa-solid ${availabilityOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>

                            </div>

                            {availabilityOpen && (

                                <div className="filter-content">

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label">IN STOCK</label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label">OUT OF STOCK</label>
                                    </div>

                                </div>

                            )}

                        </div>

                    </div>
                </div>

                <div className="col-lg-9 col-md-8">
                    <div className="banner mb-4">
                        <img src={banner} className="img-fluid w-100" alt="Banner" />
                    </div>

                    <h2 className="mt-4 mb-3">CLASSIC - ALL</h2>
                    <p className="text-muted mb-5">
                        The Classic Collection celebrates timeless silhouettes and refined simplicity.
                    </p>

                    <div className="row product-grid">
                        {loading ? (
                            <div className="col-12 text-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : products.length > 0 ? (
                            products.map((product) => (
                                <div key={product._id} className="col-xl-4 col-sm-6 mb-4">
                                    <div className="shop-product-card">
                                        <div className="shop-product-img-wrapper">
                                            {product.badge && (
                                                <div className="shop-product-badge">{product.badge}</div>
                                            )}
                                            <img
                                                src={imageMap[product.image] || model1}
                                                alt={product.name}
                                                className="shop-product-img"
                                            />

                                            <div className="shop-product-action-icons">
                                                <button className="shop-action-btn" title="Add to Wishlist" onClick={() => handleWishlist(product._id)}>
                                                    <i className="fa-regular fa-heart"></i>
                                                </button>
                                                <button className="shop-action-btn" title="Quick View" onClick={() => handleQuickView(product)}>
                                                    <i className="fa-regular fa-eye"></i>
                                                </button>
                                                <button className="shop-action-btn" title="Compare">
                                                    <i className="fa-solid fa-scissors"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="shop-product-info">
                                            {product.colors && product.colors.length > 0 && (
                                                <div className="shop-product-colors">
                                                    {product.colors.map((color, index) => (
                                                        <span
                                                            key={index}
                                                            className="shop-color-swatch"
                                                            style={{ backgroundColor: color }}
                                                        ></span>
                                                    ))}
                                                </div>
                                            )}

                                            <h3 className="shop-product-title">{product.name}</h3>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="shop-product-price">
                                                    {product.oldPrice ? (
                                                        <>
                                                            <span className="shop-product-old-price">Rs. {product.oldPrice.toFixed(2)}</span>
                                                            <span>Rs. {product.price.toFixed(2)}</span>
                                                        </>
                                                    ) : (
                                                        <span>{product.name.includes("From") ? "From " : ""}Rs. {product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                                                    )}
                                                </div>
                                            </div>
                                            <a href="#" className="shop-choose-options">CHOOSE OPTIONS</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12">
                                <p>No products found.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {showModal && selectedProduct && (
                <div className="quick-view-overlay" onClick={() => setShowModal(false)}>
                    <div className="quick-view-modal" onClick={e => e.stopPropagation()}>
                        <button className="quick-view-close" onClick={() => setShowModal(false)}>X</button>
                        <div className="quick-view-left">
                            <img src={imageMap[selectedProduct.image] || model1} alt={selectedProduct.name} />
                        </div>
                        <div className="quick-view-right">
                            <h3 className="quick-view-title">{selectedProduct.name}</h3>
                            <p className="quick-view-vendor">Vendor: Marlow Atelier</p>
                            <p className="quick-view-availability">Availability: In stock</p>

                            <div className="quick-view-price">
                                Rs. {selectedProduct.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </div>

                            <div className="quick-timer">
                                <div className="quick-timer-box">276<span>Days</span></div>:
                                <div className="quick-timer-box">6<span>Hours</span></div>:
                                <div className="quick-timer-box">25<span>Mins</span></div>:
                                <div className="quick-timer-box">6<span>Secs</span></div>
                            </div>

                            {selectedProduct.colors && selectedProduct.colors.length > 0 && (
                                <div className="mb-3">
                                    <div className="mb-2" style={{ fontSize: "13px" }}>Color:</div>
                                    <div className="shop-product-colors">
                                        {selectedProduct.colors.map((color, idx) => (
                                            <span key={idx} className="shop-color-swatch" style={{ backgroundColor: color }}></span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="mb-3">
                                <div className="mb-2" style={{ fontSize: "13px" }}>Size: S</div>
                                <div className="quick-sizes">
                                    <button className="quick-size-btn active">S</button>
                                    <button className="quick-size-btn">M</button>
                                    <button className="quick-size-btn">L</button>
                                    <button className="quick-size-btn">XL</button>
                                </div>
                            </div>

                            <div className="quick-hurry">Hurry up! Only 3 left</div>
                            <div style={{ width: "80px", height: "5px", background: "linear-gradient(90deg, red 30%, #eee 30%)", marginBottom: "20px", borderRadius: "3px" }}></div>

                            <div className="quick-actions">
                                <button className="btn-add-cart" onClick={() => handleAddToCart(selectedProduct._id)}>ADD TO CART</button>
                                <button className="btn-wishlist-modal" onClick={() => handleWishlist(selectedProduct._id)}>
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                            </div>

                            <div className="terms-check">
                                <input type="checkbox" id="terms" />
                                <label htmlFor="terms">I agree with the <u style={{ cursor: "pointer" }}>Terms & Conditions</u></label>
                            </div>

                            <button className="btn-buy-now">BUY IT NOW</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default ShopAll;