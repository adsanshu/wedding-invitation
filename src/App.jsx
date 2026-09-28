
import { useState } from "react";
import "./App.css";
function App() {
  const [screen, setScreen] = useState("cover");
  return (
  <>
    {screen === "invitation" && (
  <main className="invitation-screen">

    <p className="small-text">॥ श्री गणेशाय नमः ॥</p>

    <h1>विवाह कार्यक्रम</h1>

    <p className="intro-text">
      स्नेह एवं आशीर्वाद सहित
      <br />
      आपको हमारे शुभ विवाह में
      <br />
      सादर आमंत्रित करते हैं।
    </p>

    <section className="events-grid">

      <div className="event-card">
        <span className="event-icon">🌼</span>
        <h2>हल्दी</h2>
        <p>शुभ आरंभ एवं हल्दी समारोह</p>
        <small>तिथि • समय</small>
      </div>

      <div className="event-card">
        <span className="event-icon">🌿</span>
        <h2>मेहंदी</h2>
        <p>मेहंदी एवं मंगल गीत</p>
        <small>तिथि • समय</small>
      </div>

      <div className="event-card">
        <span className="event-icon">🪔</span>
        <h2>तिलक</h2>
        <p>तिलक एवं पारिवारिक मिलन</p>
        <small>तिथि • समय</small>
      </div>

      <div className="event-card">
        <span className="event-icon">🎶</span>
        <h2>संगीत</h2>
        <p>संगीत एवं सांस्कृतिक संध्या</p>
        <small>तिथि • समय</small>
      </div>

      <div className="event-card wedding-event">
        <span className="event-icon">💍</span>
        <h2>शुभ विवाह</h2>
        <p>विवाह एवं शुभ फेरे</p>
        <small>तिथि • समय</small>
      </div>

    </section>

    <button
      className="back-button"
      onClick={() => setScreen("cover")}
    >
      ← वापस
    </button>

  </main>
)}
    {screen === "invitation" && (
      <main className="invitation-screen">

        <p className="small-text">॥ श्री गणेशाय नमः ॥</p>

        <h1>विवाह कार्यक्रम</h1>

        <p>
          स्नेह एवं आशीर्वाद सहित
          <br />
          आपको हमारे शुभ विवाह में
          <br />
          सादर आमंत्रित करते हैं।
        </p>

        <div className="event-card">
          <h2>💍 शुभ विवाह</h2>
          <p>एक नई शुरुआत, एक नया सफर</p>
        </div>

        <button
          className="back-button"
          onClick={() => setScreen("cover")}
        >
          ← वापस
        </button>

      </main>
    )}
  </>
);
}
export default App;
