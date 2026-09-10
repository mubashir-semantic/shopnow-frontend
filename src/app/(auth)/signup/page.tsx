"use client";

import { useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Import the signup schema and form values type from the validations utility
import { signupSchema, type SignupFormValues } from "@/utilities/validations";

import Input from "@/components/Input";
import Button from "@/components/Button";
import SocialButton from "@/components/SocialButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import AuthLink from "@/components/AuthLink";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);

  // Hook Form Setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormValues) => {
    setIsLoading(true);
    console.log("Signup Data: ", data);

    // Backend API call simulate
    setTimeout(() => {
      setIsLoading(false);
      alert("Signup validation successful!");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center py-25">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Illustration Area */}
          <div className="flex justify-center items-center relative w-full py-10">
            <div className="absolute -top-3 -left-4 w-[400px] h-[400px] md:w-[450px] md:h-[450px] z-0">
              <Image
                src="/Vector.png"
                alt="Background Design"
                fill
                sizes="(max-width: 768px) 400px, 450px"
                className="object-contain"
                priority
              />
            </div>

            {/* Light Blue Circle Container */}
            <div className="w-[470px] h-[470px] bg-lightBlue rounded-full flex items-center justify-center relative z-10">
              <Image
                src="/car-service-repair-illustration.png"
                alt="Car Service Illustration"
                width={360}
                height={360}
                className="object-contain z-20 w-[360px] h-[360px]"
                priority
              />
            </div>
          </div>

          {/* Right Side: Signup Form */}
          <div className="bg-white p-10 rounded-2xl shadow-sm w-full max-w-lg ml-auto">
            <h1 className="text-3xl font-bold text-black mb-2">
              Create an account
            </h1>
            <p className="text-gray-500 mb-8 text-sm">
              Lets get started with us.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-5"
            >
              {/* Username Input */}
              <div>
                <Input
                  type="text"
                  placeholder="Username"
                  {...register("username")}
                />
                {errors.username && (
                  <p className="text-red-500 text-xs mt-1.5 px-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1.5 px-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Mobile Input */}
              <div>
                <Input
                  type="tel"
                  placeholder="Mobile number"
                  {...register("mobile")}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1.5 px-1">
                    {errors.mobile.message}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1.5 px-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password Input */}
              <div>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1.5 px-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Sending OTP..." : "Get OTP"}
                </Button>
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
              Already have an account? <AuthLink href="/login">Log in</AuthLink>
            </p>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
