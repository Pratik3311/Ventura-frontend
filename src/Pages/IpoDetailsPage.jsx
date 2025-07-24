"use client"

import { useState } from "react"
import { Link, useParams } from "react-router-dom"

const mockIPODetails = {
  1: {
    id: "1",
    company: "GO AIR",
    fullName: "GO AIR Private Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/86/GoAir_Logo.png",
    issueSize: "₹3,600 - 3,700 Cr.",
    priceRange: "₹100 - 200",
    minAmount: "₹50,000",
    lotSize: "150 shares/lots",
    issueDates: "12 Dec - 15 Dec 22",
    listedOn: "15 Dec 22",
    listedPrice: "₹150",
    listingGains: "₹10",
    gainsPercentage: "10.0%",
    timeline: [
      { title: "Bidding", subtitle: "starts", date: "12 Dec 2023", completed: true },
      { title: "Bidding", subtitle: "ends", date: "15 Dec 2023", completed: true },
      { title: "Allotment", subtitle: "finalization", date: "18 Dec 2023", completed: true },
      { title: "Refund", subtitle: "initiation", date: "18 Dec 2023", completed: true },
      { title: "Demat", subtitle: "transfer", date: "19 Dec 2023", completed: true },
      { title: "Listing", subtitle: "date", date: "21 Dec 2023", completed: true },
    ],
    about:
      "Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur delentiti rem odio enim sit corporis aliquam erat quisquam magni ut sequi maxime. Aut incidunt adipisci in fuga necessitatibus sed inventore enim. Et atque autem sed tempore omnis qui corporis enim ut explicabo sit qui reprehenderit rem esse dolorem qui dolectus odio ea temporibus ratione. Et voluptates autem non totam consequuntur non doloribus omnis non repellendus harum. Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur delentiti rem odio enim sit corporis aliquam erat quisquam magni ut sequi maxime. Aut incidunt adipisci in fuga necessitatibus sed inventore enim. Et atque autem sed tempore omnis qui corporis enim ut explicabo sit qui reprehenderit rem esse dolorem qui dolectus odio ea temporibus ratione.",
  },
  2: {
    id: "2",
    company: "BAJAJ ENERGY",
    fullName: "BAJAJ ENERGY Private Limited",
    logo: "https://bajajgroup.org/thumbnail/Bajaj_group_logo.jpg",
    issueSize: "₹3,600 - 3,700 Cr.",
    priceRange: "₹100 - 200",
    minAmount: "₹50,000",
    lotSize: "150 shares/lots",
    issueDates: "12 Dec - 15 Dec 22",
    listedOn: "15 Dec 22",
    listedPrice: "₹150",
    listingGains: "₹10",
    gainsPercentage: "10.0%",
    timeline: [
      { title: "Bidding", subtitle: "starts", date: "12 Dec 2023", completed: true },
      { title: "Bidding", subtitle: "ends", date: "15 Dec 2023", completed: true },
      { title: "Allotment", subtitle: "finalization", date: "18 Dec 2023", completed: false },
      { title: "Refund", subtitle: "initiation", date: "18 Dec 2023", completed: false },
      { title: "Demat", subtitle: "transfer", date: "19 Dec 2023", completed: false },
      { title: "Listing", subtitle: "date", date: "21 Dec 2023", completed: false },
    ],
    about:
      "Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur delentiti rem odio enim sit corporis aliquam erat quisquam magni ut sequi maxime. Aut incidunt adipisci in fuga necessitatibus sed inventore enim. Et atque autem sed tempore omnis qui corporis enim ut explicabo sit qui reprehenderit rem esse dolorem qui dolectus odio ea temporibus ratione. Et voluptates autem non totam consequuntur non doloribus omnis non repellendus harum. Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur delentiti rem odio enim sit corporis aliquam erat quisquam magni ut sequi maxime.",
  },
  3: {
    id: "3",
    company: "OYO",
    fullName: "OYO Private Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Oyorooms-branding.svg",
    issueSize: "₹3,600 - 3,700 Cr.",
    priceRange: "₹100 - 200",
    minAmount: "₹50,000",
    lotSize: "150 shares/lots",
    issueDates: "12 Dec - 15 Dec 22",
    listedOn: "15 Dec 22",
    listedPrice: "₹150",
    listingGains: "₹10",
    gainsPercentage: "10.0%",
    timeline: [
      { title: "Bidding", subtitle: "starts", date: "12 Dec 2023", completed: true },
      { title: "Bidding", subtitle: "ends", date: "15 Dec 2023", completed: true },
      { title: "Allotment", subtitle: "finalization", date: "18 Dec 2023", completed: true },
      { title: "Refund", subtitle: "initiation", date: "18 Dec 2023", completed: true },
      { title: "Demat", subtitle: "transfer", date: "19 Dec 2023", completed: true },
      { title: "Listing", subtitle: "date", date: "21 Dec 2023", completed: true },
    ],
    about:
      "Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur delentiti rem odio enim sit corporis aliquam erat quisquam magni ut sequi maxime. Aut incidunt adipisci in fuga necessitatibus sed inventore enim. Et atque autem sed tempore omnis qui corporis enim ut explicabo sit qui reprehenderit rem esse dolorem qui dolectus odio ea temporibus ratione. Et voluptates autem non totam consequuntur non doloribus omnis non repellendus harum. Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur delentiti rem odio enim sit corporis aliquam erat quisquam magni ut sequi maxime. Aut incidunt adipisci in fuga necessitatibus sed inventore enim.",
  },
}

export default function IPODetailsPage() {
  const { id } = useParams()
  const ipo = mockIPODetails[id]
  const [isExpanded, setIsExpanded] = useState(false)

  if (!ipo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">IPO Not Found</h1>
          <Link to="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Back to IPO List
            </button>
          </Link>
        </div>
      </div>
    )
  }

  // Function to truncate text for mobile view
  const getTruncatedText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + "..."
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-gray-700">
              Home
            </Link>
            <span>›</span>
            <span>Market watch</span>
          </div>

          {/* Company Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-300">
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
</button>

              </Link>
              <img
                src={ipo.logo || "/placeholder.svg"}
                alt={ipo.company}
                className="w-12 h-12 rounded-full bg-gray-100"
              />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{ipo.company}</h1>
                <p className="text-gray-600 text-sm sm:text-base">{ipo.fullName}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="hidden sm:flex items-center px-3 py-2 border border-gray-300 bg-white hover:bg-gray-50 rounded-lg transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </button>
              <button className="bg-slate-800 hover:bg-slate-900 text-white rounded-lg px-4 sm:px-6 py-2 font-medium transition-colors">
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* IPO Details */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-6">IPO details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <div>
                <p className="text-sm text-gray-500 mb-2">Issue size</p>
                <p className="font-semibold text-gray-900 text-base">{ipo.issueSize}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Price range</p>
                <p className="font-semibold text-gray-900 text-base">{ipo.priceRange}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Minimum amount</p>
                <p className="font-semibold text-gray-900 text-base">{ipo.minAmount}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Lot size</p>
                <p className="font-semibold text-gray-900 text-base">{ipo.lotSize}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Issue dates</p>
                <p className="font-semibold text-gray-900 text-base">{ipo.issueDates}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Listed on</p>
                <p className="font-semibold text-gray-900 text-base">{ipo.listedOn}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Listed price</p>
                <p className="font-semibold text-gray-900 text-base">{ipo.listedPrice}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Listing gains</p>
                <p className="font-semibold text-green-600 text-base">
                  {ipo.listingGains} ({ipo.gainsPercentage})
                </p>
              </div>
            </div>
          </div>

          {/* IPO Timeline */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6 sm:mb-8">IPO timeline</h2>

            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="flex items-start justify-between relative px-4">
                  {ipo.timeline.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center relative flex-1">
                      {/* Connecting line segments - only between adjacent items */}
                      {index < ipo.timeline.length - 1 && (
                        <div
                          className={`absolute top-4 left-1/2 h-0.5 z-0 ${
                            item.completed && ipo.timeline[index + 1].completed ? "bg-green-500" : "bg-gray-300"
                          }`}
                          style={{
                            width: "calc(100% - 1rem)",
                            marginLeft: "0.5rem",
                          }}
                        ></div>
                      )}

                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mb-4 relative z-10 ${
                          item.completed ? "bg-green-500" : "bg-gray-300"
                        }`}
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-900 leading-tight">{item.title}</p>
                        <p className="text-sm font-medium text-gray-900 leading-tight">{item.subtitle}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-4">
              {ipo.timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 ${
                        item.completed ? "bg-green-500" : "bg-gray-300"
                      }`}
                    >
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {item.title} {item.subtitle}
                      </p>
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>
                  </div>
                  {/* Connecting line for mobile */}
                  {index < ipo.timeline.length - 1 && (
                    <div
                      className={`absolute left-3 top-6 w-0.5 h-8 ${
                        item.completed && ipo.timeline[index + 1].completed ? "bg-green-500" : "bg-gray-300"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* About Company */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">About the company</h2>

            {/* Desktop view - show full text */}
            <div className="hidden sm:block space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>{ipo.about}</p>
              <p>{ipo.about}</p>
            </div>

            {/* Mobile view - show truncated text with read more */}
            <div className="sm:hidden">
              <div className="text-gray-700 text-sm leading-relaxed">
                <p>{isExpanded ? ipo.about : getTruncatedText(ipo.about)}</p>
                {ipo.about.length > 150 && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-600 hover:text-blue-800 font-medium mt-2 text-sm transition-colors"
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
