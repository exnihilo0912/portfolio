import { FaMagnifyingGlass } from "react-icons/fa6";

import Button from "./Button";

export default function IconButton({ iconName, ...props }) {
  return (
    <Button className="button button--large-text" {...props}>
        <FaMagnifyingGlass />
    </Button>
  );
}