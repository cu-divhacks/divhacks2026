"use client";

import React, { useState } from "react";
import styles from "./FAQ.module.css";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQColumn {
    title: string;
    items: FAQItem[];
}

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqData: FAQColumn[] = [
        {
            title: "General",
            items: [
                {
                    question: "What is DivHacks?",
                    answer: "DivHacks is a hackathon celebrating diversity and innovation in technology. Join us for a weekend of coding, creativity, and collaboration with amazing hackers from around the world.",
                },
                {
                    question: "What is the cost?",
                    answer: "DivHacks is completely free to attend! We provide meals, refreshments, and fun activities throughout the hackathon. No hidden costs.",
                },
                {
                    question: "Who can apply?",
                    answer: "Anyone passionate about technology and innovation can apply! No experience necessary. Beginners and experts welcome. High school and college students are eligible.",
                },
                {
                    question: "I still have questions!",
                    answer: "Reach out to us on Discord, Twitter, or email us at cu.divhacks@gmail.com. Our team is happy to help! You can also check our FAQ page on the website.",
                },
            ],
        },
        {
            title: "Logistics",
            items: [
                {
                    question: "Can I attend virtually?",
                    answer: "Yes! We offer both in-person and virtual participation options. You can compete from anywhere in the world and still win amazing prizes.",
                },
                {
                    question: "Will food be provided?",
                    answer: "Absolutely! We provide breakfast, lunch, dinner, and snacks throughout the hackathon. We accommodate various dietary restrictions.",
                },
                {
                    question: "What can I win?",
                    answer: "Amazing prizes including cash awards, tech gadgets, internship opportunities with sponsors, and bragging rights! Check our sponsors for specific prize details.",
                },
                {
                    question: "Will there be overnight accommodations?",
                    answer: "We will provide an overnight hacking space where non-Columbia/Barnard students can work and sleep.",
                },
            ],
        },
    ];

    const toggleItem = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const getColumnItemClass = (
        columnIndex: number,
        itemIndex: number,
    ): string => {
        const baseClass = styles.faqItem;
        const itemNum = itemIndex + 2; // +2 because nth-child starts at 1 and title is child 1

        const colorClasses = [
            // Left column (columnIndex 0)
            columnIndex === 0
                ? itemNum === 2
                    ? styles.color0
                    : itemNum === 3
                      ? styles.color1
                      : itemNum === 4
                        ? styles.color2
                        : styles.color3
                : // Right column (columnIndex 1)
                  itemNum === 2
                  ? styles.color3
                  : itemNum === 3
                    ? styles.color2
                    : itemNum === 4
                      ? styles.color0
                      : styles.color1,
        ];

        return `${baseClass} ${colorClasses[0]}`;
    };

    return (
        <section id="faq" className={styles.container}>
            <div className={styles.faqHeader}>
                <h1>FAQ</h1>
            </div>

            <div className={styles.faqGrid}>
                {faqData.map((column, columnIndex) => (
                    <div key={columnIndex} className={styles.faqColumn}>
                        <div className={styles.faqColumnTitle}>
                            {column.title}
                        </div>

                        {column.items.map((item, itemIndex) => {
                            const globalIndex = columnIndex * 4 + itemIndex;
                            const isActive = activeIndex === globalIndex;

                            return (
                                <div
                                    key={itemIndex}
                                    className={`${getColumnItemClass(
                                        columnIndex,
                                        itemIndex,
                                    )} ${isActive ? styles.active : ""}`}
                                    onClick={() => toggleItem(globalIndex)}
                                >
                                    <div className={styles.faqQuestion}>
                                        <span>{item.question}</span>
                                        <span className={styles.toggleIcon}>
                                            ▼
                                        </span>
                                    </div>
                                    <div className={styles.faqAnswer}>
                                        {item.answer}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
