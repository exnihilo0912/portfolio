import './index.css';

export default function ProgressBar({ value, maxValue, stepCount = 15 }) {
  const activeStepsCount = Math.round(stepCount * (value / maxValue));
  const steps = (new Array(stepCount)).fill(0);

  return (
    <div className='progress-bar__container'>
      {steps.map((step, stepIndex) => (
        ((stepIndex + 1) <= activeStepsCount)
          ? <div key={stepIndex} className='progress-bar__step progress-bar__step--active'></div>
          : <div key={stepIndex} className='progress-bar__step'></div>
      ))}
    </div>
  );
}