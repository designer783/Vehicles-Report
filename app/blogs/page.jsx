// app/blogs/page.jsx
import Link from 'next/link';
import AnimatedSection from '../../components/AnimatedSection';

export default function Blogs() {
    return (
        <main>
            <section className="section bg-black" style={{ paddingTop: '20vh', minHeight: '100vh' }}>
                <div className="container">
                    <AnimatedSection>
                        <h1 style={{ marginBottom: '4rem', textAlign: 'center' }}>Knowledge <span className="text-faded-light">Base</span></h1>
                    </AnimatedSection>

                    <div className="grid-2">
                        <AnimatedSection delay={0.2}>
                            <div className="feature-card" style={{ padding: '3rem', border: '1px solid #333', borderTop: '1px solid #333' }}>
                                <span className="form-label-small text-faded-light">Vehicle Guide</span>
                                <h2 style={{ fontSize: '2rem', margin: '1rem 0' }}>Best Used Volvo to Buy in 2025</h2>
                                <p className="text-faded">A comprehensive guide on selecting the safest and most reliable pre-owned Volvo models.</p>
                                <Link href="#" className="btn btn-white" style={{ marginTop: '2rem' }}>Read Article</Link>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.4}>
                            <div className="feature-card" style={{ padding: '3rem', border: '1px solid #333', borderTop: '1px solid #333' }}>
                                <span className="form-label-small text-faded-light">Vehicle History</span>
                                <h2 style={{ fontSize: '2rem', margin: '1rem 0' }}>Red Flags When Buying a Used Truck</h2>
                                <p className="text-faded">What to watch out for before finalizing the purchase of a heavy-duty or light truck.</p>
                                <Link href="#" className="btn btn-outline" style={{ marginTop: '2rem' }}>Read Article</Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </main>
    );
}
