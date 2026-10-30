# Publicis Sapient / Codility — Python & theory practice guide (Abhishek Jha)

**Prepared for:** CC-49 Codility assessment (Chetan Nadig / Publicis Sapient)  
**Deadline:** **11 Nov 2026, 9:30 AM IST** (04:00 UTC) — study **before** live test only  
**Companion:** [sapient-codility-assessment.md](./sapient-codility-assessment.md) (checklist, contacts)

---

## Table of contents

1. [Disclaimer & how to use](#disclaimer--how-to-use)
2. [Python coding (35 problems)](#python-coding-35-problems-with-answers)
3. [SQL practice (10 queries)](#sql-practice-10-queries)
4. [MCQ / theory (50 items)](#mcq--theory-50-items-with-answers)
5. [System design mini-prompts](#system-design-mini-prompts)
6. [Process notes (invite & after test)](#process-notes-invite--after-test)
7. [Sources & further reading](#sources--further-reading)

---

## Disclaimer & how to use

### Disclaimer (read first)

- This document is **study material compiled from public interview reports** (Glassdoor, GeeksforGeeks, Reddit, placement prep sites, LeetCode discuss patterns). It is **not** a leak of your live Codility paper, and **no one can guarantee** what you will see on your invite.
- Problems here are **standard DSA / SQL / theory** aligned with what candidates **say** Sapient and similar vendors ask — practice for **skill**, not memorization of secret questions.
- **Integrity:** During the **live** Codility session, do **not** paste questions into AI tools, share screenshots publicly, or collaborate. Use this guide **before** the timed test only.

### How to use (suggested schedule)

| Block | Time | Activity |
|-------|------|----------|
| **A** | 60–90 min | Pick **3** Python problems — code from scratch, run 3 custom tests each, then compare solutions. |
| **B** | 30 min | **2** SQL queries without peeking; check answers and rewrite once. |
| **C** | 25 min | **25** MCQs closed-book; review misses only. |
| **D** | 20 min | One **system design** outline out loud; bullet trade-offs. |
| **E** | 45–60 min | **Mock:** 2 mediums in 75–90 min, **no internet** (Codility-like). |

**Codility Python habits:** match the required signature (`def solution(A):` …), return type exactly, handle empty/single-element input, prefer **stdlib** only unless stated, add a one-line complexity comment if the UI allows.

**Partial solutions:** Public reports (campus QuizME, Reddit DE thread) mention that **strong partial code** plus good MCQs sometimes still advances — write clean structure and comment intent if time runs out.

---

## Python coding (35 problems with answers)

*Tags in titles: **hash**, **window**, **interval**, **heap**, **simulation**, **string**, **knapsack**, **graph**, **stack**, **tree**, **DP**, **greedy**, **binary search** — common in Sapient-related writeups.*


### P1. Two Sum (indices) (hash)

**Problem:** Given integer array `nums` and `target`, return indices of two distinct elements summing to `target`. Exactly one solution exists.

**Examples:** `nums=[2,7,11,15], target=9` → `[0,1]`.

**Approach:** One pass; store value→index; for each `x`, check if `target-x` seen.

```python
def two_sum(nums, target):
    seen = {}
    for i, x in enumerate(nums):
        need = target - x
        if need in seen:
            return [seen[need], i]
        seen[x] = i
    return []
```

**Complexity:** Time O(n) · Space O(n)

---

### P2. Longest substring without repeating characters (window)

**Problem:** Return length of longest substring with all unique characters.

**Examples:** `s='abcabcbb'` → `3` (`'abc'`).

**Approach:** Sliding window; map char→last index; shrink left past duplicate.

```python
def length_of_longest_substring(s: str) -> int:
    last = {}
    left = best = 0
    for right, ch in enumerate(s):
        if ch in last and last[ch] >= left:
            left = last[ch] + 1
        last[ch] = right
        best = max(best, right - left + 1)
    return best
```

**Complexity:** Time O(n) · Space O(min(n, alphabet))

---

### P3. Merge overlapping intervals (interval)

**Problem:** Merge overlapping `[start, end]` intervals.

**Examples:** `[[1,3],[2,6],[8,10],[15,18]]` → `[[1,6],[8,10],[15,18]]`.

**Approach:** Sort by start; merge into last if overlap.

```python
def merge(intervals):
    if not intervals:
        return []
    intervals.sort(key=lambda x: x[0])
    out = [intervals[0]]
    for s, e in intervals[1:]:
        if s <= out[-1][1]:
            out[-1][1] = max(out[-1][1], e)
        else:
            out.append([s, e])
    return out
```

**Complexity:** Time O(n log n) · Space O(n)

---

### P4. Top K frequent elements (heap)

**Problem:** Return `k` most frequent integers (any order).

**Examples:** `nums=[1,1,1,2,2,3], k=2` → `[1,2]` (or `[2,1]`).

**Approach:** Count with Counter; `heapq.nlargest` on frequency.

```python
from collections import Counter
import heapq

def top_k_frequent(nums, k):
    counts = Counter(nums)
    return [x for x, _ in heapq.nlargest(k, counts.items(), key=lambda t: t[1])]
```

**Complexity:** Time O(n log k) · Space O(n)

---

### P5. Linked list — cycle detection (linked list)

**Problem:** Singly linked list `head`; return `True` if a cycle exists.

**Examples:** Cycle at tail → `True`; straight list → `False`.

**Approach:** Floyd slow/fast pointers.

```python
def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False
```

**Complexity:** Time O(n) · Space O(1)

---

### P6. Binary tree level order (BFS) (tree, graph)

**Problem:** Return node values level by level.

**Examples:** `[3,9,20,null,null,15,7]` → `[[3],[9,20],[15,7]]`.

**Approach:** Queue; process level-sized batches.

```python
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def level_order(root):
    if not root:
        return []
    q = deque([root])
    out = []
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
        out.append(level)
    return out
```

**Complexity:** Time O(n) · Space O(n)

---

### P7. K pairs with smallest sums (heap — *GFG campus / QuizME*)

**Problem:** Two sorted arrays `nums1`, `nums2`; return `k` pairs `(u,v)` with smallest `u+v`.

**Examples:** `nums1=[1,7,11], nums2=[2,4,6], k=3` → `[[1,2],[1,4],[1,6]]`.

**Approach:** Min-heap of (sum, i, j); seed first column; expand j.

```python
import heapq

def k_smallest_pairs(nums1, nums2, k):
    if not nums1 or not nums2 or k <= 0:
        return []
    heap = []
    for i in range(min(len(nums1), k)):
        heapq.heappush(heap, (nums1[i] + nums2[0], i, 0))
    out = []
    while heap and len(out) < k:
        _, i, j = heapq.heappop(heap)
        out.append([nums1[i], nums2[j]])
        if j + 1 < len(nums2):
            heapq.heappush(heap, (nums1[i] + nums2[j + 1], i, j + 1))
    return out
```

**Complexity:** Time O(k log k) typical · Space O(k)

---

### P8. Coin change (minimum coins) (DP)

**Problem:** `coins` and `amount`; min coins to make `amount`, or `-1`.

**Examples:** `coins=[1,2,5], amount=11` → `3` (5+5+1).

**Approach:** Bottom-up DP per amount.

```python
def coin_change(coins, amount):
    dp = [10**9] * (amount + 1)
    dp[0] = 0
    for a in range(1, amount + 1):
        for c in coins:
            if c <= a:
                dp[a] = min(dp[a], dp[a - c] + 1)
    return dp[amount] if dp[amount] < 10**9 else -1
```

**Complexity:** Time O(amount × |coins|) · Space O(amount)

---

### P9. Binary search (exact index) (binary search)

**Problem:** Sorted `nums`, find index of `target` or `-1`.

**Examples:** `nums=[-1,0,3,5,9,12], target=9` → `4`.

**Approach:** Classic two-pointer bisection.

```python
def binary_search(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1
```

**Complexity:** Time O(log n) · Space O(1)

---

### P10. Valid parentheses (stack)

**Problem:** String of `()[]{}` — balanced and correctly nested?

**Examples:** `'()[]{}'` → `True`; `'([)]'` → `False`.

**Approach:** Stack of openers; pop must match.

```python
def is_valid(s: str) -> bool:
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    for ch in s:
        if ch in '([{':
            stack.append(ch)
        elif not stack or stack.pop() != pairs[ch]:
            return False
    return not stack
```

**Complexity:** Time O(n) · Space O(n)

---

### P11. Maximum subarray (Kadane) (greedy/DP)

**Problem:** Largest sum of contiguous subarray.

**Examples:** `[-2,1,-3,4,-1,2,1,-5,4]` → `6`.

**Approach:** Track best ending-here sum.

```python
def max_subarray(nums):
    best = cur = nums[0]
    for x in nums[1:]:
        cur = max(x, cur + x)
        best = max(best, cur)
    return best
```

**Complexity:** Time O(n) · Space O(1)

---

### P12. Group anagrams (hash)

**Problem:** Group strings that are anagrams.

**Examples:** `['eat','tea','tan','ate','nat','bat']` → groups of anagrams.

**Approach:** Key = sorted tuple of chars.

```python
from collections import defaultdict

def group_anagrams(strs):
    groups = defaultdict(list)
    for s in strs:
        groups[tuple(sorted(s))].append(s)
    return list(groups.values())
```

**Complexity:** Time O(n × k log k) · Space O(n)

---

### P13. Josephus survivor (simulation — *GFG campus*)

**Problem:** `n` people in circle, eliminate every `k`-th until one remains; return 1-based index of survivor.

**Examples:** `n=5, k=2` → `3` (classic Josephus).

**Approach:** Recurrence `f(n,k)= (f(n-1,k)+k-1)%n + 1` or simulate with list.

```python
def josephus(n: int, k: int) -> int:
    idx = 0
    people = list(range(1, n + 1))
    while len(people) > 1:
        idx = (idx + k - 1) % len(people)
        people.pop(idx)
    return people[0]
```

**Complexity:** Time O(n²) simulation · Space O(n); recurrence O(n)

---

### P14. Next string with numeric suffix (string — *GFG domain round*)

**Problem:** Format `prefix-aa-09`: if suffix number is `01`–`08`, increment number (two digits). If `09`, increment middle alpha part (like base-26) and reset number to `01`.

**Examples:** `abcd-aa-08` → `abcd-aa-09`; `abcd-aa-09` → `abcd-ab-01`.

**Approach:** Split on `-`; parse int; branch on value 9.

```python
def next_sapient_string(s: str) -> str:
    prefix, alpha, num = s.split('-')
    val = int(num)
    if val < 9:
        return f"{prefix}-{alpha}-{val + 1:02d}"
    # increment alpha like odometer on two letters
    a, b = alpha[0], alpha[1]
    if b != 'z':
        b = chr(ord(b) + 1)
    else:
        b = 'a'
        a = chr(ord(a) + 1) if a != 'z' else 'a'
    return f"{prefix}-{a}{b}-01"
```

**Complexity:** Time O(1) for fixed pattern · Space O(1)

---

### P15. 0/1 Knapsack (knapsack, DP)

**Problem:** Weights `w`, values `v`, capacity `W`; max total value picking each item 0 or 1 time.

**Examples:** Classic small example → max value without exceeding `W`.

**Approach:** 2D DP or 1D rolled array.

```python
def knapsack_01(weights, values, W):
    n = len(weights)
    dp = [0] * (W + 1)
    for i in range(n):
        for cap in range(W, weights[i] - 1, -1):
            dp[cap] = max(dp[cap], dp[cap - weights[i]] + values[i])
    return dp[W]
```

**Complexity:** Time O(n·W) · Space O(W)

---

### P16. Number of islands (graph DFS/BFS)

**Problem:** `grid` of `'1'` land / `'0'` water; count connected land components.

**Examples:** Three islands in a 4-connected grid → `3`.

**Approach:** DFS flood-fill each unseen `'1'`.

```python
def num_islands(grid):
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    def dfs(r, c):
        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] != '1':
            return
        grid[r][c] = '0'
        dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1)
    count = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                dfs(r, c)
                count += 1
    return count
```

**Complexity:** Time O(rows×cols) · Space O(rows×cols) recursion

---

### P17. Rotting oranges (multi-source BFS) (graph BFS)

**Problem:** Grid: `2` rotten, `1` fresh, `0` empty. Each minute rot spreads to 4-neighbors. Return minutes until no fresh, or `-1`.

**Examples:** Standard LeetCode-style small grid.

**Approach:** Enqueue all rotten; BFS by minute layers.

```python
from collections import deque

def oranges_rotting(grid):
    q = deque()
    fresh = 0
    for r, row in enumerate(grid):
        for c, v in enumerate(row):
            if v == 2:
                q.append((r, c, 0))
            elif v == 1:
                fresh += 1
    if fresh == 0:
        return 0
    best = 0
    while q:
        r, c, t = q.popleft()
        for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):
            nr, nc = r + dr, c + dc
            if 0 <= nr < len(grid) and 0 <= nc < len(grid[0]) and grid[nr][nc] == 1:
                grid[nr][nc] = 2
                fresh -= 1
                best = t + 1
                q.append((nr, nc, t + 1))
    return best if fresh == 0 else -1
```

**Complexity:** Time O(n·m) · Space O(n·m)

---

### P18. Course schedule (can finish?) (graph, DFS)

**Problem:** `numCourses` and prerequisites `[a,b]` meaning take `b` before `a`. Return whether all courses completable.

**Examples:** Cycle in prereq graph → `False`.

**Approach:** Kahn BFS or DFS 3-color cycle detect.

```python
def can_finish(numCourses, prerequisites):
    indeg = [0] * numCourses
    adj = [[] for _ in range(numCourses)]
    for a, b in prerequisites:
        adj[b].append(a)
        indeg[a] += 1
    q = [i for i in range(numCourses) if indeg[i] == 0]
    seen = 0
    while q:
        u = q.pop()
        seen += 1
        for v in adj[u]:
            indeg[v] -= 1
            if indeg[v] == 0:
                q.append(v)
    return seen == numCourses
```

**Complexity:** Time O(V+E) · Space O(V+E)

---

### P19. Product of array except self (prefix)

**Problem:** Return array where `out[i]` = product of all nums except `nums[i]`. No division.

**Examples:** `[1,2,3,4]` → `[24,12,8,6]`.

**Approach:** Prefix from left, suffix from right.

```python
def product_except_self(nums):
    n = len(nums)
    out = [1] * n
    left = 1
    for i in range(n):
        out[i] = left
        left *= nums[i]
    right = 1
    for i in range(n - 1, -1, -1):
        out[i] *= right
        right *= nums[i]
    return out
```

**Complexity:** Time O(n) · Space O(1) extra

---

### P20. Container with most water (greedy)

**Problem:** Heights array; pick two lines forming container; max area.

**Examples:** `[1,8,6,2,5,4,8,3,7]` → `49`.

**Approach:** Two pointers; move shorter side inward.

```python
def max_area(height):
    lo, hi = 0, len(height) - 1
    best = 0
    while lo < hi:
        best = max(best, min(height[lo], height[hi]) * (hi - lo))
        if height[lo] < height[hi]:
            lo += 1
        else:
            hi -= 1
    return best
```

**Complexity:** Time O(n) · Space O(1)

---

### P21. 3Sum (unique triplets) (sort)

**Problem:** Find all unique triplets in `nums` summing to 0.

**Examples:** `[-1,0,1,2,-1,-4]` → `[[-1,-1,2],[-1,0,1]]`.

**Approach:** Sort; fix i; two-sum on rest with duplicates skipped.

```python
def three_sum(nums):
    nums.sort()
    out = []
    for i in range(len(nums) - 2):
        if i and nums[i] == nums[i - 1]:
            continue
        lo, hi = i + 1, len(nums) - 1
        while lo < hi:
            s = nums[i] + nums[lo] + nums[hi]
            if s == 0:
                out.append([nums[i], nums[lo], nums[hi]])
                lo += 1
                hi -= 1
                while lo < hi and nums[lo] == nums[lo - 1]:
                    lo += 1
            elif s < 0:
                lo += 1
            else:
                hi -= 1
    return out
```

**Complexity:** Time O(n²) · Space O(1) extra

---

### P22. Search in rotated sorted array (binary search)

**Problem:** Distinct ints, rotated sorted; find `target` index or `-1`.

**Examples:** Identify sorted half each step.

**Approach:** `nums=[4,5,6,7,0,1,2], target=0` → `4`.

```python
def search_rotated(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        if nums[lo] <= nums[mid]:
            if nums[lo] <= target < nums[mid]:
                hi = mid - 1
            else:
                lo = mid + 1
        else:
            if nums[mid] < target <= nums[hi]:
                lo = mid + 1
            else:
                hi = mid - 1
    return -1
```

**Complexity:** Time O(log n) · Space O(1)

---

### P23. Daily temperatures (monotonic stack)

**Problem:** For each day, days until a warmer temperature (0 if none).

**Examples:** `[73,74,75,71,69,72,76,73]` → `[1,1,4,2,1,1,0,0]`.

**Approach:** Stack of indices; pop when warmer.

```python
def daily_temperatures(temps):
    n = len(temps)
    ans = [0] * n
    stack = []
    for i, t in enumerate(temps):
        while stack and temps[stack[-1]] < t:
            j = stack.pop()
            ans[j] = i - j
        stack.append(i)
    return ans
```

**Complexity:** Time O(n) · Space O(n)

---

### P24. Meeting rooms II (min rooms) (interval, heap)

**Problem:** Meeting intervals `[start,end)`; minimum conference rooms needed.

**Examples:** Sort starts; min-heap of end times.

**Approach:** `[[0,30],[5,10],[15,20]]` → `2`.

```python
import heapq

def min_meeting_rooms(intervals):
    if not intervals:
        return 0
    intervals.sort(key=lambda x: x[0])
    ends = []
    heapq.heappush(ends, intervals[0][1])
    for s, e in intervals[1:]:
        if s >= ends[0]:
            heapq.heappop(ends)
        heapq.heappush(ends, e)
    return len(ends)
```

**Complexity:** Time O(n log n) · Space O(n)

---

### P25. Jump game (can reach end) (greedy)

**Problem:** `nums[i]` = max jump from i; can you reach last index?

**Examples:** `[2,3,1,1,4]` → `True`; `[3,2,1,0,4]` → `False`.

**Approach:** Track farthest reachable index.

```python
def can_jump(nums):
    far = 0
    for i, jump in enumerate(nums):
        if i > far:
            return False
        far = max(far, i + jump)
    return True
```

**Complexity:** Time O(n) · Space O(1)

---

### P26. Climbing stairs (DP)

**Problem:** `n` steps; each move 1 or 2; count distinct ways.

**Examples:** `n=3` → `3` ways.

**Approach:** Fibonacci DP.

```python
def climb_stairs(n: int) -> int:
    if n <= 2:
        return n
    a, b = 1, 2
    for _ in range(3, n + 1):
        a, b = b, a + b
    return b
```

**Complexity:** Time O(n) · Space O(1)

---

### P27. Longest common subsequence (DP)

**Problem:** Length of LCS of strings `text1`, `text2`.

**Examples:** `'abcde'`, `'ace'` → `3`.

**Approach:** 2D DP; compress optional.

```python
def lcs(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]
```

**Complexity:** Time O(mn) · Space O(mn)

---

### P28. Word break (DP)

**Problem:** `s` and dictionary `wordDict`; can `s` be segmented into dictionary words?

**Examples:** `'leetcode'`, `['leet','code']` → `True`.

**Approach:** DP[i] = True if prefix ends at valid word.

```python
def word_break(s, wordDict):
    words = set(wordDict)
    dp = [False] * (len(s) + 1)
    dp[0] = True
    for i in range(1, len(s) + 1):
        for j in range(i):
            if dp[j] and s[j:i] in words:
                dp[i] = True
                break
    return dp[len(s)]
```

**Complexity:** Time O(n² · L) · Space O(n)

---

### P29. Longest increasing subsequence length (DP, binary search)

**Problem:** Length of strictly increasing subsequence.

**Examples:** `[10,9,2,5,3,7,101,18]` → `4`.

**Approach:** Patience sorting with bisect.

```python
import bisect

def length_of_lis(nums):
    tails = []
    for x in nums:
        i = bisect.bisect_left(tails, x)
        if i == len(tails):
            tails.append(x)
        else:
            tails[i] = x
    return len(tails)
```

**Complexity:** Time O(n log n) · Space O(n)

---

### P30. Reverse linked list (linked list)

**Problem:** Reverse singly linked list in-place; return new head.

**Examples:** `1→2→3→None` → `3→2→1`.

**Approach:** Iterative three-pointer swap.

```python
def reverse_list(head):
    prev = None
    cur = head
    while cur:
        nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    return prev
```

**Complexity:** Time O(n) · Space O(1)

---

### P31. Sum as two squares (two pairs) (hash — *GFG ASDE-II*)

**Problem:** Array of ints; print unique number expressible as sum of squares of **two different pairs** from array.

**Examples:** `[0,3,4,5,9,12,6]` → `25` because `0²+5²=25=3²+4²`.

**Approach:** Map sum-of-squares→count pairs; find number with two distinct pairs.

```python
def sum_two_square_pairs(arr):
    from collections import defaultdict
    pairs = defaultdict(list)
    n = len(arr)
    for i in range(n):
        for j in range(i + 1, n):
            s = arr[i] * arr[i] + arr[j] * arr[j]
            pairs[s].append((arr[i], arr[j]))
    for val, ps in pairs.items():
        if len(ps) >= 2:
            return val
    return None
```

**Complexity:** Time O(n²) · Space O(n²)

---

### P32. Unbounded knapsack (max value) (knapsack — *TheJobOverflow ASDE1*)

**Problem:** Unlimited copies of each coin/item weight `w`, value `v`; max value with capacity `W`.

**Examples:** Similar to coin change max value.

**Approach:** Inner loop forward on capacity.

```python
def unbounded_knapsack(weights, values, W):
    dp = [0] * (W + 1)
    for cap in range(W + 1):
        for i in range(len(weights)):
            wt, val = weights[i], values[i]
            if wt <= cap:
                dp[cap] = max(dp[cap], dp[cap - wt] + val)
    return dp[W]
```

**Complexity:** Time O(W·n) · Space O(W)

---

### P33. First non-repeating character (hash, string)

**Problem:** Return index of first character that appears once, or `-1`.

**Examples:** `'leetcode'` → `0` (`'l'`).

**Approach:** Two passes: count frequencies, then scan for freq 1.

```python
def first_uniq_char(s: str) -> int:
    from collections import Counter
    c = Counter(s)
    for i, ch in enumerate(s):
        if c[ch] == 1:
            return i
    return -1
```

**Complexity:** Time O(n) · Space O(1) alphabet

---

### P34. Binary tree maximum depth (tree)

**Problem:** Return max root-to-leaf depth.

**Examples:** `[3,9,20,null,null,15,7]` → `3`.

**Approach:** Recursive `1 + max(left, right)`; BFS level count also works.

```python
def max_depth(root):
    if not root:
        return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))
```

**Complexity:** Time O(n) · Space O(h) recursion

---

### P35. Find minimum in rotated sorted array (binary search)

**Problem:** Distinct ints in rotated sorted array; return minimum element.

**Examples:** `[3,4,5,1,2]` → `1`.

**Approach:** Binary search: compare mid with right end to shrink unsorted half.

```python
def find_min(nums):
    lo, hi = 0, len(nums) - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if nums[mid] > nums[hi]:
            lo = mid + 1
        else:
            hi = mid
    return nums[lo]
```

**Complexity:** Time O(log n) · Space O(1)

---

## SQL practice (10 queries)

Use **PostgreSQL / ANSI** syntax. Tables are illustrative — adapt names if your sandbox differs.

### S1. Second highest salary

**Q:** From `employees(id, name, salary)`, return the second highest distinct salary (or `NULL`).

```sql
SELECT MAX(salary) AS second_highest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```

---

### S2. Employees earning more than their manager

**Q:** List employee names earning more than their manager.

```sql
SELECT e.name AS employee
FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE e.salary > m.salary;
```

---

### S3. Department with highest average salary

**Q:** Department name with highest average `salary`.

```sql
SELECT department_name
FROM departments d
JOIN employees e ON e.dept_id = d.id
GROUP BY d.id, department_name
ORDER BY AVG(e.salary) DESC
LIMIT 1;
```

---

### S4. Running total of orders by date

**Q:** `orders(order_id, order_date, amount)` — daily amount and cumulative sum.

```sql
SELECT order_date,
       SUM(amount) AS daily_total,
       SUM(SUM(amount)) OVER (ORDER BY order_date) AS running_total
FROM orders
GROUP BY order_date
ORDER BY order_date;
```

---

### S5. Rank products by revenue per category

**Q:** `sales(product, category, revenue)` — rank products within category by revenue desc.

```sql
SELECT product, category, revenue,
       RANK() OVER (PARTITION BY category ORDER BY revenue DESC) AS rnk
FROM sales;
```

---

### S6. Customers who never ordered

**Q:** `customers(id, name)`, `orders(customer_id)` — names with no orders.

```sql
SELECT c.name
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
WHERE o.customer_id IS NULL;
```

---

### S7. Duplicate emails

**Q:** Emails appearing more than once in `users(email)`.

```sql
SELECT email
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

---

### S8. Consecutive login days (streak start)

**Q:** `logins(user_id, login_date)` — users with 3+ consecutive days (simplified: count distinct streaks).

```sql
WITH numbered AS (
  SELECT user_id, login_date,
         login_date - (ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date))::int AS grp
  FROM logins
)
SELECT user_id, MIN(login_date) AS streak_start, COUNT(*) AS streak_len
FROM numbered
GROUP BY user_id, grp
HAVING COUNT(*) >= 3;
```

---

### S9. YoY revenue growth

**Q:** `revenue(year, amount)` — percent change vs previous year.

```sql
SELECT year, amount,
       ROUND(100.0 * (amount - LAG(amount) OVER (ORDER BY year))
             / NULLIF(LAG(amount) OVER (ORDER BY year), 0), 2) AS yoy_pct
FROM revenue
ORDER BY year;
```

---

### S10. Delete duplicates keep lowest id

**Q:** `employees(id, name, salary)` — remove duplicate `(name, salary)` keeping smallest `id`.

```sql
DELETE FROM employees
WHERE id NOT IN (
  SELECT MIN(id) FROM employees GROUP BY name, salary
);
```

---


## MCQ / theory (50 items with answers)

| # | Question | Answer | Why (1 line) |
|---|----------|--------|---------------|
| 1 | What is the output of `print(2 ** 3 ** 2)`? | **512** | `**` is right-associative: `3**2=9`, then `2**9`. |
| 2 | Which is mutable in Python? | **list** | Lists mutate in place; tuples/strings are immutable. |
| 3 | Time complexity of dict lookup average case? | **O(1)** | Hash table with low load factor. |
| 4 | Worst-case quicksort (no pivot care)? | **O(n²)** | Already sorted + bad pivot. |
| 5 | Stable sorting algorithm? | **Merge sort** | Preserves relative order of equal keys. |
| 6 | BFS uses which structure? | **Queue** | FIFO explores level by level. |
| 7 | DFS on graph uses? | **Stack/recursion** | LIFO or implicit call stack. |
| 8 | Binary search on n elements? | **O(log n)** | Halves search space each step. |
| 9 | Heap extract-min? | **O(log n)** | Bubble down after removing root. |
| 10 | Dijkstra fails with? | **Negative edge weights** | Needs non-negative weights for greedy relax. |
| 11 | TCP vs UDP: reliable delivery? | **TCP** | TCP retransmits; UDP does not guarantee. |
| 12 | HTTP status 404 means? | **Not Found** | Resource absent on server. |
| 13 | SQL PRIMARY KEY allows NULL? | **No** | PK columns are NOT NULL and unique. |
| 14 | INNER JOIN keeps rows when? | **Match in both tables** | Unmatched rows dropped. |
| 15 | ACID: Isolation prevents? | **Dirty reads / anomalies** | Concurrent txn interference. |
| 16 | Normalization removes? | **Redundancy** | Decompose to reduce update anomalies. |
| 17 | Index speeds? | **Reads** | Writes may slow due to maintenance. |
| 18 | Polymorphism in OOP? | **Same interface, many forms** | Override/overload behaviors. |
| 19 | Encapsulation hides? | **Implementation details** | Expose API via public methods. |
| 20 | SOLID: D stands for? | **Dependency Inversion** | Depend on abstractions. |
| 21 | Bias in ML? | **Error from wrong assumptions** | Underfitting tendency. |
| 22 | Variance in ML? | **Sensitivity to training data** | Overfitting tendency. |
| 23 | High bias + low variance? | **Underfitting** | Model too simple. |
| 24 | Logistic regression models? | **Classification probabilities** | Sigmoid on linear score. |
| 25 | Linear regression loss common? | **MSE** | Squared error for continuous target. |
| 26 | Precision = ? | **TP / (TP+FP)** | Of predicted positives, how many correct. |
| 27 | Recall = ? | **TP / (TP+FN)** | Of actual positives, how many found. |
| 28 | F1 score? | **Harmonic mean of P and R** | Balances precision/recall. |
| 29 | ROC AUC measures? | **Ranking quality across thresholds** | TPR vs FPR curve area. |
| 30 | L1 regularization effect? | **Sparse weights** | Can zero out features. |
| 31 | Dropout during training? | **Reduces co-adaptation** | Random neuron mask. |
| 32 | Batch norm normalizes? | **Activations per mini-batch** | Stabilizes training. |
| 33 | Gradient descent local min issue? | **Non-convex loss** | May need momentum/restats. |
| 34 | Word embedding (Word2Vec)? | **Dense vectors for words** | Captures semantic similarity. |
| 35 | TF-IDF weights? | **Term freq × inverse doc freq** | Downweights common terms. |
| 36 | BLEU metric for? | **Machine translation quality** | N-gram overlap with reference. |
| 37 | Transformer attention is? | **Weighted sum of values** | Query-key scores weight values. |
| 38 | RAG in GenAI? | **Retrieve docs then generate** | Grounds LLM on external knowledge. |
| 39 | Temperature in sampling? | **Randomness of token choice** | Higher → more diverse output. |
| 40 | Hallucination in LLMs? | **Plausible false statements** | Mitigate with RAG/tools. |
| 41 | MLOps: model registry? | **Versioned model store** | Tracks staging/production. |
| 42 | Canary deployment? | **Roll to small traffic first** | Limits blast radius. |
| 43 | Feature store purpose? | **Consistent train/serve features** | Avoid training-serving skew. |
| 44 | Data drift? | **Input distribution change** | Monitor stats vs baseline. |
| 45 | CI/CD in ML adds? | **Automated train/test/deploy** | Pipelines for reproducibility. |
| 46 | Kubernetes pod is? | **Smallest deployable unit** | Wraps container(s). |
| 47 | Docker image vs container? | **Image is template; container is runtime** | Immutable image, mutable instance. |
| 48 | Git merge vs rebase? | **Rebase rewrites history linearly** | Merge keeps branch topology. |
| 49 | Big-O of merging k sorted lists size n? | **O(nk log k) with heap** | Pop min k times. |
| 50 | NP-complete means? | **Hard to solve; verify in poly time** | No known poly algo for all cases. |

## System design mini-prompts

*Reported Sapient SSE / senior rounds (Glassdoor Oct 2026): **flash sale / Black Friday** concurrency. Outline only — 5–8 minutes spoken.*

### SD1. Black Friday flash sale (single hot SKU)

**Prompt:** Millions try to buy 2,500 units at noon; no oversell; rest of site must stay healthy.

**Outline answer:**

- **Clarify:** inventory per SKU, payment window, per-user limit, bots.
- **Traffic:** CDN + static cache; **waiting room** / token queue so origin sees smooth rate.
- **Inventory:** **Atomic decrement** (DB `UPDATE ... WHERE stock > 0`) or **Redis token list** (`LPOP` one unit id); idempotent `order_id`.
- **Checkout:** Short-lived **reservation**; payment webhook confirms; release on timeout.
- **Writes:** Optional **async queue** (Kafka/SQS) for order capture; consumers at DB-safe rate.
- **Failure:** Sold-out page (not 500); rate limits; pre-warm cache before event.

---

### SD2. High-traffic e-commerce checkout (correctness)

**Prompt:** Prevent two users buying the last item simultaneously.

**Outline:**

- **Read path:** Product page from cache; show **approx** stock with TTL.
- **Write path:** Single-row conditional update or distributed lock per SKU (short hold).
- **Payment:** Two-phase: reserve → pay → commit; saga on failure.
- **Idempotency:** Client + server keys on submit.
- **Observability:** Metrics on oversell attempts, queue depth, p95 checkout.

---

### SD3. Netflix-style content catalog (read-heavy)

*Inspired by GFG ASDE-II interview report — indexing discussion.*

**Prompt:** Movies, docs, TV; filter by genre, year, rating; fast browse.

**Outline:**

- **Storage:** Document per title + **inverted indexes** (genre→ids, year→ids).
- **Search:** Elasticsearch/OpenSearch for text; cache hot facet queries.
- **Sharding:** By `content_id` or region; read replicas.
- **Consistency:** Eventual for analytics; strong for user watchlist writes.

---

## Process notes (invite & after test)

### Awaiting Codility invite (Abhishek — 27 Oct 2026)

- **Status:** Emailed/DM’d **Chetan Nadig**; watch for subject **`Publicis Sapient invites you to complete a Codility assessment`** and sender **`noreply@codility.com`** (spam/promotions too).
- **Quiet block:** Book **60–90 minutes**; read time limits on the invite once.
- **If no link 24–48h:** WhatsApp/call **9538764345**; confirm email spelling; ask if platform is Codility vs HackerRank/QuizME (role-dependent).

### After you submit

1. Ensure every task is **submitted** in UI before closing the tab.
2. **Email Chetan** (optional but reported helpful on Reddit): *“Completed the Codility assessment on [date]. Thank you.”* — some candidates were asked why they didn’t ping HR.
3. Mark **CC-49** done on your board; prep follow-ons (SOLID, flash-sale design, product curiosity on **Slingshot/Bodhi**) per [assessment doc](./sapient-codility-assessment.md).

### Role variance (public reports)

| Track | Format |
|-------|--------|
| Senior SWE | Codility: design-style + LeetCode medium ([Glassdoor](https://www.glassdoor.co.in/Interview/Publicis-Sapient-Interview-Questions-E1646026.htm)) |
| Data science | MCQs (Python, NLP, **MLOps**, GenAI) + 2 mediums ([Glassdoor DS](https://www.glassdoor.com/Interview/Publicis-Sapient-Data-Science-Interview-Questions-EI_IE1646026.0,16_KO17,29.htm)) |
| Campus trainee | QuizME: k-pairs + Josephus ([GFG](https://www.geeksforgeeks.org/interview-experiences/publicis-sapient-interview-experience-for-trainee-engineer-full-time-on-campus/)) |
| Data engineering | AWS/SQL/Spark + hard Codility; manual review mentioned ([Reddit](https://www.reddit.com/r/dataengineersindia/comments/1qoe7yq/publicis_sapient_codility_test/)) |

---

## Sources & further reading

| Source | URL |
|--------|-----|
| Glassdoor — Publicis Sapient (general) | https://www.glassdoor.co.in/Interview/Publicis-Sapient-Interview-Questions-E1646026.htm |
| Glassdoor — Senior SWE (Codility + design) | https://www.glassdoor.co.uk/Interview/Publicis-Sapient-Senior-Software-Engineer-Interview-Questions-EI_IE1646026.0,16_KO17,41.htm |
| Glassdoor — Data Science (MCQ + coding) | https://www.glassdoor.com/Interview/Publicis-Sapient-Data-Science-Interview-Questions-EI_IE1646026.0,16_KO17,29.htm |
| GFG — Trainee campus (k-pairs, Josephus, next string) | https://www.geeksforgeeks.org/interview-experiences/publicis-sapient-interview-experience-for-trainee-engineer-full-time-on-campus/ |
| GFG — ASDE-II (sum of squares pairs) | https://www.geeksforgeeks.org/interview-experiences/publicis-sapeint-on-campus-for-the-role-of-asde-ii/ |
| GFG — ASDE L1 (palindromic substrings) | https://www.geeksforgeeks.org/interview-experiences/publicis-sapient-interview-experience-on-campus-associate-software-developer-engineer-l1/ |
| Reddit — Codility DE experience | https://www.reddit.com/r/dataengineersindia/comments/1qoe7yq/publicis_sapient_codility_test/ |
| Placement Papers — coding patterns | https://placementpapers.app/publicis-sapient/coding-questions/ |
| Placement Papers — 2026 pattern | https://placementpapers.app/publicis-sapient/2026/ |
| TheJobOverflow — ASDE1 (unbounded knapsack) | https://thejoboverflow.com/p/p442/ |
| Flash sale design reference | https://www.landed.jobs/resources/system-design/flash-sale |
| Medium — OA + technical breadth | https://medium.com/@harshithagandreti/i-came-close-but-not-close-enough-7ce6d749a27d |

---

*Last expanded: 27 Oct 2026. Primary study doc for CC-49 Python Codility prep.*
