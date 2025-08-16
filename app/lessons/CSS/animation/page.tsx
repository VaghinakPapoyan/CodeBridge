"use client";

import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

function changeAnimation(type: string) {
  const box = document.getElementById("interactive-box");

  if (box) {
    box.classList.remove("bounce-demo", "spin-demo", "pulse-demo");

    if (type === "bounce") {
      box.classList.add("bounce-demo");
      box.textContent = "BOUNCE!";
    } else if (type === "spin") {
      box.classList.add("spin-demo");
      box.textContent = "SPIN!";
    } else if (type === "pulse") {
      box.classList.add("pulse-demo");
      box.textContent = "PULSE!";
    }
  }
}

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section, index) => {
      (section as HTMLElement).style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <>
      <Head>
        <title>CSS Animations Made Easy 🎨</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background-color: #eee;
          color: #333;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
        }

        .header {
          text-align: center;
          margin-bottom: 40px;
          padding: 40px 20px;
          background: linear-gradient(135deg, #3399ff, #ff9933);
          border-radius: 20px;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .header::before {
          content: "";
          position: absolute;
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: float 3s ease-in-out infinite;
          top: -20px;
          right: -20px;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        h1 {
          font-size: 3em;
          margin-bottom: 10px;
          animation: slideInFromTop 1s ease-out;
        }

        .subtitle {
          font-size: 1.2em;
          opacity: 0.9;
          animation: slideInFromTop 1s ease-out 0.3s both;
        }

        @keyframes slideInFromTop {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .section {
          background: white;
          margin: 30px 0;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          border-left: 5px solid #3399ff;
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        h2 {
          color: #3399ff;
          font-size: 2.2em;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .emoji {
          font-size: 1.2em;
        }

        .demo-box {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #3399ff, #ff9933);
          margin: 20px auto;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 1.2em;
        }

        .bounce-demo {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .spin-demo {
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .pulse-demo {
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        .code-block {
          background: #2d2d2d;
          color: #f8f8f2;
          padding: 20px;
          border-radius: 10px;
          margin: 20px 0;
          font-family: "Courier New", monospace;
          font-size: 14px;
          overflow-x: auto;
          border-left: 4px solid #ff9933;
        }

        .highlight {
          background: rgba(255, 153, 51, 0.2);
          padding: 2px 6px;
          border-radius: 4px;
          color: #ff9933;
          font-weight: bold;
        }

        .explanation {
          background: rgba(51, 153, 255, 0.1);
          border: 1px solid #3399ff;
          border-radius: 10px;
          padding: 20px;
          margin: 20px 0;
          font-size: 1.1em;
        }

        .tip {
          background: rgba(255, 153, 51, 0.1);
          border: 1px solid #ff9933;
          border-radius: 10px;
          padding: 20px;
          margin: 20px 0;
          border-left: 4px solid #ff9933;
        }

        .try-it {
          background: linear-gradient(135deg, #3399ff, #ff9933);
          color: white;
          padding: 15px 30px;
          border: none;
          border-radius: 25px;
          font-size: 1.1em;
          cursor: pointer;
          margin: 10px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .try-it:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(51, 153, 255, 0.3);
        }

        .interactive-demo {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 30px 0;
          flex-wrap: wrap;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }

        .step {
          background: rgba(51, 153, 255, 0.05);
          border: 2px solid #3399ff;
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          position: relative;
        }

        .step-number {
          background: #3399ff;
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin: 0 auto 15px;
        }

        .footer {
          text-align: center;
          padding: 40px 20px;
          background: linear-gradient(135deg, #ff9933, #3399ff);
          border-radius: 20px;
          color: white;
          margin-top: 40px;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.2em;
          }
          h2 {
            font-size: 1.8em;
          }
          .container {
            padding: 15px;
          }
          .section {
            padding: 20px;
          }
        }
      `}</style>

      <div className="container">
        <div className="header">
          <h1>CSS Անիմացիաները՝ հեշտությամբ! 🚀</h1>
          <p className="subtitle">
            Սովորեք ձեր կայքերը շարժել և աշխուժացնել պրոֆեսիոնալի պես։
          </p>
        </div>

        <div className="section">
          <h2>
            <span className="emoji">🎬</span> Ի՞նչ են CSS Անիմացիաները։
          </h2>
          <p>
            Մտածեք CSS անիմացիաների մասին, ինչպես անիմացիոն գրքույկի, որը կյանքի
            է կոչվում։ Ամեն շրջանակ ձեռքով նկարելու փոխարեն, դուք համակարգչին
            ասում եք՝ որտեղ սկսել, որտեղ ավարտել, և այն լրացնում է ամբողջ
            շարժումը։ Շատ հիանալի է, չէ՞։
          </p>

          <div className="explanation">
            <strong>Պարզ բառերով:</strong> CSS անիմացիաները թույլ են տալիս
            ժամանակի ընթացքում փոխել, թե ինչպես են տարրերը երևում։ Դուք կարող եք
            ստիպել առարկաներին շարժվել, պտտվել, մեծանալ, փոքրանալ, փոխել գույնը
            և շատ ավելին։
          </div>

          <div className="demo-box bounce-demo">BOUNCE!</div>
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            <em>↑ Այս տուփը անիմացված է CSS-ով:</em>
          </p>
        </div>

        <div className="section">
          <h2>
            <span className="emoji">🎯</span> Կախարդական բանաձևը՝ @keyframes
          </h2>
          <p>
            Keyframes-ը նման են ֆիլմի ռեժիսորի հրահանգներին։ Նրանք ասում են
            յուրաքանչյուր "դերասանի" (ձեր HTML տարրին)՝ ինչ անել ժամանակի
            որոշակի պահերին։
          </p>

          <div className="code-block">
            <span className="highlight">@keyframes</span> myAwesomeAnimation
            &#123;
            <br />
            &nbsp; <span className="highlight">0%</span> &#123;
            <br />
            &nbsp; &nbsp; transform: translateX(0px);
            <br />
            &nbsp; &nbsp; background-color: #3399ff;
            <br />
            &nbsp; &#125;
            <br />
            &nbsp; <span className="highlight">100%</span> &#123;
            <br />
            &nbsp; &nbsp; transform: translateX(200px);
            <br />
            &nbsp; &nbsp; background-color: #ff9933;
            <br />
            &nbsp; &#125;
            <br />
            &#125;
          </div>

          <div className="explanation">
            <strong>Վերլուծենք:</strong>
            <br />• <strong>@keyframes</strong> = "Հե՜յ, ես անիմացիա եմ
            ստեղծում:"
            <br />• <strong>myAwesomeAnimation</strong> = Անունը, որը դուք տալիս
            եք ձեր անիմացիային (ինչպես ընտանի կենդանուն անուն տալը)
            <br />• <strong>0%</strong> = Սկզբնական կետը (անիմացիայի սկիզբը)
            <br />• <strong>100%</strong> = Վերջնական կետը (որտեղ ավարտվում է
            անիմացիան)
            <br />• Ամեն ինչ &#123;&#125;-ի ներսում = Ինչն է փոխվում անիմացիայի
            ընթացքում
          </div>
        </div>

        <div className="section">
          <h2>
            <span className="emoji">⚡</span> Animation Property-ն՝ Ձեր
            Կառավարման Վահանակը
          </h2>
          <p>
            Երբ դուք ստեղծում եք ձեր keyframes-ները, դուք պետք է տարրին ասեք, որ
            դրանք օգտագործի։ Այստեղ է, որ <code>animation</code> հատկությունը
            գալիս է օգնության՝ այն նման է ձեր անիմացիայի հեռակառավարման
            վահանակին։
          </p>

          <div className="code-block">
            .my-element &#123;
            <br />
            &nbsp;{" "}
            <span className="highlight">
              animation: myAwesomeAnimation 2s infinite ease-in-out;
            </span>
            <br />
            &#125;
            <br />
            <br />
            {`/* ԿԱՄ գրեք այն քայլ առ քայլ: */`}
            <br />
            .my-element &#123;
            <br />
            &nbsp; <span className="highlight">animation-name:</span>{" "}
            myAwesomeAnimation;
            <br />
            &nbsp; <span className="highlight">animation-duration:</span> 2s;
            <br />
            &nbsp; <span className="highlight">
              animation-iteration-count:
            </span>{" "}
            infinite;
            <br />
            &nbsp; <span className="highlight">
              animation-timing-function:
            </span>{" "}
            ease-in-out;
            <br />
            &#125;
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Անիմացիայի Անուն</h3>
              <p>Ո՞ր keyframes-ը օգտագործել (ինչպես պարի շարժում ընտրելը)</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Տևողություն</h3>
              <p>
                Որքան ժամանակ է պահանջվում (2s = 2 վայրկյան, 500ms = կես
                վայրկյան)
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Կրկնությունների Քանակ</h3>
              <p>Քանի անգամ կրկնել (1, 3, անվերջ, և այլն)</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Ժամանակի Ֆունկցիա</h3>
              <p>Շարժման "զգացողությունը" (հարթ, թռչկոտ, և այլն)</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>
            <span className="emoji">🎮</span> Փորձեք Այս Անիմացիաները!
          </h2>
          <p>
            Սեղմեք ստորև ներկայացված կոճակները՝ տարբեր անիմացիաները տեսնելու
            համար:
          </p>

          <div className="interactive-demo">
            <button
              className="try-it"
              onClick={() => changeAnimation("bounce")}
            >
              Bounce
            </button>
            <button className="try-it" onClick={() => changeAnimation("spin")}>
              Spin
            </button>
            <button className="try-it" onClick={() => changeAnimation("pulse")}>
              Pulse
            </button>
          </div>

          <div className="demo-box" id="interactive-box">
            ՍԵՂՄԵՔ ՎԵՐԵՎՈՒՄ!
          </div>

          <div className="tip">
            <strong>💡 Պրո խորհուրդ:</strong> Սկսեք պարզ անիմացիաներից, ինչպիսիք
            են դիրքի կամ չափի փոփոխությունը։ Երբ սովորեք, փորձեք միավորել մի
            քանի հատկություններ՝ ավելի բարդ էֆեկտների համար։
          </div>
        </div>

        <div className="section">
          <h2>
            <span className="emoji">📚</span> Ընդհանուր Ժամանակի Ֆունկցիաների
            Բացատրությունը
          </h2>
          <p>
            Սրանք վերահսկում են, թե ԻՆՉՊԵՍ է ձեր անիմացիան շարժվում սկզբից մինչև
            վերջ:
          </p>

          <div className="explanation">
            • <strong>linear</strong> - Նույն արագությունը ամբողջ ընթացքում
            (ինչպես ռոբոտը)
            <br />• <strong>ease</strong> - Սկսում է դանդաղ, արագանում, ապա
            նորից դանդաղում (ամենաբնականը)
            <br />• <strong>ease-in</strong> - Սկսում է դանդաղ, ապա արագանում
            <br />• <strong>ease-out</strong> - Սկսում է արագ, ապա դանդաղում
            <br />• <strong>ease-in-out</strong> - Դանդաղ սկիզբ և վերջ, արագ՝
            մեջտեղում
          </div>
        </div>
      </div>
    </>
  );
}
