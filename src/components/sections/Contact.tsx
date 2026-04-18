"use client";

import React, { useState } from "react";
import { SOCIALS, CONTACT_EMAIL } from "@/data/socials";
import { Copy, Check, Send } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <footer id="contact" className="w-full border-t border-gray-800/60 bg-black/20 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-24">
        
        <div className="flex flex-col items-center text-center gap-8 mb-24">
          <p className="text-primary font-mono text-sm uppercase tracking-widest">
            &gt; What's Next?
          </p>
          <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground">
            Let's Build Something Together.
          </h2>
          <p className="max-w-xl text-gray-400 text-lg leading-relaxed">
            I am currently open to new opportunities or simply technical discussions regarding the Ionic and Angular ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a 
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-all active:scale-95"
            >
              <Send className="w-5 h-5" strokeWidth={2.5} />
              Send Email
            </a>
            <button 
              onClick={copyToClipboard}
              className="group flex items-center gap-3 px-8 py-4 bg-gray-900 border border-gray-800 text-gray-300 font-medium rounded-xl hover:border-gray-700 transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                  <span className="text-green-500">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 group-hover:text-primary transition-colors" strokeWidth={2} />
                  <span>{CONTACT_EMAIL}</span>
                </>
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-800/40 gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <p className="text-gray-500 text-sm font-mono">
              &copy; {currentYear} axlhnbi. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs font-mono">
              Engineered with Next.js & Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary hover:-translate-y-1 transition-all"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}