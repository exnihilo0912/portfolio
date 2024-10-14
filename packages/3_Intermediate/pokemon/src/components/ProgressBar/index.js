import './index.css';

export default function ProgressBar({ value, maxValue, stepCount = 15 }) {
  const activeStepsCount = Math.round(stepCount * (value / maxValue));
  const steps = (new Array(stepCount)).fill(0);

  return (
    <div className='progress-bar_container'>
      {steps.map((step, stepIndex) => (
        ((stepIndex + 1) <= activeStepsCount)
        ? <div className='progress-bar_step progress-bar_step--active'></div>
        : <div className='progress-bar_step'></div>
      ))}
    </div>
  );
}