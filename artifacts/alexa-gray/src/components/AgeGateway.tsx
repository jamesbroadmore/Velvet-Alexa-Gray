import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gatewayImage from '@assets/Messenger_creation_A779F943-F2FC-4A0F-9719-8BECAE086266_1783621341102.jpeg';

interface AgeGatewayProps {
  onEnter: () => void;
}

export default function AgeGateway({ onEnter }: AgeGatewayProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background image with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${gatewayImage})` }}
        />
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-md w-full px-6 text-center"
        >
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-serif text-[#C9A96E] mb-2 tracking-wide text-glow">
              Alexa Grey
            </h1>
            <p className="text-sm uppercase tracking-[0.3em] text-[#E8E0D5]/60">
              Perth, WA
            </p>
          </div>

          <div className="bg-black/60 border border-[#C9A96E]/20 p-8 rounded-lg backdrop-blur-md">
            <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-[#C9A96E]/40 flex items-center justify-center">
              <span className="text-[#C9A96E] text-lg font-serif">18+</span>
            </div>

            <h2 className="text-2xl font-serif text-[#E8E0D5] mb-4">
              Adults Only
            </h2>
            <p className="text-sm text-[#E8E0D5]/70 mb-8 leading-relaxed">
              This website contains mature content and is intended for adults aged 18 and over. By entering, you confirm you are of legal age in your jurisdiction.
            </p>

            <div className="space-y-3">
              <button
                onClick={onEnter}
                className="w-full py-4 bg-[#8B1A2A] hover:bg-[#8B1A2A]/90 text-[#E8E0D5] font-medium rounded-md transition-colors pulse-glow"
              >
                I am 18 or older — Enter
              </button>
              <a
                href="https://www.google.com"
                className="block w-full py-3 text-sm text-[#E8E0D5]/80 hover:text-[#C9A96E] transition-colors underline-offset-4 hover:underline"
              >
                I am not 18 — Leave
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
