"use client";

import { formatTime } from "@/lib/utils";
import { ExamResult } from "@/types";
import { useState } from "react";

interface Props {
  result: ExamResult;
  onRetry: () => void;
}

const optionLabels = ["A", "B", "C", "D"];

export default function ResultScreen({ result, onRetry }: Props) {
  const [expandedQ, setExpandedQ] = useState<number | null>(null);
  const [filter, setFilter] = useState<
    "all" | "correct" | "wrong" | "unanswered"
  >("all");

  const {
    userName,
    score,
    total,
    percentage,
    passed,
    timeTaken,
    questions,
    answers,
  } = result;
  const pct = `${percentage}%`;

  const filteredIndices = questions
    .map((_, i) => i)
    .filter((i) => {
      const ans = answers[i];
      if (filter === "correct") return ans === questions[i].correctIndex;
      if (filter === "wrong")
        return ans !== null && ans !== questions[i].correctIndex;
      if (filter === "unanswered") return ans === null;
      return true;
    });

  const correctCount = questions.filter(
    (q, i) => answers[i] === q.correctIndex,
  ).length;
  const wrongCount = questions.filter(
    (q, i) => answers[i] !== null && answers[i] !== q.correctIndex,
  ).length;
  const unansweredCount = questions.filter(
    (_, i) => answers[i] === null,
  ).length;

  return (
    <>
      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-top: 28px;
        }
        .filter-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .result-header-card {
          padding: 36px 28px;
        }
        @media (max-width: 560px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            margin-top: 20px;
          }
          .result-header-card {
            padding: 24px 16px;
          }
          .filter-row {
            gap: 6px;
          }
        }
      `}</style>

      <main
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "24px 16px 80px",
        }}
      >
        {/* Result header card */}
        <div
          className="card-elevated result-header-card"
          style={{ marginBottom: "24px", textAlign: "center" }}
        >
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: "0.72rem",
              color: "var(--text-dim)",
              marginBottom: "20px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Exam Complete — {userName}
          </p>

          {/* Score ring */}
          <div
            className={`result-score-ring ${passed ? "passed" : "failed"}`}
            style={{ "--pct": pct } as React.CSSProperties}
          >
            <div className="ring-content">
              <div
                style={{
                  fontFamily: "var(--display)",
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: passed ? "var(--success)" : "var(--danger)",
                  lineHeight: 1,
                }}
              >
                {percentage}%
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.68rem",
                  color: "var(--text-dim)",
                  marginTop: "4px",
                }}
              >
                {score}/{total}
              </div>
            </div>
          </div>

          {/* Verdict */}
          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                display: "inline-block",
                padding: "7px 20px",
                borderRadius: "40px",
                background: passed
                  ? "rgba(34,197,94,0.15)"
                  : "rgba(239,68,68,0.15)",
                border: `1px solid ${passed ? "var(--success)" : "var(--danger)"}`,
                fontFamily: "var(--display)",
                fontSize: "1rem",
                fontWeight: 700,
                color: passed ? "var(--success)" : "var(--danger)",
                letterSpacing: "0.05em",
              }}
            >
              {passed ? "✓ PASSED" : "✗ NOT PASSED"}
            </div>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.875rem",
                marginTop: "10px",
                lineHeight: 1.5,
              }}
            >
              {passed
                ? "Great work! You scored above the 65% pass mark."
                : "You need 65% to pass. Keep studying and try again!"}
            </p>
          </div>

          {/* Stats grid — 4 col desktop, 2×2 mobile */}
          <div className="stats-grid">
            {[
              {
                label: "Correct",
                value: correctCount,
                color: "var(--success)",
              },
              { label: "Wrong", value: wrongCount, color: "var(--danger)" },
              {
                label: "Unanswered",
                value: unansweredCount,
                color: "var(--text-dim)",
              },
              {
                label: "Time",
                value: formatTime(timeTaken),
                color: "var(--accent-bright)",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card"
                style={{ padding: "14px 8px" }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: stat.color,
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    color: "var(--text-dim)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <button
            className="btn btn-primary"
            onClick={onRetry}
            style={{
              marginTop: "24px",
              padding: "12px 28px",
              width: "100%",
              maxWidth: "280px",
              justifyContent: "center",
            }}
          >
            Try Again →
          </button>
        </div>

        {/* Review section */}
        <div>
          {/* Header + filters */}
          <div style={{ marginBottom: "16px" }}>
            <h2
              style={{
                fontFamily: "var(--display)",
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              Question Review
            </h2>
            <div className="filter-row">
              {(["all", "correct", "wrong", "unanswered"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "6px",
                    border: `1px solid ${filter === f ? "var(--accent)" : "var(--border)"}`,
                    background:
                      filter === f ? "rgba(99,102,241,0.15)" : "transparent",
                    color:
                      filter === f ? "var(--accent-bright)" : "var(--text-dim)",
                    fontFamily: "var(--sans)",
                    fontSize: "0.78rem",
                    cursor: "pointer",
                    transition: "all 0.15s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {f === "all"
                    ? `All (${total})`
                    : f === "correct"
                      ? `✓ ${correctCount}`
                      : f === "wrong"
                        ? `✗ ${wrongCount}`
                        : `— ${unansweredCount}`}
                </button>
              ))}
            </div>
          </div>

          {/* Quick nav dots */}
          <div
            className="card"
            style={{ padding: "14px", marginBottom: "16px", overflowX: "auto" }}
          >
            <div className="q-nav" style={{ flexWrap: "wrap" }}>
              {questions.map((q, i) => {
                const ans = answers[i];
                const isCorrect = ans === q.correctIndex;
                const isWrong = ans !== null && !isCorrect;
                return (
                  <button
                    key={i}
                    className={`q-dot ${isCorrect ? "correct-dot" : isWrong ? "wrong-dot" : ""}`}
                    onClick={() => {
                      setFilter("all");
                      setExpandedQ(i);
                      setTimeout(() => {
                        document
                          .getElementById(`question-${i}`)
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }, 50);
                    }}
                    title={`Q${i + 1}: ${isCorrect ? "Correct" : isWrong ? "Wrong" : "Unanswered"}`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Questions list */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {filteredIndices.map((i) => {
              const q = questions[i];
              const userAns = answers[i];
              const isCorrect = userAns === q.correctIndex;
              const isWrong = userAns !== null && !isCorrect;
              const isExpanded = expandedQ === i;

              let statusColor = "var(--text-dim)";
              let statusLabel = "Unanswered";
              let borderColor = "var(--border)";
              if (isCorrect) {
                statusColor = "var(--success)";
                statusLabel = "Correct";
                borderColor = "rgba(34,197,94,0.3)";
              }
              if (isWrong) {
                statusColor = "var(--danger)";
                statusLabel = "Wrong";
                borderColor = "rgba(239,68,68,0.3)";
              }

              return (
                <div
                  key={i}
                  id={`question-${i}`}
                  style={{
                    background: "var(--bg-card)",
                    border: `1px solid ${isExpanded ? borderColor : "var(--border)"}`,
                    borderRadius: "10px",
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                  }}
                >
                  {/* Collapsed header */}
                  <button
                    onClick={() => setExpandedQ(isExpanded ? null : i)}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      textAlign: "left",
                    }}
                  >
                    {/* Status icon */}
                    <div
                      style={{
                        width: "26px",
                        height: "26px",
                        minWidth: "26px",
                        borderRadius: "50%",
                        background: isCorrect
                          ? "var(--success)"
                          : isWrong
                            ? "var(--danger)"
                            : "var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: isCorrect ? "#0a0a0f" : "white",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        fontFamily: "var(--mono)",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      {isCorrect ? "✓" : isWrong ? "✗" : "—"}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      {/* Metadata row */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          marginBottom: "5px",
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--mono)",
                            fontSize: "0.7rem",
                            color: "var(--text-dim)",
                          }}
                        >
                          Q{i + 1}
                        </span>
                        <span
                          className={`badge badge-${q.klevel.toLowerCase()}`}
                        >
                          {q.klevel}
                        </span>
                        <span
                          className="badge"
                          style={{
                            background: "rgba(99,102,241,0.1)",
                            color: "var(--accent-bright)",
                            border: "1px solid rgba(99,102,241,0.2)",
                          }}
                        >
                          §{q.section}
                        </span>
                        <span
                          style={{
                            fontSize: "0.72rem",
                            color: statusColor,
                            marginLeft: "auto",
                            flexShrink: 0,
                          }}
                        >
                          {statusLabel}
                        </span>
                      </div>
                      {/* Question text */}
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.5,
                          wordBreak: "break-word",
                        }}
                      >
                        {q.question}
                      </p>
                    </div>

                    <div
                      style={{
                        color: "var(--text-dim)",
                        fontSize: "0.75rem",
                        minWidth: "16px",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      {isExpanded ? "▲" : "▼"}
                    </div>
                  </button>

                  {/* Expanded detail */}
                  {isExpanded && (
                    <div
                      style={{
                        padding: "0 16px 16px",
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      <div
                        style={{
                          paddingTop: "14px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        {q.options.map((opt, oi) => {
                          const isUserAnswer = userAns === oi;
                          const isCorrectAnswer = q.correctIndex === oi;
                          let cls = "";
                          if (isUserAnswer && isCorrect) cls = "correct";
                          else if (isUserAnswer && isWrong) cls = "wrong";
                          else if (isCorrectAnswer && !isCorrect)
                            cls = "reveal-correct";

                          return (
                            <div
                              key={oi}
                              className={`option-btn ${cls}`}
                              style={{
                                cursor: "default",
                                pointerEvents: "none",
                                padding: "12px 14px",
                                flexWrap: "wrap",
                                gap: "8px",
                              }}
                            >
                              <span className="option-label">
                                {optionLabels[oi]}
                              </span>
                              <span
                                style={{
                                  flex: 1,
                                  fontSize: "0.875rem",
                                  wordBreak: "break-word",
                                }}
                              >
                                {opt}
                              </span>
                              {isCorrectAnswer && (
                                <span
                                  style={{
                                    fontSize: "0.7rem",
                                    color: "var(--success)",
                                    fontFamily: "var(--mono)",
                                    whiteSpace: "nowrap",
                                    flexShrink: 0,
                                  }}
                                >
                                  ✓ correct
                                </span>
                              )}
                              {isUserAnswer && !isCorrectAnswer && (
                                <span
                                  style={{
                                    fontSize: "0.7rem",
                                    color: "var(--danger)",
                                    fontFamily: "var(--mono)",
                                    whiteSpace: "nowrap",
                                    flexShrink: 0,
                                  }}
                                >
                                  ✗ yours
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      <div
                        style={{
                          marginTop: "14px",
                          padding: "14px",
                          background: "rgba(99,102,241,0.06)",
                          border: "1px solid rgba(99,102,241,0.2)",
                          borderRadius: "8px",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--mono)",
                            fontSize: "0.68rem",
                            color: "var(--accent-bright)",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            marginBottom: "8px",
                          }}
                        >
                          Explanation
                        </p>
                        <p
                          style={{
                            fontSize: "0.86rem",
                            color: "var(--text-secondary)",
                            lineHeight: 1.65,
                          }}
                        >
                          {q.explanation}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {filteredIndices.length === 0 && (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px",
                  color: "var(--text-dim)",
                  fontSize: "0.9rem",
                }}
              >
                No questions in this category.
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="btn btn-primary"
            onClick={onRetry}
            style={{
              padding: "14px 36px",
              fontSize: "1rem",
              width: "100%",
              maxWidth: "320px",
              justifyContent: "center",
            }}
          >
            Try Another Session →
          </button>
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--text-dim)",
              marginTop: "10px",
            }}
          >
            New randomised questions every time
          </p>
        </div>
      </main>
    </>
  );
}
