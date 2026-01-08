import InfoPageLayout from "@/components/layout/InfoPageLayout";

const Shipping = () => {
    return (
        <InfoPageLayout title="Shipping & Returns" subtitle="Transparent policies for a seamless experience.">
            <div className="space-y-12 max-w-3xl mx-auto">
                <div>
                    <h3 className="heading-section mb-4">White Glove Delivery</h3>
                    <p className="text-luxury mb-4">
                        We offer premium white glove delivery for all large furniture items. This service includes
                        scheduled delivery, unpacking, assembly, and removal of packing materials.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Flat rate of $199 for unlimited furniture items</li>
                        <li>Estimated delivery window: 2-4 weeks</li>
                        <li>Delivery team will contact you to schedule a convenient time</li>
                    </ul>
                </div>

                <div className="h-px bg-border" />

                <div>
                    <h3 className="heading-section mb-4">Standard Shipping</h3>
                    <p className="text-luxury mb-4">
                        Smaller items including decor and accessories ship via standard ground shipping.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Free shipping on orders over $100</li>
                        <li>$15 flat rate for orders under $100</li>
                        <li>Estimated delivery: 3-7 business days</li>
                    </ul>
                </div>

                <div className="h-px bg-border" />

                <div>
                    <h3 className="heading-section mb-4">Returns & Exchanges</h3>
                    <p className="text-luxury mb-4">
                        We want you to love your purchase. If you're not completely satisfied, we accept returns
                        within 30 days of delivery.
                    </p>
                    <p className="text-luxury">
                        Please note that custom or made-to-order items are final sale. A restocking fee of 15%
                        may apply to furniture returns unless the item is defective.
                    </p>
                </div>
            </div>
        </InfoPageLayout>
    );
};

export default Shipping;
