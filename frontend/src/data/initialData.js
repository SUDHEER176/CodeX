export const initialData = {
  user: {
    name: "Alex Learner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    targetRole: "Software Engineering Intern / SDE-1",
    targetCompany: "Google / Meta / Top Startups",
    dailyGoal: 4,
    streak: 7,
    lastActiveDate: new Date().toISOString().split('T')[0]
  },
  tasks: [
    {
      id: "task-1",
      title: "Learn Binary Search on Rotated Sorted Array",
      topic: "Searching & Sorting",
      estimatedMinutes: 30,
      completed: true,
      date: new Date().toISOString().split('T')[0],
      carriedOver: false,
      priority: "High"
    },
    {
      id: "task-2",
      title: "Solve 3 Two-Pointer Medium Problems",
      topic: "Arrays & Strings",
      estimatedMinutes: 45,
      completed: true,
      date: new Date().toISOString().split('T')[0],
      carriedOver: false,
      priority: "High"
    },
    {
      id: "task-3",
      title: "Revise Yesterday's Mistakes (Stack Monotonic Pattern)",
      topic: "Stacks & Queues",
      estimatedMinutes: 15,
      completed: false,
      date: new Date().toISOString().split('T')[0],
      carriedOver: false,
      priority: "Medium"
    },
    {
      id: "task-4",
      title: "Practice Time & Space Complexity Analysis",
      topic: "Basics & Math",
      estimatedMinutes: 20,
      completed: false,
      date: new Date().toISOString().split('T')[0],
      carriedOver: false,
      priority: "Low"
    },
    {
      id: "task-5",
      title: "Implement LRU Cache from Scratch",
      topic: "Linked Lists",
      estimatedMinutes: 40,
      completed: false,
      date: new Date().toISOString().split('T')[0],
      carriedOver: false,
      priority: "High"
    }
  ],
  problems: [
    {
      id: "prob-1",
      title: "Two Sum",
      platform: "LeetCode",
      difficulty: "Easy",
      topic: "Arrays & Hashing",
      link: "https://leetcode.com/problems/two-sum/",
      solveStatus: "Independently",
      needsRevision: false,
      timeSpentMinutes: 15,
      notes: "Used Hash Map to achieve O(n) time and O(n) space complexity.",
      solvedAt: new Date(Date.now() - 4 * 86400000).toISOString()
    },
    {
      id: "prob-2",
      title: "3Sum",
      platform: "LeetCode",
      difficulty: "Medium",
      topic: "Two Pointers",
      link: "https://leetcode.com/problems/3sum/",
      solveStatus: "Needed Hint",
      needsRevision: true,
      timeSpentMinutes: 35,
      notes: "Sort the array first, then use two pointers. Beware of duplicate triplets!",
      solvedAt: new Date(Date.now() - 3 * 86400000).toISOString()
    },
    {
      id: "prob-3",
      title: "Valid Parentheses",
      platform: "LeetCode",
      difficulty: "Easy",
      topic: "Stacks & Queues",
      link: "https://leetcode.com/problems/valid-parentheses/",
      solveStatus: "Independently",
      needsRevision: false,
      timeSpentMinutes: 10,
      notes: "Classic stack problem. Push opening brackets, match when closing encountered.",
      solvedAt: new Date(Date.now() - 2 * 86400000).toISOString()
    },
    {
      id: "prob-4",
      title: "Longest Substring Without Repeating Characters",
      platform: "LeetCode",
      difficulty: "Medium",
      topic: "Sliding Window",
      link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      solveStatus: "Independently",
      needsRevision: false,
      timeSpentMinutes: 25,
      notes: "Sliding window with set / index map. Update left pointer when duplicate seen.",
      solvedAt: new Date(Date.now() - 1 * 86400000).toISOString()
    },
    {
      id: "prob-5",
      title: "Trapping Rain Water",
      platform: "LeetCode",
      difficulty: "Hard",
      topic: "Two Pointers",
      link: "https://leetcode.com/problems/trapping-rain-water/",
      solveStatus: "Looked at Solution",
      needsRevision: true,
      timeSpentMinutes: 50,
      notes: "Two-pointer approach using left_max and right_max bounds. Must re-solve next week!",
      solvedAt: new Date().toISOString()
    },
    {
      id: "prob-6",
      title: "Merge Two Sorted Lists",
      platform: "LeetCode",
      difficulty: "Easy",
      topic: "Linked Lists",
      link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      solveStatus: "Independently",
      needsRevision: false,
      timeSpentMinutes: 12,
      notes: "Dummy head node simplifies pointer manipulation.",
      solvedAt: new Date().toISOString()
    },
    {
      id: "prob-7",
      title: "Binary Tree Level Order Traversal",
      platform: "LeetCode",
      difficulty: "Medium",
      topic: "Trees & BST",
      link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      solveStatus: "Independently",
      needsRevision: false,
      timeSpentMinutes: 22,
      notes: "Standard BFS using Queue with level size batching.",
      solvedAt: new Date(Date.now() - 5 * 86400000).toISOString()
    },
    {
      id: "prob-8",
      title: "Coin Change",
      platform: "LeetCode",
      difficulty: "Medium",
      topic: "Dynamic Programming",
      link: "https://leetcode.com/problems/coin-change/",
      solveStatus: "Needed Hint",
      needsRevision: true,
      timeSpentMinutes: 40,
      notes: "Unbounded knapsack DP. dp[i] = min(dp[i], dp[i - coin] + 1).",
      solvedAt: new Date(Date.now() - 6 * 86400000).toISOString()
    }
  ],
  roadmap: [
    {
      week: 1,
      title: "Arrays & Strings Mastery",
      description: "Fundamental memory layouts, two pointers, prefix sums, and sliding window techniques.",
      status: "completed",
      progress: 100,
      topics: [
        { name: "Array Basics & Dynamic Arrays", completed: true },
        { name: "Two Pointers Technique", completed: true },
        { name: "Sliding Window Patterns", completed: true },
        { name: "Prefix Sums & Frequency Maps", completed: true }
      ],
      curatedProblemsCount: 15,
      completedProblemsCount: 15
    },
    {
      week: 2,
      title: "Searching, Sorting & Stacks",
      description: "Binary search variations, quick/merge sort concepts, and monotonic stacks/queues.",
      status: "in-progress",
      progress: 75,
      topics: [
        { name: "Binary Search on Answer Space", completed: true },
        { name: "Rotated Sorted Array Search", completed: true },
        { name: "Monotonic Stack Patterns", completed: true },
        { name: "Priority Queues / Min-Max Heaps", completed: false }
      ],
      curatedProblemsCount: 18,
      completedProblemsCount: 14
    },
    {
      week: 3,
      title: "Linked Lists & Fast-Slow Pointers",
      description: "Reversal, cycle detection (Floyd's algorithm), LRU Cache, and merge sorting on lists.",
      status: "upcoming",
      progress: 0,
      topics: [
        { name: "Singly & Doubly Linked Lists", completed: false },
        { name: "Tortoise & Hare Cycle Detection", completed: false },
        { name: "Reversing in K-Groups", completed: false },
        { name: "LRU Cache Implementation", completed: false }
      ],
      curatedProblemsCount: 12,
      completedProblemsCount: 0
    },
    {
      week: 4,
      title: "Binary Trees & BST",
      description: "Tree traversals (Inorder/Pre/Post/Level), LCA, diameter, and binary search tree properties.",
      status: "upcoming",
      progress: 0,
      topics: [
        { name: "DFS Traversals & Recursive Views", completed: false },
        { name: "BFS Level Order & Zigzag", completed: false },
        { name: "Lowest Common Ancestor (LCA)", completed: false },
        { name: "BST Validation & Construction", completed: false }
      ],
      curatedProblemsCount: 20,
      completedProblemsCount: 0
    },
    {
      week: 5,
      title: "Graphs: BFS, DFS & Shortest Paths",
      description: "Adjacency representations, topological sort, Dijkstra, Union-Find (DSU).",
      status: "upcoming",
      progress: 0,
      topics: [
        { name: "Graph Traversals (BFS / DFS)", completed: false },
        { name: "Topological Sort (Kahn's Algo)", completed: false },
        { name: "Disjoint Set Union (DSU)", completed: false },
        { name: "Dijkstra's Shortest Path", completed: false }
      ],
      curatedProblemsCount: 22,
      completedProblemsCount: 0
    },
    {
      week: 6,
      title: "Dynamic Programming & Backtracking",
      description: "1D/2D memoization vs tabulation, knapsack, LCS, LIS, and state-machine DP.",
      status: "upcoming",
      progress: 0,
      topics: [
        { name: "1D DP & Subsequence patterns", completed: false },
        { name: "0/1 Knapsack & Unbounded", completed: false },
        { name: "Longest Common Subsequence (LCS)", completed: false },
        { name: "Backtracking (Permutations, N-Queens)", completed: false }
      ],
      curatedProblemsCount: 25,
      completedProblemsCount: 0
    }
  ]
};

export const TOPIC_LIST = [
  "Arrays & Strings",
  "Two Pointers",
  "Sliding Window",
  "Searching & Sorting",
  "Stacks & Queues",
  "Linked Lists",
  "Trees & BST",
  "Heap & Priority Queue",
  "Graphs",
  "Dynamic Programming",
  "Backtracking",
  "Bit Manipulation",
  "Tries",
  "Basics & Math"
];
