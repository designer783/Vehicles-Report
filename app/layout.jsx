// app/layout.jsx
import './globals.css'
import Link from 'next/link';

export const metadata = {
    title: 'Vehicle History Report - Check Car Past Records by VIN',
    description: 'Get the full vehicle history report for any car in the USA or Canada.',
}

function Nav() {
    return (
        <div className="nav-wrapper">
            <div className="nav-pill">
                <div className="nav-logo" style={{ paddingLeft: '0.5rem' }}>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <span className="logo-text" style={{ fontSize: '1.25rem', fontWeight: '900', letterSpacing: '-0.05em', color: '#fff' }}>
                            VEHICLES<span style={{ color: '#888' }}>REPORT</span>
                        </span>
                    </Link>
                </div>
                <div className="nav-links">
                    <Link href="/sample" className="nav-link">Sample Report</Link>
                    <Link href="/pricing" className="nav-link">Pricing</Link>
                    <Link href="/blogs" className="nav-link">Blog</Link>
                    <Link href="/about" className="nav-link">About Us</Link>
                    <Link href="/contact-us" className="nav-link">Contact</Link>
                </div>
                <Link href="#" className="btn btn-white" style={{ marginLeft: '1rem' }}>LOGIN</Link>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <section className="section bg-black" style={{ borderTop: '1px solid #222', paddingBottom: '5vh' }}>
            <div className="container">
                <div className="grid-2" style={{ alignItems: 'end' }}>
                    <div>
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <span className="logo-text" style={{ fontSize: '1.75rem', fontWeight: '900', letterSpacing: '-0.05em', color: '#fff', display: 'block', marginBottom: '1rem' }}>
                                VEHICLES<span style={{ color: '#888' }}>REPORT</span>
                            </span>
                        </Link>
                        <p style={{ margin: 0, maxWidth: '400px', color: '#888' }}>Don't take chances. Verify your vehicle's history instantly.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                        <Link href="/" className="nav-link" style={{ fontSize: '1rem' }}>Home</Link>
                        <Link href="/faq" className="nav-link" style={{ fontSize: '1rem' }}>FAQ</Link>
                        <Link href="/contact-us" className="nav-link" style={{ fontSize: '1rem' }}>Contact Us</Link>
                        <Link href="/privacy" className="nav-link" style={{ fontSize: '1rem' }}>Privacy Policy</Link>
                        <Link href="/terms" className="nav-link" style={{ fontSize: '1rem' }}>Terms & Conditions</Link>
                        <Link href="/request-refund" className="nav-link" style={{ fontSize: '1rem' }}>Request Refund</Link>
                    </div>
                </div>
                <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid #222', display: 'flex', justifyContent: 'space-between', color: '#555' }}>
                    <small>&copy; 2026 VehiclesReport.com</small>
                    <small>All rights reserved.</small>
                </div>
            </div>
        </section>
    );
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    )
}
