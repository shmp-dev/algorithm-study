import Link from "next/link";
import React from "react";

const AlgorithmListPage = () => {
  return (
    <div>
      <h1>AlgorithmListPage</h1>
      <ul>
        <li>
          <Link href="./algorithm/fizzbuzz">fizzbuzz</Link>
        </li>
      </ul>
    </div>
  );
};

export default AlgorithmListPage;
