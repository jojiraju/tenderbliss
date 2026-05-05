import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, MapPin, Briefcase, HeartHandshake } from "lucide-react";
import { getCareerBySlug, careerRoles } from "@/lib/careerRoles";

export function generateStaticParams() {
  return careerRoles.map((role) => ({ slug: role.slug }));
}

type CareerPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CareerDetailPage({ params }: CareerPageProps) {
  const { slug } = await params;
  const role = getCareerBySlug(slug);
  if (!role) {
    notFound();
  }

  return (
    <main className="font-sans selection:bg-[#51C4D3]/30 selection:text-[#6d519d] bg-[#f8fafc] text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-gray-200/60 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#51C4D3]/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <Link href="/career" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 transition-colors hover:text-[#6d519d] mb-12 bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-gray-200 shadow-sm hover:shadow-md w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#51C4D3]/30 bg-[#51C4D3]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#51C4D3] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              {role.location}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tight">
              {role.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              {role.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_380px] items-start">
            
            {/* Left Content */}
            <div className="space-y-16">
              {/* Key Responsibilities */}
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#51C4D3]/10 text-[#51C4D3]">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  Key Responsibilities
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {role.responsibilities.map((item) => (
                    <div key={item} className="flex items-start gap-4 rounded-[2rem] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(81,196,211,0.1)]">
                      <CheckCircle2 className="w-6 h-6 text-[#6d519d] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 leading-relaxed text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We Look For */}
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6d519d]/10 text-[#6d519d]">
                    <HeartHandshake className="w-7 h-7" />
                  </div>
                  What We Look For
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {role.qualifications.map((item) => (
                    <div key={item} className="flex items-start gap-4 rounded-[2rem] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(109,81,157,0.1)]">
                      <CheckCircle2 className="w-6 h-6 text-[#51C4D3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 leading-relaxed text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Apply Section */}
              <div className="relative overflow-hidden rounded-[3rem] border border-[#51C4D3]/20 bg-gradient-to-br from-[#eff8fb] to-white p-12 md:p-16 text-center shadow-xl shadow-[#51C4D3]/5 mt-8">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#51C4D3]/10 via-transparent to-transparent opacity-60" />
                <h2 className="text-4xl font-black text-gray-900 mb-6 relative z-10">Ready to join us?</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto relative z-10 font-light">
                  If this role feels like the right fit and you are passionate about providing premium care, we would love to hear from you.
                </p>
                <Link
                  href={`/career/apply?position=${encodeURIComponent(role.title)}`}
                  className="relative z-10 inline-flex items-center justify-center gap-3 rounded-full bg-gray-900 px-12 py-6 text-lg font-bold text-white shadow-2xl shadow-gray-900/20 hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 group"
                >
                  Start Your Application 
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Sidebar (Sticky) */}
            <div className="lg:sticky lg:top-32">
              <aside className="rounded-[3rem] border border-gray-200/50 bg-white p-10 shadow-2xl shadow-gray-200/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#51C4D3]/10 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#51C4D3] to-[#6d519d]" />
                
                <h3 className="text-2xl font-black text-gray-900 mb-8 relative z-10">Role Overview</h3>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-start gap-5 group">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#eff8fb] text-[#51C4D3] group-hover:bg-[#51C4D3] group-hover:text-white transition-colors duration-300">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="pt-1">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Location</p>
                      <p className="text-gray-900 font-bold text-lg">{role.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5 group">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#f5f3fa] text-[#6d519d] group-hover:bg-[#6d519d] group-hover:text-white transition-colors duration-300">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="pt-1">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Experience</p>
                      <p className="text-gray-900 font-bold text-lg">Relevant exp. preferred</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5 group">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#eff8fb] text-[#51C4D3] group-hover:bg-[#51C4D3] group-hover:text-white transition-colors duration-300">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div className="pt-1">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Culture Fit</p>
                      <p className="text-gray-900 font-bold text-lg">Supportive & caring</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100 relative z-10">
                  <Link
                    href={`/career/apply?position=${encodeURIComponent(role.title)}`}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#51C4D3] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#51C4D3]/20 hover:bg-[#6d519d] transition-colors"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
