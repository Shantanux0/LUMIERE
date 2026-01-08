import InfoPageLayout from "@/components/layout/InfoPageLayout";
import { Button } from "@/components/ui/button";

const Trade = () => {
    return (
        <InfoPageLayout title="Trade Program" subtitle="Exclusive benefits for interior designers and architects.">
            <div className="space-y-16">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 border border-border rounded-lg">
                        <h3 className="font-serif text-xl mb-3">Trade Pricing</h3>
                        <p className="text-muted-foreground">
                            Enjoy exclusive trade discounts on our entire collection with no minimums.
                        </p>
                    </div>
                    <div className="p-6 border border-border rounded-lg">
                        <h3 className="font-serif text-xl mb-3">Dedicated Support</h3>
                        <p className="text-muted-foreground">
                            Direct access to a trade specialist to assist with quotes and order management.
                        </p>
                    </div>
                    <div className="p-6 border border-border rounded-lg">
                        <h3 className="font-serif text-xl mb-3">Customization</h3>
                        <p className="text-muted-foreground">
                            Access to COM (Customer's Own Material) and bespoke finish options.
                        </p>
                    </div>
                </div>

                <div className="bg-secondary/30 p-8 md:p-12 rounded-lg text-center max-w-3xl mx-auto">
                    <h3 className="heading-section mb-6">Join the Program</h3>
                    <p className="text-luxury mb-8">
                        To apply, please provide your business license, resale certificate, or professional
                        membership credentials. Applications are typically reviewed within 48 hours.
                    </p>
                    <Button size="lg" className="px-8">Apply Now</Button>
                </div>
            </div>
        </InfoPageLayout>
    );
};

export default Trade;
