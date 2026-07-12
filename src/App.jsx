import React from 'react'

export default function App() {
  return (
    <div className="page-shell">
      <div className="hero-card">
        <div className="hero-text">
          <p className="eyebrow">FIFA World Cup 2026</p>
          <h1>Live stream hub</h1>
          <p className="subtitle">
            This public page is ready to host the embedded FIFA stream source directly from your workspace.
          </p>
          <ul className="feature-list">
            <li>Responsive full-width viewing experience</li>
            <li>Embedded public source from the local project</li>
            <li>Ready for local preview or deployment</li>
          </ul>
        </div>

        <div className="stream-frame">
          <iframe
            title="FIFA live"
            src="https://embedindia.st/embed/wc/2026-07-11/arg-sui/fox-en"
            allow="autoplay; encrypted-media; fullscreen"
            sandbox={false}
            allowFullScreen
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}
