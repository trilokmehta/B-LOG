(function () {
  const footerStyles = `
    /* --- FOOTER BASE STYLES --- */
    footer {
      background: #ffffff;
      padding: 80px 0 20px;
      border-top: 1px solid #eee;
      font-family: 'Inter', sans-serif;
      color: #3d405b;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 50px;
      margin-bottom: 60px;
    }

    /* --- BRAND COLUMN --- */
    .footer-brand .logo {
      font-size: 1.8rem;
      font-weight: 900;
      color: #3d405b;
      text-decoration: none;
      display: inline-block;
      margin-bottom: 15px;
    }
    .footer-brand .logo span { color: #f28482; }
    
    .footer-brand p {
      margin: 0 0 25px;
      color: #666;
      font-size: 0.95rem;
      line-height: 1.6;
      max-width: 280px;
    }

    .social-links {
      display: flex;
      gap: 15px;
    }

    .social-links a {
      width: 40px;
      height: 40px;
      background: #fffbf5;
      color: #3d405b;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      text-decoration: none;
    }

    .social-links a:hover {
      background: #f28482;
      color: white;
      transform: translateY(-3px);
    }

    /* --- LINKS COLUMNS --- */
    footer h4 {
      margin-bottom: 25px;
      font-size: 1.1rem;
      font-weight: 800;
      color: #3d405b;
    }

    footer ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    footer ul li {
      margin-bottom: 12px;
    }

    footer ul a {
      text-decoration: none;
      color: #666;
      font-size: 0.95rem;
      transition: 0.2s;
    }

    footer ul a:hover {
      color: #f28482;
      padding-left: 5px;
    }

    /* --- COPYRIGHT AREA --- */
    .footer-bottom {
      margin-top: 60px;
      padding: 30px 0 10px;
      border-top: 1px solid #eee;
      text-align: center;
      color: #888;
      font-size: 0.9rem;
    }

    /* --- MOBILE RESPONSIVENESS --- */
    @media (max-width: 768px) {
      footer {
        padding: 50px 0 20px; 
        text-align: left;
      }
      
      .footer-grid {
        grid-template-columns: repeat(2, 1fr); 
        gap: 40px 20px;
        margin-bottom: 40px;
      }
      
      .footer-brand {
        grid-column: span 2;
        text-align: center; 
        margin-bottom: 20px;
      }
      
      .footer-brand p {
        margin: 10px auto 20px;
      }
      
      .social-links {
        justify-content: center;
      }

      footer h4 {
        margin-bottom: 15px;
        font-size: 1rem;
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
      }
    }
  `;

  const footerHTML = `
    <div class="footer-container footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo">ERPLI<span>.</span></a>
        <p>The unified platform for the modern educator. 
            <br> Manage, monetize, and scale your teaching business.
        </p>
        <div class="social-links">
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
          <a href="#"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>

      <div>
        <h4>Product</h4>
        <ul>
          <li><a href="lms.html">Video LMS</a></li>
          <li><a href="apps.html">White-Label Apps</a></li>
          <li><a href="cms.html">Website Builder</a></li>
          <li><a href="exams.html">Online Exams</a></li>
        </ul>
      </div>

      <div>
        <h4>Solutions</h4>
        <ul>
          <li><a href="Content_Creators.html">YouTube Teachers</a></li>
          <li><a href="Coaching_Institutes.html">Coaching Centers</a></li>
          <li><a href="Private_Tutorss.html">Home Tutors</a></li>
          <li><a href="store.html">Sell Books</a></li>
        </ul>
      </div>

      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="index.html#pricing">Pricing</a></li>
          <li><a href="Partner.html">Become a Partner</a></li>
          <li><a href="help.html">Help Center</a></li>
          <li><a href="privacy.html">Privacy Policy</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-container">
        <p>
          &copy; 2026 ERPLI Education Systems. Built with
          <i class="fas fa-heart" style="color: #f28482;"></i> for Teachers.
        </p>
      </div>
    </div>
  `;

  function loadFooter() {
    // 1. Inject Styles
    const styleSheet = document.createElement("style");
    styleSheet.innerText = footerStyles;
    document.head.appendChild(styleSheet);

    // 2. Inject HTML
    // We look for a <footer id="main-footer"> OR just <footer>
    let footerElement = document.getElementById("main-footer");
    
    // Fallback: if no ID, try to find the first <footer> tag
    if (!footerElement) {
        footerElement = document.querySelector("footer");
    }

    if (footerElement) {
      footerElement.innerHTML = footerHTML;
    } else {
      console.warn("ERPLI Footer: No <footer> element found to inject content into.");
    }
  }

  // 3. Run Logic
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadFooter);
  } else {
    loadFooter();
  }
})();