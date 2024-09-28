import './PageSection.css';

export default function PageSection({ background, children }) {
  return (
    <section className='page-section' style={{ backgroundColor: background || 'inherit' }}>
      {children}
    </section>
  );
}