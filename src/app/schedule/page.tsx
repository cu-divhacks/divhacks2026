import React from "react";
import Schedule from "../../components/Schedule";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SchedulePage() {
    return (
        <main>
            <Header />
            <div style={{ paddingTop: '24px' }}>
                <Schedule />
            </div>
            <Footer />
        </main>
    );
}