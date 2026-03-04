// app/pricing/page.jsx
import Link from 'next/link';
import AnimatedSection from '../../components/AnimatedSection';

export default function Pricing() {
    return (
        <main>
            <section className="section bg-black" style={{ paddingTop: '20vh', minHeight: '100vh' }}>
                <div className="container text-center">
                    <AnimatedSection>
                        <h1 style={{ marginBottom: '2rem' }}>Transparent <span className="text-faded">Pricing</span></h1>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <p style={{ margin: '0 auto 4rem auto' }}>Cost-effective vehicle history, minus the markups.</p>
                    </AnimatedSection>

                    <div className="grid-2" style={{ textAlign: 'left', marginTop: '4rem' }}>
                        <AnimatedSection animationType="slideRight" delay={0.3}>
                            <div className="glass-panel" style={{ background: '#fff', color: '#000', padding: '4rem', borderRadius: '40px' }}>
                                <span className="form-label-small">Most Popular</span>
                                <h2 style={{ fontSize: '3rem', margin: '1rem 0' }}>$19.99<span style={{ fontSize: '1rem', color: '#888' }}>/mo</span></h2>
                                <h3>Unlimited VIN Checks</h3>
                                <p style={{ color: '#555' }}>Full access to our entire database.</p>
                                <Link href="/pricing" className="btn btn-black" style={{ width: '100%', marginTop: '2rem' }}>Subscribe Now</Link>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection animationType="slideLeft" delay={0.4}>
                            <div className="glass-panel" style={{ background: '#111', border: '1px solid #333', padding: '4rem', borderRadius: '40px' }}>
                                <span className="form-label-small text-faded">One-Time</span>
                                <h2 style={{ fontSize: '3rem', margin: '1rem 0', color: '#fff' }}>Bulk Reports</h2>
                                <p className="text-faded-light">Need a specific amount? Perfect for dealers.</p>
                                <ul style={{ listStyle: 'none', margin: '2rem 0', color: '#fff', lineHeight: '2' }}>
                                    <li><strong>1 Report:</strong> $9.99</li>
                                    <li><strong>5 Reports:</strong> $19.00</li>
                                    <li><strong>10 Reports:</strong> $30.00</li>
                                </ul>
                                <Link href="/pricing" className="btn btn-white" style={{ width: '100%', marginTop: '2rem' }}>Buy Bulk</Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </main>
    );
}
