import Image from 'next/image';
import Link from 'next/link';
import SearchTabs from '../components/SearchTabs';
import AnimatedSection from '../components/AnimatedSection';
import ParallaxImage from '../components/ParallaxImage';

export default function Home() {
    return (
        <main>
            {/* Marquee Alert */}
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, background: '#111', color: '#ff4444', fontSize: '0.8rem', letterSpacing: '0.1em', zIndex: 90, padding: '0.5rem 0', textTransform: 'uppercase', overflow: 'hidden', whiteSpace: 'nowrap', borderBottom: '1px solid #333' }}>
                <marquee scrollamount="8">WARNING: DON'T GAMBLE WITH YOUR MONEY ON A USED CAR! GET A COMPLETE VEHICLE HISTORY REPORT TODAY!</marquee>
            </div>

            {/* Hero Section (No Image, Centered) */}
            <section className="section bg-black" style={{ paddingTop: '25vh', paddingBottom: '15vh', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container text-center">
                    <AnimatedSection>
                        <h1 style={{ marginBottom: '2rem', textWrap: 'balance', lineHeight: '1.1', maxWidth: '1000px', margin: '0 auto 2rem auto' }}>
                            Check the <span className="text-faded">Complete</span> Vehicle History: Buy With Confidence
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <p style={{ margin: '0 auto 4rem auto', fontSize: '1.25rem', maxWidth: '600px', textWrap: 'balance' }}>
                            Our vehicle history check completely reveals any serious issues that sellers try to hide from buyers.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4}>
                        <SearchTabs />
                    </AnimatedSection>
                </div>
            </section>

            {/* What is a Vehicle History Check? (Black) */}
            <AnimatedSection>
                <section className="section bg-black" style={{ borderTop: '1px solid #222' }}>
                    <div className="container">
                        <div className="grid-2">
                            <div>
                                <h2 style={{ textWrap: 'balance' }}>What is a Vehicle History Check?</h2>
                            </div>
                            <div>
                                <p style={{ color: '#bbb' }}>
                                    A vehicle history check is a way of generating a full car’s history report by entering the 17-digit VIN into a VIN check tool. A vehicle history report details everything that happened to a car throughout its lifetime, like tracking accidents, owners, repairs, title changes, and other major events.
                                </p>
                                <p style={{ color: '#bbb' }}>
                                    A car report shows how well the vehicle was treated and what problems it faced. This information helps you avoid buying a car with hidden damage, fake mileage, or serious safety issues that could cost you thousands of dollars later.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>


            {/* What's Included (Black) */}
            <section className="section bg-black">
                <div className="container">
                    <AnimatedSection>
                        <h2 style={{ maxWidth: '800px', marginBottom: '4rem' }}>
                            What's Included in a <br /> <span className="text-faded">Vehicle History Report?</span>
                        </h2>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <p style={{ marginBottom: '4rem', maxWidth: '800px', color: '#bbb' }}>
                            Our comprehensive vehicle history check pulls information from dozens of sources like insurance companies, government agencies, auto auctions, repair shops, and law enforcement databases across North America to give you the complete story about any car.
                        </p>
                    </AnimatedSection>

                    <div className="grid-3">
                        <AnimatedSection delay={0.1}><div className="feature-card"><h3>Title History and Brand Records</h3><p>Title records reveal legal issues and damage classifications that affect a vehicle’s safety and value significantly. Title brands include salvage, rebuilt, flood, hail damage, fire damage, and lemon law buybacks.</p></div></AnimatedSection>
                        <AnimatedSection delay={0.2}><div className="feature-card"><h3>Accident History</h3><p>Collision records show every time the car was damaged, with dates, and how serious each incident was for safety. Know if the airbags were deployed and if the vehicle was towed from accident scenes.</p></div></AnimatedSection>
                        <AnimatedSection delay={0.3}><div className="feature-card"><h3>Odometer Readings</h3><p>Mileage history helps you spot fraud and understand how heavily the car was actually driven over time. Sudden mileage drops that don’t match the car’s age expose odometer rollback.</p></div></AnimatedSection>
                        <AnimatedSection delay={0.4}><div className="feature-card" style={{ borderTop: '1px solid #222' }}><h3>Ownership History</h3><p>Ownership records tell you how many people owned the car, how long each owner kept it, and where they registered it. See if the vehicle started as a rental car, lease vehicle, taxi, police car, or government fleet vehicle.</p></div></AnimatedSection>
                        <AnimatedSection delay={0.5}><div className="feature-card" style={{ borderTop: '1px solid #222' }}><h3>Vehicle Service Records</h3><p>Maintenance and service records show how well previous owners took care of the car throughout its life. Regular service records suggest the previous owner took good care of the car.</p></div></AnimatedSection>
                        <AnimatedSection delay={0.6}><div className="feature-card" style={{ borderTop: '1px solid #222' }}><h3>Theft and Recovery Records</h3><p>Theft records protect you from accidentally buying a stolen car that could be seized by police later. We check if the car ever appeared on hot sheets, when police recovered it if stolen, and whether thieves damaged it during the theft.</p></div></AnimatedSection>
                        <AnimatedSection delay={0.7}><div className="feature-card" style={{ borderTop: '1px solid #222' }}><h3>Recall Information</h3><p>Recall data alerts you to safety defects that need repair before the car is safe to drive daily. We list recall campaigns by date, what problems they address, and whether repair records show the dealer completed the fix.</p></div></AnimatedSection>
                        <AnimatedSection delay={0.8}><div className="feature-card" style={{ borderTop: '1px solid #222' }}><h3>Lien and Loan Records</h3><p>Financial records show if anyone else has a legal claim to the vehicle that could affect ownership. We show current lienholder information and past financing records so you know if someone still owes money on the car.</p></div></AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Hidden Problems Grid (White) */}
            <section className="section bg-white">
                <div className="container">
                    <h2 style={{ maxWidth: '800px', marginBottom: '4rem' }}>
                        Hidden Problems Our <br /> <span className="text-faded">VIN Reports Expose</span>
                    </h2>

                    <div className="grid-3">
                        <div className="feature-card">
                            <h3>Accident Damage</h3>
                            <p>1 in 10 to more than half of used cars carry some accident history.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Odometer Fraud</h3>
                            <p>About 2.5 million cars on U.S. roads have suspected odometer rollback.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Flood or Fire Damage</h3>
                            <p>In 2024, about 347,000 vehicles were damaged by floods.</p>
                        </div>
                        <div className="feature-card" style={{ borderTop: 'none' }}>
                            <h3>Salvage Titles</h3>
                            <p>In a review of 1k+ car history reports, about 30% showed a salvage title.</p>
                        </div>
                        <div className="feature-card" style={{ borderTop: 'none' }}>
                            <h3>Outstanding Liens</h3>
                            <p>In the same review, about 25% of vehicles showed a recorded lien.</p>
                        </div>
                        <div className="feature-card" style={{ borderTop: 'none' }}>
                            <h3>Stolen Car Records</h3>
                            <p>In 2024 alone, 850,708 vehicles were reported stolen in the U.S.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Benefit (Black) */}
            <section className="section bg-black">
                <div className="container">
                    <div className="grid-2">
                        <AnimatedSection animationType="slideRight">
                            <div>
                                <h2 style={{ textWrap: 'balance' }}>The Benefit of Checking a Used Vehicle’s History</h2>
                                <p style={{ color: '#bbb' }}>
                                    Buying a used car without checking its history is like buying a house without looking inside first. You need to know what you’re getting into before spending your hard-earned money.
                                </p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection animationType="fadeIn">
                            <ParallaxImage
                                src="/ty.png"
                                alt="Toyota Corolla"
                                width={500}
                                height={300}
                                className="radius-image"
                                style={{ width: '100%', height: '400px', backgroundColor: '#111' }}
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* How to Look Up / Where is VIN (Black) */}
            <section className="section bg-black" style={{ borderTop: '1px solid #222' }}>
                <div className="container">
                    <div className="grid-2">
                        <div>
                            <span className="form-label-small">Step-by-Step</span>
                            <h2 style={{ marginBottom: '2rem' }}>How to Look Up a Car History by VIN?</h2>
                            <p style={{ color: '#bbb' }}>Getting your complete vehicle history report takes less than a minute from start to finish. Enter the VIN, preview the details, and access your full report instantly.</p>
                        </div>
                        <div>
                            <span className="form-label-small">Location Guide</span>
                            <h2 style={{ marginBottom: '2rem' }}>Where is the VIN Number on a Car?</h2>
                            <p style={{ color: '#bbb' }}>Your car’s VIN appears in several easy-to-find spots both on the vehicle itself and on your important paperwork. Check the driver's side dashboard, the driver's side door jamb, or your insurance card.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Free vs Paid / Vehicle Types (White) */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid-2">
                        <div className="feature-card" style={{ borderTop: 'none' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Free VIN Decoder vs. Full Vehicle History Report</h3>
                            <p>Like many websites out there, we offer a free VIN check, which only scratches the surface of a vehicle’s history. The free check provides basic specifications, while the full report accesses accidents, liens, owner history, and more.</p>
                            <Link href="#search" className="btn btn-black" style={{ marginTop: '1rem' }}>Get Full VIN Report</Link>
                        </div>
                        <div className="feature-card" style={{ borderTop: 'none' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>What Vehicle Types Do We Cover?</h3>
                            <p>Our VIN check service supports all types of vehicles registered in the United States and Canada.</p>
                            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem', color: '#555' }}>
                                <li>• Cars</li>
                                <li>• SUVs</li>
                                <li>• Trucks</li>
                                <li>• Vans</li>
                                <li>• Motorcycles</li>
                                <li>• RVs and Motorhomes</li>
                                <li>• Classic</li>
                                <li>• Electric Vehicles</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section (Black) */}
            <section className="section bg-black">
                <div className="container">
                    <h2 style={{ marginBottom: '4rem', textAlign: 'center' }}>Why Choose Our Vehicle History Report?</h2>
                    <div className="grid-2">
                        <div className="feature-card">
                            <span className="form-label-small" style={{ color: '#555' }}>/01</span>
                            <h3>Instant Report Access</h3>
                            <p style={{ color: '#bbb' }}>View and download your report immediately without waiting hours or days.</p>
                        </div>
                        <div className="feature-card">
                            <span className="form-label-small" style={{ color: '#555' }}>/02</span>
                            <h3>We are 56% Cheaper</h3>
                            <p style={{ color: '#bbb' }}>Get an affordable auto history report without sacrificing quality.</p>
                        </div>
                        <div className="feature-card" style={{ borderTop: '1px solid #222' }}>
                            <span className="form-label-small" style={{ color: '#555' }}>/03</span>
                            <h3>Full Coverage</h3>
                            <p style={{ color: '#bbb' }}>Records from across the USA and Canada.</p>
                        </div>
                        <div className="feature-card" style={{ borderTop: '1px solid #222' }}>
                            <span className="form-label-small" style={{ color: '#555' }}>/04</span>
                            <h3>Money-Back Guarantee</h3>
                            <p style={{ color: '#bbb' }}>If you don’t get the report, request a refund without hassle.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs (White) */}
            <section className="section bg-white">
                <div className="container">
                    <h2 style={{ marginBottom: '4rem', textAlign: 'center' }}>Frequently Asked Questions</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="feature-card" style={{ padding: '2rem 0', borderTop: '1px solid #ddd' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>What is a vehicle history report?</h3>
                            <p style={{ margin: 0 }}>A vehicle history report is a comprehensive document showing a car’s complete past, including accidents, ownership changes, title status, service records, recalls, theft records, odometer readings, and more.</p>
                        </div>
                        <div className="feature-card" style={{ padding: '2rem 0', borderTop: '1px solid #ddd' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>How do I check my car history?</h3>
                            <p style={{ margin: 0 }}>To check your car history, enter your VIN number or license plate into our tool at the top of this page. You’ll see a free preview of basic information, and then you can purchase the complete report.</p>
                        </div>
                        <div className="feature-card" style={{ padding: '2rem 0', borderTop: '1px solid #ddd' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Can I get a car history check free tool?</h3>
                            <p style={{ margin: 0 }}>Yes, you can use our free VIN decoder to view basic information like make, model, year, and engine type. This won’t reveal any records of accidents, title problems, ownership, and other critical information, as it requires payment.</p>
                        </div>
                        <div className="feature-card" style={{ padding: '2rem 0', borderTop: '1px solid #ddd' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>What does a Vehicle history report show?</h3>
                            <p style={{ margin: 0 }}>A VIN history reveals title brands, accident records, odometer readings over time, number of owners, state registrations, theft records, flood or fire damage, lemon law buybacks, service records, recall information, and market value.</p>
                        </div>
                        <div className="feature-card" style={{ padding: '2rem 0', borderTop: '1px solid #ddd' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Is the Vehicles Report report the same as the Carfax report?</h3>
                            <p style={{ margin: 0 }}>Yes, our report includes the same important records as a CarFax report. In addition, we show sales listings and auction photos when available. You get a clear, detailed history, all at a lower cost.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
