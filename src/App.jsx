import { useState } from "react";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("cover");
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      {/* COVER */}
      {screen === "cover" && (
        <main className="wedding-cover">

          <div className="decor decor-top">✦</div>

          <section className="cover-content">

            <p className="small-text">
              ॥ श्री गणेशाय नमः ॥
            </p>

            <div className="mandala">❈</div>

            <p className="invite-text">
              शुभ विवाह
            </p>

            <h1>
              Wedding
              <span>Invitation</span>
            </h1>

            <div className="divider">
              <span>✦</span>
            </div>

            <p className="couple-name">
              Bride <span>&</span> Groom
            </p>

            <p className="date">
              00 • 00 • 2026
            </p>

            <button
              className="open-button"
              onClick={() => setScreen("invitation")}
            >
              आमंत्रण खोलें
              <span> →</span>
            </button>

          </section>

          <div className="decor decor-bottom">✦</div>

        </main>
      )}

      {/* INVITATION */}
      {screen === "invitation" && (
        <main className="invitation-screen">

          <p className="small-text">
            ॥ श्री गणेशाय नमः ॥
          </p>

          <h1>विवाह कार्यक्रम</h1>

          <p className="intro-text">
            स्नेह एवं आशीर्वाद सहित
            <br />
            आपको हमारे शुभ विवाह में
            <br />
            सादर आमंत्रित करते हैं।
          </p>

          <section className="events-grid">

            <div
              className="event-card"
              onClick={() => {
                setSelectedEvent("haldi");
                setScreen("event-detail");
              }}
            >
              <span className="event-icon">🌼</span>
              <h2>हल्दी</h2>
              <p>शुभ आरंभ एवं हल्दी समारोह</p>
              <small>तिथि • समय</small>
            </div>

            <div
              className="event-card"
              onClick={() => {
                setSelectedEvent("mehndi");
                setScreen("event-detail");
              }}
            >
              <span className="event-icon">🌿</span>
              <h2>मेहंदी</h2>
              <p>मेहंदी एवं मंगल गीत</p>
              <small>तिथि • समय</small>
            </div>

            <div
              className="event-card"
              onClick={() => {
                setSelectedEvent("tilak");
                setScreen("event-detail");
              }}
            >
              <span className="event-icon">🪔</span>
              <h2>तिलक</h2>
              <p>तिलक एवं पारिवारिक मिलन</p>
              <small>तिथि • समय</small>
            </div>

            <div
              className="event-card"
              onClick={() => {
                setSelectedEvent("sangeet");
                setScreen("event-detail");
              }}
            >
              <span className="event-icon">🎶</span>
              <h2>संगीत</h2>
              <p>संगीत एवं सांस्कृतिक संध्या</p>
              <small>तिथि • समय</small>
            </div>

            <div
              className="event-card wedding-event"
              onClick={() => {
                setSelectedEvent("wedding");
                setScreen("event-detail");
              }}
            >
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

      {/* EVENT DETAIL */}
      {screen === "event-detail" && (
        <main className="event-detail-screen">

          <button
            className="back-button"
            onClick={() => setScreen("invitation")}
          >
            ← सभी कार्यक्रम
          </button>

          <div className="detail-card">

            {selectedEvent === "haldi" && (
              <>
                <div className="detail-icon">🌼</div>
                <h1>हल्दी समारोह</h1>
                <p>शुभ विवाह से पहले हल्दी का मंगलमय कार्यक्रम।</p>
                <div className="detail-info">
                  <p>📅 तिथि: जल्द घोषित होगी</p>
                  <p>🕐 समय: जल्द घोषित होगा</p>
                  <p>📍 स्थान: जल्द घोषित होगा</p>
                </div>
              </>
            )}

            {selectedEvent === "mehndi" && (
              <>
                <div className="detail-icon">🌿</div>
                <h1>मेहंदी समारोह</h1>
                <p>रिश्तों और खुशियों से भरी मेहंदी की शाम।</p>
                <div className="detail-info">
                  <p>📅 तिथि: जल्द घोषित होगी</p>
                  <p>🕐 समय: जल्द घोषित होगा</p>
                  <p>📍 स्थान: जल्द घोषित होगा</p>
                </div>
              </>
            )}

            {selectedEvent === "tilak" && (
              <>
                <div className="detail-icon">🪔</div>
                <h1>तिलक समारोह</h1>
                <p>परिवार और शुभकामनाओं के साथ मंगल अवसर।</p>
                <div className="detail-info">
                  <p>📅 तिथि: जल्द घोषित होगी</p>
                  <p>🕐 समय: जल्द घोषित होगा</p>
                  <p>📍 स्थान: जल्द घोषित होगा</p>
                </div>
              </>
            )}

            {selectedEvent === "sangeet" && (
              <>
                <div className="detail-icon">🎶</div>
                <h1>संगीत समारोह</h1>
                <p>संगीत, नृत्य और परिवार के साथ यादगार शाम।</p>
                <div className="detail-info">
                  <p>📅 तिथि: जल्द घोषित होगी</p>
                  <p>🕐 समय: जल्द घोषित होगा</p>
                  <p>📍 स्थान: जल्द घोषित होगा</p>
                </div>
              </>
            )}

            {selectedEvent === "wedding" && (
              <>
                <div className="detail-icon">💍</div>
                <h1>शुभ विवाह</h1>
                <p>दो परिवारों और दो जीवनों के मिलन का शुभ अवसर।</p>
                <div className="detail-info">
                  <p>📅 तिथि: जल्द घोषित होगी</p>
                  <p>🕐 समय: जल्द घोषित होगा</p>
                  <p>📍 स्थान: जल्द घोषित होगा</p>
                </div>
              </>
            )}

          </div>

        </main>
      )}
    </>
  );
}

export default App;
