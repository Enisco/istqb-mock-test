'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Question } from '@/types';
import { formatTime, EXAM_DURATION } from '@/lib/utils';

interface Props {
  userName: string;
  questions: Question[];
  onFinish: (answers: (number | null)[], startTime: number) => void;
}

export default function ExamScreen({ userName, questions, onFinish }: Props) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const startTimeRef = useRef(Date.now());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleSubmit = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    onFinish(answers, startTimeRef.current);
  }, [answers, onFinish]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          onFinish(answers, startTimeRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [answers, onFinish]);

  const selectAnswer = (optionIndex: number) => {
    setAnswers(prev => {
      const next = [...prev];
      next[currentQ] = optionIndex;
      return next;
    });
  };

  const goTo = (idx: number) => {
    setCurrentQ(idx);
    setShowNav(false);
  };

  const q = questions[currentQ];
  const answered = answers.filter(a => a !== null).length;
  const progress = ((currentQ + 1) / questions.length) * 100;

  const timerClass = timeLeft <= 60 ? 'danger' : timeLeft <= 300 ? 'warning' : '';
  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <>
      {/* Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(10,10,15,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        padding: '0 24px',
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{
              fontFamily: 'var(--display)',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              CTFL 4.0
            </span>
            <div style={{ width: '1px', height: '20px', background: 'var(--border)' }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>{userName}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              {answered}/{questions.length} answered
            </span>
            <span className={`timer ${timerClass}`}>
              ⏱ {formatTime(timeLeft)}
            </span>
          </div>
        </div>
        {/* Progress bar */}
        <div className="progress-bar" style={{ borderRadius: 0, height: '3px' }}>
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </header>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '32px', alignItems: 'start' }}>
          {/* Question panel */}
          <div>
            {/* Question header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.8rem',
                color: 'var(--text-dim)',
              }}>
                {currentQ + 1} / {questions.length}
              </span>
              <span className={`badge badge-${q.klevel.toLowerCase()}`}>{q.klevel}</span>
              <span className="badge" style={{ background: 'rgba(99,102,241,0.1)', color: 'var(--accent-bright)', border: '1px solid rgba(99,102,241,0.3)' }}>
                §{q.section}
              </span>
            </div>

            {/* Question text */}
            <div className="card" style={{ marginBottom: '20px', padding: '24px 28px' }}>
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'var(--text-primary)',
              }}>
                {q.question}
              </p>
            </div>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {q.options.map((opt, i) => {
                const isSelected = answers[currentQ] === i;
                return (
                  <button
                    key={i}
                    className={`option-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => selectAnswer(i)}
                  >
                    <span className="option-label">{optionLabels[i]}</span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  className="btn btn-outline"
                  onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
                  disabled={currentQ === 0}
                  style={{ padding: '10px 18px', fontSize: '0.85rem' }}
                >
                  ← Prev
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() => setCurrentQ(Math.min(questions.length - 1, currentQ + 1))}
                  disabled={currentQ === questions.length - 1}
                  style={{ padding: '10px 18px', fontSize: '0.85rem' }}
                >
                  Next →
                </button>
              </div>

              <button
                className="btn btn-danger"
                onClick={() => setShowConfirm(true)}
                style={{ padding: '10px 22px', fontSize: '0.85rem' }}
              >
                Submit Exam
              </button>
            </div>
          </div>

          {/* Side nav — desktop */}
          <div style={{ width: '200px', position: 'sticky', top: '80px' }}>
            <div className="card" style={{ padding: '16px' }}>
              <p style={{
                fontFamily: 'var(--display)',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--text-dim)',
                marginBottom: '12px',
              }}>
                Questions
              </p>
              <div className="q-nav">
                {questions.map((_, i) => (
                  <button
                    key={i}
                    className={`q-dot ${i === currentQ ? 'current' : answers[i] !== null ? 'answered' : ''}`}
                    onClick={() => goTo(i)}
                    title={`Question ${i + 1}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <div style={{ marginTop: '16px', borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--accent)' }} />
                    Current
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--accent-dim)' }} />
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
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>
              Submit Exam?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px', lineHeight: 1.6 }}>
              You have answered <strong style={{ color: 'var(--accent-bright)' }}>{answered} of {questions.length}</strong> questions.
              {answered < questions.length && (
                <span style={{ color: 'var(--warning)' }}> {questions.length - answered} unanswered questions will be marked wrong.</span>
              )}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '28px' }}>
              Time remaining: <span style={{ fontFamily: 'var(--mono)', color: 'var(--accent-bright)' }}>{formatTime(timeLeft)}</span>
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                className="btn btn-outline"
                onClick={() => setShowConfirm(false)}
                style={{ flex: 1, justifyContent: 'center' }}
              >
                Continue
              </button>
              <button
                className="btn btn-danger"
                onClick={handleSubmit}
                style={{ flex: 1, justifyContent: 'center' }}
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
