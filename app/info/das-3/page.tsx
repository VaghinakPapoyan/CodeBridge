"use client";
import "./index.css";

export default function CodeBridgeLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            HTML թեգերի ուղեցույց
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            HTML-ի հիմնական թեգերի ամբողջական ուսումնասիրություն հայերենով
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* P Tag */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              &lt;p&gt;&lt;/p&gt;
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Պարբերություն</strong>
              <p className="text-gray-600 text-sm mt-1">
                Օգտագործվում է տեքստային պարբերություններ ստեղծելու համար։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;p&gt;Սա մեկ պարբերություն է։&lt;/p&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <p>Սա մեկ պարբերություն է։</p>
              </div>
            </div>
          </div>

          {/* U Tag */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              &lt;u&gt;&lt;/u&gt;
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Ընդգծված տեքստ</strong>
              <p className="text-gray-600 text-sm mt-1">
                Տեքստը ցուցադրում է ընդգծված տեսքով։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;u&gt;Ընդգծված տեքստ&lt;/u&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <u>Ընդգծված տեքստ</u>
              </div>
            </div>
          </div>

          {/* S Tag */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              &lt;s&gt;&lt;/s&gt;
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Գծանշված տեքստ</strong>
              <p className="text-gray-600 text-sm mt-1">
                Տեքստի վրայով գիծ է անցկացնում (strikethrough)։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;s&gt;Գծանշված տեքստ&lt;/s&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <s>Գծանշված տեքստ</s>
              </div>
            </div>
          </div>

          {/* EM Tag */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              &lt;em&gt;&lt;/em&gt;
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Շեշտադրված տեքստ</strong>
              <p className="text-gray-600 text-sm mt-1">
                Տեքստը ցուցադրում է շեշտադրված (italic) տեսքով։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;em&gt;Շեշտադրված տեքստ&lt;/em&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <em>Շեշտադրված տեքստ</em>
              </div>
            </div>
          </div>

          {/* Strong Tag */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              &lt;strong&gt;&lt;/strong&gt;
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Հաստատուն տեքստ</strong>
              <p className="text-gray-600 text-sm mt-1">
                Տեքստը ցուցադրում է հաստ (bold) տեսքով։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;strong&gt;Հաստատուն տեքստ&lt;/strong&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <strong>Հաստատուն տեքստ</strong>
              </div>
            </div>
          </div>

          {/* Heading Tags */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              &lt;h1&gt; - &lt;h6&gt;
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Վերնագրի թեգեր</strong>
              <p className="text-gray-600 text-sm mt-1">
                Օգտագործվում են տարբեր մակարդակի վերնագրեր ստեղծելու համար։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;h1&gt;Գլխավոր վերնագիր&lt;/h1&gt;
                <br />
                &lt;h2&gt;Երկրորդ մակարդակ&lt;/h2&gt;
                <br />
                &lt;h3&gt;Երրորդ մակարդակ&lt;/h3&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <h1 className="text-lg font-bold my-1">Գլխավոր վերնագիր</h1>
                <h2 className="text-base font-semibold my-1">
                  Երկրորդ մակարդակ
                </h2>
                <h3 className="text-sm font-medium my-1">Երրորդ մակարդակ</h3>
              </div>
            </div>
          </div>

          {/* IMG Tag */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              &lt;img&gt;
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Նկարի թեգ</strong>
              <p className="text-gray-600 text-sm mt-1">
                Օգտագործվում է նկարներ ցուցադրելու համար։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;img src="նկար.jpg" alt="Նկարի նկարագրություն" /&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <div className="w-20 h-12 bg-gray-200 border border-gray-300 rounded flex items-center justify-center text-xs text-gray-600">
                  Նկար
                </div>
              </div>
            </div>
          </div>

          {/* A Tag */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              &lt;a&gt;&lt;/a&gt;
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Հղումի թեգ</strong>
              <p className="text-gray-600 text-sm mt-1">
                Օգտագործվում է հղումներ ստեղծելու համար։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;a href="https://example.com"&gt;Հղում&lt;/a&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <a href="#" className="text-blue-600 hover:underline">
                  Հղում
                </a>
              </div>
            </div>
          </div>

          {/* BR Tag */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              &lt;br /&gt;
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Տողադարձ</strong>
              <p className="text-gray-600 text-sm mt-1">
                Օգտագործվում է նոր տող սկսելու համար։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                Առաջին տող&lt;br /&gt;Երկրորդ տող
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                Առաջին տող
                <br />
                Երկրորդ տող
              </div>
            </div>
          </div>

          {/* UL Tag */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              &lt;ul&gt;&lt;li&gt;&lt;/li&gt;&lt;/ul&gt;
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Չհամարակալված ցուցակ</strong>
              <p className="text-gray-600 text-sm mt-1">
                Կետերով ցուցակ ստեղծելու համար։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;ul&gt;
                <br />
                &nbsp;&nbsp;&lt;li&gt;Առաջին կետ&lt;/li&gt;
                <br />
                &nbsp;&nbsp;&lt;li&gt;Երկրորդ կետ&lt;/li&gt;
                <br />
                &lt;/ul&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <ul className="list-disc list-inside">
                  <li>Առաջին կետ</li>
                  <li>Երկրորդ կետ</li>
                </ul>
              </div>
            </div>
          </div>

          {/* OL Tag */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              &lt;ol&gt;&lt;li&gt;&lt;/li&gt;&lt;/ol&gt;
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Համարակալված ցուցակ</strong>
              <p className="text-gray-600 text-sm mt-1">
                Համարներով ցուցակ ստեղծելու համար։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;ol&gt;
                <br />
                &nbsp;&nbsp;&lt;li&gt;Առաջին կետ&lt;/li&gt;
                <br />
                &nbsp;&nbsp;&lt;li&gt;Երկրորդ կետ&lt;/li&gt;
                <br />
                &lt;/ol&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <ol className="list-decimal list-inside">
                  <li>Առաջին կետ</li>
                  <li>Երկրորդ կետ</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Input Tag */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              &lt;input&gt;
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Մուտքագրման դաշտեր</strong>
              <p className="text-gray-600 text-sm mt-1">
                Տարբեր տեսակի մուտքագրման դաշտեր ստեղծելու համար։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Տարբեր տեսակներ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;input type="text" /&gt;
                <br />
                &lt;input type="date" /&gt;
                <br />
                &lt;input type="color" /&gt;
                <br />
                &lt;input type="checkbox" /&gt;
                <br />
                &lt;input type="radio" /&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500 space-y-2">
                <div className="flex items-center gap-2">
                  <label className="text-xs">Տեքստ:</label>
                  <input
                    type="text"
                    placeholder="Մուտքագրեք տեքստ"
                    className="border rounded px-2 py-1 text-xs"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-xs">Ամսաթիվ:</label>
                  <input
                    type="date"
                    className="border rounded px-2 py-1 text-xs"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-xs">Գույն:</label>
                  <input type="color" className="border rounded w-8 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-xs">Ընտրություն:</label>
                  <input type="checkbox" />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-xs">Ռադիո:</label>
                  <input type="radio" name="demo" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-700 font-semibold">
            HTML թեգերի ուղեցույց - Սովորեք HTML-ը հայերենով
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Այս ուղեցույցը ներկայացնում է HTML-ի հիմնական թեգերը և դրանց
            կիրառությունը։
          </p>
        </footer>
      </div>
    </div>
  );
}
