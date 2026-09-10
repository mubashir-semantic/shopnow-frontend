import Header from "@/components/Header";
import Container from "@/components/Container"; // Aapka banaya hua reusable container component
import Image from "next/image";
import Link from "next/link";
import {
  MdDashboard,
  MdOutlineReceiptLong,
  MdOutlineBuild,
  MdOutlineEmail,
  MdOutlineSettings,
} from "react-icons/md";
import { FaUpload, FaCommentDots } from "react-icons/fa";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Reusable Header */}
      <Header />

      {/* Reusable Container to ensure equal width alignment with Header */}
      <Container className="flex flex-grow py-6 gap-6">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-100 p-6 flex flex-col justify-between hidden lg:flex shadow-sm rounded-2xl">
          <div className="space-y-2">
            <SidebarLink
              href="/dashboard"
              icon={<MdDashboard size={20} />}
              label="Dashboard"
              active
            />
            <SidebarLink
              href="#"
              icon={<MdOutlineReceiptLong size={20} />}
              label="Expense history"
            />
            <SidebarLink
              href="#"
              icon={<MdOutlineBuild size={20} />}
              label="Service history"
            />
            <SidebarLink
              href="#"
              icon={<MdOutlineEmail size={20} />}
              label="Inbox"
            />
            <SidebarLink
              href="#"
              icon={<MdOutlineSettings size={20} />}
              label="Setting"
            />
          </div>

          {/* Premium Promotion Banner */}
          <div className="bg-[#FFF4E6] p-4 rounded-2xl text-center relative overflow-hidden border border-[#FFE8CC]">
            <div className="w-20 h-20 mx-auto relative">
              <Image
                src="/Group 20373.png"
                width={120}
                height={120}
                className="object-contain"
                alt="Premium"
              />
            </div>
            <h4 className="text-xs font-bold text-gray-800 mb-2 leading-tight">
              Update to premium and get 40% discount
            </h4>
            <button className="w-full bg-[#FF9F43] text-white py-2 rounded-lg text-xs font-semibold shadow-sm hover:opacity-90">
              Book Service
            </button>
          </div>
        </aside>

        {/* Center Content Area */}
        <main className="flex-1 space-y-6 overflow-y-auto">
          {/* Top Hero Banner */}
          <div className="bg-[#FFF8F0] border border-[#FFE8CC] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden gap-6 mt-4">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#FFE5CC]/50 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative w-full md:w-80 h-52 flex-shrink-0 -ml-2 md:-ml-6 -my-4">
              <Image
                src="/Group 20377.png"
                alt="Easy Servicing Way"
                fill
                className="object-contain drop-shadow-sm"
              />
            </div>

            <div className="max-w-md text-center md:text-left z-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Easy Servicing Way
              </h1>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Fidnd your most nearest workshop and book your car done by your
                phone.
              </p>
              <button className="bg-[#FF9F43] text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:opacity-90">
                Book Service
              </button>
            </div>
          </div>

          {/* 3 Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <StatCard
              title="Total Expense"
              value="24,632Kr"
              linkText="View all"
              icon="💳"
              iconBg="bg-orange-50"
            />
            <StatCard
              title="Next Servicing date"
              value="12.3.22"
              icon="📅"
              iconBg="bg-blue-50"
            />
            <StatCard
              title="Next EU Control"
              value="22.02.22"
              subText="Remind me ⭐"
              icon="🛠️"
              iconBg="bg-purple-50"
            />
          </div>

          {/* Your Added Car Section */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center space-x-2">
                <span className="text-lg">🚗</span>
                <h2 className="font-bold text-gray-800 text-sm sm:text-base">
                  Your added car{" "}
                  <span className="text-gray-400 text-sm">(1)</span>
                </h2>
              </div>
              <button className="text-xs text-[#FF9F43] font-semibold hover:underline">
                + Want to add new car?
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-100 gap-3">
              <span className="text-sm font-semibold text-gray-700">
                #235235235LYJ
              </span>
              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">
                  M
                </span>
                <span className="text-sm font-medium text-gray-800">
                  Mercedez S-Benz
                </span>
              </div>
              <span className="text-xs text-gray-500">
                Added Date : 12.02.22
              </span>
            </div>
          </div>

          {/* Your Ongoing Servicing Car Section */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center space-x-2">
                <span className="text-lg">🚙</span>
                <h2 className="font-bold text-gray-800 text-sm sm:text-base">
                  Your ongoing servicing car
                </h2>
              </div>
              <span className="text-xs text-blue-500 cursor-pointer hover:underline font-medium">
                View all
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-100 gap-3">
              <span className="text-sm font-semibold text-gray-700">
                #42424 - Car Oil Repair
              </span>
              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">
                  B
                </span>
                <span className="text-sm font-medium text-gray-800">
                  Bildialog Asane
                </span>
              </div>
              <span className="text-xs text-gray-500">11.02.2022</span>
              <div className="flex items-center space-x-3">
                <FaCommentDots
                  className="text-gray-400 cursor-pointer hover:text-gray-600"
                  size={18}
                />
                <span className="bg-orange-100 text-[#FF9F43] text-xs font-bold px-3 py-1 rounded-full">
                  Ongoing
                </span>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar / Widgets */}
        <aside className="w-80 bg-white border-l border-gray-100 p-6 space-y-6 hidden xl:block shadow-sm rounded-2xl">
          {/* Expense History Upload Box */}
          <div className="bg-gradient-to-r from-[#FF9F43] to-[#FF851B] p-6 rounded-2xl text-white text-center shadow-sm relative overflow-hidden">
            <h3 className="text-base font-bold mb-3">Expense History Upload</h3>
            <button className="bg-white text-[#FF9F43] px-6 py-2 rounded-xl font-semibold text-xs shadow-sm hover:bg-gray-50 flex items-center justify-center mx-auto space-x-2 transition-all">
              <FaUpload />
              <span>Upload</span>
            </button>
          </div>

          {/* News Section */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">
              News
            </h3>
            <div className="space-y-3">
              <NewsItem
                image="/news-1.png"
                text="New updates regarding smartphone integrations available."
              />
              <NewsItem
                icon={<FaCommentDots size={16} />}
                text="Hey!! Your car is ready to pickup! When will u come?"
                unread
              />
              <NewsItem
                image="/news-2.png"
                text="We are on your nearest location. Contact with us!!!"
              />
              <NewsItem
                image="/news-3.png"
                text="Special discount on car inspection services this week!"
              />
            </div>
          </div>
        </aside>
      </Container>
    </div>
  );
}

{
  /* Helper Sub-Components */
}

function SidebarLink({
  href,
  icon,
  label,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-colors ${
        active
          ? "bg-[#2D1A4A] text-white shadow-sm"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </Link>
  );
}

function StatCard({
  title,
  value,
  linkText,
  subText,
  icon,
  iconBg,
}: {
  title: string;
  value: string;
  linkText?: string;
  subText?: string;
  icon: string;
  iconBg: string;
}) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-xs text-gray-400 font-medium mb-1">{title}</p>
        <h3 className="text-xl font-bold text-gray-900">{value}</h3>
        {linkText && (
          <span className="text-xs text-blue-500 cursor-pointer hover:underline mt-1 inline-block font-medium">
            {linkText}
          </span>
        )}
        {subText && (
          <span className="text-xs text-orange-400 font-medium mt-1 inline-block">
            {subText}
          </span>
        )}
      </div>
      <div
        className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center text-lg`}
      >
        {icon}
      </div>
    </div>
  );
}

function NewsItem({
  image,
  icon,
  text,
  unread = false,
}: {
  image?: string;
  icon?: React.ReactNode;
  text: string;
  unread?: boolean;
}) {
  return (
    <div className="p-3 border border-gray-100 rounded-xl bg-gray-50 flex items-center space-x-3 relative hover:bg-gray-100/60 transition-colors">
      {unread && (
        <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full"></span>
      )}

      {image ? (
        <div className="w-12 h-10 bg-gray-200 rounded-lg overflow-hidden relative flex-shrink-0">
          <Image src={image} alt="News" fill className="object-cover" />
        </div>
      ) : (
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
          {icon}
        </div>
      )}

      <p className="text-xs text-gray-700 font-medium leading-snug line-clamp-2">
        {text}
      </p>
    </div>
  );
}
