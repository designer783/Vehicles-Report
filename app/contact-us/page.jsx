// app/contact-us/page.jsx
import AnimatedSection from '../../components/AnimatedSection';

export default function ContactUs() {
    return (
        <main>
            <section className="section bg-white" style={{ paddingTop: '20vh', minHeight: '80vh' }}>
                <div className="container">
                    <div className="grid-2">
                        <AnimatedSection animationType="slideRight">
                            <div>
                                <h1 style={{ marginBottom: '2rem' }}>Contact <span className="text-faded">Us</span></h1>
                                <p style={{ fontSize: '1.25rem' }}>Get in touch with our team for support or inquiries.</p>

                                <div style={{ marginTop: '4rem' }}>
                                    <span className="form-label-small">Phone Support</span>
                                    <h3 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>(800) 709-6297</h3>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animationType="slideLeft" delay={0.2}>
                            <div>
                                <form action="#" method="POST" style={{ background: '#f9f9f9', padding: '3rem', borderRadius: '20px' }}>
                                    <div className="form-group">
                                        <label className="form-label-small">Name</label>
                                        <input type="text" name="name" className="minimal-input" placeholder="Your name" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label-small">Email</label>
                                        <input type="email" name="email" className="minimal-input" placeholder="Your email address" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label-small">Message</label>
                                        <textarea name="message" className="minimal-input" placeholder="How can we help?" rows="4" style={{ resize: 'none' }}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-black" style={{ width: '100%', marginTop: '2rem' }}>Send Message</button>
                                </form>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </main>
    );
}
