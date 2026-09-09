import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Input from "@/components/Input";
import Button from "@/components/Button";
import SocialButton from "@/components/SocialButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center py-30">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center items-center relative">
            <div className="absolute -left-10 -top-10 z-0">
              <Image
                src="/Vector.png"
                alt="Orange Background Shape"
                width={420}
                height={300}
                className="object-contain w-auto h-auto"
                priority
              />
            </div>

            <div className="w-[470px] h-[470px] bg-lightBlue rounded-full flex items-center justify-center relative z-10">
              <Image
                src="/car-service-repair-illustration.png"
                alt="Car Service Illustration"
                width={400}
                height={400}
                className="object-contain z-20"
                priority
              />
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm w-full max-w-lg ml-auto">
            <h1 className="text-3xl font-bold text-black mb-2">
              Create an account
            </h1>
            <p className="text-gray-500 mb-8 text-sm">
              Lets get started with us.
            </p>

            <form className="flex flex-col space-y-5">
              <Input type="text" placeholder="Username" />
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Mobile number" />
              <Input type="password" placeholder="Password" />
              <Input type="password" placeholder="Confirm Password" />

              <div className="pt-2">
                <Button type="button">Get OTP</Button>
              </div>
            </form>

            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-200" />
              <span className="px-3 text-gray-400 text-xs">or</span>
              <hr className="flex-grow border-gray-200" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <SocialButton icon={<FcGoogle size={22} />} />
              <SocialButton
                icon={<FaFacebook size={22} className="text-blue-600" />}
              />
              <SocialButton
                icon={<FaInstagram size={22} className="text-pink-600" />}
              />
            </div>

            <p className="text-center mt-8 text-sm text-gray-600">
              Already have an account?{" "}
              <a href="#" className="font-bold text-black hover:underline">
                Log in
              </a>
            </p>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
