import InfoPageLayout from "@/components/layout/InfoPageLayout";

const Privacy = () => {
    return (
        <InfoPageLayout title="Privacy Policy" subtitle="Last updated: January 2026">
            <div className="space-y-8 max-w-3xl mx-auto text-muted-foreground">
                <div>
                    <h3 className="heading-card mb-3 text-foreground">Information We Collect</h3>
                    <p className="mb-4">
                        We collect information you provide directly to us, including your name, email address,
                        shipping address, payment information, and any other information you choose to provide.
                    </p>
                </div>

                <div>
                    <h3 className="heading-card mb-3 text-foreground">How We Use Your Information</h3>
                    <p className="mb-4">
                        We use the information we collect to process your orders, communicate with you,
                        improve our services, and provide personalized shopping experiences.
                    </p>
                </div>

                <div>
                    <h3 className="heading-card mb-3 text-foreground">Data Security</h3>
                    <p className="mb-4">
                        We implement appropriate technical and organizational measures to protect your
                        personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                </div>

                <div>
                    <h3 className="heading-card mb-3 text-foreground">Your Rights</h3>
                    <p className="mb-4">
                        You have the right to access, correct, or delete your personal information.
                        You may also object to or restrict certain processing of your data.
                    </p>
                </div>

                <div>
                    <h3 className="heading-card mb-3 text-foreground">Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at{" "}
                        <a href="mailto:privacy@lumiere.com" className="text-primary hover:underline">
                            privacy@lumiere.com
                        </a>
                    </p>
                </div>
            </div>
        </InfoPageLayout>
    );
};

export default Privacy;
