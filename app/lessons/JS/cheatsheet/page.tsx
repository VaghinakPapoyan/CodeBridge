"use client";

import React from "react";

export default function Page() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f5f7fa",
        margin: 0,
        padding: 20,
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 30, color: "#3399ff" }}>
        CSS Cheatsheet (Հայերեն)
      </h1>

      <Section title="Box Model">
        <Property name="width">տարրի լայնությունն է։</Property>
        <Property name="height">տարրի բարձրությունն է։</Property>
        <Property name="margin">
          տարրի շուրջը եղած դատարկ տարածությունն է։
        </Property>
        <Property name="padding">
          տարրի ներսի դատարկ տարածությունն է, տեքստի ու եզրի միջև։
        </Property>
        <Property name="border">տարրի շուրջը եզրագիծ է ավելացնում։</Property>
        <Property name="box-sizing">
          որոշում է, թե ինչպես են հաշվարկվում տարրի լայնությունն ու
          բարձրությունը։
        </Property>
        <Property name="max-width">տարրի ամենամեծ լայնությունը։</Property>
        <Property name="border-collapse: collapse;">
          աղյուսակի սահմանները միավորում է։
        </Property>
      </Section>

      <Section title="Text Settings">
        <Property name="color">տեքստի գույնն է։</Property>
        <Property name="font-size">տեքստի չափն է։</Property>
        <Property name="text-decoration">գիծ է ավելացնում տեքստի տակ։</Property>
        <Property name="font-family">տեքստի տառատեսակը։</Property>
        <Property name="font-weight">տառերի հաստությունը։</Property>
        <Property name="text-align">տեքստի հորիզոնական հավասարեցում։</Property>
        <Property name="line-height">տողերի միջև տարածություն։</Property>
        <Property name="letter-spacing">տառերի միջև տարածություն։</Property>
        <Property name="text-transform">
          մեծատառ, փոքրատառ, capitalize։
        </Property>
        <Property name="white-space">
          ինչպես է բրաուզերը վարվում դատարկ տարածությունների հետ։
        </Property>
      </Section>

      <Section title="Box Settings">
        <Property name="background-color">փոխում է հետնաշերտի գույնը։</Property>
        <Property name="border-radius">կլորացնում է անկյունները։</Property>
        <Property name="box-shadow">ստվեր է ավելացնում։</Property>
        <Property name="background">
          փոխում է հետնաշերտի հատկությունները։
        </Property>
        <Property name="opacity">թափանցիկության աստիճան։</Property>
        <Property name="overflow">
          ինչպես ցուցադրվի դուրս եկող բովանդակությունը։
        </Property>
      </Section>

      <Section title="Displays">
        <Property name="display">
          block, inline, inline-block, flex, none։
        </Property>
        <Property name="justify-content">
          Flexbox հորիզոնական հավասարեցում։
        </Property>
        <Property name="align-items">Flexbox ուղղահայաց հավասարեցում։</Property>
        <Property name="flex-direction">row կամ column։</Property>
        <Property name="flex-wrap">
          թույլ է տալիս տարրերը տեղափոխել նոր տող։
        </Property>
      </Section>

      <Section title="Positions">
        <Property name="right">աջ հեռավորություն։</Property>
        <Property name="bottom">ստորին հեռավորություն։</Property>
        <Property name="left">ձախ հեռավորություն։</Property>
        <Property name="position">
          static, absolute, relative, fixed, sticky։
        </Property>
        <Property name="z-index">շերտի հերթականություն։</Property>
        <Property name="top">վերևի հեռավորություն։</Property>
      </Section>

      <Section title="Transform">
        <Property name="transform">scale, rotate, translate։</Property>
        <Property name="scale()">փոխում է տարրի չափսը։</Property>
        <Property name="rotate()">պտտում է տարրը։</Property>
        <Property name="translate()">տեղափոխում է տարրը։</Property>
        <Property name="transform-origin">ձևափոխման կետ։</Property>
      </Section>

      <Section title="Animation">
        <Property name="animation">բարդ անիմացիաներ։</Property>
      </Section>

      <Section title="Pseudo classes & Elements">
        <Property name=":hover">
          փոփոխում է տարրի տեսքը մկնիկի վրա գալուց։
        </Property>
        <Property name="@media">տարբեր կանոններ ըստ էկրանի չափի։</Property>
        <Property name="transition">սահուն անցումներ։</Property>
        <Property name=":active, :focus">հատուկ վիճակների համար։</Property>
        <Property name="cursor">փոխում է մկնիկի տեսքը։</Property>
        <Property name="::before">բովանդակություն տարրի առաջ։</Property>
        <Property name="::after">բովանդակություն տարրի հետո։</Property>
      </Section>

      <Section title="Others">
        <Property name="list-style">փոխում է ցուցակի նշանները։</Property>
        <Property name="scroll-behavior">smooth ոլորում։</Property>
        <Property name="pointer-events">տարրի արձագանք մկնիկին։</Property>
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2
        style={{
          background: "#3399ff",
          color: "white",
          padding: 10,
          borderRadius: 8,
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function Property({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Concepts Table</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
        background-color: #f5f5f5;
      }
      h1 {
        color: #333;
        margin-bottom: 10px;
      }
      .instructions {
        background-color: #e3f2fd;
        padding: 15px;
        border-radius: 5px;
        margin-bottom: 20px;
        border-left: 4px solid #2196f3;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      th {
        background-color: #4caf50;
        color: white;
        padding: 12px;
        text-align: left;
        position: sticky;
        top: 0;
      }
      td {
        padding: 10px;
        border-bottom: 1px solid #ddd;
      }
      tr:hover {
        background-color: #f5f5f5;
      }
      .category {
        font-weight: 600;
      }
      .category-badge {
        position: relative;
        color: var(--category-text, #0f172a);
        background-color: var(--category-bg, rgba(25, 118, 210, 0.1));
        border-left: 6px solid var(--category-border, #1976d2);
        border-radius: 4px 0 0 4px;
        padding-left: 16px;
        transition: background-color 0.3s ease;
      }
      .category-toggle-row td {
        background-color: var(--category-bg, #e2e8f0);
        border-left: 6px solid var(--category-border, #475569);
        color: var(--category-text, #0f172a);
        font-weight: 600;
        padding: 0;
      }
      .category-toggle-button {
        appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        padding: 14px 16px;
        font-size: 16px;
        text-align: left;
      }
      .category-toggle-label {
        flex: 1;
      }
      .category-toggle-count {
        font-size: 14px;
        color: rgba(15, 23, 42, 0.7);
      }
      .category-toggle-icon {
        transition: transform 0.2s ease;
      }
      .category-toggle-row.collapsed .category-toggle-icon {
        transform: rotate(-90deg);
      }
      tr[data-category-group][hidden] {
        display: none;
      }
      tr[data-category-group] td.category {
        padding-left: 24px;
      }
      .difficulty-1 {
        background-color: #c8e6c9;
      }
      .difficulty-2 {
        background-color: #fff9c4;
      }
      .difficulty-3 {
        background-color: #ffe0b2;
      }
      .difficulty-4 {
        background-color: #ffccbc;
      }
      .difficulty-5 {
        background-color: #ffcdd2;
      }
      button {
        background-color: #4caf50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        margin-top: 10px;
      }
      button:hover {
        background-color: #45a049;
      }
    </style>
  </head>
  <body>
    <table id="conceptsTable">
      <thead>
        <tr>
          <th>Category</th>
          <th>Concept</th>
          <th>Difficulty (1-5)</th>
        </tr>
      </thead>
      <tbody>
        <!-- BASICS & FUNDAMENTALS -->
        <tr class="difficulty-1">
          <td class="category">Basics & Fundamentals</td>
          <td>What is JavaScript?</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Basics & Fundamentals</td>
          <td>Comments (//, /* */)</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Basics & Fundamentals</td>
          <td>console.log()</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Basics & Fundamentals</td>
          <td>Where to write JS (inline, internal, external script)</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Basics & Fundamentals</td>
          <td>DevTools</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Basics & Fundamentals</td>
          <td>alert()</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Basics & Fundamentals</td>
          <td>prompt()</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Basics & Fundamentals</td>
          <td>document.write()</td>
          <td>1</td>
        </tr>

        <!-- VARIABLES & DATA TYPES -->
        <tr class="difficulty-1">
          <td class="category">Variables & Data Types</td>
          <td>What are variables (containers for data)</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Variables & Data Types</td>
          <td>let</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Variables & Data Types</td>
          <td>const</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Variables & Data Types</td>
          <td>Numbers</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Variables & Data Types</td>
          <td>Strings</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Variables & Data Types</td>
          <td>Boolean</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Variables & Data Types</td>
          <td>Naming rules (camelCase, no starting with numbers, etc.)</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Variables & Data Types</td>
          <td>var</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Variables & Data Types</td>
          <td>typeof</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Variables & Data Types</td>
          <td>null vs undefined</td>
          <td>2</td>
        </tr>

        <!-- OPERATORS -->
        <tr class="difficulty-1">
          <td class="category">Operators</td>
          <td>Arithmetic operators</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Operators</td>
          <td>Assignment operators</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Operators</td>
          <td>Comparison operators</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Operators</td>
          <td>String concatenation with +</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Operators</td>
          <td>Increment/Decrement</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Operators</td>
          <td>Logical operators</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Operators</td>
          <td>"== vs ==="</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Operators</td>
          <td>Ternary Operator</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Operators</td>
          <td>Spread operator</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Operators</td>
          <td>Optional Chaining (?.</td>
          <td>3</td>
        </tr>

        <!-- STRINGS -->
        <tr class="difficulty-1">
          <td class="category">Strings</td>
          <td>.length</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Strings</td>
          <td>Template literals with variables</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Strings</td>
          <td>split()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Strings</td>
          <td>replace()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Strings</td>
          <td>trim()</td>
          <td>2</td>
        </tr>

        <!-- CONTROL FLOW -->
        <tr class="difficulty-1">
          <td class="category">Control Flow</td>
          <td>if</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Control Flow</td>
          <td>else</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Control Flow</td>
          <td>else if</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Control Flow</td>
          <td>Control Flow</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Control Flow</td>
          <td>Switch</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Control Flow</td>
          <td>Truthy and Falsy values</td>
          <td>2</td>
        </tr>

        <!-- LOOPS -->
        <tr class="difficulty-1">
          <td class="category">Loops</td>
          <td>for</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Loops</td>
          <td>while</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Loops</td>
          <td>break, continue</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Loops</td>
          <td>forEach()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Loops</td>
          <td>for...in vs for...of</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Loops</td>
          <td>Nested loops</td>
          <td>3</td>
        </tr>

        <!-- ARRAYS -->
        <tr class="difficulty-1">
          <td class="category">Arrays</td>
          <td>Arrays</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Arrays</td>
          <td>Creating arrays</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Arrays</td>
          <td>Accessing elements (arr[0])</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Arrays</td>
          <td>array.length</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Arrays</td>
          <td>push()</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Arrays</td>
          <td>pop()</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Arrays</td>
          <td>Array Methods</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Arrays</td>
          <td>includes()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Arrays</td>
          <td>slice()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Arrays</td>
          <td>join()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Arrays</td>
          <td>reverse()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Arrays</td>
          <td>concat()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Arrays</td>
          <td>splice()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Arrays</td>
          <td>map()</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Arrays</td>
          <td>filter()</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Arrays</td>
          <td>sort()</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Arrays</td>
          <td>Array.from()</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Arrays</td>
          <td>Multidimensional arrays</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-4">
          <td class="category">Arrays</td>
          <td>reduce()</td>
          <td>4</td>
        </tr>

        <!-- OBJECTS -->
        <tr class="difficulty-1">
          <td class="category">Objects</td>
          <td>Objects</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Objects</td>
          <td>Creating objects ({ key: value })</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Objects</td>
          <td>Accessing properties</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Objects</td>
          <td>Adding/Removing properties</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Objects</td>
          <td>Nested objects</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Objects</td>
          <td>Object.keys() / Object.values() / Object.entries()</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Objects</td>
          <td>Destructuring</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-4">
          <td class="category">Objects</td>
          <td>this keyword (intro)</td>
          <td>4</td>
        </tr>

        <!-- FUNCTIONS -->
        <tr class="difficulty-1">
          <td class="category">Functions</td>
          <td>Functions & Scope</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Functions</td>
          <td>Declaring functions</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Functions</td>
          <td>Parameters and arguments</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-1">
          <td class="category">Functions</td>
          <td>Return values</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Functions</td>
          <td>Arrow functions</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Functions</td>
          <td>Function expressions</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Functions</td>
          <td>Scope (global vs local)</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Functions</td>
          <td>Default parameters</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Functions</td>
          <td>Callback functions</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Functions</td>
          <td>Rest parameters</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-5">
          <td class="category">Functions</td>
          <td>Closures</td>
          <td>5</td>
        </tr>

        <!-- DOM MANIPULATION -->
        <tr class="difficulty-2">
          <td class="category">DOM Manipulation</td>
          <td>DOM</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">DOM Manipulation</td>
          <td>querySelector()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">DOM Manipulation</td>
          <td>querySelectorAll()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">DOM Manipulation</td>
          <td>.innerHTML</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">DOM Manipulation</td>
          <td>value (input fields)</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">DOM Manipulation</td>
          <td>.style</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">DOM Manipulation</td>
          <td>classList (add, remove, toggle)</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">DOM Manipulation</td>
          <td>createElement()</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">DOM Manipulation</td>
          <td>appendChild()</td>
          <td>3</td>
        </tr>

        <!-- EVENTS -->
        <tr class="difficulty-2">
          <td class="category">Events</td>
          <td>addEventListener()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Events</td>
          <td>onclick</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Events</td>
          <td>Form events</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Events</td>
          <td>Mouse events</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Events</td>
          <td>Keyboard events</td>
          <td>3</td>
        </tr>

        <!-- MATH & NUMBER -->
        <tr class="difficulty-1">
          <td class="category">Math & Number</td>
          <td>Number()</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Math & Number</td>
          <td>parseInt()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Math & Number</td>
          <td>parseFloat()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Math & Number</td>
          <td>Math.random()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Math & Number</td>
          <td>Math.round()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Math & Number</td>
          <td>Math.ceil()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Math & Number</td>
          <td>Math.floor()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Math & Number</td>
          <td>Math.max()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Math & Number</td>
          <td>Math.min()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Math & Number</td>
          <td>Math.pow()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Math & Number</td>
          <td>Math.sqrt()</td>
          <td>2</td>
        </tr>

        <!-- STORAGE -->
        <tr class="difficulty-2">
          <td class="category">Storage</td>
          <td>localStorage.setItem()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Storage</td>
          <td>getItem()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Storage</td>
          <td>removeItem()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Storage</td>
          <td>sessionStorage</td>
          <td>2</td>
        </tr>

        <!-- JSON -->
        <tr class="difficulty-2">
          <td class="category">JSON</td>
          <td>What is JSON</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">JSON</td>
          <td>JSON.parse()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">JSON</td>
          <td>JSON.stringify()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">JSON</td>
          <td>Difference between Object and JSON</td>
          <td>3</td>
        </tr>

        <!-- ERROR HANDLING -->
        <tr class="difficulty-1">
          <td class="category">Error Handling</td>
          <td>Common errors (syntax, reference, type)</td>
          <td>1</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Error Handling</td>
          <td>Error Handling</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Error Handling</td>
          <td>try...catch</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Error Handling</td>
          <td>throw</td>
          <td>3</td>
        </tr>

        <!-- TIMING -->
        <tr class="difficulty-2">
          <td class="category">Timing</td>
          <td>setTimeout, setInterval</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-2">
          <td class="category">Timing</td>
          <td>clearTimeout(), clearInterval()</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Timing</td>
          <td>Date</td>
          <td>3</td>
        </tr>

        <!-- TYPE CONVERSION -->
        <tr class="difficulty-2">
          <td class="category">Type Conversion</td>
          <td>Type Conversion (implicit vs explicit)</td>
          <td>2</td>
        </tr>

        <!-- BROWSER & ENVIRONMENT -->
        <tr class="difficulty-2">
          <td class="category">Browser & Environment</td>
          <td>Window object</td>
          <td>2</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Browser & Environment</td>
          <td>Using script properly (defer, async)</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-4">
          <td class="category">Browser & Environment</td>
          <td>How JS works in the browser (browser + JS engine)</td>
          <td>4</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Browser & Environment</td>
          <td>Strict mode ("use strict")</td>
          <td>3</td>
        </tr>

        <!-- ASYNC PROGRAMMING -->
        <tr class="difficulty-3">
          <td class="category">Async Programming</td>
          <td>What is an API</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Async Programming</td>
          <td>fetch()</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Async Programming</td>
          <td>.then()</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-3">
          <td class="category">Async Programming</td>
          <td>.catch()</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-4">
          <td class="category">Async Programming</td>
          <td>Promises</td>
          <td>4</td>
        </tr>
        <tr class="difficulty-4">
          <td class="category">Async Programming</td>
          <td>async/await</td>
          <td>4</td>
        </tr>

        <!-- ADVANCED CONCEPTS -->
        <tr class="difficulty-4">
          <td class="category">Advanced Concepts</td>
          <td>ES Modules (import/export)</td>
          <td>4</td>
        </tr>
        <tr class="difficulty-4">
          <td class="category">Advanced Concepts</td>
          <td>Hoisting</td>
          <td>4</td>
        </tr>
        <tr class="difficulty-4">
          <td class="category">Advanced Concepts</td>
          <td>Shallow vs deep copy</td>
          <td>4</td>
        </tr>
        <tr class="difficulty-5">
          <td class="category">Advanced Concepts</td>
          <td>OOP</td>
          <td>5</td>
        </tr>
        <tr class="difficulty-5">
          <td class="category">Advanced Concepts</td>
          <td>Canvas basics</td>
          <td>5</td>
        </tr>

        <!-- ALGORITHMS -->
        <tr class="difficulty-3">
          <td class="category">Algorithms</td>
          <td>Simple algorithms</td>
          <td>3</td>
        </tr>
        <tr class="difficulty-4">
          <td class="category">Algorithms</td>
          <td>Algorithms and other conceptual things</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>

    <script>
      initTableEnhancements();

      function initTableEnhancements() {
        enhanceCategories();
        setupCategoryToggle();
      }

      function enhanceCategories() {
        const categoryCells = document.querySelectorAll(
          "#conceptsTable td.category"
        );
        const colorCache = {};

        categoryCells.forEach((cell) => {
          const label = cell.textContent.trim();
          if (!label) {
            return;
          }

          if (!colorCache[label]) {
            colorCache[label] = getCategoryPalette(label);
          }

          const palette = colorCache[label];
          cell.style.setProperty("--category-bg", palette.bg);
          cell.style.setProperty("--category-border", palette.border);
          cell.style.setProperty("--category-text", palette.text);
          cell.classList.add("category-badge");
        });
      }

      function setupCategoryToggle() {
        const tbody = document.querySelector("#conceptsTable tbody");
        if (!tbody || tbody.querySelector(".category-toggle-row")) {
          return;
        }

        const rows = Array.from(tbody.querySelectorAll("tr"));
        const groups = new Map();

        rows.forEach((row) => {
          const categoryCell = row.querySelector("td.category");
          if (!categoryCell) {
            return;
          }

          const label = categoryCell.textContent.trim();
          if (!label) {
            return;
          }

          if (!groups.has(label)) {
            groups.set(label, []);
          }

          groups.get(label).push(row);
        });

        groups.forEach((groupRows, label) => {
          if (!groupRows.length) {
            return;
          }

          const slug = createCategorySlug(label);
          const headerRow = document.createElement("tr");
          headerRow.className = "category-toggle-row";
          headerRow.dataset.categoryGroup = slug;

          const headerCell = document.createElement("td");
          headerCell.colSpan = 3;

          const button = document.createElement("button");
          button.type = "button";
          button.className = "category-toggle-button";
          button.setAttribute("aria-expanded", "true");

          const countLabel =
            groupRows.length === 1 ? "1 topic" : `${groupRows.length} topics`;
          button.innerHTML = `
            <span class="category-toggle-icon" aria-hidden="true">▼</span>
            <span class="category-toggle-label">${label}</span>
            <span class="category-toggle-count">${countLabel}</span>
          `;

          headerCell.appendChild(button);
          headerRow.appendChild(headerCell);

          const firstCategoryCell = groupRows[0].querySelector("td.category");
          if (firstCategoryCell) {
            ["--category-bg", "--category-border", "--category-text"].forEach(
              (token) => {
                const value = firstCategoryCell.style.getPropertyValue(token);
                if (value) {
                  headerRow.style.setProperty(token, value);
                  headerCell.style.setProperty(token, value);
                }
              }
            );
          }

          tbody.insertBefore(headerRow, groupRows[0]);

          groupRows.forEach((row) => {
            row.dataset.categoryGroup = slug;
          });

          button.addEventListener("click", () => {
            toggleCategory(headerRow, button);
          });
        });
      }

      function createCategorySlug(label) {
        return label
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      }

      function toggleCategory(headerRow, button) {
        const groupId = headerRow.dataset.categoryGroup;
        const rows = document.querySelectorAll(
          `tr[data-category-group="${groupId}"]:not(.category-toggle-row)`
        );

        const isExpanded = button.getAttribute("aria-expanded") === "true";
        const newExpandedState = !isExpanded;

        rows.forEach((row) => {
          row.hidden = !newExpandedState;
        });

        button.setAttribute("aria-expanded", String(newExpandedState));
        headerRow.classList.toggle("collapsed", !newExpandedState);

        const icon = button.querySelector(".category-toggle-icon");
        if (icon) {
          icon.textContent = "▼";
        }
      }

      function getCategoryPalette(label) {
        const hue = getHue(label);
        return {
          bg: `hsl(${hue}, 85%, 92%)`,
          border: `hsl(${hue}, 65%, 58%)`,
          text: `hsl(${hue}, 45%, 28%)`,
        };
      }

      function getHue(label) {
        let hash = 0;
        for (let i = 0; i < label.length; i += 1) {
          hash = label.charCodeAt(i) + ((hash << 5) - hash);
        }
        return Math.abs(hash) % 360;
      }

      function selectTable() {
        const table = document.getElementById("conceptsTable");
        const range = document.createRange();
        range.selectNodeContents(table);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        // Show a message
        alert(
          "Table selected! Now press Ctrl+C (or Cmd+C on Mac) to copy, then paste into Google Sheets."
        );
      }
    </script>
  </body>
</html>

  );
}
