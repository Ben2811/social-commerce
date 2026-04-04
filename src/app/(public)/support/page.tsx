'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Search, Package, RotateCcw, CreditCard, Users, Tag, List } from 'lucide-react'

export default function SupportCenter() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const categories = [
    { id: 1, name: 'Đơn Hàng', icon: Package, color: 'from-orange-100 to-orange-50' },
    { id: 2, name: 'Đổi Trả', icon: RotateCcw, color: 'from-orange-100 to-orange-50' },
    { id: 3, name: 'Thanh Toán', icon: CreditCard, color: 'from-orange-100 to-orange-50' },
    { id: 4, name: 'Tài Khoản', icon: Users, color: 'from-orange-100 to-orange-50' },
    { id: 5, name: 'Khuyến Mãi', icon: Tag, color: 'from-orange-100 to-orange-50' },
    { id: 6, name: 'Khác', icon: List, color: 'from-orange-100 to-orange-50' },
  ]

  const faqs = [
    {
      id: 1,
      question: 'Chính sách đổi trả như thế nào?',
      answer: 'Chúng tôi hỗ trợ đổi trả sản phẩm trong vòng 30 ngày kể từ khi nhận hàng. Sản phẩm phải nguyên vẹn, chưa sử dụng.'
    },
    {
      id: 2,
      question: 'Có thể thanh toán qua ví điện tử không?',
      answer: 'Có, chúng tôi hỗ trợ thanh toán qua các ví điện tử phổ biến như Momo, Zalopay, và nhiều phương thức thanh toán khác.'
    },
    {
      id: 3,
      question: 'Điều kiện sử dụng mã giảm giá là gì?',
      answer: 'Mã giảm giá có thể được sử dụng cho các sản phẩm được ghi rõ trong điều kiện của mã. Một đơn hàng chỉ có thể sử dụng một mã giảm giá.'
    },
    {
      id: 4,
      question: 'Tại sao giao dịch bị từ chối?',
      answer: 'Có nhiều lý do có thể dẫn đến giao dịch bị từ chối, bao gồm số tiền không đủ, thông tin thẻ không chính xác, hoặc hạn mức giao dịch.'
    },
  ]

  if (!isClient) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Trung Tâm Hỗ Trợ Khách Hàng</h1>
            <nav className="flex gap-6">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Hỗ trợ</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Đăng nhập</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Đăng ký</a>
            </nav>
          </div>
        </header>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Trung Tâm Hỗ Trợ Khách Hàng</h1>
          <nav className="flex gap-6">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Hỗ trợ</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Đăng nhập</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Đăng ký</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-200 via-orange-100 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 text-balance mb-8">
              Xin chào, chúng tôi có thể giúp gì cho bạn?
            </h2>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Nhập từ khóa hoặc vấn đề dạng câu hỏi"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Danh mục hỗ trợ</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.id}
                className={`bg-gradient-to-br ${category.color} rounded-lg p-8 text-center cursor-pointer hover:shadow-md transition-shadow duration-200`}
              >
                <IconComponent className="w-12 h-12 text-gray-700 mx-auto mb-3" strokeWidth={1.5} />
                <h4 className="text-lg font-semibold text-gray-900">{category.name}</h4>
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Câu hỏi thường gặp</h3>
        
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-left font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-200 ${
                    expandedFaq === faq.id ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {expandedFaq === faq.id && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer Padding */}
      <div className="h-12"></div>
    </div>
  )
}
