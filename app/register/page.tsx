'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [agreed, setAgreed] = useState(false);
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

    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu không khớp');
      return;
    }

    if (!agreed) {
      setError('Vui lòng đồng ý với Điều khoản Dịch vụ');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { confirmPassword, ...registerData } = formData;
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
        setError(data.message || 'Đã xảy ra lỗi');
      }
    } catch (err) {
      setError('Không thể kết nối đến máy chủ');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex min-h-screen flex-col font-sans text-black">
        <Navbar />
        <div className="flex flex-1 items-center justify-center bg-white">
        <div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-green-600">Thành công!</h2>
          <p className="text-gray-600">Tài khoản của bạn đã được tạo thành công.</p>
          <Link
            href="/login"
            className="mt-6 block w-full rounded-md bg-gray-900 py-2 text-center text-white hover:bg-gray-700 transition-colors"
          >
            Đến trang Đăng Nhập
          </Link>
        </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col font-sans text-black">
      <Navbar />
      <div className="flex flex-1">
        {/* Form Section */}
        <div className="flex w-full flex-col items-center justify-center bg-white py-12 md:w-1/2">
          <div className="w-full max-w-md px-8">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Đăng ký săn deal ngay !!!</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Họ và tên</label>
              <input
                type="text"
                name="username"
                required
                value={formData.username}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-black placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                placeholder="Nhập họ và tên..."
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-black placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                placeholder="Nhập địa chỉ email..."
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Số điện thoại</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-black placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                placeholder="Nhập số điện thoại..."
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Mật khẩu</label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-black placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                placeholder="Nhập mật khẩu..."
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-black placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your e-mail address..."
              />
            </div>

            <div className="flex items-start gap-2 pt-1">
              <input
                id="agree"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 cursor-pointer accent-blue-600"
              />
              <label htmlFor="agree" className="text-xs text-gray-600 leading-tight cursor-pointer">
                Đồng ý với Điều khoản Dịch vụ và Chính sách Bảo mật của chúng tôi.
              </label>
            </div>

            {error && <p className="text-sm text-red-600 font-medium">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-gray-900 py-2.5 text-sm font-medium text-white hover:bg-gray-700 disabled:bg-gray-400 transition-colors"
            >
              <span>→</span>
              <span>{loading ? 'Đang đăng ký...' : 'Đăng ký'}</span>
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-gray-600">
            Đã có tài khoản?{' '}
            <Link href="/login" className="font-medium text-gray-900 hover:underline">
              Đăng Nhập
            </Link>
          </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative hidden md:flex md:w-1/2 items-center justify-center overflow-hidden bg-gray-900">
          <Image
            src="/image/bamner/banner.jpg"
            alt="Tech Revolution"
            fill
            className="object-cover opacity-60"
          />
          <div className="relative z-10 text-center">
            <p className="text-4xl font-extrabold tracking-widest text-white">
              TECH{' '}
              <span className="text-purple-400">REVOLUTION</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

