import ContactForm from "@/components/ContactForm";
import ReceiptScanner from "@/components/ReceiptScanner";
export const metadata = {
  title: "Contact | Abe Media",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-center">Contact</h1>
        <p className="mt-2 text-muted-foreground text-center max-w-2xl mx-auto">
          Paste your component here and I’ll wire it up. For now, this page uses a white background so we can test visuals cleanly.
        </p>
        <div className="mt-8">
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Preview area</p>
            <div className="mt-4 flex items-center justify-center bg-muted p-6 rounded-md">
              <ReceiptScanner />
            </div>
          </div>
        </div>

        <div className="mt-12 mx-auto w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}


