import React from "react";
import CampusMap from "../../components/Map";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function MapPage() {
    return (
        <main>
            <Header />
            <div style={{ paddingTop: '24px' }}>
                <CampusMap />
            </div>
            <Footer />
        </main>
    );
}