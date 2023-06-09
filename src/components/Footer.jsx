import React from "react";

const d = new Date();
let year = d.getFullYear();

export default function Footer() {
  return (
    <footer>
      <p>Copyright &copy; {year}</p>
    </footer>
  );
}
