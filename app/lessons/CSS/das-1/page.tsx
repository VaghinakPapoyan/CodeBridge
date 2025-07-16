"use client";
// pages/css-guide.js (or any other .js, .jsx, .ts, .tsx file in your 'pages' directory)
import Head from "next/head"; // Import Head for managing document head

export default function CssGuide() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CSS Ուղեցույց Դեռահասների Համար</title>
        {/* Tailwind CSS is typically set up via postcss.config.js and tailwind.config.js
            in a Next.js project, not via CDN in the Head component.
            However, to "not change anything else", we'll keep it here, but
            it's highly recommended to configure Tailwind properly for Next.js. */}
        <script src="https://cdn.tailwindcss.com"></script>
        <style jsx global>{`
          /* Global styles, typically in a dedicated global.css file */
          body {
            font-family: "Inter", sans-serif;
            background-color: #eee;
          }
        `}</style>
        <style jsx>{`
          /* Component-specific styles */
          .example-box {
            border: 2px solid #3399ff;
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 0.5rem;
            background-color: white;
          }
          .code-block {
            background-color: #f8f8f8;
            padding: 0.75rem;
            border-radius: 0.375rem;
            overflow-x: auto;
            font-family: monospace;
            font-size: 0.9rem;
            color: #333;
          }
        `}</style>
      </Head>

      <div className="bg-gray-100 text-gray-800 p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header Section */}
          <header className="bg-[#3399ff] text-white p-6 rounded-t-lg text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              Բարի գալուստ CSS-ի Աշխարհ!
            </h1>
            <p className="text-lg sm:text-xl">
              Ինչպես դարձնել քո կայքը գեղեցիկ և ոճային
            </p>
          </header>

          {/* Main Content */}
          <main className="p-6 sm:p-8 md:p-10 space-y-8">
            {/* Introduction */}
            <section className="bg-[#ff9933] text-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Ի՞նչ է CSS-ը և ինչո՞ւ է այն մեզ պետք:
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Պատկերացրու, որ HTML-ը քո կայքի կմախքն է՝ այն որոշում է, թե ինչ
                տարրեր կան էջում (տեքստ, նկարներ, կոճակներ): Իսկ CSS-ը
                (Cascading Style Sheets) դա հագուստն է, դիմահարդարումը և
                զարդարանքները: Այն օգնում է մեզ տալ մեր էջերի տեսքը՝ գույները,
                տառաչափերը, տարրերի դիրքը և շատ ավելին: Առանց CSS-ի քո կայքը
                կլինի պարզ և ձանձրալի, իսկ CSS-ի շնորհիվ այն կարող է դառնալ շատ
                գրավիչ և օգտագործողի համար հաճելի: Եկեք սկսենք սովորել, թե
                ինչպես օգտագործել այս կախարդական գործիքը:
              </p>
            </section>

            {/* How to create CSS file */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3399ff] mb-4">
                1. Ինչպես ստեղծել CSS ֆայլ
              </h2>
              <p className="text-base sm:text-lg mb-4">
                CSS ֆայլ ստեղծելը շատ պարզ է: Դա պարզապես տեքստային ֆայլ է, որի
                անունը վերջանում է <code>.css</code>-ով (օրինակ՝{" "}
                <code>style.css</code> կամ <code>main.css</code>): Այս ֆայլի մեջ
                ենք մենք գրելու մեր բոլոր ոճային կանոնները:
              </p>
              <div className="example-box">
                <p className="font-semibold mb-2">Ինչպես անել:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Բացիր քո տեքստային խմբագրիչը (VS Code):</li>
                  <li>Ստեղծիր նոր ֆայլ:</li>
                  <li>
                    Պահպանիր այն քո HTML ֆայլի կողքին և անվանիր, օրինակ,{" "}
                    <code>style.css</code>:
                  </li>
                </ol>
                <p className="mt-4 text-sm text-gray-600">
                  <em>Օրինակ:</em> Դու կունենաս <code>index.html</code> և{" "}
                  <code>style.css</code> նույն պանակում (folder):
                </p>
              </div>
            </section>

            {/* How to link with HTML */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3399ff] mb-4">
                2. Ինչպես կապել CSS ֆայլը HTML-ի հետ
              </h2>
              <p className="text-base sm:text-lg mb-4">
                Որպեսզի քո HTML էջը իմանա, թե որտեղից վերցնի ոճերը, պետք է այն
                կապել CSS ֆայլի հետ: Դա անում ենք HTML ֆայլի{" "}
                <code>&lt;head&gt;</code> բաժնում՝ օգտագործելով{" "}
                <code>&lt;link&gt;</code> թեգը:
              </p>
              <div className="example-box">
                <p className="font-semibold mb-2">HTML կոդի օրինակ:</p>
                <pre className="code-block">
                  <code>
                    {`<!DOCTYPE html>
<html lang="hy">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Իմ Առաջին Կայքը</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Բարև Աշխարհ!</h1>
</body>
</html>`}
                  </code>
                </pre>
                <p className="mt-4 text-sm text-gray-600">
                  <code>rel="stylesheet"</code> նշանակում է, որ սա ոճաթերթ է,
                  իսկ <code>href="style.css"</code> ցույց է տալիս CSS ֆայլի
                  տեղը:
                </p>
              </div>
            </section>

            {/* How to use class attribute with CSS */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3399ff] mb-4">
                3. Ինչպես օգտագործել <code>class</code> ատրիբուտը CSS-ի հետ
              </h2>
              <p className="text-base sm:text-lg mb-4">
                <code>class</code> ատրիբուտը թույլ է տալիս քեզ տալ հատուկ
                անուններ HTML տարրերին, որպեսզի դրանց տաս հատուկ ոճեր: Սա շատ
                օգտակար է, երբ ուզում ես, որ միևնույն տեսակի տարրերից (օրինակ՝
                մի քանի p թեգշ) միայն որոշներն ունենան հատուկ տեսք:
              </p>
              <div className="example-box">
                <p className="font-semibold mb-2">HTML և CSS կոդի օրինակ:</p>
                <p className="font-semibold mt-4 mb-2">HTML կոդ:</p>
                <pre className="code-block">
                  <code>
                    {`<p>Սա սովորական պարբերություն է:</p>
<p class="հատուկ-տեքստ">Սա հատուկ, կապույտ պարբերություն է:</p>
<p>Սա ևս մեկ սովորական պարբերություն է:</p>`}
                  </code>
                </pre>
                <p className="font-semibold mt-4 mb-2">
                  CSS կոդ (<code>style.css</code> ֆայլում):
                </p>
                <pre className="code-block">
                  <code>
                    {`.հատուկ-տեքստ {
    color: #3399ff; /* Կապույտ գույն */
    font-weight: bold; /* Թավ տառեր */
}`}
                  </code>
                </pre>
                <p className="mt-4 text-sm text-gray-600">
                  Կետը (<code>.</code>) CSS-ում ցույց է տալիս, որ դու ոճավորում
                  ես <code>class</code>-ը:
                </p>
              </div>
            </section>

            {/* CSS Properties */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#3399ff] mb-4">
                4. Հիմնական CSS հատկությունները
              </h2>

              {/* color */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#ff9933] mb-2">
                  <code>color</code> (Տեքստի գույն)
                </h3>
                <p className="text-base sm:text-lg mb-2">
                  Այս հատկությունը թույլ է տալիս փոխել տեքստի գույնը: Գույնը
                  կարող ես նշել անունով (օրինակ՝ <code>blue</code>), տասնվեցական
                  կոդով (օրինակ՝ <code>#3399ff</code>) կամ RGB արժեքներով:
                </p>
                <div className="example-box">
                  <p className="font-semibold mb-2">CSS կոդի օրինակ:</p>
                  <pre className="code-block">
                    <code>
                      {`p {
    color: #3399ff; /* Կապույտ տեքստ */
}

h2 {
    color: orange; /* Նարնջագույն տեքստ */
}`}
                    </code>
                  </pre>
                  <p className="mt-4 text-sm text-gray-600 text-[#3399ff]">
                    Այս պարբերությունը կլինի կապույտ, քանի որ մենք օգտագործեցինք{" "}
                    <code>color: #3399ff;</code>:
                  </p>
                </div>
              </div>

              {/* background-color */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#ff9933] mb-2">
                  <code>background-color</code> (Ֆոնի գույն)
                </h3>
                <p className="text-base sm:text-lg mb-2">
                  Այս հատկությունը թույլ է տալիս փոխել տարրի ֆոնի գույնը: Շատ
                  օգտակար է բաժինները կամ բլոկները առանձնացնելու համար:
                </p>
                <div className="example-box">
                  <p className="font-semibold mb-2">CSS կոդի օրինակ:</p>
                  <pre className="code-block">
                    <code>
                      {`.իմ-բլոկ {
    background-color: #ff9933; /* Նարնջագույն ֆոն */
    padding: 20px; /* Ներքին բացվածք */
    color: white; /* Սպիտակ տեքստ */
}`}
                    </code>
                  </pre>
                  <div className="bg-[#ff9933] p-4 rounded-md text-white mt-4">
                    <p>Սա բլոկ է նարնջագույն ֆոնով:</p>
                  </div>
                </div>
              </div>

              {/* font-size */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#ff9933] mb-2">
                  <code>font-size</code> (Տառաչափ)
                </h3>
                <p className="text-base sm:text-lg mb-2">
                  Այս հատկությունը թույլ է տալիս փոխել տեքստի չափը: Կարող ես
                  օգտագործել պիքսելներ (<code>px</code>), <code>em</code> կամ{" "}
                  <code>rem</code> միավորներ:
                </p>
                <div className="example-box">
                  <p className="font-semibold mb-2">CSS կոդի օրինակ:</p>
                  <pre className="code-block">
                    <code>
                      {`h1 {
    font-size: 32px; /* Մեծ վերնագիր */
}

p {
    font-size: 18px; /* Սովորական պարբերություն */
}

.փոքր-տեքստ {
    font-size: 14px; /* Փոքր տեքստ */
}`}
                    </code>
                  </pre>
                  <h1 className="text-3xl font-bold mt-4">
                    Սա մեծ վերնագիր է:
                  </h1>
                  <p className="text-lg">Սա սովորական չափի տեքստ է:</p>
                  <p className="text-sm">Սա փոքր չափի տեքստ է:</p>
                </div>
              </div>

              {/* text-align */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#ff9933] mb-2">
                  <code>text-align</code> (Տեքստի դիրք)
                </h3>
                <p className="text-base sm:text-lg mb-2">
                  Այս հատկությունը թույլ է տալիս դասավորել տեքստը տարրի ներսում:
                  Հիմնական արժեքներն են՝ <code>left</code> (ձախ),{" "}
                  <code>right</code> (աջ), <code>center</code> (կենտրոն) և{" "}
                  <code>justify</code> (լայնությամբ):
                </p>
                <div className="example-box">
                  <p className="font-semibold mb-2">CSS կոդի օրինակ:</p>
                  <pre className="code-block">
                    <code>
                      {`.կենտրոնացված-տեքստ {
    text-align: center; /* Տեքստը կենտրոնում */
}

.աջ-տեքստ {
    text-align: right; /* Տեքստը աջում */
}`}
                    </code>
                  </pre>
                  <p className="text-center mt-4">Սա կենտրոնացված տեքստ է:</p>
                  <p className="text-right">Սա աջ կողմում տեղադրված տեքստ է:</p>
                </div>
              </div>

              {/* width */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#ff9933] mb-2">
                  <code>width</code> (Լայնություն)
                </h3>
                <p className="text-base sm:text-lg mb-2">
                  Այս հատկությունը թույլ է տալիս սահմանել տարրի լայնությունը:
                  Կարող ես օգտագործել պիքսելներ (<code>px</code>), տոկոսներ (
                  <code>%</code>) կամ այլ միավորներ: Տոկոսները շատ օգտակար են,
                  որպեսզի քո կայքը լավ տեսք ունենա տարբեր չափսի էկրանների վրա
                  (responsive design):
                </p>
                <div className="example-box">
                  <p className="font-semibold mb-2">CSS կոդի օրինակ:</p>
                  <pre className="code-block">
                    <code>
                      {`.փոքր-բլոկ {
    width: 200px; /* Ֆիքսված լայնություն */
    background-color: #3399ff;
    padding: 10px;
    color: white;
    margin: 10px 0;
}

.լայն-բլոկ {
    width: 75%; /* Լայնությունը էկրանի 75%-ը */
    background-color: #ff9933;
    padding: 10px;
    color: white;
    margin: 10px 0;
}`}
                    </code>
                  </pre>
                  <div className="w-[200px] bg-[#3399ff] p-2 text-white rounded-md mt-4">
                    <p>Սա 200px լայնությամբ բլոկ է:</p>
                  </div>
                  <div className="w-[75%] bg-[#ff9933] p-2 text-white rounded-md">
                    <p>Սա էկրանի 75% լայնությամբ բլոկ է:</p>
                  </div>
                </div>
              </div>

              {/* height */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#ff9933] mb-2">
                  <code>height</code> (Բարձրություն)
                </h3>
                <p className="text-base sm:text-lg mb-2">
                  Այս հատկությունը թույլ է տալիս սահմանել տարրի բարձրությունը:
                  Կարող ես օգտագործել պիքսելներ (<code>px</code>) կամ{" "}
                  <code>auto</code> (թույլ տալ բովանդակությանը որոշել
                  բարձրությունը):
                </p>
                <div className="example-box">
                  <p className="font-semibold mb-2">CSS կոդի օրինակ:</p>
                  <pre className="code-block">
                    <code>
                      {`.բարձր-բլոկ {
    height: 150px; /* Ֆիքսված բարձրություն */
    background-color: #3399ff;
    padding: 10px;
    color: white;
    margin: 10px 0;
}

.ավտո-բարձրություն {
    height: auto; /* Բովանդակությունը որոշում է բարձրությունը */
    background-color: #ff9933;
    padding: 10px;
    color: white;
    margin: 10px 0;
}`}
                    </code>
                  </pre>
                  <div className="h-[150px] bg-[#3399ff] p-2 text-white rounded-md flex items-center justify-center mt-4">
                    <p>Սա 150px բարձրությամբ բլոկ է:</p>
                  </div>
                  <div className="h-auto bg-[#ff9933] p-2 text-white rounded-md">
                    <p>
                      Սա բլոկ է ավտոմատ բարձրությամբ: Այն կմեծանա՝ կախված
                      բովանդակությունից:
                    </p>
                    <p>
                      Ավելի շատ տեքստ՝ ցույց տալու համար, թե ինչպես է աշխատում{" "}
                      <code>height: auto;</code>:
                    </p>
                    <p>Սա երրորդ տողն է:</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="bg-[#3399ff] text-white p-6 rounded-lg shadow-md text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Շնորհավորում ենք!
              </h2>
            </section>
          </main>

          {/* Footer */}
          <footer className="bg-[#ff9933] text-white p-4 rounded-b-lg text-center text-sm sm:text-base">
            <p>&copy; 2025 CSS Ուղեցույց. Բոլոր իրավունքները պաշտպանված են:</p>
          </footer>
        </div>
      </div>
    </>
  );
}
