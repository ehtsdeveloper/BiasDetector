import React from 'react';
import './Homestyles.css'

function Home() {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to Our Website</h1>
                <p>This is the homepage of our React application.</p>
            </header>
            <section className="home-content">
                <p>This section can contain more detailed information about the site, services, or features.</p>
            </section>
            <footer className="home-footer">
                <p>© 2024 Company Name. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;