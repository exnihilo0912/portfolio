import { forwardRef } from 'react';

function Button(props, ref) {
  return (
    <button {...props} ref={ref}>
      {props.children}
    </button>
  );
}

export default forwardRef(Button);