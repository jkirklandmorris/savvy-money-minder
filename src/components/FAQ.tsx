import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does ZZPay calculate my taxes?",
    answer: "ZZPay uses advanced algorithms to analyze your business transactions and apply current Dutch tax regulations. We automatically track your income, expenses, and BTW obligations to provide real-time tax calculations.",
  },
  {
    question: "Is my banking data secure?",
    answer: "Yes, we use bank-level encryption and security measures. We're compliant with PSD2 regulations and never store your banking credentials. All connections are made through secure, authorized channels.",
  },
  {
    question: "Can I connect multiple bank accounts?",
    answer: "Yes, you can connect multiple Dutch bank accounts to get a complete overview of your business finances and tax obligations.",
  },
  {
    question: "What support do you offer?",
    answer: "We provide email support for all customers, with typical response times under 24 hours. Our help center also contains detailed guides and FAQs.",
  },
];

export const FAQ = () => {
  return (
    <div className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find answers to common questions about ZZPay.
          </p>
        </div>
        <div className="mx-auto max-w-3xl mt-16">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};