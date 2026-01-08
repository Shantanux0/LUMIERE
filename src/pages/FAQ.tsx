import InfoPageLayout from "@/components/layout/InfoPageLayout";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    return (
        <InfoPageLayout title="Frequently Asked" subtitle="Answers to common questions about our products and services.">
            <div className="max-w-2xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-serif text-lg">Do you ship internationally?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            Yes, we ship to select international destinations. Please contact our support team
                            for a custom shipping quote based on your location and desired items.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-serif text-lg">Can I customize the fabric?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            Many of our upholstered pieces are available in a variety of premium fabrics and leathers.
                            Look for the "Custom" tag on product pages or visit our Trade program for bespoke options.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-serif text-lg">What is your warranty policy?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            We offer a 5-year structural warranty on all furniture frames and a 1-year warranty
                            on fabrics and finishes against manufacturing defects.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className="font-serif text-lg">Where is your furniture made?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            Our collection is crafted by master artisans in Italy, Portugal, and the United States,
                            ensuring the highest standards of quality and ethical production.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger className="font-serif text-lg">Do you offer design services?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            Yes, we offer complimentary design consultations. Our experts can help you select
                            the perfect pieces for your space and create a cohesive look.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </InfoPageLayout>
    );
};

export default FAQ;
