import InfoPageLayout from "@/components/layout/InfoPageLayout";

const Press = () => {
    return (
        <InfoPageLayout title="Press & Media" subtitle="Featured in the world's leading design publications.">
            <div className="space-y-12 max-w-3xl mx-auto">
                <div>
                    <h3 className="heading-section mb-6">Recent Features</h3>
                    <div className="space-y-6">
                        <div className="pb-6 border-b border-border">
                            <p className="text-sm text-muted-foreground mb-2">Architectural Digest · December 2025</p>
                            <h4 className="font-serif text-xl mb-2">"The New Era of Sustainable Luxury"</h4>
                            <p className="text-muted-foreground">
                                How LUMIÈRE is redefining premium furniture with eco-conscious practices.
                            </p>
                        </div>
                        <div className="pb-6 border-b border-border">
                            <p className="text-sm text-muted-foreground mb-2">Wallpaper* · October 2025</p>
                            <h4 className="font-serif text-xl mb-2">"50 Best Furniture Brands"</h4>
                            <p className="text-muted-foreground">
                                LUMIÈRE named among the top furniture brands shaping modern interiors.
                            </p>
                        </div>
                        <div className="pb-6 border-b border-border">
                            <p className="text-sm text-muted-foreground mb-2">Elle Decor · September 2025</p>
                            <h4 className="font-serif text-xl mb-2">"Timeless Design for Today"</h4>
                            <p className="text-muted-foreground">
                                Exploring LUMIÈRE's approach to creating heirloom-quality furniture.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-border" />

                <div>
                    <h3 className="heading-section mb-4">Media Inquiries</h3>
                    <p className="text-luxury mb-4">
                        For press inquiries, high-resolution images, or interview requests, please contact our media team.
                    </p>
                    <p className="font-medium">Email: <a href="mailto:press@lumiere.com" className="text-primary hover:underline">press@lumiere.com</a></p>
                </div>
            </div>
        </InfoPageLayout>
    );
};

export default Press;
