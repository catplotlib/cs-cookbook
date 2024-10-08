import React from 'react';

export const MergeSortHeader = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto">
    <rect width="800" height="400" fill="#FFF7ED" />
    <g transform="translate(50, 50)">
      <rect width="700" height="300" fill="#FBBF24" rx="20" />
      <text x="350" y="50" fontSize="40" fill="#7C2D12" textAnchor="middle">
        Merge Sort Sandwich
      </text>
      <g transform="translate(50, 100)">
        <rect width="140" height="80" fill="#F59E0B" rx="10" />
        <text x="70" y="45" fontSize="20" fill="#7C2D12" textAnchor="middle">
          [4, 2]
        </text>
      </g>
      <g transform="translate(260, 100)">
        <rect width="140" height="80" fill="#F59E0B" rx="10" />
        <text x="70" y="45" fontSize="20" fill="#7C2D12" textAnchor="middle">
          [1, 3]
        </text>
      </g>
      <path
        d="M120,180 Q350,230 470,180"
        fill="none"
        stroke="#7C2D12"
        strokeWidth="4"
      />
      <g transform="translate(210, 220)">
        <rect width="280" height="80" fill="#DC2626" rx="10" />
        <text x="140" y="45" fontSize="20" fill="#FFF" textAnchor="middle">
          [1, 2, 3, 4]
        </text>
      </g>
    </g>
  </svg>
);

export const BinarySearchHeader = () => (
  <svg viewBox="0 0 800 400" className="w-full h-auto">
    <rect width="800" height="400" fill="#FFF7ED" />
    <g transform="translate(50, 50)">
      <rect width="700" height="300" fill="#FBBF24" rx="20" />
      <text x="350" y="50" fontSize="40" fill="#7C2D12" textAnchor="middle">
        Binary Search Biscuits
      </text>
      <g transform="translate(50, 100)">
        {[...Array(16)].map((_, i) => (
          <rect
            key={i}
            x={i * 37}
            y="0"
            width="35"
            height="50"
            fill={i === 10 ? "#DC2626" : "#F59E0B"}
            stroke="#7C2D12"
          />
        ))}
      </g>
      <path
        d="M350,150 L350,200 L250,200"
        fill="none"
        stroke="#7C2D12"
        strokeWidth="4"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M250,210 L250,260 L300,260"
        fill="none"
        stroke="#7C2D12"
        strokeWidth="4"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M300,270 L300,320 L420,320"
        fill="none"
        stroke="#7C2D12"
        strokeWidth="4"
        markerEnd="url(#arrowhead)"
      />
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#7C2D12" />
        </marker>
      </defs>
    </g>
  </svg>
);