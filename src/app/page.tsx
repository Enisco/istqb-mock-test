'use client';

import { useState } from 'react';
import { Question, ExamResult } from '@/types';
import { getRandomQuestions, calculateResult, EXAM_DURATION, TOTAL_QUESTIONS } from '@/lib/utils';
import ExamScreen from '@/components/ExamScreen';
import ResultScreen from '@/components/ResultScreen';

type Screen = 'landing' | 'exam' | 'result';

export default function Home() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [userName, setUserName] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [result, setResult] = useState<ExamResult | null>(null);

  const handleStart = () => {
    const trimmed = nameInput.trim();
    if (!trimmed) return;
    const qs = getRandomQuestions(TOTAL_QUESTIONS);
    setUserName(trimmed);
    setQuestions(qs);
    setScreen('exam');
  };

  const handleFinish = (answers: (number | null)[], startTime: number) => {
    const endTime = Date.now();
    const r = calculateResult(userName, questions, answers, startTime, endTime);
    setResult(r);
    setScreen('result');
  };

  const handleRetry = () => {
    setNameInput('');
    setResult(null);
    setScreen('landing');
  };

  if (screen === 'exam') {
    return <ExamScreen userName={userName} questions={questions} onFinish={handleFinish} />;
  }

  if (screen === 'result' && result) {
    return <ResultScreen result={result} onRetry={handleRetry} />;
  }

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '520px' }}>

        {/* Header badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <span className="badge badge-k2" style={{ fontSize: '0.8rem', padding: '6px 16px' }}>
            ISTQB · CTFL 4.0
          </span>
        </div>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #f1f5f9 0%, #818cf8 60%, #6366f1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Mock Exam<br />Platform
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '360px', margin: '0 auto' }}>
            Test your readiness for the ISTQB Certified Tester Foundation Level 4.0 certification exam.
          </p>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          marginBottom: '40px',
        }}>
          {[
            { label: 'Questions', value: '40', sub: 'randomised' },
            { label: 'Duration', value: '45', sub: 'minutes' },
            { label: 'Pass Mark', value: '65%', sub: 'correct' },
          ].map(stat => (
            <div key={stat.label} className="card" style={{ textAlign: 'center', padding: '20px 12px' }}>
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: '1.6rem',
                fontWeight: 700,
                color: 'var(--accent-bright)',
                lineHeight: 1,
                marginBottom: '4px',
              }}>{stat.value}</div>
              <div style={{ fontFamily: 'var(--display)', fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '2px' }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Chapters covered */}
        <div className="card" style={{ marginBottom: '32px', padding: '20px 24px' }}>
          <p style={{ fontFamily: 'var(--display)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '12px' }}>
            Syllabus Coverage
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {[
              'Ch 1 — Fundamentals of Testing',
              'Ch 2 — Testing Throughout the SDLC',
              'Ch 3 — Static Testing',
              'Ch 4 — Test Analysis and Design',
              'Ch 5 — Managing Test Activities',
              'Ch 6 — Test Tools',
            ].map((ch, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{ch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Start form */}
        <div className="card-elevated" style={{ padding: '28px' }}>
          <label style={{
            display: 'block',
            fontFamily: 'var(--display)',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--text-secondary)',
            marginBottom: '10px',
          }}>
            Your Name
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter your full name..."
            value={nameInput}
            onChange={e => setNameInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleStart()}
            style={{ marginBottom: '16px' }}
          />
          <button
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1rem' }}
            onClick={handleStart}
            disabled={!nameInput.trim()}
          >
            Start Mock Exam →
          </button>
          <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '12px' }}>
            Questions are randomised for each session. Timer starts immediately.
          </p>
        </div>

        {/* Footer */}
        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '32px' }}>
          Based on ISTQB CTFL Syllabus v4.0 · For practice purposes only
        </p>
      </div>
    </main>
  );
}
