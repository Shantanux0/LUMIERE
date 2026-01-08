import InfoPageLayout from "@/components/layout/InfoPageLayout";

const Sustainability = () => {
    return (
        <InfoPageLayout title="Sustainability" subtitle="Building a legacy, not just furniture.">
            <div className="space-y-12 max-w-3xl mx-auto">
                <div>
                    <h3 className="heading-section mb-4">Our Environmental Commitment</h3>
                    <p className="text-luxury mb-4">
                        At LUMIÈRE, we believe luxury and sustainability are not mutually exclusive.
                        Every piece we create is designed to last generations, reducing the need for
                        replacement and minimizing waste.
                    </p>
                </div>

                <div className="h-px bg-border" />

                <div>
                    <h3 className="heading-section mb-4">Responsibly Sourced Materials</h3>
                    <p className="text-luxury mb-4">
                        We work exclusively with FSC-certified wood suppliers and source our leather
                        from tanneries that adhere to strict environmental standards.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>100% FSC-certified hardwoods</li>
                        <li>Natural, water-based finishes</li>
                        <li>Ethically sourced leather and textiles</li>
                        <li>Recycled and recyclable packaging</li>
                    </ul>
                </div>

                <div className="h-px bg-border" />

                <div>
                    <h3 className="heading-section mb-4">Carbon Neutral Shipping</h3>
                    <p className="text-luxury">
                        We offset 100% of our shipping emissions through verified carbon credit programs,
                        ensuring your purchase has minimal environmental impact from production to delivery.
                    </p>
                </div>
            </div>
        </InfoPageLayout>
    );
};

export default Sustainability;
