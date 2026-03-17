"use client";

import { useForm } from "react-hook-form";
import axios from "axios";

export default function Register() {
  const { register, handleSubmit } = useForm<any>();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl w-96 shadow-xl"
      >
        <h2 className="text-xl font-bold mb-4">Form Pendaftaran</h2>

        <input {...register("nama")} placeholder="Nama" className="input" />
        <input {...register("kelas")} placeholder="Kelas" className="input" />
        <input {...register("wa")} placeholder="No WA" className="input" />

        <button className="bg-blue-600 text-white w-full py-2 rounded-lg mt-4">
          Daftar
        </button>
      </form>
    </div>
  );
}