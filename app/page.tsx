"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Activity, Users, BarChart3, ShieldCheck } from "lucide-react";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      
   
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Healthcare Management System
        </h1>

        <p className="mt-4 max-w-xl text-slate-400">
          Manage patients, monitor health insights, and track analytics —
          all in one modern dashboard built for efficiency.
        </p>

        <div className="mt-8 flex gap-4">
          
          <Link href="/dashboard">
            <Button className="bg-blue-600 hover:bg-blue-700 px-6">
              Go to Dashboard
            </Button>
          </Link>

          <Link href="/patients">
            <Button variant="outline" className="border-white/20">
              View Patients
            </Button>
          </Link>

        </div>
      </section>

  
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Feature Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition">
            <Users className="mb-4 text-blue-400" />
            <h3 className="font-semibold">Patient Management</h3>
            <p className="text-sm text-slate-400 mt-2">
              Track and manage patient records with ease.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition">
            <Activity className="mb-4 text-green-400" />
            <h3 className="font-semibold">Real-time Monitoring</h3>
            <p className="text-sm text-slate-400 mt-2">
              Monitor vitals and patient conditions in real-time.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition">
            <BarChart3 className="mb-4 text-purple-400" />
            <h3 className="font-semibold">Analytics Dashboard</h3>
            <p className="text-sm text-slate-400 mt-2">
              Gain insights through advanced healthcare analytics.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition">
            <ShieldCheck className="mb-4 text-red-400" />
            <h3 className="font-semibold">Secure System</h3>
            <p className="text-sm text-slate-400 mt-2">
              Secure authentication and protected patient data.
            </p>
          </div>

        </div>
      </section>

      <footer className="text-center text-sm text-slate-500 pb-6">
        © 2026 Healthcare System • Built with Next.js
      </footer>

    </div>
  );
}