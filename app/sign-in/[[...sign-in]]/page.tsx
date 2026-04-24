import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center pt-24 pb-12">
      <SignIn 
        appearance={{
          elements: {
            formButtonPrimary: "bg-brand-neon hover:bg-brand-glow text-white",
            card: "bg-[#0a0a0a] border border-white/10 rounded-3xl",
            headerTitle: "text-white text-2xl font-bold",
            headerSubtitle: "text-white/50",
            socialButtonsBlockButton: "bg-white/5 border border-white/10 text-white hover:bg-white/10",
            socialButtonsBlockButtonText: "text-white",
            dividerLine: "bg-white/10",
            dividerText: "text-white/30",
            formFieldLabel: "text-white/70",
            formFieldInput: "bg-white/5 border border-white/10 text-white rounded-xl focus:border-brand-neon/50",
            footerActionText: "text-white/50",
            footerActionLink: "text-brand-neon hover:text-brand-glow"
          }
        }}
      />
    </div>
  );
}
