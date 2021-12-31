import classNames from "classnames";
import React from 'react';

import './style.css'

// === PROPTYPES ===
type ButtonProps = {
  children: React.ReactNode,
  disabled?: boolean,
  ghost?: boolean,
  icon?: boolean,
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | (() => void),
  primary?: boolean,
  shadow?: boolean,
  type?: "button" | "submit",
}

// === COMPONENT ===
const Button = (props: ButtonProps): JSX.Element => {
  const {
    children,
    disabled,
    ghost,
    icon,
    onClick,
    primary,
    shadow,
    type = "button"
  } = props;
  const classNameObj = classNames({
    btn: true,
    'btn--ghost': ghost,
    'btn--icon': icon,
    'btn--primary': primary,
    'btn--shadow': shadow,
  });

  return (
    <button
      className={classNameObj}
      disabled={disabled}
      onClick={onClick}
      type={type}>
      {children}
    </button>
  );
};

export default Button;