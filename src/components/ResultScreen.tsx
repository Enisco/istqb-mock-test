'use client';

import { useState } from 'react';
import { ExamResult } from '@/types';
import { formatTime } from '@/lib/utils';

interface Props {
  result: ExamResult;
  onRetry: () => void;
}

const optionLabels = ['A', 'B', 'C', 'D'];

export default function ResultScreen({ result, onRetry }: Props) {
  const [expandedQ, setExpandedQ] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'correct' | 'wrong' | 'unanswered'>('all');

  const { userName, score, total, percentage, passed, timeTaken, questions, answers } = result;
  const pct = `${percentage}%`;

  const filteredIndices = questions.map((_, i) => i).filter(i => {
    const ans = answers[i];
    if (filter === 'correct') return ans === questions[i].correctIndex;
    if (filter === 'wrong') return ans !== null && ans !== questions[i].correctIndex;
    if (filter === 'unanswered') return ans === null;
    return true;
  });

  const correctCount = questions.filter((q, i) => answers[i] === q.correctIndex).length;
  const wrongCount = questions.filter((q, i) => answers[i] !== null && answers[i] !== q.correctIndex).length;
  const unansweredCount = questions.filter((_, i) => answers[i] === null).length;

  return (
    <main style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 24px 80px' }}>

      {/* Result header card */}
      <div className="card-elevated" style={{ marginBottom: '32px', padding: '40px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Exam Complete — {userName}
        </p>

        {/* Score ring */}
        <div
          className={`result-score-ring ${passed ? 'passed' : 'failed'}`}
          style={{ '--pct': pct } as React.CSSProperties}
        >
          <div className="ring-content">
            <div style={{
              fontFamily: 'var(--display)',
              fontSize: '2rem',
              fontWeight: 800,
              color: passed ? 'var(--success)' : 'var(--danger)',
              lineHeight: 1,
            }}>
              {percentage}%
            </div>
            <div style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.7rem',
              color: 'var(--text-dim)',
              marginTop: '4px',
            }}>
              {score}/{total}
            </div>
          </div>
        </div>

        {/* Result verdict */}
        <div style={{ marginTop: '24px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 24px',
            borderRadius: '40px',
            background: passed ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)',
            border: `1px solid ${passed ? 'var(--success)' : 'var(--danger)'}`,
            fontFamily: 'var(--display)',
            fontSize: '1.1rem',
            fontWeight: 700,
            color: passed ? 'var(--success)' : 'var(--danger)',
            letterSpacing: '0.05em',
            marginBottom: '8px',
          }}>
            {passed ? '✓ PASSED' : '✗ NOT PASSED'}
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
            {passed
              ? `Great work! You scored above the 65% pass mark.`
              : `You need 65% to pass. Keep studying and try again!`}
          </p>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
          marginTop: '32px',
        }}>
          {[
            { label: 'Correct', value: correctCount, color: 'var(--success)' },
            { label: 'Wrong', value: wrongCount, color: 'var(--danger)' },
            { label: 'Unanswered', value: unansweredCount, color: 'var(--text-dim)' },
            { label: 'Time Taken', value: formatTime(timeTaken), color: 'var(--accent-bright)' },
          ].map(stat => (
            <div key={stat.label} className="card" style={{ padding: '16px 8px' }}>
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: stat.color,
                lineHeight: 1,
                marginBottom: '4px',
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <button
          className="btn btn-primary"
          onClick={onRetry}
          style={{ marginTop: '28px', padding: '12px 32px' }}
        >
          Try Again →
        </button>
      </div>

      {/* Review section */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.2rem', fontWeight: 700 }}>
            Question Review
          </h2>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {(['all', 'correct', 'wrong', 'unanswered'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '6px',
                  border: `1px solid ${filter === f ? 'var(--accent)' : 'var(--border)'}`,
                  background: filter === f ? 'rgba(99,102,241,0.15)' : 'transparent',
                  color: filter === f ? 'var(--accent-bright)' : 'var(--text-dim)',
                  fontFamily: 'var(--sans)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  transition: 'all 0.15s',
                }}
              >
                {f === 'all' ? `All (${total})` :
                 f === 'correct' ? `Correct (${correctCount})` :
                 f === 'wrong' ? `Wrong (${wrongCount})` :
                 `Unanswered (${unansweredCount})`}
              </button>
            ))}
          </div>
        </div>

        {/* Quick nav dots */}
        <div className="card" style={{ padding: '16px', marginBottom: '20px' }}>
          <div className="q-nav">
            {questions.map((q, i) => {
              const ans = answers[i];
              const isCorrect = ans === q.correctIndex;
              const isWrong = ans !== null && !isCorrect;
              return (
                <button
                  key={i}
                  className={`q-dot ${isCorrect ? 'correct-dot' : isWrong ? 'wrong-dot' : ''}`}
                  onClick={() => {
                    setFilter('all');
                    setExpandedQ(i);
                    setTimeout(() => {
                      document.getElementById(`question-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 50);
                  }}
                  title={`Q${i+1}: ${isCorrect ? 'Correct' : isWrong ? 'Wrong' : 'Unanswered'}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Questions list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredIndices.map(i => {
            const q = questions[i];
            const userAns = answers[i];
            const isCorrect = userAns === q.correctIndex;
            const isWrong = userAns !== null && !isCorrect;
            const isUnanswered = userAns === null;
            const isExpanded = expandedQ === i;

            let statusColor = 'var(--text-dim)';
            let statusLabel = 'Unanswered';
            let borderColor = 'var(--border)';
            if (isCorrect) { statusColor = 'var(--success)'; statusLabel = 'Correct'; borderColor = 'rgba(34,197,94,0.3)'; }
            if (isWrong) { statusColor = 'var(--danger)'; statusLabel = 'Wrong'; borderColor = 'rgba(239,68,68,0.3)'; }

            return (
              <div
                key={i}
                id={`question-${i}`}
                style={{
                  background: 'var(--bg-card)',
                  border: `1px solid ${isExpanded ? borderColor : 'var(--border)'}`,
                  borderRadius: '10px',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                {/* Question header (always visible) */}
                <button
                  onClick={() => setExpandedQ(isExpanded ? null : i)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    textAlign: 'left',
                  }}
                >
                  <div style={{
                    width: '28px',
                    height: '28px',
                    minWidth: '28px',
                    borderRadius: '50%',
                    background: isCorrect ? 'var(--success)' : isWrong ? 'var(--danger)' : 'var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isCorrect ? '#0a0a0f' : 'white',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    fontFamily: 'var(--mono)',
                  }}>
                    {isCorrect ? '✓' : isWrong ? '✗' : '—'}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                        Q{i + 1}
                      </span>
                      <span className={`badge badge-${q.klevel.toLowerCase()}`}>{q.klevel}</span>
                      <span className="badge" style={{ background: 'rgba(99,102,241,0.1)', color: 'var(--accent-bright)', border: '1px solid rgba(99,102,241,0.2)' }}>
                        §{q.section}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: statusColor, marginLeft: 'auto' }}>{statusLabel}</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {q.question}
                    </p>
                  </div>

                  <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem', minWidth: '20px' }}>
                    {isExpanded ? '▲' : '▼'}
                  </div>
                </button>

                {/* Expanded detail */}
                {isExpanded && (
                  <div style={{ padding: '0 20px 20px', borderTop: '1px solid var(--border)' }}>
                    <div style={{ paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {q.options.map((opt, oi) => {
                        const isUserAnswer = userAns === oi;
                        const isCorrectAnswer = q.correctIndex === oi;
                        let cls = '';
                        if (isUserAnswer && isCorrect) cls = 'correct';
                        else if (isUserAnswer && isWrong) cls = 'wrong';
                        else if (isCorrectAnswer && !isCorrect) cls = 'reveal-correct';

                        return (
                          <div
                            key={oi}
                            className={`option-btn ${cls}`}
                            style={{ cursor: 'default', pointerEvents: 'none' }}
                          >
                            <span className="option-label">{optionLabels[oi]}</span>
                            <span style={{ flex: 1 }}>{opt}</span>
                            {isCorrectAnswer && (
                              <span style={{
                                fontSize: '0.75rem',
                                color: 'var(--success)',
                                fontFamily: 'var(--mono)',
                                marginLeft: 'auto',
                                whiteSpace: 'nowrap',
                              }}>
                                ✓ correct
                              </span>
                            )}
                            {isUserAnswer && !isCorrectAnswer && (
                              <span style={{
                                fontSize: '0.75rem',
                                color: 'var(--danger)',
                                fontFamily: 'var(--mono)',
                                marginLeft: 'auto',
                                whiteSpace: 'nowrap',
                              }}>
                                ✗ your answer
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    <div style={{
                      marginTop: '16px',
                      padding: '16px',
                      background: 'rgba(99,102,241,0.06)',
                      border: '1px solid rgba(99,102,241,0.2)',
                      borderRadius: '8px',
                    }}>
                      <p style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '0.72rem',
                        color: 'var(--accent-bright)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '8px',
                      }}>
                        Explanation
                      </p>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredIndices.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px', color: 'var(--text-dim)' }}>
              No questions in this category.
            </div>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button className="btn btn-primary" onClick={onRetry} style={{ padding: '14px 40px', fontSize: '1rem' }}>
          Try Another Session →
        </button>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '12px' }}>
          New randomised questions every time
        </p>
      </div>
    </main>
  );
}
