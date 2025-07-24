
import { Link } from "react-router-dom";
const mockIPOs = [
  {
    id: "1",
    company: "GO AIR",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/86/GoAir_Logo.png",
    issueDate: "4th - 7th Oct 2022",
    issueSize: "₹3600 Crores",
    priceRange: "₹50-60",
    minInvestment: "₹50,000",
    lots: "100 Shares/5 Lots",
    status: "Active",
  },
  {
    id: "2",
    company: "BAJAJ ENERGY",
    logo: "https://bajajgroup.org/thumbnail/Bajaj_group_logo.jpg",
    issueDate: "4th - 7th Oct 2022",
    issueSize: "₹3600 Crores",
    priceRange: "₹50-60",
    minInvestment: "₹50,000",
    lots: "100 Shares/5 Lots",
    status: "Active",
  },
  {
    id: "3",
    company: "OYO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Oyorooms-branding.svg",
    issueDate: "To be announced",
    issueSize: "₹3600 Crores",
    priceRange: "₹50-60",
    minInvestment: "₹50,000",
    lots: "100 Shares/5 Lots",
    status: "Upcoming",
  },
  {
    id: "4",
    company: "ZOMATO",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGmF6yqRQAgCw/company-logo_200_200/company-logo_200_200/0/1700453963264/zomato_logo?e=2147483647&v=beta&t=WAAoVhEV3uASKu23KqJkO-B4_JNJIkvjKm3_j5yi1A0",
    issueDate: "14th - 16th Jul 2021",
    issueSize: "₹9375 Crores",
    priceRange: "₹72-76",
    minInvestment: "₹14,500",
    lots: "195 Shares/13 Lots",
    status: "Closed",
  },
  {
    id: "5",
    company: "PAYTM",
    logo: "https://play-lh.googleusercontent.com/IWU8HM1uQuW8wVrp6XpyOOJXvb_1tDPUDAOfkrl83RZPG9Ww3dCY9X1AV6T1atSvgXc",
    issueDate: "8th - 10th Nov 2021",
    issueSize: "₹18300 Crores",
    priceRange: "₹2080-2150",
    minInvestment: "₹2,08,000",
    lots: "6 Shares/1 Lot",
    status: "Closed",
  },
]

function Home(){
    return (
    <div className="min-h-screen bg-gray-50 font-Sora">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">IPO Listings</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Table Header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-600">
                <div>Company / Issue date</div>
                <div>Issue size</div>
                <div>Price range</div>
                <div className="text-right">Min Invest/Qty</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {mockIPOs.map((ipo) => (
                <Link key={ipo.id} to={`/ipo/${ipo.id}`}>
                  <div className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
                    <div className="grid grid-cols-4 gap-4 items-center">
                      <div className="flex items-center space-x-3">
                        <img
                          src={ipo.logo || "/placeholder.svg"}
                          alt={ipo.company}
                          className="w-10 h-10 rounded-full bg-gray-100 flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="font-semibold text-gray-900 truncate">{ipo.company}</div>
                          <div className="text-sm text-gray-500 truncate">{ipo.issueDate}</div>
                        </div>
                      </div>
                      <div className="font-semibold text-gray-900">{ipo.issueSize}</div>
                      <div className="font-semibold text-gray-900">{ipo.priceRange}</div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">{ipo.minInvestment}</div>
                        <div className="text-sm text-gray-500">{ipo.lots}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet View */}
        <div className="hidden md:block lg:hidden">
          <div className="grid gap-4">
            {mockIPOs.map((ipo) => (
              <Link key={ipo.id} to={`/ipo/${ipo.id}`}>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-150 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <img
                      src={ipo.logo || "/placeholder.svg"}
                      alt={ipo.company}
                      className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">{ipo.company}</h3>
                          <p className="text-sm text-gray-500">{ipo.issueDate}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">{ipo.minInvestment}</div>
                          <div className="text-xs text-gray-500">{ipo.lots}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Issue size: </span>
                          <span className="font-medium text-gray-900">{ipo.issueSize}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Price range: </span>
                          <span className="font-medium text-gray-900">{ipo.priceRange}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {mockIPOs.map((ipo) => (
            <Link key={ipo.id} to={`/ipo/${ipo.id}`}>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-150 cursor-pointer">
                <div className="flex items-start space-x-3">
                  <img
                    src={ipo.logo || "/placeholder.svg"}
                    alt={ipo.company}
                    className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg truncate">{ipo.company}</h3>
                        <p className="text-sm text-gray-500 truncate">{ipo.issueDate}</p>
                      </div>
                      <div className="text-right ml-2 flex-shrink-0">
                        <div className="font-semibold text-gray-900 text-sm">{ipo.minInvestment}</div>
                        <div className="text-xs text-gray-500">{ipo.lots}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Issue size:</span>
                        <span className="font-medium text-gray-900">{ipo.issueSize}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Price range:</span>
                        <span className="font-medium text-gray-900">{ipo.priceRange}</span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="mt-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          ipo.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : ipo.status === "Upcoming"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {ipo.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {mockIPOs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No IPOs available</h3>
            <p className="text-gray-500">Check back later for new IPO listings.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home;