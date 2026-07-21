"use client";

import React, { useState } from "react";
import styles from "./FAQ.module.css";
import Splash from "./Splash";

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
                    answer: "DivHacks is an awesome 32-hour long in-person event hosted at Columbia University where students of all backgrounds come together to bring something new to life! Hackers can build any software or hardware project. There will also be lots of workshops, fun games, speakers, and prizes for you to enjoy throughout the event!",
                },
                {
                    question: "What is the cost?",
                    answer: "DivHacks is free for all participants! All attendees will have access to mentors, workshops, events, an overnight hacking space, and food throughout the weekend. However, we do not provide travel reimbursements.",
                },
                {
                    question: "What can I win?",
                    answer: "We offer three podium prizes, a beginner prize, and four track prizes. Hackers also have the opportunity to win prizes from sponsor challenges. Stay tuned for the official list!",
                },
                {
                    question: "Who can come?",
                    answer: "Any college student (undergraduate or graduate) aged 18+ is welcome to apply! You are not required to have prior coding experience or even be a CS major.",
                },
                {
                    question: "How do teams work?",
                    answer: "You can work in teams of up to 4 people. If you don’t have a team, please don't worry! There will be plenty of opportunities to connect with other attendees and form teams at DivHacks.",
                },
            ],
        },
        {
            title: "Logistics",
            items: [
                {
                    question: "Can I attend virtually?",
                    answer: "Unfortunately, DivHacks is only offered in-person.",
                },
                {
                    question: "Will food be provided?",
                    answer: "Yes, we will be providing meals and snacks throughout the weekend. If you have any dietary restrictions, there is a space for you to note this on your application.",
                },
                {
                    question: "Will there be overnight accommodations?",
                    answer: "We will provide an overnight hacking space where non-Columbia/Barnard students can work.",
                },
                {
                    question: "I still have questions!",
                    answer: "Please email us at cu.divhacks@gmail.com.",
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
            <Splash
                className="w-40 h-32 top-6 left-10"
                color="var(--color-darkpink)"
                rotate={-27}
            />
            <Splash
                className="w-76 h-56 bottom-6 right-14"
                color="var(--color-green)"
                rotate={16}
            />
            <Splash
                className="w-52 h-40 top-1/3 right-1/4"
                color="var(--color-blue)"
                rotate={-38}
            />
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
