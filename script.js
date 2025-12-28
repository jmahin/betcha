// Sample resolutions data
const resolutions = [
    {
        id: 1,
        user: {
            name: "Alex Chen",
            username: "@alexchen",
            avatar: "AC"
        },
        resolution: "Work out 5 times a week for the entire year",
        status: "active",
        totalPot: "$1,250",
        bettors: 23,
        deadline: "Dec 31, 2024"
    },
    {
        id: 2,
        user: {
            name: "Sarah Johnson",
            username: "@sarahj",
            avatar: "SJ"
        },
        resolution: "Read 50 books by the end of 2024",
        status: "active",
        totalPot: "$890",
        bettors: 15,
        deadline: "Dec 31, 2024"
    },
    {
        id: 3,
        user: {
            name: "Mike Rodriguez",
            username: "@miker",
            avatar: "MR"
        },
        resolution: "Learn Spanish and have a 30-minute conversation",
        status: "active",
        totalPot: "$2,100",
        bettors: 34,
        deadline: "Dec 31, 2024"
    },
    {
        id: 4,
        user: {
            name: "Emma Wilson",
            username: "@emmaw",
            avatar: "EW"
        },
        resolution: "Save $10,000 by December 2024",
        status: "active",
        totalPot: "$1,650",
        bettors: 28,
        deadline: "Dec 31, 2024"
    },
    {
        id: 5,
        user: {
            name: "David Kim",
            username: "@davidk",
            avatar: "DK"
        },
        resolution: "Quit smoking completely",
        status: "active",
        totalPot: "$3,200",
        bettors: 42,
        deadline: "Dec 31, 2024"
    },
    {
        id: 6,
        user: {
            name: "Lisa Anderson",
            username: "@lisaa",
            avatar: "LA"
        },
        resolution: "Start a side business and make first $5K",
        status: "active",
        totalPot: "$1,980",
        bettors: 19,
        deadline: "Dec 31, 2024"
    }
];

// Render resolutions
function renderResolutions() {
    const grid = document.getElementById('resolutionsGrid');
    if (!grid) return;

    grid.innerHTML = resolutions.map(resolution => `
        <div class="resolution-card" onclick="handleResolutionClick(${resolution.id})">
            <div class="resolution-header">
                <div class="resolution-user">
                    <div class="user-avatar">${resolution.user.avatar}</div>
                    <div class="user-info">
                        <h4>${resolution.user.name}</h4>
                        <p>${resolution.user.username}</p>
                    </div>
                </div>
                <span class="resolution-status status-${resolution.status}">
                    ${resolution.status}
                </span>
            </div>
            <div class="resolution-text">
                ${resolution.resolution}
            </div>
            <div class="resolution-details">
                <div class="detail-item">
                    <div class="detail-value">${resolution.totalPot}</div>
                    <div class="detail-label">Total Pot</div>
                </div>
                <div class="detail-item">
                    <div class="detail-value">${resolution.bettors}</div>
                    <div class="detail-label">Bettors</div>
                </div>
                <div class="detail-item">
                    <div class="detail-value">${resolution.deadline}</div>
                    <div class="detail-label">Deadline</div>
                </div>
            </div>
            <button class="btn-primary bet-button" onclick="event.stopPropagation(); handleBetClick(${resolution.id})">
                Place Bet
            </button>
        </div>
    `).join('');
}

// Handle resolution card click
function handleResolutionClick(id) {
    console.log('Viewing resolution:', id);
    // In a real app, this would navigate to the resolution detail page
    alert(`Viewing resolution #${id}. In a full app, this would show detailed information.`);
}

// Handle bet button click
function handleBetClick(id) {
    console.log('Placing bet on resolution:', id);
    // In a real app, this would open a bet modal or navigate to betting page
    alert(`Placing bet on resolution #${id}. In a full app, this would open a betting interface.`);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    renderResolutions();
    
    // Animate steps
    document.querySelectorAll('.step').forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(20px)';
        step.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(step);
    });
    
    // Animate resolution cards
    setTimeout(() => {
        document.querySelectorAll('.resolution-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s, transform 0.6s';
            observer.observe(card);
        });
    }, 100);
});

// Add parallax effect to hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

