"use client";

import { motion } from "framer-motion";

const skills = {
  Languages: ["Python", "Go", "JavaScript", "TypeScript", "Dart", "SQL", "NoSQL"],
  "AI & LLM Stack": ["OpenAI", "Claude", "LangChain", "RAG", "Vector DBs", "Prompt Engineering", "MCP", "AI Agents"],
  "Backend & APIs": ["FastAPI", "Node.js", "Go", "Microservices", "WebSockets", "REST", "GraphQL"],
  "Frontend & Mobile": ["Next.js", "React", "Tailwind CSS", "Three.js", "React-Three-Fiber", "Flutter"],
  "Databases & Cloud": ["PostgreSQL", "MongoDB", "Supabase", "Redis", "Pinecone", "SQLite", "GCP", "AWS", "Azure", "Vercel"],
  "DevOps & Infra": ["Docker", "Kubernetes", "Helm", "k3d/k3s", "Traefik", "GitHub Actions", "CircleCI", "Nginx"],
  "Automation & Integrations": ["QuickBooks", "Intuit", "TSheets", "Calendly", "Stripe", "Razorpay", "Twilio", "Zapier", "n8n", "Zoho Bigin", "Zoho Books", "Zoho Analytics", "ActiveCampaign"],
  "Tools & Platforms": ["Git", "GitHub", "Postman", "Figma", "Jira", "Notion", "SEO"],
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Languages: { bg: "bg-yellow-500/10", text: "text-yellow-300", border: "border-yellow-500/20" },
  "AI & LLM Stack": { bg: "bg-purple-500/10", text: "text-purple-300", border: "border-purple-500/20" },
  "Backend & APIs": { bg: "bg-green-500/10", text: "text-green-300", border: "border-green-500/20" },
  "Frontend & Mobile": { bg: "bg-blue-500/10", text: "text-blue-300", border: "border-blue-500/20" },
  "Databases & Cloud": { bg: "bg-red-500/10", text: "text-red-300", border: "border-red-500/20" },
  "DevOps & Infra": { bg: "bg-cyan-500/10", text: "text-cyan-300", border: "border-cyan-500/20" },
  "Automation & Integrations": { bg: "bg-orange-500/10", text: "text-orange-300", border: "border-orange-500/20" },
  "Tools & Platforms": { bg: "bg-pink-500/10", text: "text-pink-300", border: "border-pink-500/20" },
};

const SkillSet = () => {
  return (
    <section className="w-full py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="heading">
          My <span className="text-purple">Skills & Expertise</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Full-stack, AI, DevOps and the business tools companies actually run
          on — end-to-end, across every layer of the product.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 space-y-6">
        {Object.entries(skills).map(([category, items], catIndex) => {
          const colors = categoryColors[category] || categoryColors["Languages"];
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: catIndex * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6"
            >
              <div className={`shrink-0 sm:w-48 px-3 py-1.5 rounded-lg text-sm font-semibold ${colors.bg} ${colors.text} ${colors.border} border text-center sm:text-right`}>
                {category}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: catIndex * 0.08 + index * 0.03 }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/[0.05] text-gray-300 border border-white/[0.1] hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillSet;
