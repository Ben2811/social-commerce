'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to connect to the server');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-green-600">Success!</h2>
          <p className="text-gray-600">Your account has been created successfully.</p>
          <button
            onClick={() => window.location.href = '/login'}
            className="mt-6 w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
              className="mt-1 w-full text-black rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              placeholder="johndoe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full text-black rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full text-black rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:bg-blue-300"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
