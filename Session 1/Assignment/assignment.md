# Session 1 Assignment

## 1. Rebuild the Session Code

Rebuild the supermarket dashboard from `Session 1/Code` yourself using HTML, CSS, and JavaScript.

- Practice `let`, `const`, data types, operators, `if/else`, `for`, and functions.
- Selling one unit must reduce stock, update total sales and units sold, and display a sale message.
- When stock reaches `0`, disable the product's sell button.

## 2. Extend the Code

### Add Two Products

Add **Juice** and **Pasta** cards alongside Rice and Milk:

| Product | Price | Starting Stock | Sell Function |
| --- | --- | --- | --- |
| Juice | 30 EGP | 5 | `sellJuice()` |
| Pasta | 18 EGP | 2 | `sellPasta()` |

Connect the cards to the functions shown in the session code. Reuse `addSale(price)` and `updateStock(stockId, buttonId, quantity)` so all four products follow the same sale behavior.

### Feature: Low Stock Alert

Add a stock-status message to each product card and update it through `updateStock()`:

- More than `2` units: display `In stock`.
- `1` or `2` units: display `Low stock`.
- `0` units: display `Out of stock` and disable selling.

Show the correct status when the page first loads and after every sale. Use the session's `if/else`, functions, `document.getElementById()`, and `textContent`.

## 3. Problem Solving — HackerRank

Solve these **3 problems** using JavaScript:

- [Day 0: Hello, World!](https://www.hackerrank.com/challenges/js10-hello-world/problem) — `console.log()` and function parameters.
- [Day 1: Arithmetic Operators](https://www.hackerrank.com/challenges/js10-arithmetic-operators/problem) — arithmetic, functions, and `return`.
- [Day 1: Functions](https://www.hackerrank.com/challenges/js10-function/problem) — calculate factorial using a `for` loop and return the result. Example: `4! = 1 × 2 × 3 × 4 = 24`.

Complete only the requested functions in HackerRank's starter code; leave input handling as provided.

## 4. Reading List

Read [GitHub and Git — GitHub Docs](https://docs.github.com/en/get-started/start-your-journey/what-is-github) and be ready to answer:

- What is Git, and how does it track code changes?
- What is GitHub, and how is it different from Git?
- Why do we use GitHub to store, share, and collaborate on projects?
