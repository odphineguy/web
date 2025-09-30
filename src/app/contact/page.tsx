import ContactForm from "@/components/ContactForm";
import ReceiptScanner from "@/components/ReceiptScanner";
export const metadata = {
  title: "Contact | Abe Media",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-foreground">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Send us a Message
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Receipt Scanner Demo Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Try Our <span className="text-primary">Receipt Scanner</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Upload a receipt and see our AI-powered scanner in action.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Receipt Scanner Demo</h3>
                <p className="text-muted-foreground">Upload an image to get started</p>
              </div>
              <ReceiptScanner />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


