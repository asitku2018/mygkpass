'use client';
import { useState, useEffect } from 'react';

export default function QuizDashboardPage() {
  const [quizzes, setQuizzes] = useState([]);
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScorecard, setShowScorecard] = useState(false);

  useEffect(() => {
    fetch('/api/quiz')
      .then(res => res.json())
      .then(data => setQuizzes(data));
  }, []);

  const handleAnswerSubmit = (optionIndex) => {
    setSelectedOption(optionIndex);
    const questions = activeQuiz.questions;
    if (optionIndex === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    if (currentQuestionIndex + 1 < activeQuiz.questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScorecard(true);
    }
  };

  if (!activeQuiz) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">🎯 MygkpasS Automated Quizzes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white p-6 rounded-xl border shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-2 py-1 rounded">Interactive Quiz</span>
                <h3 className="text-lg font-bold mt-2 text-gray-800">{quiz.title || 'General Knowledge Assessment'}</h3>
                <p className="text-sm text-gray-500 mt-1">Test your retention with AI-generated questions and instant answers.</p>
              </div>
              <button 
                onClick={() => setActiveQuiz(quiz)} 
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
              >
                Start Quiz
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const q = activeQuiz.questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-md border">
        {!showScorecard ? (
          <div>
            <div className="flex justify-between items-center mb-6 text-sm text-gray-500 font-medium">
              <span>Question {currentQuestionIndex + 1} of {activeQuiz.questions.length}</span>
              <span>Score: {score}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">{q.questionText}</h2>
            <div className="space-y-3">
              {q.options.map((option, idx) => (
                <button
                  key={idx}
                  disabled={selectedOption !== null}
                  onClick={() => handleAnswerSubmit(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition font-medium ${
                    selectedOption === null 
                      ? 'hover:bg-blue-50 border-gray-200' 
                      : idx === q.correctAnswer 
                      ? 'bg-green-100 border-green-500 text-green-900' 
                      : selectedOption === idx 
                      ? 'bg-red-100 border-red-500 text-red-900' 
                      : 'bg-white border-gray-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {selectedOption !== null && (
              <div className="mt-6">
                <p className="text-sm bg-gray-50 p-4 rounded-lg border text-gray-700 mb-4">
                  <span className="font-bold">Explanation:</span> {q.explanation}
                </p>
                <button 
                  onClick={nextQuestion}
                  className="w-full bg-gray-900 text-white font-medium py-3 rounded-xl hover:bg-black transition"
                >
                  {currentQuestionIndex + 1 < activeQuiz.questions.length ? 'Next Question' : 'View Scorecard'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">🎉 Quiz Completed!</h2>
            <p className="text-lg text-gray-600 mb-6">You scored <strong className="text-blue-600">{score}</strong> out of <strong className="text-gray-900">{activeQuiz.questions.length}</strong></p>
            <button 
              onClick={() => { setActiveQuiz(null); setCurrentQuestionIndex(0); setScore(0); setShowScorecard(false); }}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition"
            >
              Back to Quizzes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
