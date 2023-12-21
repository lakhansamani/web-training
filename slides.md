---
theme: academic
class: text-center
highlighter: shikiji
lineNumbers: false
info: |
  ## Learn web development, react, react-native.
  Learn with Lakhan
drawings:
  persist: false
transition: slide-left
title: Web 101 Training
# mdc: true
---

# Welcome to Web-101 Training

By, Lakhan Samani<br/>
Handle: lakhansamani<br/>
Email: lakhan.m.samani@gmail.com

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/lakhansamani" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# Agenda

<Toc maxDepth="1"></Toc>

---

# What we will learn

- Basic web app development
  - Data fetching
  - Query selector
  - Event Handling
  - DOM manipulation
  - Form state handling
- React application development
  - State management
  - Auth
  - Form state handling

---

## Continue...

- React native application development using expo
  - State Management
  - Auth
  - Navigation
  - Native API (camera)
  - Deployment

---

# Env Setup for Web

- [Code editor (vscode)](https://code.visualstudio.com/)
- [Node > 19.0](https://nodejs.org/en/download)
- [git](https://git-scm.com/downloads)
- Terminal setup (Add node & git to your path)
- Install [`http-server`](https://www.npmjs.com/package/http-server) globally
  ```sh
  npm install -g http-server
  ```

---

# Pillars of WEB

<ul v-click>
 <li v-after> HTML </li>
 <li v-after> CSS </li>
 <li v-after> Javascript </li>
</ul>

---

# HTML (Hypertext Markup Language)

- It defines the structure of web content
- It contains ELEMENTS (tags) in a structured format (closed tags / self closed tags)
- ELEMENTS can have ATTRIBUTES (properties)

---

# HTML Elements

- `<!doctype html>` Special element that defines the type of document
- `<html></html>` Root element that wraps whole document
- `<head></head>` Contains all the metadata tags
- `<body></body>` Contains actual elements that are rendered and visualized on web page

---

# Some well-known tags

- `<div></div>`
- `<ul> <li> </li> </ul>`
- `<nav></nav>`
- `<article></article>`
- `<img />`
- `<form></form>`
- `<input />`
- `<button></button>`
- And much more... (https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

---

# Create a basic example using HTML

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

---

# Let's add some styling

**`css` selectors**

- element selector - `p`
- class name selector - `.`
- id selector - `#`
- child selectors, eg: `:first-child`
- many more... (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)

---

# Using tailiwind css

- A framework with pre-defined css class for most of the UI scenarios
- Install [tailwind css](https://tailwindcss.com/docs/installation/play-cdn)

---

# Enhance the basic example

### Let's create a list of users

<br/>

> Hint you can use one of the elements we shared earlier

---

# Introducing JS

- It's a functional programming language
- Any interactions done on website, is done using JS
- Browser JS engine creates DOM (Document Object Model) for the page that is loaded

---

# Defining variables in JS

- Using `var`

Variables declared with var or created by function declarations in non-strict mode do not have block scope

```js
var x = 1;
{
  var x = 2;
  console.log(x);
}
console.log(x); // 2
```

---

## Continue Variable Declaration ...

- Using `let`

The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.

```js
let x = 1;
{
  let x = 2;
  console.log(x); // 2
}
console.log(x); // 1
```

---

## Continue Variable Declaration ...

- Using `const`
  The const declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment

```js
const x = 10;
try {
  x = 11;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const 'x'
  // (Note: the exact output may be browser-dependent)
}
console.log(x); // 10
```

---

# Defining Functions in JS

- functions are reusable code block

```js
function greetPerson(name) {
  console.log('Hello ' + name);
}
```

---

# Event Listener

Add a button with an event listener

<div v-click>

```js
const button = document.getElementById('sample');
button.addEventListener('click', function () {
  alert('Hello world');
});
```

</div>

---

# Defining Array

```js
const letters = ['a', 'b', 'c', 'd'];
```

- Looping over array

```js
letters.forEach(function (letter) {
  console.log(letter);
});
```

## Exercise

- Convert static list of user into array and render it

> Hint: we can use `innerHTML` property of UL to render it

---

# Exercise

- Add input and button in the UI
- On click of button validate if the member name is present. If present, append to the list of names

---

# Exercise

- Add search input
- On key up of search input filter the list and render it
