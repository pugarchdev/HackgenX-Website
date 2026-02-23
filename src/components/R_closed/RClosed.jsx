import React from "react";

const RegistrationClosed = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 px-4">

            {/* Popup Card */}
            <div className="bg-slate-950/70 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">

                <h1 className="text-3xl font-bold text-white mb-4">
                    Registration Closed
                </h1>

                <p className="text-slate-300 mb-6">
                    Thank you for your interest. Registrations for this event are now officially closed.
                </p>

                <button
                    onClick={() => window.location.href = "/"}
                    className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition duration-300"
                >
                    Go Back Home
                </button>

            </div>
        </div>
    );
};

export default RegistrationClosed;
