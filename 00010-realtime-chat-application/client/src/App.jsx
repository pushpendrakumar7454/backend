import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { initializeSession } from './features/auth/authSlice.js';

import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import AccountPage from './pages/AccountPage.jsx';
import ChatPage from './pages/ChatPage.jsx';

import Brand from './components/Brand.jsx';

function ProtectedRoute({ children }) {
  const { user, error } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ sessionExpired: error?.status === 401 }}
      />
    );
  }

  return children;
}

export default function App() {
  const dispatch = useDispatch();

  const { user, bootstrap, error } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(initializeSession());
  }, [dispatch]);

  // Session initialization failed
  if (bootstrap === 'failed') {
    return (
      <main className="session-screen">
        <Brand />

        <h1>Let's reconnect.</h1>

        <p role="alert">
          {error?.message || 'Unable to initialize your session.'}
        </p>

        <button
          className="primary-button"
          onClick={() => dispatch(initializeSession())}
        >
          Try again <span aria-hidden="true">→</span>
        </button>
      </main>
    );
  }

  // Session is initializing
  if (bootstrap !== 'ready') {
    return (
      <main className="session-screen">
        <Brand />
        <p role="status">Getting your space ready...</p>
      </main>
    );
  }

  const homePath = user ? '/account' : '/login';

  return (
    <Routes>
      {/* Home Route */}
      <Route
        path="/"
        element={<Navigate to={homePath} replace />}
      />

      {/* Login Route */}
      <Route
        path="/login"
        element={<LoginPage />}
      />

      {/* Register Route */}
      <Route
        path="/register"
        element={<RegisterPage />}
      />

      {/* Protected Account Route */}
      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        }
      />

      {/* Protected Chat Route */}
      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        }
      />

      {/* Fallback Route */}
      <Route
        path="*"
        element={<Navigate to={homePath} replace />}
      />
    </Routes>
  );
}