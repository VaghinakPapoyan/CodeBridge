"use client";

import React from "react";

// This component explains HTML form elements in Armenian for teenagers.
// It uses Tailwind CSS for styling and is designed to be responsive.

const FormElementsPage = () => {
  return (
    // The main container for the page content.
    // Tailwind's p-4 and sm:p-8 provide responsive padding.
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
      {/* Custom styles are embedded here. In a real Next.js app,
                these would typically be in a global CSS file or
                configured via Tailwind's theme extension. */}
      <style jsx global>{`
        :root {
          --color-primary: #3399ff; /* Blue */
          --color-secondary: #ff9933; /* Orange */
          --color-background: #eee; /* Light Gray */
        }

        body {
          font-family: "Inter", sans-serif; /* Using Inter font */
          background-color: var(--color-background);
          color: #333; /* Dark text for readability */
        }

        .text-primary {
          color: var(--color-primary);
        }

        .bg-primary {
          background-color: var(--color-primary);
        }

        .border-primary {
          border-color: var(--color-primary);
        }

        .text-secondary {
          color: var(--color-secondary);
        }

        .bg-secondary {
          background-color: var(--color-secondary);
        }

        .border-secondary {
          border-color: var(--color-secondary);
        }

        /* Custom scrollbar for better aesthetics */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: var(--color-primary);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #2a80d9;
        }
      `}</style>

      {/* Tailwind CSS CDN script. In a Next.js project,
                Tailwind is usually set up via `postcss.config.js` and `tailwind.config.js`
                and imported in `globals.css`. For a self-contained example, CDN is used. */}
      <script src="https://cdn.tailwindcss.com"></script>

      {/* Main content wrapper with max-width, auto margins for centering,
                padding, rounded corners, and shadow. */}
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-lg">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Վեբ Forms. Ինչպե՞ս ենք հավաքում տվյալներ կայքերում
          </h1>
          <p className="text-lg text-gray-700">
            Երբևէ մտածե՞լ եք, թե ինչպես են կայքերը հարցնում ձեր անունը, էլ.
            փոստը կամ թույլ տալիս գրել մեկնաբանություններ: Դա կատարվում է
            formերի (forms) միջոցով: Եկեք միասին բացահայտենք դրանց գաղտնիքները:
          </p>
        </header>

        {/* Form Element Section */}
        <section className="mb-8 p-6 bg-blue-50 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-secondary mb-4">
            1. &lt;form&gt; - Ամբողջ Form-ի Տուփը
          </h2>
          <p className="text-gray-800 mb-4">
            Պատկերացրեք, որ ցանկանում եք հավաքել մի քանի իրեր մեկ տուփի մեջ:
            HTML-ում &lt;form&gt; թեգը հենց այդ տուփն է: Այն պարունակում է բոլոր
            մյուս տարրերը (ինչպես դաշտերը, կոճակները), որոնք կազմում են ձեր
            formը: Այն ասում է բրաուզերին, որ այս բոլոր տարրերը կապված են և
            նախատեսված են տվյիներ ուղարկելու համար:
          </p>
          <p className="text-gray-800 mb-4">
            <span className="font-bold text-primary">Կարևոր ատրիբուտներ՝</span>
            <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
              <li>
                <span className="font-semibold">action:</span> Սա այն հասցեն է
                (URL), ուր կուղարկվեն ձեր մուտքագրած տվյալները, երբ սեղմեք
                "Ուղարկել" կոճակը: Սովորաբար սա սերվերի վրա գտնվող ֆայլ է, որը
                կմշակի տվյալները:
              </li>
              <li>
                <span className="font-semibold">method:</span> Սա ցույց է տալիս,
                թե ինչպես են տվյալները ուղարկվելու: Ամենատարածվածներն են{" "}
                <code className="bg-gray-200 p-1 rounded">GET</code> (տվյալները
                երևում են URL-ում, լավ է փոքր, ոչ գաղտնի տվյալների համար) և{" "}
                <code className="bg-gray-200 p-1 rounded">POST</code> (տվյալները
                թաքնված են, լավ է գաղտնաբառերի կամ մեծ տվյալների համար):
              </li>
            </ul>
          </p>
          <div className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
            <pre>
              <code className="language-html">
                &lt;form action=&quot;/submit-data&quot;
                method=&quot;POST&quot;&gt; &lt;!-- Այստեղ կլինեն Form-ի մյուս
                տարրերը --&gt; &lt;/form&gt;
              </code>
            </pre>
          </div>
        </section>

        {/* Input Element Section */}
        <section className="mb-8 p-6 bg-orange-50 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
            2. &lt;input&gt; - Տարբեր Տեսակի Դաշտեր
          </h2>
          <p className="text-gray-800 mb-4">
            &lt;input&gt; թեգը ամենատարածվածն է և ամենաբազմազանը: Այն
            օգտագործվում է օգտատերերից տարբեր տեսակի տվյալներ ստանալու համար՝
            տեքստ, թվեր, գաղտնաբառեր, ամսաթվեր և այլն: Դրա տեսակը որոշվում է{" "}
            <code className="bg-gray-200 p-1 rounded">type</code> ատրիբուտով:
          </p>
          <p className="text-gray-800 mb-4">
            <span className="font-bold text-secondary">
              Հաճախ օգտագործվող{" "}
              <code className="bg-gray-200 p-1 rounded">type</code> ատրիբուտներ՝
            </span>
            <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
              <li>
                <span className="font-semibold">text:</span> Սովորական տեքստային
                դաշտ (անուն, ազգանուն և այլն):
              </li>
              <li>
                <span className="font-semibold">password:</span> Գաղտնաբառի դաշտ
                (գրված տեքստը աստղանիշերով է երևում):
              </li>
              <li>
                <span className="font-semibold">email:</span> Էլ. փոստի հասցեի
                դաշտ (բրաուզերը կարող է ստուգել, թե արդյոք ճիշտ է formաչափը):
              </li>
              <li>
                <span className="font-semibold">number:</span> Միայն թվեր
                մուտքագրելու համար:
              </li>
              <li>
                <span className="font-semibold">checkbox:</span> Ընտրության
                վանդակ (կարող եք ընտրել մեկ կամ մի քանի տարբերակ):
              </li>
              <li>
                <span className="font-semibold">radio:</span> Ռադիո կոճակ (կարող
                եք ընտրել միայն մեկ տարբերակ մի քանիսից):
              </li>
              <li>
                <span className="font-semibold">submit:</span> formը ուղարկելու
                կոճակ:
              </li>
            </ul>
          </p>
          <p className="text-gray-800 mb-4">
            <span className="font-bold text-secondary">
              Այլ կարևոր ատրիբուտներ՝
            </span>
            <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
              <li>
                <span className="font-semibold">name:</span> Սա դաշտի անունն է,
                որի միջոցով սերվերը կճանաչի տվյալը (օրինակ՝ "username",
                "email").
              </li>
              <li>
                <span className="font-semibold">id:</span> Յուրահատուկ
                նույնացուցիչ տվյալ դաշտի համար: Օգտագործվում է{" "}
                <code className="bg-gray-200 p-1 rounded">&lt;label&gt;</code>-ի
                հետ կապելու համար:
              </li>
              <li>
                <span className="font-semibold">placeholder:</span> Դաշտի
                ներսում հայտնվող օգնող տեքստ, որը անհետանում է, երբ սկսում եք
                մուտքագրել:
              </li>
              <li>
                <span className="font-semibold">required:</span> Եթե այս
                ատրիբուտը կա, ապա դաշտը պարտադիր է լրացնել:
              </li>
            </ul>
          </p>
          <div className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
            <pre>
              <code className="language-html">
                &lt;input type=&quot;text&quot; id=&quot;username&quot;
                name=&quot;username&quot; placeholder=&quot;Ձեր անունը&quot;
                required className=&quot;p-2 border rounded-md w-full&quot;/&gt;
                &lt;input type=&quot;password&quot; id=&quot;password&quot;
                name=&quot;password&quot; placeholder=&quot;Գաղտնաբառ&quot;
                className=&quot;p-2 border rounded-md w-full mt-2&quot;/&gt;
                &lt;input type=&quot;email&quot; id=&quot;user_email&quot;
                name=&quot;user_email&quot; placeholder=&quot;Էլ. փոստ&quot;
                className=&quot;p-2 border rounded-md w-full mt-2&quot;/&gt;
                &lt;input type=&quot;checkbox&quot; id=&quot;agree&quot;
                name=&quot;agree&quot; className=&quot;mr-2 mt-2&quot;/&gt;
                &lt;label htmlFor=&quot;agree&quot;&gt;Համաձայն եմ
                պայմաններին&lt;/label&gt;
              </code>
            </pre>
          </div>
        </section>

        {/* Label Element Section */}
        <section className="mb-8 p-6 bg-blue-50 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-secondary mb-4">
            3. &lt;label&gt; - Դաշտի Բացատրություն
          </h2>
          <p className="text-gray-800 mb-4">
            &lt;label&gt; թեգը նման է ցուցանակի, որը բացատրում է, թե ինչի համար
            է նախատեսված տվյալ դաշտը: Օրինակ, եթե ունեք &lt;input&gt; դաշտ,
            որտեղ պետք է մուտքագրել անունը, &lt;label&gt;-ը կլինի "Անուն:" բառը:
          </p>
          <p className="text-gray-800 mb-4">
            <span className="font-bold text-primary">Ինչո՞ւ է այն կարևոր՝</span>
            <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
              <li>
                <span className="font-semibold">Օգտագործելիություն:</span> Երբ
                սեղմում եք label-ի վրա, համապատասխան input դաշտը ակտիվանում է,
                ինչը հեշտացնում է օգտագործումը, հատկապես բջջային սարքերում:
              </li>
              <li>
                <span className="font-semibold">Մատչելիություն:</span> Էկրանի
                ընթերցող ծրագրերը (որոնք օգտագործվում են տեսողության խնդիրներ
                ունեցող մարդկանց կողմից) կարող են կարդալ label-ի տեքստը և
                հասկանալ, թե որ դաշտին է այն վերաբերում:
              </li>
            </ul>
          </p>
          <p className="text-gray-800 mb-4">
            <span className="font-bold text-primary">
              Ինչպե՞ս կապել label-ը input-ի հետ՝
            </span>
            <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
              <li>
                <code className="bg-gray-200 p-1 rounded">&lt;label&gt;</code>{" "}
                թեգի <code className="bg-gray-200 p-1 rounded">htmlFor</code>{" "}
                ատրիբուտի արժեքը պետք է նույնը լինի, ինչ որ համապատասխան{" "}
                <code className="bg-gray-200 p-1 rounded">&lt;input&gt;</code>-ի{" "}
                <code className="bg-gray-200 p-1 rounded">id</code> ատրիբուտի
                արժեքը:
              </li>
            </ul>
          </p>
          <div className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
            <pre>
              <code className="language-html">
                &lt;label htmlFor=&quot;first_name&quot; className=&quot;block
                text-gray-700 text-sm font-bold
                mb-2&quot;&gt;Անուն:&lt;/label&gt; &lt;input
                type=&quot;text&quot; id=&quot;first_name&quot;
                name=&quot;first_name&quot; placeholder=&quot;Մուտքագրեք ձեր
                անունը&quot; className=&quot;p-2 border rounded-md
                w-full&quot;/&gt;
              </code>
            </pre>
          </div>
        </section>

        {/* Textarea Element Section */}
        <section className="mb-8 p-6 bg-orange-50 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
            4. &lt;textarea&gt; - Մեծ Տեքստային Դաշտ
          </h2>
          <p className="text-gray-800 mb-4">
            Երբ ցանկանում եք, որ օգտատերը գրի ավելի երկար տեքստ, օրինակ՝
            մեկնաբանություն, հաղորդագրություն կամ նկարագրություն, &lt;input
            type="text"&gt;-ը բավարար չէ: Այդ դեպքում օգտագործվում է
            &lt;textarea&gt; թեգը: Այն ապահովում է բազմատող տեքստային դաշտ:
          </p>
          <p className="text-gray-800 mb-4">
            <span className="font-bold text-secondary">
              Կարևոր ատրիբուտներ՝
            </span>
            <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
              <li>
                <span className="font-semibold">name:</span> Ինչպես
                &lt;input&gt;-ի դեպքում, սա դաշտի անունն է սերվերի համար:
              </li>
              <li>
                <span className="font-semibold">id:</span> Յուրահատուկ
                նույնացուցիչ, որը կապվում է &lt;label&gt;-ի հետ:
              </li>
              <li>
                <span className="font-semibold">rows:</span> Որոշում է դաշտի
                տեսանելի բարձրությունը տողերով:
              </li>
              <li>
                <span className="font-semibold">cols:</span> Որոշում է դաշտի
                տեսանելի լայնությունը սյուներով (նիշերով):
              </li>
              <li>
                <span className="font-semibold">placeholder:</span> Օգնող տեքստ
                դաշտի ներսում:
              </li>
            </ul>
          </p>
          <div className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
            <pre>
              <code className="language-html">
                &lt;label htmlFor=&quot;message&quot; className=&quot;block
                text-gray-700 text-sm font-bold mb-2&quot;&gt;Ձեր
                հաղորդագրությունը:&lt;/label&gt; &lt;textarea
                id=&quot;message&quot; name=&quot;user_message&quot;
                rows=&quot;5&quot; cols=&quot;50&quot; placeholder=&quot;Գրեք
                ձեր մտքերը այստեղ...&quot; className=&quot;p-2 border rounded-md
                w-full&quot;&gt;&lt;/textarea&gt;
              </code>
            </pre>
          </div>
        </section>

        {/* Button Element Section */}
        <section className="mb-8 p-6 bg-blue-50 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold text-secondary mb-4">
            5. &lt;button&gt; - Կոճակներ
          </h2>
          <p className="text-gray-800 mb-4">
            Կոճակները թույլ են տալիս օգտատերին գործողություններ կատարել, օրինակ՝
            ուղարկել formը, մաքրել դաշտերը կամ կատարել որևէ այլ գործողություն
            JavaScript-ի միջոգով:
          </p>
          <p className="text-gray-800 mb-4">
            <span className="font-bold text-primary">Կարևոր ատրիբուտ՝</span>
            <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
              <li>
                <span className="font-semibold">type:</span>
                <ul className="list-disc list-inside ml-6 mt-1 text-gray-700">
                  <li>
                    <span className="font-semibold">submit:</span> Սա formը
                    ուղարկելու կոճակն է: Երբ սեղմում եք այս կոճակը, Form-ի
                    տվյալները կուղարկվեն{" "}
                    <code className="bg-gray-200 p-1 rounded">
                      &lt;form&gt;
                    </code>{" "}
                    թեգի <code className="bg-gray-200 p-1 rounded">action</code>{" "}
                    ատրիբուտում նշված հասցեին:
                  </li>
                  <li>
                    <span className="font-semibold">reset:</span> Մաքրում է
                    Form-ի բոլոր դաշտերը:
                  </li>
                  <li>
                    <span className="font-semibold">button:</span> Սովորական
                    կոճակ, որը ոչինչ չի անում ինքնին, բայց կարող է օգտագործվել
                    JavaScript-ի հետ՝ հատուկ գործողություններ կատարելու համար:
                  </li>
                </ul>
              </li>
            </ul>
          </p>
          <div className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
            <pre>
              <code className="language-html">
                &lt;button type=&quot;submit&quot; className=&quot;bg-primary
                text-white p-3 rounded-md hover:bg-blue-600 transition
                duration-300 mr-2&quot;&gt;Ուղարկել&lt;/button&gt; &lt;button
                type=&quot;reset&quot; className=&quot;bg-secondary text-white
                p-3 rounded-md hover:bg-orange-600 transition
                duration-300&quot;&gt;Մաքրել&lt;/button&gt;
              </code>
            </pre>
          </div>
        </section>

        {/* Conclusion */}
        <footer className="text-center mt-10 p-6 bg-white rounded-lg shadow-inner">
          <p className="text-lg text-gray-700">
            Ահա այսքանը: Հիմա դուք գիտեք, թե ինչպես են ստեղծվում վեբ formերի
            հիմնական տարրերը: Փորձեք դրանք ինքներդ, և կտեսնեք, թե որքան հեշտ է
            դա: Շարունակեք սովորել և ստեղծել:
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Ստեղծված է սիրով՝ ձեզ համար:
          </p>
        </footer>
      </div>
    </div>
  );
};

export default FormElementsPage;
