// app/about/page.jsx
import AnimatedSection from '../../components/AnimatedSection';

export default function About() {
    return (
        <main>
            <section className="section bg-white" style={{ paddingTop: '20vh', minHeight: '80vh' }}>
                <div className="container">
                    <AnimatedSection>
                        <h1 style={{ marginBottom: '2rem' }}>About <span className="text-faded">Us</span></h1>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <div style={{ maxWidth: '800px', fontSize: '1.25rem', color: '#555', lineHeight: '1.8' }}>
                            <p>Founded in 2018, VehiclesReport focuses on providing high-accuracy vehicle data by accessing multiple national databases.</p>
                            <p>Our mission is to empower used car buyers with transparent history reports at a lower cost than major competitors. We believe safety and knowledge should not be kept behind a massive paywall.</p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </main>
    );
}
