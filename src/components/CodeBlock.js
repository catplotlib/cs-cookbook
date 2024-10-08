import React from 'react';

const CodeBlock = ({ code }) => (
  <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
    <code>{code}</code>
  </pre>
);

export default CodeBlock;