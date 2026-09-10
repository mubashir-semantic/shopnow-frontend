"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function PasswordSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center py-25">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Consistent Illustration Area */}
          <div className="flex justify-center items-center relative w-full py-10">
            <div className="absolute top-4 -left-4 w-[400px] h-[400px] md:w-[450px] md:h-[450px] z-0">
              <Image
                src="/Vector.png"
                alt="Background Design"
                fill
                sizes="(max-width: 768px) 400px, 450px"
                className="object-contain"
                priority
              />
            </div>
            <div className="w-[470px] h-[470px] bg-[#E8F1FF] rounded-full flex items-center justify-center relative z-10">
              <Image
                src="/car-service-repair-illustration.png"
                alt="Car Service Illustration"
                width={400}
                height={400}
                className="object-contain z-20 w-[400px] h-[400px]"
                priority
              />
            </div>
          </div>

          {/* Right Side: Success Message Card Area */}
          <div className="bg-white p-10 rounded-2xl shadow-sm w-full max-w-lg ml-auto text-center">
            {/* Success Checkmark Icon Circle */}
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-black mb-3">
              Password Changed!
            </h1>

            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Your password has been successfully updated. You can now log in to
              your account using your new password.
            </p>

            <div className="pt-2">
              <Link href="/login" className="w-full block">
                <Button className="w-full">Back to Login</Button>
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
