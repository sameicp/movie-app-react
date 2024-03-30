import { useState } from "react";
import Button from "./Button";

export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <Button
        className="btn-toggle"
        onClick={() => setIsOpen((open) => !open)}
        text={isOpen ? "–" : "+"}
      />
      {isOpen && children}
    </div>
  );
}
