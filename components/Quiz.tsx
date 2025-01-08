// ButtonQuiz.tsx

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ConfettiFireworks } from "@/components/ConfettiFireworks";

// Define the structure of a quiz question
export type Question = {
    question: string;
    options: string[];
    correctAnswer: number;
};

// Define the structure of feedback based on score
interface Feedback {
    emoji: string;
    message: string;
}

// Define the props for the Quiz component
interface QuizProps {
    questions: Question[];
}

export const Quiz: React.FC<QuizProps> = ({ questions }) => {
    // State to track user answers
    const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
        Array(questions.length).fill(null)
    );

    // State to track which questions are correct
    const [correctAnswers, setCorrectAnswers] = useState<boolean[]>(
        Array(questions.length).fill(false)
    );

    // State to track if the form has been submitted
    const [submitted, setSubmitted] = useState<boolean>(false);

    // State to track the user's score
    const [score, setScore] = useState<number>(0);

    // State to trigger confetti
    const [triggerConfetti, setTriggerConfetti] = useState<boolean>(false);

    // Handle option selection
    const handleOptionChange = (questionIndex: number, optionIndex: number) => {
        if (correctAnswers[questionIndex]) return; // Prevent changes if already correct

        const updatedAnswers = [...userAnswers];
        updatedAnswers[questionIndex] = optionIndex;
        setUserAnswers(updatedAnswers);
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let calculatedScore = 0;
        const updatedCorrectAnswers = [...correctAnswers];

        questions.forEach((q, idx) => {
            if (userAnswers[idx] === q.correctAnswer) {
                calculatedScore += 1;
                updatedCorrectAnswers[idx] = true;
            } else {
                updatedCorrectAnswers[idx] = false;
            }
        });

        setScore(calculatedScore);
        setCorrectAnswers(updatedCorrectAnswers);
        setSubmitted(true);

        // Trigger confetti if score is 100%
        if (calculatedScore === questions.length) {
            setTriggerConfetti(true);
        }
    };

    // Function to get performance message and emoji
    const getPerformanceFeedback = (score: number): Feedback => {
        const total = questions.length;
        const percentage = (score / total) * 100;

        if (percentage === 100) {
            return { emoji: "🎉", message: "Outstanding! Perfect score!" };
        } else if (percentage >= 80) {
            return {
                emoji: "😊",
                message: "Great job! You have a strong understanding.",
            };
        } else if (percentage >= 50) {
            return {
                emoji: "🙂",
                message: "Good effort! A bit more practice and you'll ace it.",
            };
        } else {
            return {
                emoji: "😢",
                message: "Don't give up! Keep studying and try again.",
            };
        }
    };

    // Get feedback based on score
    const feedback = submitted ? getPerformanceFeedback(score) : null;

    return (
        <section className="mb-6">
            {/* Trigger ConfettiFireworks when triggerConfetti is true */}
            {triggerConfetti && <ConfettiFireworks trigger={triggerConfetti} />}

            <h2 className="text-2xl font-semibold mb-4">
                Quiz: Test Your Knowledge
            </h2>
            <form onSubmit={handleSubmit}>
                {questions.map((q, idx) => (
                    <div
                        key={idx}
                        className="mb-4"
                    >
                        <p className="font-medium">
                            {idx + 1}. {q.question}
                        </p>
                        <div className="mt-2">
                            {q.options.map((option, optionIdx) => (
                                <label
                                    key={optionIdx}
                                    className="flex items-center mb-1"
                                >
                                    <input
                                        type="radio"
                                        name={`question-${idx}`}
                                        value={optionIdx}
                                        checked={userAnswers[idx] === optionIdx}
                                        onChange={() =>
                                            handleOptionChange(idx, optionIdx)
                                        }
                                        className="mr-2"
                                        disabled={correctAnswers[idx]}
                                        required={!correctAnswers[idx]}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                        {submitted && (
                            <p
                                className={`mt-1 font-bold ${
                                    correctAnswers[idx]
                                        ? "text-green-600"
                                        : "text-red-600"
                                }`}
                            >
                                {correctAnswers[idx] ? (
                                    <>✅ Correct!</>
                                ) : userAnswers[idx] !== null ? (
                                    <>❌ Incorrect.</>
                                ) : null}
                            </p>
                        )}
                    </div>
                ))}
                {submitted && feedback && (
                    <div className="mt-4">
                        <p className="text-xl font-semibold">
                            You scored {score} out of {questions.length}.
                        </p>
                        <p className="text-2xl mt-2">
                            {feedback.emoji} {feedback.message}
                        </p>
                    </div>
                )}
                {(!submitted || score < questions.length) && (
                    <Button
                        type="submit"
                        variant="default"
                        className="mt-4"
                    >
                        {submitted
                            ? "Retry Incorrect Answers"
                            : "Submit Answers"}
                    </Button>
                )}
            </form>
        </section>
    );
};
