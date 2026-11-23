"use client";

import { useParams } from "next/navigation";

export default function AddPathParameters() {
  const { a, b } = useParams();
  // a and b are the two numbers in the url
  return (
    <div id="wd-add-path-parameters">
      <h4>Add Path Parameters</h4>
      {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
    </div>
  );
}
