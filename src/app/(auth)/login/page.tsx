import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Input from "@/components/Input";
import Button from "@/components/Button";
import SocialButton from "@/components/SocialButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center py-25">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Illustration */}
          <div className="flex justify-center items-center relative">
            <div className="w-[470px] h-[470px] bg-[#E8F1FF] rounded-full flex items-center justify-center relative z-10">
              <Image
                src="/car-service-repair-illustration-2.png"
                alt="Car Service Login Illustration"
                width={400}
                height={400}
                className="object-contain z-20 mix-blend-multiply"
                priority
              />
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="bg-white p-10 rounded-2xl shadow-sm w-full max-w-lg ml-auto">
            <h1 className="text-3xl font-bold text-black mb-2">
              Welcome back!
            </h1>
            <p className="text-gray-500 mb-8 text-sm">
              Welcome back! Please enter your details.
            </p>

            {/* Social Logins (Top in Login Page) */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <SocialButton icon={<FcGoogle size={22} />} />
              <SocialButton
                icon={<FaFacebook size={22} className="text-blue-600" />}
              />
              <SocialButton
                icon={<FaInstagram size={22} className="text-pink-600" />}
              />
            </div>

            {/* Divider */}
            <div className="flex items-center mb-6">
              <hr className="flex-grow border-gray-200" />
              <span className="px-3 text-gray-400 text-xs">or</span>
              <hr className="flex-grow border-gray-200" />
            </div>

            {/* Form Inputs */}
            <form className="flex flex-col space-y-5">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />

              {/* Remember Me & Forgot Password Row */}
              <div className="flex justify-between items-center text-sm pt-2">
                <label className="flex items-center space-x-2 text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-brandOrange focus:ring-brandOrange"
                  />
                  <span>Remember me</span>
                </label>
                <Link
                  href="#"
                  className="text-black font-semibold hover:underline border-b border-black "
                >
                  Forgot Password
                </Link>
              </div>

              <div className="pt-4">
                <Button type="button">Log in</Button>
              </div>
            </form>

            <p className="text-center mt-8 text-sm text-gray-600">
              Do not have an account?{" "}
              <Link
                href="/signup"
                className="font-bold text-black hover:underline"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
