import './Panel.css';

export default function Panel({ children, isSection }) {
  return (
    <>
      {
        isSection
          ? (
            <div className="panel">
              {children}
            </div>
          )
          : (
            <section className="panel">
              {children}
            </section>
          )
      }
      
    </>
  );
}