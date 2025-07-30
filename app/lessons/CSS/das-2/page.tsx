"use client";

import React, { useState } from "react";

export default function CSSGuide() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const properties = [
    {
      id: "color",
      title: "color",
      description: "Փոխում է տարրի տեքստի գույնը",
      example: "color: #3399ff;",
      visual: "text-blue-500",
      explanation:
        'Մտածեք սա որպես գրելու համար գրիչի գույն ընտրելը: Կարող եք օգտագործել գունային անուններ, ինչպիսիք են "red", տասնվեցական կոդեր, ինչպիսիք են "#3399ff", կամ RGB արժեքներ:',
    },
    {
      id: "background-color",
      title: "background-color",
      description: "Սահմանում է տարրի հետևի ֆոնի գույնը",
      example: "background-color: #ff9933;",
      visual: "bg-orange-400",
      explanation:
        "Ինչպես պատը ներկել ձեր տեքստի հետևում: Սա տարրի ամբողջ տարածքը լցնում է գույնով։",
    },
    {
      id: "font-size",
      title: "font-size",
      description: "Վերահսկում է, թե որքան մեծ կամ փոքր է երևում ձեր տեքստը",
      example: "font-size: 24px;",
      visual: "text-2xl",
      explanation:
        'Ինչպես տառատեսակի չափը փոխելը Word-ում: Կարող եք օգտագործել պիքսելներ (px), տոկոսներ (%), կամ հիմնաբառեր, ինչպիսիք են "large":',
    },
    {
      id: "width",
      title: "width",
      description: "Սահմանում է, թե որքան լայն պետք է լինի տարրը",
      example: "width: 300px;",
      visual: "w-64",
      explanation:
        "Պատկերացրեք, որ տուփ եք նկարում. սա վերահսկում է, թե որքան լայն է այդ տուփը: Կարող եք օգտագործել պիքսելներ, տոկոսներ կամ այլ միավորներ:",
    },
    {
      id: "height",
      title: "height",
      description: "Սահմանում է, թե որքան բարձր պետք է լինի տարրը",
      example: "height: 200px;",
      visual: "h-32",
      explanation:
        "Սա վերահսկում է, թե որքան բարձր է ձեր տուփը: Հաճախ օգտագործվում է լայնության հետ՝ որոշակի չափսերի կոնտեյներներ ստեղծելու համար:",
    },
    {
      id: "margin",
      title: "margin",
      description:
        "Ստեղծում է տարածություն տարրից ԴՈՒՐՍ (հեռացնում է այլ տարրերին)",
      example: "margin: 20px;",
      visual: "m-4",
      explanation:
        "Մտածեք լուսանցքը որպես անձնական տարածություն. այն հեռացնում է այլ տարրերին ձերից: Ինչպես ձեր տարրի շուրջ բուֆերային գոտի ունենալը:",
    },
    {
      id: "padding",
      title: "padding",
      description:
        "Ստեղծում է տարածություն տարրի ՆԵՐՍՈՒՄ (եզրագծի և բովանդակության միջև)",
      example: "padding: 15px;",
      visual: "p-4",
      explanation:
        "Լիցքը նման է բարձի տուփի ներսում: Այն ստեղծում է շնչառության տեղ ձեր տարրի եզրի և դրա բովանդակության միջև։",
    },
    {
      id: "border",
      title: "border",
      description: "Ավելացնում է տեսանելի գիծ տարրի շուրջ",
      example: "border: 2px solid #3399ff;",
      visual: "border-2 border-blue-500",
      explanation:
        "Ինչպես ձեր տարրի շուրջ ուրվագիծ գծելը: Կարող եք վերահսկել հաստությունը, ոճը (ամուր, կետագծված, կետավոր) և գույնը։",
    },
    {
      id: "hover",
      title: ":hover (կեղծ-դաս)",
      description:
        "Կիրառում է ոճեր, երբ ինչ-որ մեկը մկնիկը տեղափոխում է տարրի վրա",
      example: "button:hover { background-color: #ff9933; }",
      visual: "hover:bg-orange-400",
      explanation:
        "Սա ստեղծում է ինտերակտիվ էֆեկտներ: Երբ ինչ-որ մեկը մկնիկը տեղափոխում է ձեր տարրի վրա, այն կարող է փոխել տեսքը։",
    },
    {
      id: "font-family",
      title: "font-family",
      description: "Փոխում է, թե ինչ տառատեսակ է օգտագործում ձեր տեքստը",
      example: "font-family: Arial, sans-serif;",
      visual: "font-sans",
      explanation:
        'Ինչպես տարբեր ձեռագիր ոճեր ընտրելը: Կարող եք օգտագործել հատուկ տառատեսակներ, ինչպիսիք են "Arial" կամ ընդհանուր ընտանիքներ, ինչպիսիք են "serif":',
    },
    {
      id: "text-align",
      title: "text-align",
      description:
        "Վերահսկում է, թե որտեղ է տեղակայված տեքստը իր տարայի ներսում",
      example: "text-align: center;",
      visual: "text-center",
      explanation:
        "Ինչպես Word փաստաթղթերի հավասարեցումը: Կարող եք տեքստը հավասարեցնել ձախ, աջ, կենտրոն կամ արդարացնել (հավասարաչափ տարածել):",
    },
    {
      id: "border-radius",
      title: "border-radius",
      description: "Տարրի անկյունները դարձնում է կլորացված՝ սուրի փոխարեն",
      example: "border-radius: 10px;",
      visual: "rounded-lg",
      explanation:
        "Սա հարթեցնում է սուր անկյունները՝ տարրերն ավելի ժամանակակից և բարեկամական դարձնելով: Հիանալի է կոճակների և քարտերի համար:",
    },
    {
      id: "display",
      title: "display",
      description:
        "Վերահսկում է, թե ինչպես է տարրը դրսևորվում դասավորության մեջ",
      example: "display: flex;",
      visual: "",
      explanation:
        "Սա նման է ընտրելու, թե ինչպես են տարրերը շարվում կամ տեղադրվում: Յուրաքանչյուր արժեք ստեղծում է տարբեր դասավորության վարքագիծ։",
      subProperties: [
        {
          name: "block",
          desc: "Զբաղեցնում է ամբողջ լայնությունը, շարվում է ուղղահայաց (ինչպես պարբերությունները)",
        },
        {
          name: "inline",
          desc: "Հոսում է տեքստի հետ, զբաղեցնում է միայն անհրաժեշտ լայնությունը (ինչպես հղումները)",
        },
        {
          name: "inline-block",
          desc: "Միացնում է ներգծային և բլոկային – հոսում է, բայց կարող է ունենալ լայնություն/բարձրություն",
        },
        {
          name: "flex",
          desc: "Ստեղծում է ճկուն դասավորություններ – հիանալի է տարրերը շարքերում/սյուներում դասավորելու համար",
        },
        { name: "none", desc: "Ամբողջությամբ թաքցնում է տարրը" },
      ],
    },
    {
      id: "letter-spacing",
      title: "letter-spacing",
      description: "Վերահսկում է առանձին տառերի միջև ընկած տարածությունը",
      example: "letter-spacing: 2px;",
      visual: "tracking-wide",
      explanation:
        "Ինչպես գրամեքենայի վրա տարածությունը կարգավորելը: Դրական արժեքները տառերը հեռացնում են միմյանցից, բացասական արժեքները դրանք սեղմում են միմյանց:",
    },
    {
      id: "line-height",
      title: "line-height",
      description: "Վերահսկում է տեքստի տողերի միջև ընկած տարածությունը",
      example: "line-height: 1.5;",
      visual: "leading-relaxed",
      explanation:
        "Մտածեք սա որպես փաստաթղթում տողերի միջակայքը կարգավորելը: Ավելի բարձր արժեքները ավելի շատ տարածություն են ստեղծում տողերի միջև՝ ավելի հեշտ ընթերցանության համար:",
    },
    {
      id: "justify-content",
      title: "justify-content",
      description:
        "Հավասարեցնում է ճկուն տարրերը հիմնական առանցքի երկայնքով (սովորաբար հորիզոնական)",
      example: "justify-content: center;",
      visual: "justify-center",
      explanation:
        "Աշխատում է միայն display: flex-ի հետ: Վերահսկում է, թե ինչպես են տարրերը հորիզոնական տարածվում՝ ինչպես կենտրոնը, space-between-ը, flex-start-ը, flex-end-ը:",
    },
    {
      id: "align-items",
      title: "align-items",
      description:
        "Հավասարեցնում է ճկուն տարրերը խաչաձիգ առանցքի երկայնքով (սովորաբար ուղղահայաց)",
      example: "align-items: center;",
      visual: "items-center",
      explanation:
        "Նաև անհրաժեշտ է display: flex: Վերահսկում է տարրերի ուղղահայաց հավասարեցումը՝ կենտրոն, flex-start, flex-end, stretch:",
    },
    {
      id: "transition",
      title: "transition",
      description:
        "Ստեղծում է հարթ անիմացիաներ, երբ հատկությունները փոխվում են",
      example: "transition: all 0.3s ease;",
      visual: "transition-all duration-300",
      explanation:
        "Փոփոխությունները տեղի են ունենում հարթ՝ ժամանակի ընթացքում, ոչ թե անմիջապես: Հիանալի է hover էֆեկտների և ինտերակտիվ տարրերի համար:",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#eee" }}>
      {/* Header */}
      <header
        className="text-white py-8 px-6"
        style={{ backgroundColor: "#3399ff" }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🎨 CSS Հատկությունների Ուղեցույց
          </h1>
          <p className="text-xl opacity-90">
            Տիրապետեք վեբ դիզայնի հիմնական բլոկներին: Իդեալական է սկսնակների
            համար:
          </p>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "#3399ff" }}
            >
              Բարի գալուստ CSS! 🚀
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              CSS-ը (Cascading Style Sheets) նման է վեբի դիմահարդարին՝ այն
              կայքերը դարձնում է զարմանալի տեսք ունեցող: Մտածեք HTML-ը որպես վեբ
              էջի կմախք, իսկ CSS-ը որպես այն ամենը, ինչը այն գեղեցիկ է դարձնում՝
              գույներ, տառատեսակներ, բացատներ, անիմացիաներ և դասավորություն:
              Ստորև ներկայացված յուրաքանչյուր հատկություն գործիք է ձեր ոճավորման
              գործիքակազմում:
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleSection(property.id)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "#3399ff" }}
                    >
                      {property.title}
                    </h3>
                    <span
                      className="text-2xl transition-transform duration-300"
                      style={{
                        transform:
                          activeSection === property.id
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        color: "#ff9933",
                      }}
                    >
                      ↓
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{property.description}</p>

                  {/* Example Code */}
                  <div
                    className="rounded-md p-3 mb-4"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    <code
                      className="text-sm font-mono"
                      style={{ color: "#ff9933" }}
                    >
                      {property.example}
                    </code>
                  </div>

                  {/* Visual Demo */}
                  {property.id === "color" && (
                    <div className="p-3 rounded-md border">
                      <span style={{ color: "#3399ff" }}>
                        Այս տեքստը կապույտ է:
                      </span>
                    </div>
                  )}

                  {property.id === "background-color" && (
                    <div
                      className="p-3 rounded-md"
                      style={{ backgroundColor: "#ff9933", color: "white" }}
                    >
                      Ֆոնը նարնջագույն է:
                    </div>
                  )}

                  {property.id === "font-size" && (
                    <div className="p-3 rounded-md border">
                      <span style={{ fontSize: "24px" }}>Մեծ տեքստ:</span>
                    </div>
                  )}

                  {property.id === "border" && (
                    <div
                      className="p-3 rounded-md"
                      style={{ border: "2px solid #3399ff" }}
                    >
                      Ես եզրագիծ ունեմ:
                    </div>
                  )}

                  {property.id === "border-radius" && (
                    <div
                      className="p-3 text-white text-center"
                      style={{
                        backgroundColor: "#3399ff",
                        borderRadius: "10px",
                      }}
                    >
                      Կլորացված անկյուններ:
                    </div>
                  )}

                  {property.id === "hover" && (
                    <div
                      className="p-3 text-white text-center rounded-md transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "#3399ff" }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#ff9933")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "#3399ff")
                      }
                    >
                      Մկնիկը տեղափոխեք իմ վրա:
                    </div>
                  )}
                </div>

                {/* Expanded Content */}
                {activeSection === property.id && (
                  <div
                    className="px-6 pb-6 border-t"
                    style={{ borderColor: "#eee" }}
                  >
                    <div className="pt-4">
                      <h4
                        className="font-semibold mb-2"
                        style={{ color: "#ff9933" }}
                      >
                        💡 Պարզ բացատրություն:
                      </h4>
                      <p className="text-gray-700 mb-4">
                        {property.explanation}
                      </p>

                      {property.subProperties && (
                        <div>
                          <h4
                            className="font-semibold mb-2"
                            style={{ color: "#ff9933" }}
                          >
                            Տարբեր արժեքներ:
                          </h4>
                          <ul className="space-y-2">
                            {property.subProperties.map((sub, index) => (
                              <li key={index} className="text-sm">
                                <span
                                  className="font-mono font-semibold"
                                  style={{ color: "#3399ff" }}
                                >
                                  {sub.name}:
                                </span>
                                <span className="ml-2 text-gray-600">
                                  {sub.desc}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {(property.id === "justify-content" ||
                        property.id === "align-items") && (
                        <div
                          className="mt-4 p-3 rounded-md"
                          style={{ backgroundColor: "#f8f9fa" }}
                        >
                          <p className="text-sm text-gray-600">
                            <strong>Պրո խորհուրդ:</strong> Այս հատկությունները
                            աշխատում են միայն այն դեպքում, երբ ծնող տարրը ունի
                            <code
                              className="mx-1 px-1 rounded"
                              style={{ backgroundColor: "#eee" }}
                            >
                              display: flex
                            </code>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2
              className="text-3xl font-bold mb-6 text-center"
              style={{ color: "#3399ff" }}
            >
              🧪 Փորձեք ինքներդ:
            </h2>
            <p className="text-gray-700 text-center mb-8">
              CSS սովորելու լավագույն միջոցը փորձարկումն է: Փորձեք ստեղծել ձեր
              սեփական ոճերը և տեսեք, թե ինչ է տեղի ունենում:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "#ff9933" }}
                >
                  Օրինակ տուփ:
                </h3>
                <div
                  className="p-6 text-white text-center transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "#3399ff",
                    borderRadius: "15px",
                    border: "3px solid #ff9933",
                    fontSize: "18px",
                    letterSpacing: "1px",
                  }}
                >
                  Մկնիկը տեղափոխեք իմ վրա: Ես ոճավորված եմ CSS-ով: ✨
                </div>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "#ff9933" }}
                >
                  Օգտագործված CSS:
                </h3>
                <pre
                  className="text-sm p-4 rounded-md overflow-x-auto"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <code>{`background-color: #3399ff;
color: white;
padding: 24px;
border-radius: 15px;
border: 3px solid #ff9933;
font-size: 18px;
letter-spacing: 1px;
text-align: center;
transition: all 0.3s ease;

/* Հովերի վրա: */
transform: scale(1.05);`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-white py-8 px-6"
        style={{ backgroundColor: "#3399ff" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Շարունակեք սովորել: 🎯</h3>
          <p className="text-lg opacity-90 mb-4">
            CSS-ը ամբողջությամբ կիրառական և փորձարարական է: Մի վախեցեք փորձել
            տարբեր համակցություններ:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span
              className="px-3 py-1 rounded-full"
              style={{ backgroundColor: "#ff9933" }}
            >
              💡 Սկսեք պարզից
            </span>
            <span
              className="px-3 py-1 rounded-full"
              style={{ backgroundColor: "#ff9933" }}
            >
              🔄 Ամենօրյա պրակտիկա
            </span>
            <span
              className="px-3 py-1 rounded-full"
              style={{ backgroundColor: "#ff9933" }}
            >
              🎨 Եղեք ստեղծագործ
            </span>
            <span
              className="px-3 py-1 rounded-full"
              style={{ backgroundColor: "#ff9933" }}
            >
              🚀 Կառուցեք նախագծեր
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
