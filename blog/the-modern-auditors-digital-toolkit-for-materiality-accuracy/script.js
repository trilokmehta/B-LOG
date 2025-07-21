
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Logic
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Scroll Progress Bar Logic
    const scrollProgressBar = document.getElementById('scroll-progress');
    if (scrollProgressBar) {
        const updateProgressBar = () => {
            const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (scrollTotal > 0) {
                const scrolled = (window.scrollY / scrollTotal) * 100;
                scrollProgressBar.style.width = `${scrolled}%`;
            } else {
                scrollProgressBar.style.width = '0%';
            }
        };
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateProgressBar();
                    ticking = false;
                });
                ticking = true;
            }
        });
        updateProgressBar();
    }
    
    // --- NEW: Function to load related posts ---
    async function loadRelatedPosts() {
        const container = document.getElementById('related-posts-container');
        if (!container) return;

        try {
            // Assumes blogs.json is in the same directory or accessible via this path
            const response = await fetch('/blog/blogs.json');
            if (!response.ok) throw new Error('Could not fetch blog data.');
            
            const data = await response.json();
            const allBlogs = data.blogs;
            
            const currentBlogTitle = document.querySelector('h1').textContent;
            const otherBlogs = allBlogs.filter(blog => blog.title !== currentBlogTitle);

            const shuffled = otherBlogs.sort(() => 0.5 - Math.random());
            const selectedBlogs = shuffled.slice(0, 3);

            if (selectedBlogs.length === 0) {
                container.innerHTML = "<p>No other posts to suggest.</p>";
                return;
            }

            selectedBlogs.forEach(blog => {
                const card = document.createElement('a');
                card.href = blog.link;
                card.className = 'related-post-card';
                card.innerHTML = `
                    <img src="${blog.image || 'https://placehold.co/400x200/eef3f1/1a3a2f?text=Blog'}" alt="${blog.title}">
                    <div class="related-post-card-content">
                        <h4>${blog.title}</h4>
                        <p>${blog.content.substring(0, 80)}...</p>
                    </div>
                `;
                container.appendChild(card);
            });

        } catch (error) {
            console.error("Failed to load related posts:", error);
            container.innerHTML = "<p>Could not load suggestions at this time.</p>";
        }
    }

    // Call the new function
    loadRelatedPosts();
});