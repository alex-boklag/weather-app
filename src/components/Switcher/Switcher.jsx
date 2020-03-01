import React from 'react';
import './Switcher.css';

export const Switcher = ({ units, handleSwitcherChange }) => {
    return (
        <section className="switcher-section">
            <select
                value={units}
                onChange={(ev) => handleSwitcherChange(ev.target.value)}
            >
                <option value="imperial">Imperial</option>
                <option value="metric">Metric</option>
            </select>
        </section>
    );
}