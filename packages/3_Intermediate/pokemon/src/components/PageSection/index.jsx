import './PageSection.css';

export default function PageSection({ children }) {
  return (
    <section className='page-section'>
      {children}
    </section>
  );
}