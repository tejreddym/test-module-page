import React from 'react';
import './FlashcardFAQ.css';

const FlashcardFAQ = () => {
    return (
        <section className="faq-section-wrapper">
            <div className="faq-container">
                <h1>Frequently Asked Questions</h1>
                <div className="flashcard-grid">
                    {/* Card 1 */}
                    <div className="flashcard">
                        <div className="flashcard-inner">
                            <div className="flashcard-front">
                                <h3>What is this product?</h3>
                            </div>
                            <div className="flashcard-back">
                                <p>This is an innovative solution designed to make your life easier and more productive.</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="flashcard">
                        <div className="flashcard-inner">
                            <div className="flashcard-front">
                                <h3>How much does it cost?</h3>
                            </div>
                            <div className="flashcard-back">
                                <p>We offer flexible pricing plans starting from $9.99/month. Check our pricing page for details.</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="flashcard">
                        <div className="flashcard-inner">
                            <div className="flashcard-front">
                                <h3>Can I cancel anytime?</h3>
                            </div>
                            <div className="flashcard-back">
                                <p>Yes! You can cancel your subscription at any time with no hidden fees or penalties.</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="flashcard">
                        <div className="flashcard-inner">
                            <div className="flashcard-front">
                                <h3>Do you offer support?</h3>
                            </div>
                            <div className="flashcard-back">
                                <p>Absolutely. Our support team is available 24/7 via email and live chat.</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="flashcard">
                        <div className="flashcard-inner">
                            <div className="flashcard-front">
                                <h3>Is there a mobile app?</h3>
                            </div>
                            <div className="flashcard-back">
                                <p>Yes, our mobile app is available on both iOS and Android platforms.</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className="flashcard">
                        <div className="flashcard-inner">
                            <div className="flashcard-front">
                                <h3>How do I reset my password?</h3>
                            </div>
                            <div className="flashcard-back">
                                <p>You can reset your password by clicking the 'Forgot Password' link on the login page.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlashcardFAQ;
