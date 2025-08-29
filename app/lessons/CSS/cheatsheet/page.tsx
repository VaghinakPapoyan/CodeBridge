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
    <div
      style={{
        background: "white",
        borderRadius: 8,
        padding: "12px 16px",
        margin: "8px 0",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        borderLeft: "5px solid #ff9933",
      }}
    >
      <code style={{ fontWeight: "bold", color: "#ff9933" }}>{name}</code> —{" "}
      {children}
    </div>
  );
}
