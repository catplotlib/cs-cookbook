import {
  MergeSortHeader,
  BinarySearchHeader,
  QuickSortHeader,
} from "../components/HeaderImages";
import {
  MergeSortVisualExplanation,
  BinarySearchVisualExplanation,
  QuickSortVisualExplanation,
} from "../components/VisualExplanations";

const recipes = [
  {
    title: "Merge Sort Sandwich Assembly",
    shortDescription:
      "Learn merge sort algorithm by making a perfectly organized sandwich!",
    HeaderImage: MergeSortHeader,
    ingredients: [
      "2 slices of bread (arrays)",
      "4 slices of cheese (elements)",
      "4 slices of tomato (elements)",
      "4 leaves of lettuce (elements)",
    ],
    instructions: [
      "Divide ingredients: Separate cheese, tomato, and lettuce into individual piles.",
      "Conquer small groups: Sort each small pile (2 items) by size.",
      "Merge and compare: Combine sorted piles, always picking the smallest item first.",
      "Assemble: Place sorted ingredients on bread in ascending order of size.",
      "Serve: Present your perfectly sorted Merge Sort Sandwich!",
    ],
    csExplanation:
      "Merge Sort divides the array into smaller subarrays, sorts them, and then merges them back together. This sandwich assembly mimics that process by sorting ingredients before combining them.",
    codeExample: `
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i, j = 0, 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Example usage
sandwich_ingredients = [4, 2, 1, 3]
sorted_ingredients = merge_sort(sandwich_ingredients)
print(sorted_ingredients)  # Output: [1, 2, 3, 4]
    `,
    visualExplanation: MergeSortVisualExplanation,
  },
  {
    title: "Binary Search Biscuit Hunt",
    shortDescription:
      "Experience the efficiency of binary search through a tasty biscuit hunt!",
    HeaderImage: BinarySearchHeader,
    ingredients: [
      "16 identical biscuit tins",
      "1 special biscuit",
      "15 regular biscuits",
    ],
    instructions: [
      "Arrange tins: Line up 16 tins in ascending order by number.",
      "Hide biscuits: Place a regular biscuit in each tin, except one with the special biscuit.",
      "Start in the middle: Open the tin in the middle (8th tin).",
      "Divide and conquer: If not found, eliminate half and check middle of remaining half.",
      "Repeat: Continue halving until the special biscuit is found.",
    ],
    csExplanation:
      "Binary Search efficiently finds an item in a sorted list by repeatedly dividing the search interval in half, just like we're halving our search area with each step in the biscuit hunt.",
    codeExample: `
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1  # Target not found

# Example usage
biscuit_tins = list(range(1, 17))  # [1, 2, ..., 16]
special_biscuit = 11
result = binary_search(biscuit_tins, special_biscuit)
print(f"The special biscuit is in tin number: {result + 1}")  # Output: 11
    `,
    visualExplanation: BinarySearchVisualExplanation,
  },
  {
    title: "Quick Sort Pizza Slicing",
    shortDescription:
      "Learn the quick sort algorithm by slicing a pizza efficiently!",
    HeaderImage: QuickSortHeader,
    ingredients: [
      "1 large pizza",
      "1 pizza cutter (pivot)",
      "Several hungry friends (elements to be sorted)",
    ],
    instructions: [
      "Choose a pivot: Pick a slice size as your 'pivot'.",
      "Partition: Cut slices smaller than the pivot on one side, larger on the other.",
      "Recursively sort: Apply the same process to each half of the pizza.",
      "Combine: Enjoy your perfectly sorted pizza slices!",
    ],
    csExplanation:
      "Quick Sort is a divide-and-conquer algorithm that picks an element as a pivot and partitions the array around it. This pizza slicing method mimics that process by using a slice size as the pivot and arranging smaller and larger slices around it.",
    codeExample: `
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[len(arr) // 2]
        left = [x for x in arr if x < pivot]
        middle = [x for x in arr if x == pivot]
        right = [x for x in arr if x > pivot]
        return quick_sort(left) + middle + quick_sort(right)

# Example usage
pizza_slices = [5, 2, 9, 1, 7, 6, 3]
sorted_slices = quick_sort(pizza_slices)
print(sorted_slices)  # Output: [1, 2, 3, 5, 6, 7, 9]
    `,
    visualExplanation: QuickSortVisualExplanation,
  },
];

export default recipes;
