import InfoPageLayout from "@/components/layout/InfoPageLayout";

const Support = () => {
    return (
        <InfoPageLayout title="Customer Support" subtitle="We're here to help with any questions or concerns.">
            <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-secondary/20 rounded-lg">
                        <h3 className="heading-card mb-4">Contact Us</h3>
                        <p className="text-muted-foreground mb-6">
                            Our concierge team is available Monday through Friday, 9am to 6pm EST.
                        </p>
                        <div className="space-y-2">
                            <p className="font-medium">Email</p>
                            <a href="mailto:support@lumiere.com" className="text-primary hover:underline">support@lumiere.com</a>
                            <p className="font-medium mt-4">Phone</p>
                            <a href="tel:+18005550123" className="text-primary hover:underline">+1 (800) 555-0123</a>
                        </div>
                    </div>
                    <div className="p-8 bg-secondary/20 rounded-lg">
                        <h3 className="heading-card mb-4">Live Chat</h3>
                        <p className="text-muted-foreground mb-6">
                            Connect with a specialist instantly for real-time assistance during business hours.
                        </p>
                        <button className="text-primary font-medium hover:underline">Start a Chat</button>
                    </div>
                </div>
            </div>
        </InfoPageLayout>
    );
};

export default Support;
