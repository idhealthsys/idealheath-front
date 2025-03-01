"use client";
import Head from "@/components/Shared/Head";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { LoginGoogleHandler } from "./loginGoogleHandler";
import { CredentialResponse } from "@react-oauth/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [user, setUser] = useState<{} | null>(null);
  const router = useRouter();

  const handleLoginSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      const userData = await LoginGoogleHandler(credentialResponse);
      sessionStorage.setItem("userData", JSON.stringify(userData));
      setUser(userData);
      router.push(`/dashboard`);
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  console.log(user);

  return (
    <>
      <Head
        title="Ideal Health - Login"
        description="Segurança e agilidade em um só lugar. Entre com sua conta Google e comece agora mesmo!"
      />
      <main className="bg-roxo-100">
        <div className="container flex items-center justify-center h-screen">
          <div className="p-10 bg-white rounded-md">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Bem-vindo de volta!
            </h1>
            <p className="text-center mb-4">
              Faça login agora e continue de onde parou.
            </p>
            <div>
              <GoogleOAuthProvider clientId="157121236720-4034q3bdqr0o47rjufl0ma96tr5c1h5o.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                  ux_mode={"popup"}
                />
              </GoogleOAuthProvider>
              <Link
                href={"/"}
                className="border block mt-4 p-2 rounded-md text-center 
                hover:border-[#D2E3FC] hover:bg-[#F8FAFF] transition-all duration-300 text-sm"
              >
                Voltar pro site
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
