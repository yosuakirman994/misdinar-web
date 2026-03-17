import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="absolute w-[500px] h-[500px] bg-blue-500 blur-[120px] opacity-20 rounded-full top-0 left-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl font-bold mb-4">
          Misdinar St. Clara
        </h1>

        <p className="mb-6 opacity-80">
          Melayani dengan hati, bertumbuh dalam iman
        </p>

        <a
          href="/register"
          className="bg-yellow-400 text-black px-6 py-3 rounded-xl"
        >
          Gabung Sekarang
        </a>
      </motion.div>
    </main>
  );
}