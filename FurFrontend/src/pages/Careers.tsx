import InfoPageLayout from "@/components/layout/InfoPageLayout";
import { Button } from "@/components/ui/button";

const Careers = () => {
    return (
        <InfoPageLayout title="Careers" subtitle="Join a team passionate about design, craft, and quality.">
            <div className="space-y-16">
                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="heading-section mb-6">Why LUMIÈRE?</h3>
                    <p className="text-luxury">
                        We're a team of designers, craftspeople, and storytellers united by a shared
                        passion for creating furniture that elevates everyday living. If you value
                        craftsmanship, sustainability, and timeless design, we'd love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 border border-border rounded-lg">
                        <h3 className="font-serif text-xl mb-3">Growth</h3>
                        <p className="text-muted-foreground">
                            Opportunities to develop your skills alongside industry veterans.
                        </p>
                    </div>
                    <div className="p-6 border border-border rounded-lg">
                        <h3 className="font-serif text-xl mb-3">Culture</h3>
                        <p className="text-muted-foreground">
                            A collaborative environment that values creativity and innovation.
                        </p>
                    </div>
                    <div className="p-6 border border-border rounded-lg">
                        <h3 className="font-serif text-xl mb-3">Impact</h3>
                        <p className="text-muted-foreground">
                            Create pieces that become part of people's homes and stories.
                        </p>
                    </div>
                </div>

                <div className="bg-secondary/30 p-8 md:p-12 rounded-lg text-center max-w-3xl mx-auto">
                    <h3 className="heading-section mb-6">Open Positions</h3>
                    <p className="text-luxury mb-8">
                        We're always looking for talented individuals. Send your resume and portfolio to
                        join our team.
                    </p>
                    <Button size="lg" className="px-8">careers@lumiere.com</Button>
                </div>
            </div>
        </InfoPageLayout>
    );
};

export default Careers;
