"use client";
import React, { useState, useEffect } from "react";

// Main React component for the HTML Tables explanation page
const HomePage: React.FC = () => {
  // State to hold the input for the interactive table
  const [tableInput, setTableInput] = useState<string>(`Անուն,Ազգանուն,Տարիք
Աննա,Հովհաննիսյան,15
Դավիթ,Մանուկյան,17
Մարիամ,Պետրոսյան,16`);
  // State to hold the HTML string for the live preview table
  const [liveTableHtml, setLiveTableHtml] = useState<string>("");
  // State to hold the HTML code string for the live code preview
  const [liveCodeHtml, setLiveCodeHtml] = useState<string>("");
  // State to control the visibility of the generated code container
  const [showCode, setShowCode] = useState<boolean>(false);

  /**
   * Generates the HTML table and its corresponding code based on the tableInput state.
   * Updates liveTableHtml and liveCodeHtml states.
   */
  const generateTable = () => {
    const inputText = tableInput.trim();
    // Split the input text into rows, then each row into cells
    const rows = inputText
      .split("\n")
      .map((row) => row.split(",").map((cell) => cell.trim()));

    let currentTableHtml =
      '<table class="w-full border-collapse my-6 rounded-lg overflow-hidden shadow-sm">';
    let currentTableCode = "&lt;table&gt;\n";

    // Iterate over rows to build the table HTML and code
    rows.forEach((rowData, rowIndex) => {
      currentTableHtml += '<tr class="even:bg-gray-50 hover:bg-gray-100">';
      currentTableCode += "    &lt;tr&gt;\n";
      rowData.forEach((cellData) => {
        if (rowIndex === 0) {
          // The first row is treated as table headers (<th>)
          currentTableHtml += `<th class="border border-gray-300 p-3 text-left bg-[#3399ff] text-white font-bold">${cellData}</th>`;
          currentTableCode += `        &lt;th&gt;${cellData}&lt;/th&gt;\n`;
        } else {
          // Subsequent rows are table data cells (<td>)
          currentTableHtml += `<td class="border border-gray-300 p-3 text-left">${cellData}</td>`;
          currentTableCode += `        &lt;td&gt;${cellData}&lt;/td&gt;\n`;
        }
      });
      currentTableHtml += "</tr>";
      currentTableCode += "    &lt;/tr&gt;\n";
    });
    currentTableHtml += "</table>";
    currentTableCode += "&lt;/table&gt;";

    // Update the state variables
    setLiveTableHtml(currentTableHtml);
    setLiveCodeHtml(currentTableCode);
  };

  // useEffect hook to generate the table initially when the component mounts
  useEffect(() => {
    generateTable();
  }, []); // Empty dependency array means this runs once on mount

  /**
   * Handles the click event for the "Generate Table" button.
   * Calls the generateTable function to update the table preview.
   */
  const handleGenerateTableClick = () => {
    generateTable();
  };

  /**
   * Handles the click event for the "Show Code" button.
   * Toggles the visibility of the generated code container.
   */
  const handleShowCodeClick = () => {
    setShowCode((prevShowCode) => !prevShowCode);
  };

  return (
    <div className="font-inter bg-[#eee] text-[#333] leading-relaxed min-h-screen py-8">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        {/* Main Title */}
        <h1 className="text-4xl text-[#3399ff] font-bold text-center mb-8">
          <span className="text-[#3399ff]">ՀՏՄԼ Աղյուսակներ</span> Դեռահասների
          Համար
        </h1>
        <p className="mb-4">
          {" "}
          Աղյուսակները հիանալի միջոց են տվյալները կազմակերպված և հեշտ ընթեռնելի
          ձևով ներկայացնելու համար։
        </p>
        <p className="mb-4">
          Պատկերացրեք, որ ցանկանում եք ցույց տալ ձեր դասացուցակը, սպորտային թիմի
          միավորները կամ նույնիսկ ձեր սիրելի խաղերի ցուցակը։ Աղյուսակները դրա
          համար լավագույգ տարբերակն են։
        </p>

        {/* Table Tag Section */}
        <section className="mb-8">
          <h2 className="text-3xl text-[#3399ff] font-bold border-b-2 border-[#ff9933] pb-2 mb-4 mt-8">
            1. &lt;table&gt; - Աղյուսակ Ստեղծող Թեգ
          </h2>
          <p className="mb-4">
            Ամեն ինչ սկսվում է{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded text-[#3399ff] font-mono">
              &lt;table&gt;
            </code>{" "}
            թեգից։ Սա այն հիմնական տարան է, որի մեջ դուք կտեղադրեք ձեր ամբողջ
            աղյուսակը։ Այն ասում է բրաուզերին, որ այստեղ աղյուսակ է սկսվում։
          </p>
          <h3 className="text-xl text-[#ff9933] font-bold mt-6 mb-3">
            Օրինակ:
          </h3>
          <pre className="bg-[#2d2d2d] text-[#f8f8f2] p-4 rounded-lg overflow-x-auto mb-6 font-mono">
            &lt;table&gt; &lt;!-- Այստեղ կգնա ձեր աղյուսակի պարունակությունը
            --&gt; &lt;/table&gt;
          </pre>
        </section>

        {/* TR Tag Section */}
        <section className="mb-8">
          <h2 className="text-3xl text-[#3399ff] font-bold border-b-2 border-[#ff9933] pb-2 mb-4 mt-8">
            2. &lt;tr&gt; - Աղյուսակի Տող
          </h2>
          <p className="mb-4">
            Աղյուսակը բաղկացած է տողերից։ Ամեն մի տող ստեղծվում է{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded text-[#3399ff] font-mono">
              &lt;tr&gt;
            </code>{" "}
            (table row) թեգի միջոցով։ Պատկերացրեք, որ սա աղյուսակի մեկ շարքն է։
          </p>
          <h3 className="text-xl text-[#ff9933] font-bold mt-6 mb-3">
            Օրինակ:
          </h3>
          <pre className="bg-[#2d2d2d] text-[#f8f8f2] p-4 rounded-lg overflow-x-auto mb-6 font-mono">
            &lt;table&gt; &lt;tr&gt; &lt;!-- Այստեղ կգնան տողի բջիջները --&gt;
            &lt;/tr&gt; &lt;tr&gt; &lt;!-- Երկրորդ տող --&gt; &lt;/tr&gt;
            &lt;/table&gt;
          </pre>
        </section>

        {/* TD Tag Section */}
        <section className="mb-8">
          <h2 className="text-3xl text-[#3399ff] font-bold border-b-2 border-[#ff9933] pb-2 mb-4 mt-8">
            3. &lt;td&gt; - Աղյուսակի Բջիջ (Տվյալներ)
          </h2>
          <p className="mb-4">
            Ամեն տողի ներսում դուք տեղադրում եք բջիջներ։ Այդ բջիջները
            պարունակում են ձեր տվյալները։ Սրանք ստեղծվում են{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded text-[#3399ff] font-mono">
              &lt;td&gt;
            </code>{" "}
            (table data) թեգի միջոցով։ Սա աղյուսակի ամենափոքր միավորն է, որտեղ
            դուք գրում եք ձեր տեղեկատվությունը։
          </p>
          <h3 className="text-xl text-[#ff9933] font-bold mt-6 mb-3">
            Օրինակ:
          </h3>
          <pre className="bg-[#2d2d2d] text-[#f8f8f2] p-4 rounded-lg overflow-x-auto mb-6 font-mono">
            &lt;table&gt; &lt;tr&gt; &lt;td&gt;Անուն&lt;/td&gt;
            &lt;td&gt;Ազգանուն&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;
            &lt;td&gt;Արմեն&lt;/td&gt; &lt;td&gt;Գրիգորյան&lt;/td&gt;
            &lt;/tr&gt; &lt;/table&gt;
          </pre>
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-xl text-[#ff9933] font-bold mb-4">
              Օրինակ՝ Ինչպես է այն երևում:
            </h3>
            <table className="w-full border-collapse my-6 rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr>
                  <td className="border border-gray-300 p-3 text-left">
                    Անուն
                  </td>
                  <td className="border border-gray-300 p-3 text-left">
                    Ազգանուն
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 text-left">
                    Արմեն
                  </td>
                  <td className="border border-gray-300 p-3 text-left">
                    Գրիգորյան
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* TH Tag Section */}
        <section className="mb-8">
          <h2 className="text-3xl text-[#3399ff] font-bold border-b-2 border-[#ff9933] pb-2 mb-4 mt-8">
            4. &lt;th&gt; - Աղյուսակի Վերնագրի Բջիջ
          </h2>
          <p className="mb-4">
            Երբեմն աղյուսակի առաջին տողը պարունակում է վերնագրեր, որոնք
            նկարագրում են սյունակների պարունակությունը (օրինակ՝ "Անուն",
            "Տարիք")։ Այդ վերնագրերի համար օգտագործվում է{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded text-[#3399ff] font-mono">
              &lt;th&gt;
            </code>{" "}
            (table header) թեգը։ Այն ավտոմատ կերպով տեքստը դարձնում է{" "}
            <span className="font-bold">թավ</span> և կենտրոնացնում է այն,
            որպեսզի ավելի հեշտ լինի տարբերելը։
          </p>
          <h3 className="text-xl text-[#ff9933] font-bold mt-6 mb-3">
            Օրինակ:
          </h3>
          <pre className="bg-[#2d2d2d] text-[#f8f8f2] p-4 rounded-lg overflow-x-auto mb-6 font-mono">
            &lt;table&gt; &lt;tr&gt; &lt;th&gt;Անուն&lt;/th&gt;
            &lt;th&gt;Ազգանուն&lt;/th&gt; &lt;th&gt;Տարիք&lt;/th&gt; &lt;/tr&gt;
            &lt;tr&gt; &lt;td&gt;Արմեն&lt;/td&gt; &lt;td&gt;Գրիգորյան&lt;/td&gt;
            &lt;td&gt;16&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt;
          </pre>
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-xl text-[#ff9933] font-bold mb-4">
              Օրինակ՝ Ինչպես է այն երևում:
            </h3>
            <table className="w-full border-collapse my-6 rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-3 text-left bg-[#3399ff] text-white font-bold">
                    Անուն
                  </th>
                  <th className="border border-gray-300 p-3 text-left bg-[#3399ff] text-white font-bold">
                    Ազգանուն
                  </th>
                  <th className="border border-gray-300 p-3 text-left bg-[#3399ff] text-white font-bold">
                    Տարիք
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 text-left">
                    Արմեն
                  </td>
                  <td className="border border-gray-300 p-3 text-left">
                    Գրիգորյան
                  </td>
                  <td className="border border-gray-300 p-3 text-left">16</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Colspan Section */}
        <section className="mb-8">
          <h2 className="text-3xl text-[#3399ff] font-bold border-b-2 border-[#ff9933] pb-2 mb-4 mt-8">
            5. colspan - Սյունակների Միացում
          </h2>
          <p className="mb-4">
            Երբեմն ցանկանում եք, որ մեկ բջիջը զբաղեցնի մի քանի սյունակի տեղ։ Դրա
            համար օգտագործվում է{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded text-[#3399ff] font-mono">
              colspan
            </code>{" "}
            հատկանիշը։ Դուք պարզապես տալիս եք նրան այն սյունակների քանակը, որոնք
            ցանկանում եք միացնել։
          </p>
          <h3 className="text-xl text-[#ff9933] font-bold mt-6 mb-3">
            Օրինակ:
          </h3>
          <pre className="bg-[#2d2d2d] text-[#f8f8f2] p-4 rounded-lg overflow-x-auto mb-6 font-mono">
            &lt;table&gt; &lt;tr&gt; &lt;th{" "}
            <span className="text-[#ff9933]">colspan="2"</span>&gt;Անուն և
            Ազգանուն&lt;/th&gt; &lt;th&gt;Տարիք&lt;/th&gt; &lt;/tr&gt;
            &lt;tr&gt; &lt;td&gt;Արմեն&lt;/td&gt; &lt;td&gt;Գրիգորյան&lt;/td&gt;
            &lt;td&gt;16&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt;
          </pre>
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-xl text-[#ff9933] font-bold mb-4">
              Օրինակ՝ Ինչպես է այն երևում:
            </h3>
            <table className="w-full border-collapse my-6 rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr>
                  <th
                    className="border border-gray-300 p-3 text-left bg-[#3399ff] text-white font-bold"
                    colSpan={2}
                  >
                    Անուն և Ազգանուն
                  </th>
                  <th className="border border-gray-300 p-3 text-left bg-[#3399ff] text-white font-bold">
                    Տարիք
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 text-left">
                    Արմեն
                  </td>
                  <td className="border border-gray-300 p-3 text-left">
                    Գրիգորյան
                  </td>
                  <td className="border border-gray-300 p-3 text-left">16</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Rowspan Section */}
        <section className="mb-8">
          <h2 className="text-3xl text-[#3399ff] font-bold border-b-2 border-[#ff9933] pb-2 mb-4 mt-8">
            6. rowspan - Տողերի Միացում
          </h2>
          <p className="mb-4">
            Նմանապես, եթե ցանկանում եք, որ մեկ բջիջը զբաղեցնի մի քանի տողի տեղ,
            օգտագործեք{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded text-[#3399ff] font-mono">
              rowspan
            </code>{" "}
            հատկանիշը։ Սա շատ օգտակար է, երբ ունեք տվյալներ, որոնք կրկնվում են
            մի քանի տողերում։
          </p>
          <h3 className="text-xl text-[#ff9933] font-bold mt-6 mb-3">
            Օրինակ:
          </h3>
          <pre className="bg-[#2d2d2d] text-[#f8f8f2] p-4 rounded-lg overflow-x-auto mb-6 font-mono">
            &lt;table&gt; &lt;tr&gt; &lt;th&gt;Անուն&lt;/th&gt;
            &lt;th&gt;Ազգանուն&lt;/th&gt; &lt;th&gt;Դասարան&lt;/th&gt;
            &lt;/tr&gt; &lt;tr&gt; &lt;td{" "}
            <span className="text-[#ff9933]">rowspan="2"</span>
            &gt;Արմեն&lt;/td&gt; &lt;td&gt;Գրիգորյան&lt;/td&gt;
            &lt;td&gt;10-րդ&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;!-- Արմենի
            անունը կրկնվում է, այնպես որ այստեղ պարզապես կթողնենք դատարկ --&gt;
            &lt;td&gt;Սարգսյան&lt;/td&gt; &lt;td&gt;10-րդ&lt;/td&gt; &lt;/tr&gt;
            &lt;/table&gt;
          </pre>
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-xl text-[#ff9933] font-bold mb-4">
              Օրինակ՝ Ինչպես է այն երևում:
            </h3>
            <table className="w-full border-collapse my-6 rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-3 text-left bg-[#3399ff] text-white font-bold">
                    Անուն
                  </th>
                  <th className="border border-gray-300 p-3 text-left bg-[#3399ff] text-white font-bold">
                    Ազգանուն
                  </th>
                  <th className="border border-gray-300 p-3 text-left bg-[#3399ff] text-white font-bold">
                    Դասարան
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="border border-gray-300 p-3 text-left"
                    rowSpan={2}
                  >
                    Արմեն
                  </td>
                  <td className="border border-gray-300 p-3 text-left">
                    Գրիգորյան
                  </td>
                  <td className="border border-gray-300 p-3 text-left">
                    10-րդ
                  </td>
                </tr>
                <tr>
                  {/* The rowspan makes this cell unnecessary in the HTML as the previous cell spans it */}
                  <td className="border border-gray-300 p-3 text-left">
                    Սարգսյան
                  </td>
                  <td className="border border-gray-300 p-3 text-left">
                    10-րդ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Interactive Example Section */}
        <section className="mb-8">
          <h2 className="text-3xl text-[#3399ff] font-bold border-b-2 border-[#ff9933] pb-2 mb-4 mt-8">
            7. Փորձիր Ինքդ - Պարզ Աղյուսակ Ստեղծող
          </h2>
          <p className="mb-4">
            Եկեք փորձենք ստեղծել մեր սեփական պարզ աղյուսակը։ Դուք կարող եք
            փոփոխել ներքևի տեքստային դաշտը և տեսնել, թե ինչպես է այն ազդում
            աղյուսակի վրա։
          </p>
          <div className="mb-4">
            <label
              htmlFor="tableInput"
              className="block text-[#3399ff] text-lg font-bold mb-2"
            >
              Մուտքագրեք աղյուսակի տվյալները (տողերը բաժանեք նոր տողով,
              բջիջները՝ ստորակետով):
            </label>
            <textarea
              id="tableInput"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3399ff]"
              rows={6}
              value={tableInput}
              onChange={(e) => setTableInput(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={handleGenerateTableClick}
            className="bg-[#3399ff] text-white px-4 py-2 rounded-md font-bold transition-colors duration-300 hover:bg-[#2a7fd4] mr-2"
          >
            Ստեղծել Աղյուսակ
          </button>
          <button
            onClick={handleShowCodeClick}
            className="bg-[#ff9933] text-white px-4 py-2 rounded-md font-bold transition-colors duration-300 hover:bg-[#d47e2a]"
          >
            {showCode ? "Թաքցնել Կոդը" : "Ցույց Տալ Կոդը"}
          </button>

          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-xl text-[#ff9933] font-bold mb-4">
              Ձեր Ստեղծած Աղյուսակը:
            </h3>
            {/* Dangerously set inner HTML as the table is generated as a string */}
            <div dangerouslySetInnerHTML={{ __html: liveTableHtml }}></div>
          </div>

          {/* Generated Code Container */}
          <div className={`mt-8 ${showCode ? "block" : "hidden"}`}>
            <h3 className="text-xl text-[#ff9933] font-bold mb-4">
              Ձեր Ստեղծած Աղյուսակի Կոդը:
            </h3>
            {/* Use dangerouslySetInnerHTML to render the pre-escaped HTML code string */}
            <pre
              className="bg-[#2d2d2d] text-[#f8f8f2] p-4 rounded-lg overflow-x-auto mb-6 font-mono"
              dangerouslySetInnerHTML={{ __html: liveCodeHtml }}
            ></pre>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl text-[#3399ff] font-bold border-b-2 border-[#ff9933] pb-2 mb-4">
            Եզրակացություն
          </h2>
          <p className="mb-4">
            Դուք հիմա գիտեք, թե ինչպես օգտագործել ՀՏՄԼ աղյուսակները։ Սրանք շատ
            օգտակար գործիքներ են վեբ կայքերում տվյալները կազմակերպելու համար։
            Շարունակեք փորձարկել և սովորել։
          </p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
