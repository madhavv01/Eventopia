import React from 'react';
import './Services.css'; // Optional: For custom CSS if needed

const Services = () => {
    return (
        <div>
            <header>
                <h1>Community Event Platform</h1>
                <p>Connecting people through meaningful events</p>
            </header>

            <nav>
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact Us</a>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms & Conditions</a>
            </nav>

            <section id="about">
                <h2>About Us</h2>
                <p>Welcome to the Community Event Platform! We bring people together through a variety of events. Whether it's a local meetup, a charity fundraiser, or a cultural festival, our platform helps you discover and participate in events that matter to you.</p>
            </section>

            <section id="services">
                <h2>Our Services</h2>
                <p>We offer a range of services for event organizers and attendees:</p>
                <ul>
                    <li><strong>Event Registration & Ticketing:</strong> Easily create events, sell tickets, and manage registrations.</li>
                    <li><strong>Event Promotion:</strong> Promote your events through social media and email campaigns.</li>
                    <li><strong>Community Engagement:</strong> Connect with attendees and share ideas before, during, and after events.</li>
                    <li><strong>Venue Management:</strong> Manage event venues and bookings through our platform.</li>
                    <li><strong>Event Analytics:</strong> Track sales, attendance, and feedback to optimize future events.</li>
                </ul>
            </section>

            <section id="contact">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out:</p>
                <p><strong>Email:</strong> <a href="mailto:support@communityevents.com">support@communityevents.com</a></p>
                <p><strong>Phone:</strong> +1 (555) 987-6543</p>
                <p><strong>Address:</strong> 123 Community St, Suite 456, City, Country</p>
            </section>

            <section id="privacy">
                <h2>Privacy Policy</h2>
                <p>Your privacy is important to us. We collect data such as your name, email, and event preferences when you register. We use this information solely to process your registrations and provide event-related updates.</p>
            </section>

            <section id="terms">
                <h2>Terms & Conditions</h2>
                <p>By using our platform, you agree to the following terms:</p>
                <ul>
                    <li><strong>Event Registration:</strong> Provide accurate information when registering for events.</li>
                    <li><strong>Platform Usage:</strong> Do not misuse the platform or engage in unlawful activities.</li>
                    <li><strong>Content Ownership:</strong> Content you upload remains your property, but you allow us to use it for promotional purposes.</li>
                    <li><strong>Changes to Terms:</strong> We may update these terms, and we will notify you of any significant changes.</li>
                </ul>
            </section>

            <footer>
                <p>&copy; 2024 Community Event Platform | All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Services;
