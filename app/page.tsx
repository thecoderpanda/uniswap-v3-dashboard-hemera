"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setIsLoggingIn(true);
      const toastId = toast({
        title: "Logging in...",
        description: "Redirecting to dashboard",
        variant: "success",
        duration: 1500,
      });

      // In a real app, you'd want to set a proper auth token/session
      localStorage.setItem("isAuthenticated", "true");
      
      // Wait for animation and redirect
      await new Promise(resolve => setTimeout(resolve, 1500));
      router.push("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  const loginAsAdmin = () => {
    setUsername("admin");
    setPassword("admin");
    toast({
      title: "Auto-filled credentials",
      description: "Click 'Sign in' to continue",
      duration: 2000,
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Uniswap V3 Dashboard</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Sign in to continue</p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                Username
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={isLoggingIn}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoggingIn}
              />
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? "Signing in..." : "Sign in"}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              className="w-full"
              onClick={loginAsAdmin}
              disabled={isLoggingIn}
            >
              Login as Admin
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}