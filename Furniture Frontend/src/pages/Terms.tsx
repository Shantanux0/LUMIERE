import InfoPageLayout from "@/components/layout/InfoPageLayout";

const Terms = () => {
    return (
        <InfoPageLayout title="Terms of Service" subtitle="Last updated: January 2026">
            <div className="space-y-8 max-w-3xl mx-auto text-muted-foreground">
                <div>
                    <h3 className="heading-card mb-3 text-foreground">Agreement to Terms</h3>
                    <p className="mb-4">
                        By accessing and using LUMIÈRE's website and services, you agree to be bound by these
                        Terms of Service and all applicable laws and regulations.
                    </p>
                </div>

                <div>
                    <h3 className="heading-card mb-3 text-foreground">Use of Services</h3>
                    <p className="mb-4">
                        You may use our services only for lawful purposes and in accordance with these Terms.
                        You agree not to use our services in any way that could damage, disable, or impair our website.
                    </p>
                </div>

                <div>
                    <h3 className="heading-card mb-3 text-foreground">Product Information</h3>
                    <p className="mb-4">
                        We strive to provide accurate product descriptions and pricing. However, we do not
                        warrant that product descriptions or other content is accurate, complete, or error-free.
                    </p>
                </div>

                <div>
                    <h3 className="heading-card mb-3 text-foreground">Intellectual Property</h3>
                    <p className="mb-4">
                        All content on this website, including text, graphics, logos, and images, is the
                        property of LUMIÈRE and is protected by copyright and trademark laws.
                    </p>
                </div>

                <div>
                    <h3 className="heading-card mb-3 text-foreground">Limitation of Liability</h3>
                    <p className="mb-4">
                        LUMIÈRE shall not be liable for any indirect, incidental, special, or consequential
                        damages arising out of or in connection with your use of our services.
                    </p>
                </div>

                <div>
                    <h3 className="heading-card mb-3 text-foreground">Contact</h3>
                    <p>
                        For questions about these Terms, contact us at{" "}
                        <a href="mailto:legal@lumiere.com" className="text-primary hover:underline">
                            legal@lumiere.com
                        </a>
                    </p>
                </div>
            </div>
        </InfoPageLayout>
    );
};

export default Terms;
