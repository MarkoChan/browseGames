import { useState } from 'react';
import '../styles/Settings.css';
import '../styles/Global.css';

export default function Settings({userEmail}) {
    // toggle states
    const [hideNSFW, setHideNSFW] = useState(true);
    const [blurNSFW, setBlurNSFW] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(true);
    const [autoPlay, setAutoPlay] = useState(false);

    // handle acc deact
    function handleDeactivate() {
        if (userEmail) {
            alert(`Account deactivated for: ${userEmail}`);
            // TODO: Add actual deactivation logic
        }
    }

    return (
        <div className="settings-page">
            <div className="settings-container">
                <h1 className="settings-title">Settings</h1>

                {/* NSFW setting */}
                <div className="settings-option">
                    <label>
                        <input
                            type="checkbox"
                            checked={hideNSFW}
                            onChange={() => setHideNSFW(!hideNSFW)}
                        />
                        Don't show NSFW content
                    </label>
                </div>

                {/* Blur NSFW (only shows if NSFW allowed) */}
                {!hideNSFW && (
                    <div className="settings-option nested">
                        <label>
                            <input
                                type="checkbox"
                                checked={blurNSFW}
                                onChange={() => setBlurNSFW(!blurNSFW)}
                            />
                            Blur NSFW content
                        </label>
                    </div>
                )}

                {/* Notifications */}
                <div className="settings-option">
                    <label>
                        <input
                            type="checkbox"
                            checked={notifications}
                            onChange={() => setNotifications(!notifications)}
                        />
                        Enable notifications
                    </label>
                </div>

                {/* Dark mode */}
                <div className="settings-option">
                    <label>
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                        />
                        Enable dark mode
                    </label>
                </div>

                {/* Auto-play trailers */}
                <div className="settings-option">
                    <label>
                        <input
                            type="checkbox"
                            checked={autoPlay}
                            onChange={() => setAutoPlay(!autoPlay)}
                        />
                        Auto-play game trailers
                    </label>
                </div>

                {/* Deactivate account */}
                <div className="settings-option">
                    <button
                        className="deactivate-btn"
                        onClick={handleDeactivate}
                        disabled={!userEmail}
                        title={!userEmail ? "Log in to deactivate your account" : ""}
                    >
                        Deactivate Account
                    </button>
                </div>
            </div>
        </div>
    );
}
