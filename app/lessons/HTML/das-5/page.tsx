"use client";
import React from "react";
import "./index.css"; // Assuming this might contain global styles or is empty

export default function CodeBridgeLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 font-sans">
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
          {/* Video Tag */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              &lt;video&gt;&lt;/video&gt;
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Տեսանյութ</strong>
              <p className="text-gray-600 text-sm mt-1">
                Օգտագործվում է տեսանյութեր ներկայացնելու համար։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;video
                src=&quot;https://www.w3schools.com/html/mov_bbb.mp4&quot;&gt;&lt;/video&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  className="w-full max-h-48 object-cover rounded-md"
                ></video>
              </div>
            </div>
          </div>

          {/* Controls Attribute */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              controls
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Կառավարման վահանակ</strong>
              <p className="text-gray-600 text-sm mt-1">
                Ավելացնում է տեսանյութի կառավարման վահանակներ (նվագարկում,
                դադարեցում, ձայնի կարգավորում և այլն)։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;video
                src=&quot;https://www.w3schools.com/html/mov_bbb.mp4&quot;
                controls&gt;&lt;/video&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  controls
                  className="w-full max-h-48 object-cover rounded-md"
                ></video>
              </div>
            </div>
          </div>

          {/* Autoplay Attribute */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              autoplay
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Ավտոմատ նվագարկում</strong>
              <p className="text-gray-600 text-sm mt-1">
                Տեսանյութը ավտոմատ կերպով նվագարկում է էջի բեռնման ժամանակ։
                (Ուշադրություն՝ ավտոմատ նվագարկումը հաճախ արգելափակվում է
                բրաուզերների կողմից, եթե այն անձայն չէ)։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;video
                src=&quot;https://www.w3schools.com/html/mov_bbb.mp4&quot;
                autoplay muted&gt;&lt;/video&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  autoPlay
                  muted
                  className="w-full max-h-48 object-cover rounded-md"
                ></video>
              </div>
            </div>
          </div>

          {/* Muted Attribute */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              muted
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Անձայն</strong>
              <p className="text-gray-600 text-sm mt-1">
                Տեսանյութը նվագարկում է անձայն ռեժիմով։ Սա հաճախ օգտագործվում է
                `autoplay`-ի հետ՝ բրաուզերների սահմանափակումները շրջանցելու
                համար։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;video
                src=&quot;https://www.w3schools.com/html/mov_bbb.mp4&quot; muted
                controls&gt;&lt;/video&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  muted
                  controls
                  className="w-full max-h-48 object-cover rounded-md"
                ></video>
              </div>
            </div>
          </div>

          {/* Target Attribute */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              target
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Թիրախ (հատկանիշ)</strong>
              <p className="text-gray-600 text-sm mt-1">
                Սահմանում է, թե որտեղ պետք է բացվի հղված փաստաթուղթը, սովորաբար
                օգտագործվում է &lt;a&gt; թեգի հետ։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;a href=&quot;https://www.google.com&quot;
                target=&quot;_blank&quot;&gt;Բացել Google-ը նոր էջում&lt;/a&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Բացել Google-ը նոր էջում
                </a>
              </div>
            </div>
          </div>

          {/* Value Attribute */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              value
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Արժեք (հատկանիշ)</strong>
              <p className="text-gray-600 text-sm mt-1">
                Սահմանում է մուտքագրման դաշտի կամ ընտրության տարրի սկզբնական
                արժեքը։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;input type=&quot;text&quot; value=&quot;Նախնական
                արժեք&quot;&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <input
                  type="text"
                  value="Նախնական արժեք"
                  className="p-2 border border-gray-300 rounded-md w-full"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Placeholder Attribute */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              placeholder
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">
                Լրացման օրինակ (հատկանիշ)
              </strong>
              <p className="text-gray-600 text-sm mt-1">
                Ցուցադրում է կարճ հուշում մուտքագրման դաշտում, երբ այն դատարկ է։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;input type=&quot;text&quot; placeholder=&quot;Մուտքագրեք ձեր
                անունը&quot;&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <input
                  type="text"
                  placeholder="Մուտքագրեք ձեր անունը"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>
          </div>

          {/* Disabled Attribute */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              disabled
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Անհասանելի (հատկանիշ)</strong>
              <p className="text-gray-600 text-sm mt-1">
                Անհասանելի է դարձնում մուտքագրման դաշտը կամ կոճակը, այն չի կարող
                փոփոխվել կամ սեղմվել օգտատիրոջ կողմից։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;input type=&quot;text&quot; disabled value=&quot;Այս դաշտը
                անհասանելի է&quot;&gt; &lt;button disabled&gt;Անհասանելի
                կոճակ&lt;/button&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500 flex flex-col space-y-2">
                <input
                  type="text"
                  disabled
                  value="Այս դաշտը անհասանելի է"
                  className="p-2 border border-gray-300 rounded-md w-full bg-gray-100 text-gray-500 cursor-not-allowed"
                />
                <button
                  disabled
                  className="p-2 bg-gray-300 text-gray-600 rounded-md cursor-not-allowed"
                >
                  Անհասանելի կոճակ
                </button>
              </div>
            </div>
          </div>

          {/* Width Attribute */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              width
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Լայնություն (հատկանիշ)</strong>
              <p className="text-gray-600 text-sm mt-1">
                Սահմանում է պատկերի, տեսանյութի կամ այլ տարրի լայնությունը
                պիքսելներով։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;img
                src=&quot;https://placehold.co/100x50/aabbcc/ffffff?text=Image&quot;
                width=&quot;100&quot; alt=&quot;Փոքր պատկեր&quot;&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <img
                  src="https://placehold.co/100x50/aabbcc/ffffff?text=Image"
                  width="100"
                  alt="Փոքր պատկեր"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Height Attribute */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              height
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Բարձրություն (հատկանիշ)</strong>
              <p className="text-gray-600 text-sm mt-1">
                Սահմանում է պատկերի, տեսանյութի կամ այլ տարրի բարձրությունը
                պիքսելներով։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;img
                src=&quot;https://placehold.co/50x100/ccbbaa/ffffff?text=Image&quot;
                height=&quot;100&quot; alt=&quot;Բարձր պատկեր&quot;&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <img
                  src="https://placehold.co/50x100/ccbbaa/ffffff?text=Image"
                  height="100"
                  alt="Բարձր պատկեր"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Select Tag */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              &lt;select&gt;&lt;/select&gt;
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Ընտրացանկ</strong>
              <p className="text-gray-600 text-sm mt-1">
                Ստեղծում է ընտրվող տարբերակների ցանկ (dropdown list)։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;select&gt; &lt;option
                value=&quot;apple&quot;&gt;Խնձոր&lt;/option&gt; &lt;option
                value=&quot;banana&quot;&gt;Բանան&lt;/option&gt; &lt;/select&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <select className="p-2 border border-gray-300 rounded-md w-full">
                  <option value="apple">Խնձոր</option>
                  <option value="banana">Բանան</option>
                  <option value="orange">Նարինջ</option>
                </select>
              </div>
            </div>
          </div>

          {/* Option Tag */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-800 font-mono text-sm px-3 py-1 rounded mb-4 inline-block">
              &lt;option&gt;&lt;/option&gt;
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Ընտրանք</strong>
              <p className="text-gray-600 text-sm mt-1">
                Սահմանում է ընտրացանկի (&lt;select&gt;) առանձին տարբերակ։
              </p>
            </div>
            <div className="border-t pt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Օրինակ՝
              </div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
                &lt;select&gt; &lt;option
                value=&quot;red&quot;&gt;Կարմիր&lt;/option&gt; &lt;option
                value=&quot;blue&quot;&gt;Կապույտ&lt;/option&gt; &lt;/select&gt;
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                <select className="p-2 border border-gray-300 rounded-md w-full">
                  <option value="red">Կարմիր</option>
                  <option value="blue">Կապույտ</option>
                  <option value="green">Կանաչ</option>
                </select>
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
