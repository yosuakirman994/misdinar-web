"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export default function Register() {
  const { register, handleSubmit, reset } = useForm<any>();

  const onSubmit = async (data: any) => {
    try {
      await axios.post("/api/register", data);
      toast.success("Berhasil daftar!");
      reset();
    } catch {
      toast.error("Gagal!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-xl w-96 shadow"
      >
        <h2 className="text-xl font-bold mb-4">Form Pendaftaran</h2>

        <input {...register("nama")} placeholder="Nama" className="input" />
        <input {...register("kelas")} placeholder="Kelas" className="input" />
        <input {...register("wa")} placeholder="No WA" className="input" />

        <button className="bg-blue-900 text-white w-full py-2 rounded-lg mt-4">
          Daftar
        </button>
      </form>
    </div>
  );
}