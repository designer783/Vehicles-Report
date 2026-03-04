"use client";

import { useState } from 'react';

export default function SearchTabs() {
    const [activeTab, setActiveTab] = useState('vin'); // 'vin' or 'plate'

    const tabStyle = (id) => ({
        padding: '1rem 2rem',
        cursor: 'pointer',
        fontSize: '0.9rem',
        fontWeight: '600',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        borderBottom: activeTab === id ? '2px solid #fff' : '2px solid transparent',
        color: activeTab === id ? '#fff' : '#888',
        transition: 'all 0.2s ease',
        flex: 1,
        textAlign: 'center'
    });

    return (
        <div className="glass-panel" style={{ background: '#111', border: '1px solid #333', borderRadius: '32px', maxWidth: '700px', margin: '0 auto', textAlign: 'left', overflow: 'hidden' }}>
            {/* Tab Headers */}
            <div style={{ display: 'flex', borderBottom: '1px solid #222', background: '#0a0a0a' }}>
                <div style={tabStyle('vin')} onClick={() => setActiveTab('vin')}>By VIN</div>
                <div style={tabStyle('plate')} onClick={() => setActiveTab('plate')}>By License Plate</div>
            </div>

            <div style={{ padding: '3rem' }}>
                <form action="#" method="GET">
                    {activeTab === 'vin' ? (
                        <div className="form-group">
                            <label className="form-label-small" style={{ color: '#888' }}>Vehicle Identification Number</label>
                            <input type="text" name="vin" className="minimal-input" placeholder="Enter 17-digit VIN..." style={{ color: '#fff', borderColor: '#444' }} />
                        </div>
                    ) : (
                        <div className="form-group" style={{ display: 'flex', gap: '2rem' }}>
                            <div style={{ flex: 2 }}>
                                <label className="form-label-small" style={{ color: '#888' }}>License Plate</label>
                                <input type="text" name="plate" className="minimal-input" placeholder="Plate No." style={{ color: '#fff', borderColor: '#444' }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label className="form-label-small" style={{ color: '#888' }}>State</label>
                                <select name="state" className="minimal-input" defaultValue="CA" style={{ color: '#fff', borderColor: '#444', backgroundColor: '#111' }}>
                                    <option value="CA">CA</option>
                                    <option value="TX">TX</option>
                                    <option value="NY">NY</option>
                                    <option value="FL">FL</option>
                                    <option value="IL">IL</option>
                                    <option value="PA">PA</option>
                                    <option value="OH">OH</option>
                                    <option value="GA">GA</option>
                                    <option value="NC">NC</option>
                                    <option value="MI">MI</option>
                                </select>
                            </div>
                        </div>
                    )}

                    <button type="submit" className="btn btn-white" style={{ width: '100%', marginTop: '2rem', fontSize: '1rem', padding: '1rem' }}>
                        Search Records
                    </button>

                    <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: '#555', textAlign: 'center' }}>
                        {activeTab === 'vin'
                            ? "Enter the 17-digit VIN found on the dashboard or door jamb."
                            : "Enter the plate number and selecting the state of registration."}
                    </p>
                </form>
            </div>
        </div>
    );
}
