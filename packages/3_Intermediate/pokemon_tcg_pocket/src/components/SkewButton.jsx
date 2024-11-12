export default function SkewButton({ children, top, bottom }) {
  return (
    <div className='card-block__menu__item'>
      {
        children
          ? children
          : (
            <>
              <div>{top}</div>
              <span>{bottom}</span>
            </>
          )
      }
    </div>
  );
}