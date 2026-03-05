"use client";

import { EXAM_DURATION, formatTime } from "@/lib/utils";
import { Question } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  userName: string;
  questions: Question[];
  onFinish: (answers: (number | null)[], startTime: number) => void;
}

export default function ExamScreen({ userName, questions, onFinish }: Props) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const [showConfirm, setShowConfirm] = useState(false);
  const startTimeRef = useRef(Date.now());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleSubmit = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    onFinish(answers, startTimeRef.current);
  }, [answers, onFinish]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          onFinish(answers, startTimeRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [answers, onFinish]);

  const selectAnswer = (optionIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentQ] = optionIndex;
      return next;
    });
  };

  const goTo = (idx: number) => {
    setCurrentQ(idx);
  };

  const q = questions[currentQ];
  const answered = answers.filter((a) => a !== null).length;
  const progress = ((currentQ + 1) / questions.length) * 100;
  const timerClass =
    timeLeft <= 60 ? "danger" : timeLeft <= 300 ? "warning" : "";
  const optionLabels = ["A", "B", "C", "D"];

  return (
    <>
      <style>{`
        .exam-layout {
          display: grid;
          grid-template-columns: 1fr 200px;
          gap: 32px;
          align-items: start;
        }
        .side-nav-desktop {
          display: block;
        }
        .mobile-q-grid {
          display: none;
        }
        .header-username {
          display: flex;
        }
        .header-answered {
          display: flex;
        }
        @media (max-width: 680px) {
          .exam-layout {
            grid-template-columns: 1fr;
          }
          .side-nav-desktop {
            display: none;
          }
          .mobile-q-grid {
            display: block;
          }
          .header-username {
            display: none;
          }
          .header-answered {
            display: none;
          }
        }
      `}</style>

      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(10,10,15,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          padding: "0 16px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          {/* Left: brand + username (hidden on mobile) */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontFamily: "var(--display)",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              CTFL 4.0
            </span>
            <div
              className="header-username"
              style={{ alignItems: "center", gap: "12px" }}
            >
              <div
                style={{
                  width: "1px",
                  height: "18px",
                  background: "var(--border)",
                }}
              />
              <span style={{ fontSize: "0.82rem", color: "var(--text-dim)" }}>
                {userName}
              </span>
            </div>
          </div>

          {/* Right: answered count + timer */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              className="header-answered"
              style={{
                fontSize: "0.78rem",
                color: "var(--text-dim)",
                alignItems: "center",
              }}
            >
              {answered}/{questions.length}
            </span>
            <span
              className={`timer ${timerClass}`}
              style={{ fontSize: "1rem" }}
            >
              ⏱ {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div
          className="progress-bar"
          style={{ borderRadius: 0, height: "3px" }}
        >
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </header>

      {/* Mobile: question counter strip */}
      <div
        style={{
          background: "var(--bg-card)",
          borderBottom: "1px solid var(--border)",
          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.78rem",
            color: "var(--text-dim)",
          }}
        >
          Question {currentQ + 1} of {questions.length}
        </span>
        <span style={{ fontSize: "0.78rem", color: "var(--text-dim)" }}>
          {answered} answered
        </span>
      </div>

      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "20px 16px 100px",
        }}
      >
        <div className="exam-layout">
          {/* Question panel */}
          <div>
            {/* Question metadata */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
                flexWrap: "wrap",
              }}
            >
              <span className={`badge badge-${q.klevel.toLowerCase()}`}>
                {q.klevel}
              </span>
              <span
                className="badge"
                style={{
                  background: "rgba(99,102,241,0.1)",
                  color: "var(--accent-bright)",
                  border: "1px solid rgba(99,102,241,0.3)",
                }}
              >
                §{q.section}
              </span>
            </div>

            {/* Question text */}
            <div
              className="card"
              style={{ marginBottom: "16px", padding: "20px" }}
            >
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "var(--text-primary)",
                }}
              >
                {q.question}
              </p>
            </div>

            {/* Options */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginBottom: "24px",
              }}
            >
              {q.options.map((opt, i) => {
                const isSelected = answers[currentQ] === i;
                return (
                  <button
                    key={i}
                    className={`option-btn ${isSelected ? "selected" : ""}`}
                    onClick={() => selectAnswer(i)}
                    style={{ padding: "14px 16px" }}
                  >
                    <span className="option-label">{optionLabels[i]}</span>
                    <span style={{ fontSize: "0.9rem" }}>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  className="btn btn-outline"
                  onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
                  disabled={currentQ === 0}
                  style={{ padding: "10px 16px", fontSize: "0.85rem" }}
                >
                  ← Prev
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() =>
                    setCurrentQ(Math.min(questions.length - 1, currentQ + 1))
                  }
                  disabled={currentQ === questions.length - 1}
                  style={{ padding: "10px 16px", fontSize: "0.85rem" }}
                >
                  Next →
                </button>
              </div>

              <button
                className="btn btn-danger"
                onClick={() => setShowConfirm(true)}
                style={{ padding: "10px 18px", fontSize: "0.85rem" }}
              >
                Submit
              </button>
            </div>

            {/* Mobile: inline question number grid (shown below action buttons on small screens) */}
            <div className="mobile-q-grid" style={{ marginTop: "20px" }}>
              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: "0.68rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--text-dim)",
                    }}
                  >
                    Questions
                  </span>
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      fontSize: "0.68rem",
                      color: "var(--text-dim)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "2px",
                          background: "var(--accent)",
                        }}
                      />
                      Current
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "2px",
                          background: "var(--accent-dim)",
                        }}
                      />
                      Answered
                    </div>
                  </div>
                </div>
                <div className="q-nav" style={{ gap: "5px" }}>
                  {questions.map((_, i) => (
                    <button
                      key={i}
                      className={`q-dot ${i === currentQ ? "current" : answers[i] !== null ? "answered" : ""}`}
                      onClick={() => goTo(i)}
                      style={{
                        width: "30px",
                        height: "30px",
                        fontSize: "0.72rem",
                      }}
                      title={`Question ${i + 1}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Side nav — desktop only */}
          <div
            className="side-nav-desktop"
            style={{ position: "sticky", top: "80px" }}
          >
            <div className="card" style={{ padding: "14px" }}>
              <p
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--text-dim)",
                  marginBottom: "10px",
                }}
              >
                Questions
              </p>
              <div className="q-nav">
                {questions.map((_, i) => (
                  <button
                    key={i}
                    className={`q-dot ${i === currentQ ? "current" : answers[i] !== null ? "answered" : ""}`}
                    onClick={() => goTo(i)}
                    title={`Question ${i + 1}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <div
                style={{
                  marginTop: "12px",
                  borderTop: "1px solid var(--border)",
                  paddingTop: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    fontSize: "0.68rem",
                    color: "var(--text-dim)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "2px",
                        background: "var(--accent)",
                        flexShrink: 0,
                      }}
                    />
                    Current
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "2px",
                        background: "var(--accent-dim)",
                        flexShrink: 0,
                      }}
                    />
                    Answered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Confirm submit modal */}
      {showConfirm && (
        <div className="modal-overlay" onClick={() => setShowConfirm(false)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            style={{ padding: "28px 24px" }}
          >
            <h2
              style={{
                fontFamily: "var(--display)",
                fontSize: "1.3rem",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              Submit Exam?
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.88rem",
                marginBottom: "16px",
                lineHeight: 1.6,
              }}
            >
              You have answered{" "}
              <strong style={{ color: "var(--accent-bright)" }}>
                {answered} of {questions.length}
              </strong>{" "}
              questions.
              {answered < questions.length && (
                <span style={{ color: "var(--warning)" }}>
                  {" "}
                  {questions.length - answered} unanswered will be marked wrong.
                </span>
              )}
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.88rem",
                marginBottom: "24px",
              }}
            >
              Time remaining:{" "}
              <span
                style={{
                  fontFamily: "var(--mono)",
                  color: "var(--accent-bright)",
                }}
              >
                {formatTime(timeLeft)}
              </span>
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                className="btn btn-outline"
                onClick={() => setShowConfirm(false)}
                style={{ flex: 1, justifyContent: "center", padding: "12px" }}
              >
                Continue
              </button>
              <button
                className="btn btn-danger"
                onClick={handleSubmit}
                style={{ flex: 1, justifyContent: "center", padding: "12px" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
