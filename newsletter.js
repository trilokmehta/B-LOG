(function () {
  const newsletterStyles = `
    /* --- NEWSLETTER COMPONENT STYLES --- */
    newsletter-box, 
    .newsletter-box * {
        box-sizing: border-box;
    }

    .newsletter-section-wrapper {
        padding: 60px 0;
    }
    
    .newsletter-box {
      background: var(--secondary-color, #3d405b); /* Fallback to dark blue */
      color: white;
      border-radius: 20px;
      padding: 60px;
      text-align: center;
      position: relative;
      overflow: hidden;
      margin: 0 auto;
      max-width: 1000px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.1);
    }

    .newsletter-box h2 {
        font-size: 2.5rem;
        margin-bottom: 10px;
        font-weight: 800;
    }
    
    .newsletter-box span {
        color: var(--primary-color, #f28482); /* Fallback to coral */
    }

    .nl-input-group {
      display: flex;
      max-width: 500px;
      margin: 30px auto 0;
    }

    .nl-input {
      flex: 1;
      padding: 15px 20px;
      border-radius: 50px 0 0 50px;
      border: none;
      outline: none;
      font-size: 1rem;
      font-family: inherit;
    }

    .nl-btn {
      padding: 15px 30px;
      background: var(--primary-color, #f28482);
      color: white;
      border: none;
      border-radius: 0 50px 50px 0;
      font-weight: 700;
      cursor: pointer;
      font-family: inherit;
      transition: 0.3s;
    }
    
    .nl-btn:hover {
        filter: brightness(1.1);
    }

    /* Mobile Responsiveness */
    @media (max-width: 768px) {
      .newsletter-box { padding: 40px 20px; } /* Ensure this is even (20px left/right) */
      .newsletter-box h2 { font-size: 1.8rem; }
      .nl-input-group { flex-direction: column; gap: 10px; }
      
      /* The box-sizing above fixes the 100% width issue here */
      .nl-input, .nl-btn { border-radius: 50px; width: 100%; }
    }
  `;

  const newsletterHTML = `
    <section class="container newsletter-section-wrapper">
       <div class="newsletter-box">
          <i class="fas fa-paper-plane" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.8;"></i>
          <h2>Join the <span>Inner Circle.</span></h2>
          <p style="opacity: 0.8; max-width: 600px; margin: 0 auto;">Get weekly tips on growing your education business delivered to your inbox.</p>
          
          <div class="nl-input-group">
             <input type="email" class="nl-input" placeholder="Enter your email address">
             <button class="nl-btn">Subscribe Free</button>
          </div>
          <small style="display: block; margin-top: 15px; opacity: 0.6; font-size: 0.8rem;">No spam. Unsubscribe anytime.</small>
       </div>
    </section>
  `;

  function loadNewsletter() {
    // 1. Inject Styles
    const styleSheet = document.createElement("style");
    styleSheet.innerText = newsletterStyles;
    document.head.appendChild(styleSheet);

    // 2. Inject HTML
    // Looking for <div id="newsletter-section"></div>
    const target = document.getElementById("newsletter-section");
    if (target) {
        target.innerHTML = newsletterHTML;
    }
  }

  // 3. Run Logic
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadNewsletter);
  } else {
    loadNewsletter();
  }
})();