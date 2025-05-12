import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './AlgorithmList.css';

const algorithms = [
  {
    title: 'First Come First Serve (FCFS)',
    type: 'Non-preemptive',
    description: 'Processes are executed in the order they arrive in the ready queue. Simple but may not be optimal for different process priorities.',
    strengths: [
      'Simple to implement',
      'Fair for processes that arrive first',
      'Low scheduling overhead',
    ],
    weaknesses: [
      'Can lead to convoy effect',
      'Long average waiting time',
      'Not suitable for interactive systems',
    ],
  },
  {
    title: 'Shortest Job First (SJF)',
    type: 'Non-preemptive',
    description: 'Selects the process with the smallest execution time. Non-preemptive version waits for the current process to complete.',
    strengths: [
      'Optimal average waiting time',
      'Good for batch systems',
      'Reduces average turnaround time',
    ],
    weaknesses: [
      'Potential starvation of longer processes',
      'Requires knowledge of burst time',
      'Not suitable for interactive systems',
    ],
  },
  {
    title: 'Priority Scheduling (Non-preemptive)',
    type: 'Non-preemptive',
    description: 'Processes are scheduled according to their priority, with higher priority processes being executed first.',
    strengths: [
      'Prioritizes important processes',
      'Flexible policy implementation',
      'Good for real-time systems',
    ],
    weaknesses: [
      'Can lead to starvation',
      'Priority inversion problems',
      'Need for aging mechanism',
    ],
  },
  // Add more algorithms as needed
];

const AlgorithmList = () => {
  return (
    <>
      <Header />
      <div className="algos-bg">
        <div className="algos-header">
          <h1>CPU Scheduling Algorithms</h1>
          <p>Choose an algorithm to visualize how it schedules processes on the CPU. Each algorithm has different characteristics and is suitable for different scenarios.</p>
        </div>
        <div className="algos-grid">
          {algorithms.map((algo, idx) => (
            <div className="algo-card" key={idx}>
              <h2>{algo.title}</h2>
              <span className="algo-type">{algo.type}</span>
              <p className="algo-desc">{algo.description}</p>
              <hr />
              <div className="algo-strengths">
                <span className="strength-title">Strengths:</span>
                <ul>
                  {algo.strengths.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div className="algo-weaknesses">
                <span className="weakness-title">Weaknesses:</span>
                <ul>
                  {algo.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AlgorithmList; 