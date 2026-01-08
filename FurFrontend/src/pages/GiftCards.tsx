import InfoPageLayout from "@/components/layout/InfoPageLayout";
import { Button } from "@/components/ui/button";

const GiftCards = () => {
    return (
        <InfoPageLayout title="Gift Cards" subtitle="Give the gift of timeless design.">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-[4/3] bg-secondary/50 rounded-lg flex items-center justify-center border border-border/50">
                    <div className="text-center p-8">
                        <span className="font-serif text-3xl block mb-2 tracking-widest">LUMIÈRE</span>
                        <span className="text-sm tracking-[0.3em] uppercase opacity-60">Gift Card</span>
                    </div>
                </div>

                <div>
                    <h3 className="heading-section mb-6">Digital Gift Card</h3>
                    <p className="text-luxury mb-8">
                        Our digital gift cards are delivered instantly via email and contain instructions to redeem
                        them at checkout. They have no additional processing fees and never expire.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-3">Select Amount</label>
                            <div className="flex flex-wrap gap-4">
                                {['$100', '$250', '$500', '$1000'].map((amount) => (
                                    <button key={amount} className="px-6 py-3 border border-border rounded hover:border-foreground transition-colors">
                                        {amount}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Button size="lg" className="w-full md:w-auto">Add to Cart</Button>
                    </div>
                </div>
            </div>
        </InfoPageLayout>
    );
};

export default GiftCards;
