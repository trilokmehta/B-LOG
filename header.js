(function () {
  const headerStyles = `
    /* --- 1. HEADER BASE STYLES --- */
    header {
      padding: 0; /* REMOVED PADDING to reduce gap */
      height: 70px; /* Fixed height for consistency */
      display: flex;
      align-items: center;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
      background-color: rgba(255, 251, 245, 0.98);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0,0,0,0.05);
      font-family: 'Inter', sans-serif;
    }
    
    .nav-container {
      max-width: 1300px;
      width: 100%;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      height: 100%;
    }

    .logo {
      font-size: 1.8rem;
      font-weight: 900;
      color: #3d405b;
      text-decoration: none;
      z-index: 1002;
    }
    .logo span { color: #f28482; }

    /* --- 2. NAVIGATION LINKS --- */
    .nav-links { 
      display: flex; 
      align-items: center; 
      gap: 5px; /* Reduced gap */
      position: static; 
      height: 100%;
    }

    .nav-link {
      text-decoration: none;
      color: #3d405b;
      font-weight: 500;
      transition: 0.3s;
      font-size: 0.95rem;
      padding: 10px 15px;
      border-radius: 8px;
    }
    .nav-link:hover { background: #fffbf5; color: #f28482; }
    
    .btn-login {
      background-color: #f28482;
      color: white;
      padding: 10px 30px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 700;
      transition: 0.3s;
      margin-left: 10px;
    }
    .btn-login:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(242, 132, 130, 0.4); }

    /* --- 3. DROPDOWN TRIGGER --- */
    .dropdown { 
      position: static; 
      height: 100%; 
      display: flex;
      align-items: center;
    }
    
    .dropbtn {
      background: none;
      border: none;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 600;
      color: #3d405b;
      cursor: pointer;
      padding: 0 20px; /* REMOVED Vertical Padding */
      height: 100%; /* Match header height */
      display: flex;
      align-items: center;
      gap: 8px;
      border-radius: 0; /* Rectangular touch target */
      transition: 0.2s;
    }
    
    .dropdown:hover .dropbtn { color: #f28482; background: #fffbf5; }
    
    /* Rotate Arrow on Active */
    .dropbtn.active i { transform: rotate(180deg); } 
    .dropdown:hover .dropbtn i { transform: rotate(180deg); transition: 0.3s; }

    /* --- 4. MEGA MENU CONTAINER --- */
    .mega-menu {
      display: none;
      position: absolute;
      top: 70px; /* Exact match to header height */
      left: 0;
      width: 100%;
      background: #ffffff;
      border-radius: 0 0 20px 20px;
      box-shadow: 0 30px 80px rgba(0,0,0,0.1);
      padding: 40px;
      border-top: 1px solid #f0f0f0;
      z-index: 1100;
      box-sizing: border-box;
      gap: 40px;
      margin-top: 0px; /* Zero gap */
    }

    /* Grid Layouts (Desktop) */
    .features-grid { grid-template-columns: repeat(4, 1fr); }
    .solutions-grid { grid-template-columns: 1fr 1fr 1fr; }
    .resources-grid { grid-template-columns: 1fr 1fr 1fr; }

    /* DESKTOP HOVER EFFECT ONLY */
    @media (min-width: 993px) {
      .dropdown:hover .mega-menu {
        display: grid;
        animation: slideDown 0.2s ease-out forwards;
      }
    }

    @keyframes slideDown {
      from { opacity: 0; transform: translateY(5px); } /* Reduced slide distance */
      to { opacity: 1; transform: translateY(0); }
    }

    /* --- 5. MENU ITEMS STYLING --- */
    .column-header {
      font-size: 0.75rem;
      text-transform: uppercase;
      color: #f28482;
      font-weight: 800;
      letter-spacing: 1.5px;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .menu-item {
      display: flex;
      align-items: flex-start;
      gap: 15px;
      padding: 12px;
      text-decoration: none;
      border-radius: 10px;
      transition: all 0.2s ease;
      margin-bottom: 5px;
    }

    .menu-item:hover { background-color: #fffbf5; }

    .menu-item i {
      font-size: 1.2rem;
      color: #81b29a;
      margin-top: 3px;
      min-width: 24px;
      text-align: center;
    }
    
    .menu-item:hover i { color: #f28482; }
    .menu-item:hover h4 { color: #f28482; }

    .item-text h4 {
      font-size: 0.95rem;
      font-weight: 700;
      color: #3d405b;
      margin: 0 0 4px 0;
      transition: 0.2s;
    }

    .item-text p {
      font-size: 0.8rem;
      color: #777;
      margin: 0;
      line-height: 1.4;
    }
    
    .highlight-card {
      background: #3d405b;
      padding: 25px;
      border-radius: 15px;
      color: white;
      height: 100%;
    }
    .highlight-card h4 { color: white; margin-bottom: 10px; }
    .highlight-card p { color: #ccc; font-size: 0.9rem; margin-bottom: 20px; }
    .btn-small {
       background: #f28482; color: white; padding: 8px 16px; 
       border-radius: 6px; font-size: 0.85rem; font-weight: 600; text-decoration: none;
    }

    /* --- 6. MOBILE STYLES --- */
    .mobile-toggle { display: none; font-size: 1.5rem; cursor: pointer; color: #3d405b; }
    .mobile-close { display: none; }

    @media (max-width: 992px) {
      .mobile-toggle { display: block; } 
      header { height: auto; padding: 15px 0; } /* Reset for Mobile */
      
      .nav-links {
        position: fixed;
        top: 0; 
        right: -100%;
        height: 100vh;
        width: 85%;
        max-width: 400px;
        background: white;
        flex-direction: column;
        align-items: flex-start;
        padding: 80px 20px 40px; 
        transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: -10px 0 30px rgba(0,0,0,0.1);
        overflow-y: auto;
        z-index: 1001;
      }
      
      .nav-links.active { right: 0; } 

      .mobile-close {
        display: block;
        position: absolute;
        top: 25px;
        right: 25px;
        font-size: 1.8rem;
        color: #3d405b;
        cursor: pointer;
        z-index: 1002;
        background: #f5f5f5;
        width: 40px; height: 40px;
        border-radius: 50%;
        text-align: center;
        line-height: 40px;
      }

      .nav-link { width: 100%; margin: 5px 0; display: block; padding: 12px 15px; }
      .btn-login { width: 100%; margin: 20px 0; display: block; text-align: center; }
      
      .dropdown { 
        width: 100%; 
        height: auto; 
        border-bottom: 1px solid #f9f9f9; 
        display: block;
      }
      
      .dropbtn { 
        width: 100%; 
        padding: 15px 15px; 
        font-size: 1rem;
        height: auto;
        justify-content: space-between;
      }

      .mega-menu {
        position: static; 
        display: none; 
        box-shadow: none;
        border: none;
        padding: 0;
        grid-template-columns: 1fr !important;
        gap: 0;
        background: #f8f9fa;
        margin-top: 0;
      }
      
      .mega-menu.open { display: block; }
      
      .menu-column {
        padding: 20px 25px;
        border-bottom: 1px solid #eee;
      }
      .column-header { margin-top: 0; color: #888; border-bottom: none; }
      
      .menu-item { background: white; border: 1px solid #eee; margin-bottom: 10px; }
    }
  `;

  const headerHTML = `
    <div class="nav-container">
      <a href="index.html" class="logo">ERPLI<span>.</span></a>

      <div class="mobile-toggle" onclick="toggleMenu()">
        <i class="fas fa-bars"></i>
      </div>

      <div class="nav-links">
        
        <div class="mobile-close" onclick="toggleMenu()">
          <i class="fas fa-times"></i>
        </div>
        
        <div class="dropdown">
          <button class="dropbtn" onclick="toggleSubMenu(this)">Features <i class="fas fa-chevron-down"></i></button>
          <div class="mega-menu features-grid">
            <div class="menu-column">
              <div class="column-header"><i class="fas fa-rocket"></i> Launch</div>
              <a href="apps.html" class="menu-item"><i class="fas fa-mobile-alt"></i><div class="item-text"><h4>White-Label Apps</h4><p>Android & iOS with your logo.</p></div></a>
              <a href="cms.html" class="menu-item"><i class="fas fa-pencil-ruler"></i><div class="item-text"><h4>Website Builder</h4><p>Drag-and-drop CMS & Blogs.</p></div></a>
              <a href="domain.html" class="menu-item"><i class="fas fa-globe"></i><div class="item-text"><h4>Custom Domain</h4><p>Your own .com & branding.</p></div></a>
            </div>
            <div class="menu-column">
              <div class="column-header"><i class="fas fa-graduation-cap"></i> Teach</div>
              <a href="lms.html" class="menu-item"><i class="fas fa-play-circle"></i><div class="item-text"><h4>Video LMS</h4><p>Drip content & piracy protection.</p></div></a>
              <a href="live.html" class="menu-item"><i class="fas fa-video"></i><div class="item-text"><h4>Live Classes</h4><p>Zoom/Meet + Auto-recording.</p></div></a>
              <a href="exams.html" class="menu-item"><i class="fas fa-file-alt"></i><div class="item-text"><h4>Online Exams</h4><p>MCQ, Negative marking & Ranks.</p></div></a>
            </div>
            <div class="menu-column">
              <div class="column-header"><i class="fas fa-cogs"></i> Manage</div>
              <a href="erp.html" class="menu-item"><i class="fas fa-users-cog"></i><div class="item-text"><h4>Institute ERP</h4><p>Fees, Attendance, Staff Payroll.</p></div></a>
             
            </div>
            <div class="menu-column">
              <div class="column-header"><i class="fas fa-chart-line"></i> Grow</div>
              <a href="store.html" class="menu-item"><i class="fas fa-shopping-bag"></i><div class="item-text"><h4>Physical Store</h4><p>Sell books/merch (0% Comm).</p></div></a>
              <a href="marketing.html" class="menu-item"><i class="fas fa-bullhorn"></i><div class="item-text"><h4>Marketing Tools</h4><p>Coupons, SMS & Email automation.</p></div></a>
              <a href="certs.html" class="menu-item"><i class="fas fa-certificate"></i><div class="item-text"><h4>Certificates</h4><p>Auto-gen & verify student certs.</p></div></a>
            </div>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropbtn" onclick="toggleSubMenu(this)">Solutions <i class="fas fa-chevron-down"></i></button>
          <div class="mega-menu solutions-grid">
            <div class="menu-column">
              <div class="column-header"><i class="fas fa-building"></i> By Industry</div>
              <a href="Content_Creators.html" class="menu-item"><i class="fab fa-youtube"></i><div class="item-text"><h4>Content Creators</h4><p>For YouTubers & Influencers.</p></div></a>
              <a href="Coaching_Institutes.html" class="menu-item"><i class="fas fa-university"></i><div class="item-text"><h4>Coaching Institutes</h4><p>For large offline/hybrid centers.</p></div></a>
              <a href="Private_Tutorss.html" class="menu-item"><i class="fas fa-chalkboard-teacher"></i><div class="item-text"><h4>Private Tutors</h4><p>For individual subject experts.</p></div></a>
            </div>
            <div class="menu-column">
              <div class="column-header"><i class="fas fa-bullseye"></i> By Goal</div>
              <a href="Monetize_Courses.html" class="menu-item"><i class="fas fa-dollar-sign"></i><div class="item-text"><h4>Monetize Courses</h4><p>Sell recorded videos online.</p></div></a>
              <a href="Scale_Operations.html" class="menu-item"><i class="fas fa-arrow-up"></i><div class="item-text"><h4>Scale Operations</h4><p>Automate fees & management.</p></div></a>
              <a href="Protect_Content.html" class="menu-item"><i class="fas fa-shield-alt"></i><div class="item-text"><h4>Protect Content</h4><p>Stop piracy & sharing.</p></div></a>
            </div>
            <div class="menu-column">
               <div class="highlight-card">
                 <h4>Not sure where to start?</h4>
                 <p>Book a free strategy session with our education experts.</p>
                 <a href="#book-call" class="btn-small">Book 15-min Call</a>
               </div>
            </div>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropbtn" onclick="toggleSubMenu(this)">Resources <i class="fas fa-chevron-down"></i></button>
          <div class="mega-menu resources-grid">
            <div class="menu-column">
              <div class="column-header"><i class="fas fa-graduation-cap"></i> Learn</div>
              <a href="blog.html" class="menu-item"><i class="fas fa-blog"></i><div class="item-text"><h4>Blogs</h4><p>Tips, tricks & trends.</p></div></a>
              <a href="tutorials.html" class="menu-item"><i class="fas fa-laptop-code"></i><div class="item-text"><h4>Tutorials</h4><p>Platform guides.</p></div></a>
            </div>
            <div class="menu-column">
              <div class="column-header"><i class="fas fa-star"></i> Proof</div>
              <a href="case-studies.html" class="menu-item"><i class="fas fa-chart-pie"></i><div class="item-text"><h4>Case Studies</h4><p>See how others scaled.</p></div></a>
              <a href="news.html" class="menu-item"><i class="fas fa-newspaper"></i><div class="item-text"><h4>Newsroom</h4><p>Latest updates & press.</p></div></a>
            </div>
            <div class="menu-column">
              <div class="column-header"><i class="fas fa-life-ring"></i> Support</div>
              <a href="help.html#faq" class="menu-item"><i class="fas fa-question-circle"></i><div class="item-text"><h4>FAQ</h4><p>Common questions.</p></div></a>
               <a href="help.html" class="menu-item"><i class="fas fa-headset"></i><div class="item-text"><h4>Help Center</h4><p>Contact support.</p></div></a>
            </div>
          </div>
        </div>

        <a href="index.html#pricing" class="nav-link">Pricing</a>
        <a href="Partner.html" class="nav-link">Partner</a>


        <a href="#login" class="btn-login">Login</a>
      </div>
    </div>
  `;

  function loadHeader() {
    // 1. Inject Styles
    const styleSheet = document.createElement("style");
    styleSheet.innerText = headerStyles;
    document.head.appendChild(styleSheet);

    // 2. Define Toggle Functions
    window.toggleMenu = function () {
      const nav = document.querySelector(".nav-links");
      nav.classList.toggle("active");
    };

    window.toggleSubMenu = function (btn) {
      if (window.innerWidth <= 992) {
        const submenu = btn.nextElementSibling;

        // Close others
        document.querySelectorAll(".mega-menu").forEach((menu) => {
          if (menu !== submenu) menu.classList.remove("open");
        });
        document.querySelectorAll(".dropbtn").forEach((b) => {
          if (b !== btn) b.classList.remove("active");
        });

        submenu.classList.toggle("open");
        btn.classList.toggle("active");
      }
    };

    // 3. Inject HTML
    const headerElement = document.querySelector("header");
    if (headerElement) {
      headerElement.innerHTML = headerHTML;
    }
  }

  // 4. Run Logic
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadHeader);
  } else {
    loadHeader();
  }
})();