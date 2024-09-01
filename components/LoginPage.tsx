'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-black">InboxInspo</h1>
            <nav className="flex space-x-4">
              <Link
                href="/content-input"
                className="text-gray-600 hover:text-black"
              >
                Content Input
              </Link>
              <Link
                href="/post-preview"
                className="text-gray-600 hover:text-black"
              >
                Post Preview
              </Link>
              <Link
                href="/login"
                className="text-gray-600 hover:text-black font-semibold"
              >
                Login
              </Link>
              <Link
                href="/create-account"
                className="text-gray-600 hover:text-black"
              >
                Create Account
              </Link>
              <Link href="/settings" className="text-gray-600 hover:text-black">
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex items-center justify-center p-4">
        <Card className="w-full max-w-md mt-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Log in</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800"
              >
                Log In
              </Button>
            </form>
            <div className="flex justify-between mt-4 text-sm">
              <Link
                href="/create-account"
                className="text-blue-600 hover:underline"
              >
                Create an account
              </Link>
              <Link
                href="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
