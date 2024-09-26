
function Card({ children, className, ...props }) {
  const {
    headerText,
    footerText,
    renderContent,
    renderFooter,
  } = props
  return (
    <article className={`card ${className}`} {...props}>
      {headerText && <header className='card__header'>{headerText}</header>}
      {renderContent ? renderContent() : children}
      {footerText && (<footer className='card__footer'>{footerText}</footer>)}
      {renderFooter && renderFooter()}
    </article>
  );
}

export default Card;