import React from 'react';

export const MergeSortVisualExplanation = () => (
  <svg viewBox="0 0 800 600" className="w-full h-auto">
    <rect width="800" height="600" fill="#FFF7ED" />
    <text x="400" y="30" fontSize="24" fill="#7C2D12" textAnchor="middle" fontWeight="bold">Merge Sort Process</text>
    
    {/* Initial array */}
    <g transform="translate(50, 50)">
      <text x="0" y="0" fontSize="18" fill="#7C2D12">Step 1: Initial Array</text>
      {[4, 2, 1, 3].map((num, i) => (
        <g key={i} transform={`translate(${i * 60}, 20)`}>
          <rect width="50" height="50" fill="#FBBF24" stroke="#7C2D12" />
          <text x="25" y="35" fontSize="20" fill="#7C2D12" textAnchor="middle">{num}</text>
        </g>
      ))}
    </g>
    
    {/* Divide */}
    <g transform="translate(50, 150)">
      <text x="0" y="0" fontSize="18" fill="#7C2D12">Step 2: Divide</text>
      {[4, 2].map((num, i) => (
        <g key={i} transform={`translate(${i * 60}, 20)`}>
          <rect width="50" height="50" fill="#F59E0B" stroke="#7C2D12" />
          <text x="25" y="35" fontSize="20" fill="#7C2D12" textAnchor="middle">{num}</text>
        </g>
      ))}
      {[1, 3].map((num, i) => (
        <g key={i} transform={`translate(${(i + 2) * 60}, 20)`}>
          <rect width="50" height="50" fill="#F59E0B" stroke="#7C2D12" />
          <text x="25" y="35" fontSize="20" fill="#7C2D12" textAnchor="middle">{num}</text>
        </g>
      ))}
    </g>
    
    {/* Sort */}
    <g transform="translate(50, 250)">
      <text x="0" y="0" fontSize="18" fill="#7C2D12">Step 3: Sort Subarrays</text>
      {[2, 4].map((num, i) => (
        <g key={i} transform={`translate(${i * 60}, 20)`}>
          <rect width="50" height="50" fill="#DC2626" stroke="#7C2D12" />
          <text x="25" y="35" fontSize="20" fill="#FFF" textAnchor="middle">{num}</text>
        </g>
      ))}
      {[1, 3].map((num, i) => (
        <g key={i} transform={`translate(${(i + 2) * 60}, 20)`}>
          <rect width="50" height="50" fill="#DC2626" stroke="#7C2D12" />
          <text x="25" y="35" fontSize="20" fill="#FFF" textAnchor="middle">{num}</text>
        </g>
      ))}
    </g>
    
    {/* Merge */}
    <g transform="translate(50, 350)">
      <text x="0" y="0" fontSize="18" fill="#7C2D12">Step 4: Merge</text>
      {[1, 2, 3, 4].map((num, i) => (
        <g key={i} transform={`translate(${i * 60}, 20)`}>
          <rect width="50" height="50" fill="#059669" stroke="#7C2D12" />
          <text x="25" y="35" fontSize="20" fill="#FFF" textAnchor="middle">{num}</text>
        </g>
      ))}
    </g>
    
    {/* Arrows */}
    <path d="M200,120 L200,140" fill="none" stroke="#7C2D12" strokeWidth="2" markerEnd="url(#arrowhead)" />
    <path d="M200,220 L200,240" fill="none" stroke="#7C2D12" strokeWidth="2" markerEnd="url(#arrowhead)" />
    <path d="M200,320 L200,340" fill="none" stroke="#7C2D12" strokeWidth="2" markerEnd="url(#arrowhead)" />
    
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#7C2D12" />
      </marker>
    </defs>
  </svg>
);

export const BinarySearchVisualExplanation = () => (
    <svg viewBox="0 0 800 400" className="w-full h-auto">
      <rect width="800" height="400" fill="#FFF7ED" />
      <text x="400" y="30" fontSize="24" fill="#7C2D12" textAnchor="middle" fontWeight="bold">Binary Search Process</text>
      
      {/* Initial array */}
      <g transform="translate(50, 50)">
        <text x="0" y="0" fontSize="18" fill="#7C2D12">Step 1: Sorted Array</text>
        {[...Array(16)].map((_, i) => (
          <g key={i} transform={`translate(${i * 43}, 20)`}>
            <rect width="40" height="40" fill="#FBBF24" stroke="#7C2D12" />
            <text x="20" y="30" fontSize="14" fill="#7C2D12" textAnchor="middle">{i + 1}</text>
          </g>
        ))}
      </g>
      
      {/* First comparison */}
      <g transform="translate(50, 150)">
        <text x="0" y="0" fontSize="18" fill="#7C2D12">Step 2: Check Middle (8)</text>
        {[...Array(16)].map((_, i) => (
          <g key={i} transform={`translate(${i * 43}, 20)`}>
            <rect width="40" height="40" fill={i === 7 ? "#DC2626" : "#FBBF24"} stroke="#7C2D12" />
            <text x="20" y="30" fontSize="14" fill={i === 7 ? "#FFF" : "#7C2D12"} textAnchor="middle">{i + 1}</text>
          </g>
        ))}
      </g>
      
      {/* Second comparison */}
      <g transform="translate(50, 250)">
        <text x="0" y="0" fontSize="18" fill="#7C2D12">Step 3: Check Middle of Right Half (12)</text>
        {[...Array(16)].map((_, i) => {
          const isFocused = i >= 8 && i < 12;
          return (
            <g key={i} transform={`translate(${i * 43}, 20)`}>
              <rect width="40" height="40" fill={i === 11 ? "#DC2626" : (isFocused ? "#F59E0B" : "#FBBF24")} stroke="#7C2D12" />
              <text x="20" y="30" fontSize="14" fill={i === 11 ? "#FFF" : "#7C2D12"} textAnchor="middle">{i + 1}</text>
            </g>
          );
        })}
      </g>
      
      {/* Arrows */}
      <path d="M400,110 L400,140" fill="none" stroke="#7C2D12" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <path d="M550,210 L550,240" fill="none" stroke="#7C2D12" strokeWidth="2" markerEnd="url(#arrowhead)" />
      
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#7C2D12" />
        </marker>
      </defs>
    </svg>
  );
  
  export const QuickSortVisualExplanation = () => (
    <svg viewBox="0 0 800 600" className="w-full h-auto">
      <rect width="800" height="600" fill="#FFF7ED" />
      <text x="400" y="30" fontSize="24" fill="#7C2D12" textAnchor="middle" fontWeight="bold">Quick Sort Process</text>
      
      {/* Initial array */}
      <g transform="translate(50, 50)">
        <text x="0" y="0" fontSize="18" fill="#7C2D12">Step 1: Initial Array</text>
        {[5, 2, 9, 1, 7, 6, 3].map((num, i) => (
          <g key={i} transform={`translate(${i * 60}, 20)`}>
            <rect width="50" height="50" fill="#FBBF24" stroke="#7C2D12" />
            <text x="25" y="35" fontSize="20" fill="#7C2D12" textAnchor="middle">{num}</text>
          </g>
        ))}
      </g>
      
      {/* Choose pivot */}
      <g transform="translate(50, 150)">
        <text x="0" y="0" fontSize="18" fill="#7C2D12">Step 2: Choose Pivot (6)</text>
        {[5, 2, 9, 1, 7, 6, 3].map((num, i) => (
          <g key={i} transform={`translate(${i * 60}, 20)`}>
            <rect width="50" height="50" fill={num === 6 ? "#DC2626" : "#FBBF24"} stroke="#7C2D12" />
            <text x="25" y="35" fontSize="20" fill={num === 6 ? "#FFF" : "#7C2D12"} textAnchor="middle">{num}</text>
          </g>
        ))}
      </g>
      
      {/* Partition */}
      <g transform="translate(50, 250)">
        <text x="0" y="0" fontSize="18" fill="#7C2D12">Step 3: Partition</text>
        {[5, 2, 1, 3, 6, 9, 7].map((num, i) => (
          <g key={i} transform={`translate(${i * 60}, 20)`}>
            <rect width="50" height="50" fill={num < 6 ? "#059669" : (num > 6 ? "#F59E0B" : "#DC2626")} stroke="#7C2D12" />
            <text x="25" y="35" fontSize="20" fill={num === 6 ? "#FFF" : "#7C2D12"} textAnchor="middle">{num}</text>
          </g>
        ))}
      </g>
      
      {/* Recursion */}
      <g transform="translate(50, 350)">
        <text x="0" y="0" fontSize="18" fill="#7C2D12">Step 4: Recursive Sorting</text>
        {[1, 2, 3, 5, 6, 7, 9].map((num, i) => (
          <g key={i} transform={`translate(${i * 60}, 20)`}>
            <rect width="50" height="50" fill="#059669" stroke="#7C2D12" />
            <text x="25" y="35" fontSize="20" fill="#FFF" textAnchor="middle">{num}</text>
          </g>
        ))}
      </g>
      
      {/* Arrows */}
      <path d="M400,120 L400,140" fill="none" stroke="#7C2D12" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <path d="M400,220 L400,240" fill="none" stroke="#7C2D12" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <path d="M400,320 L400,340" fill="none" stroke="#7C2D12" strokeWidth="2" markerEnd="url(#arrowhead)" />
      
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#7C2D12" />
        </marker>
      </defs>
    </svg>
  );
  
  export default {
    MergeSortVisualExplanation,
    BinarySearchVisualExplanation,
    QuickSortVisualExplanation
  };