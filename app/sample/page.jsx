// app/sample/page.jsx
import Image from 'next/image';
import AnimatedSection from '../../components/AnimatedSection';

export default function Sample() {
    return (
        <main>
            <section className="section bg-black" style={{ paddingTop: '20vh', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <div className="container text-center">
                    <AnimatedSection>
                        <h1 style={{ marginBottom: '2rem' }}>Sample <span className="text-faded">History</span> Report</h1>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <p style={{ margin: '0 auto 4rem auto' }}>Review exactly what you get when you purchase a comprehensive report.</p>
                    </AnimatedSection>
                    <AnimatedSection animationType="fadeIn" delay={0.4}>
                        <div className="radius-image" style={{ width: '100%', height: '80vh', backgroundColor: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image src="/report.webp" alt="Sample Report" width={1000} height={800} style={{ objectFit: 'contain', maxHeight: '95%' }} priority />
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </main>
    );
}
