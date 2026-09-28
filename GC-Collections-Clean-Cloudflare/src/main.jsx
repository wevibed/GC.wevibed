
import React from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const phone="263713734155";
const wa=`https://wa.me/${phone}?text=${encodeURIComponent("Hello GC Collections, I would like to enquire about your footwear.")}`;

const images={
 hero:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=85",
 sneakers:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
 women:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85",
 men:"https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=85",
 kids:"https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=85",
 sandals:"https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=900&q=85",
 boots:"https://images.unsplash.com/photo-1608256246200-53e6351623c8?auto=format&fit=crop&w=900&q=85",
 casual:"https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=85",
 formal:"https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=85"
};

function WA(){return <a className="wa" href={wa} aria-label="WhatsApp">⌕</a>}
function Header(){return <><div className="top"><span>49 Cork Road, Harare</span><a href="tel:+263713734155">☎ 071 373 4155</a></div><header><a className="brand" href="#"><b>GC</b><span>COLLECTIONS</span></a><nav><a href="#categories">Categories</a><a href="#products">Products</a><a href="#contact">Contact</a></nav><div className="icons"><button>⌕</button><button>☰</button></div></header></>}
function Cat({image,title}){return <a className="cat" href="#products"><img src={image} alt={title}/><span>{title}</span><b>→</b></a>}
function Product({image,title}){return <article className="product"><img src={image} alt={title}/><div><h3>{title}</h3><a href="#contact">Enquire →</a></div></article>}

function App(){return <div>
<Header/>
<main>
<section className="hero"><img src={images.hero} alt="Footwear collection"/><div className="heroCopy"><p className="eyebrow">GC COLLECTIONS • FOOTWEAR</p><h1>Stylish Footwear<br/>For Every <em>Step</em></h1><p>Explore footwear styles for everyday wear and different occasions.</p><a className="btn" href="#categories">SHOP NOW →</a></div><div className="trust"><span>◇<b>Wide Range</b><small>of Styles</small></span><span>♢<b>Quality Footwear</b><small>Everyday comfort</small></span><span>♡<b>Latest Styles</b><small>New looks</small></span><span>⌂<b>In-Store</b><small>Shopping</small></span></div></section>

<section id="categories" className="section"><div className="heading"><div><p className="eyebrow gold">SHOP BY CATEGORY</p><h2>Find your pair.</h2></div><a href="#products">View All →</a></div><div className="cats">
<Cat image={images.sneakers} title="Sneakers"/><Cat image={images.women} title="Women's Shoes"/><Cat image={images.men} title="Men's Shoes"/><Cat image={images.kids} title="Kids' Shoes"/><Cat image={images.sandals} title="Sandals"/><Cat image={images.boots} title="Boots"/><Cat image={images.casual} title="Casual Shoes"/><Cat image={images.formal} title="Formal Shoes"/>
</div></section>

<section id="products" className="section productsSection"><div className="heading"><div><p className="eyebrow gold">FEATURED STYLES</p><h2>Explore the collection.</h2></div><a href="#contact">Ask about availability →</a></div><div className="products">
<Product image={images.sneakers} title="Sneakers"/><Product image={images.women} title="Women's Footwear"/><Product image={images.men} title="Men's Footwear"/><Product image={images.kids} title="Kids' Footwear"/><Product image={images.sandals} title="Sandals"/><Product image={images.boots} title="Boots"/>
</div></section>

<section className="feature"><div><p className="eyebrow gold">EVERYDAY FOOTWEAR</p><h2>Quality styles for every occasion.</h2><p>Browse footwear categories and contact GC Collections to confirm available designs, sizes and current stock.</p><a className="btn" href="#products">BROWSE FOOTWEAR →</a></div><img src={images.casual} alt="Casual footwear"/></section>

<section className="feature light"><img src={images.women} alt="Women's footwear"/><div><p className="eyebrow gold">WOMEN'S FOOTWEAR</p><h2>Find your next favourite pair.</h2><p>From everyday styles to occasion footwear, explore the available collection in store.</p><a className="btn goldBtn" href={wa}>ASK ON WHATSAPP →</a></div></section>

<section className="feature dark"><div><p className="eyebrow gold">MEN • WOMEN • KIDS</p><h2>Footwear for the whole family.</h2><p>Explore the available ranges and enquire directly about sizes and stock.</p><a className="btn" href={wa}>ENQUIRE NOW →</a></div><img src={images.kids} alt="Kids footwear"/></section>

<section id="contact" className="contact"><div><p className="eyebrow gold">VISIT GC COLLECTIONS</p><h2>Find us on Cork Road.</h2><p><b>49 Cork Road</b><br/>Harare, Zimbabwe</p><p><a href="tel:+263713734155">071 373 4155</a></p><p>Opening hours: to be confirmed.</p><a className="btn goldBtn" href={wa}>CHAT ON WHATSAPP →</a></div><div className="map"><div className="pin">●</div><strong>GC Collections</strong><span>49 Cork Road, Harare</span><button>MAP LOCATION →</button></div></section>
</main>
<footer><div className="brand footerBrand"><b>GC</b><span>COLLECTIONS</span></div><p>Footwear • Men • Women • Kids</p><p>© 2026 GC Collections</p></footer><WA/>
</div>}
createRoot(document.getElementById("root")).render(<App/>);
