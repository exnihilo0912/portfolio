
function Card(props) {
  const {
    children,
    className,
    headerText,
    footerText,
    renderContent,
    renderFooter,
    ...otherProps
  } = props
  return (
    <article className={`card ${className}`} {...otherProps}>
      {headerText && <header className='card__header'>{headerText}</header>}
      {renderContent ? renderContent() : children}
      {footerText && (<footer className='card__footer'>{footerText}</footer>)}
      {renderFooter && renderFooter()}
    </article>
  );
}

export default Card;