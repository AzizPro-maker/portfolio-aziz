"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";

interface GithubData {
  public_repos: number;
  followers: number;
  following: number;
}

export default function GithubStats() {
  const [data, setData] = useState<GithubData | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/AzizPro-maker")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching github stats", err));
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="p-8 bg-gradient-to-br from-slate-900 to-[#09090B] border border-slate-800 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(34,211,238,0.05)]">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-slate-800 rounded-full text-indigo-400">
            <FaGithub size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">GitHub Statistics</h3>
            <p className="text-slate-400 text-sm">@AzizPro-maker</p>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">{data ? data.public_repos : "-"}</p>
            <p className="text-xs text-slate-500 font-mono mt-1">REPOSITORIES</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">{data ? data.followers : "-"}</p>
            <p className="text-xs text-slate-500 font-mono mt-1">FOLLOWERS</p>
          </div>
        </div>
      </div>
    </section>
  );
}