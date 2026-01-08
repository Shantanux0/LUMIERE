import InfoPageLayout from "@/components/layout/InfoPageLayout";

const CareGuide = () => {
    return (
        <InfoPageLayout title="Care Guide" subtitle="Preserve the beauty of your pieces for generations properly.">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="heading-section mb-4">Upholstery</h3>
                    <p className="text-luxury mb-4">
                        Regular maintenance is key to keeping your upholstery looking its best.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Vacuum regularly with a soft brush attachment</li>
                        <li>Rotate cushions weekly to ensure even wear</li>
                        <li>Blot spills immediately with a clean, dry cloth</li>
                        <li>Professional cleaning recommended annually</li>
                    </ul>
                </div>

                <div>
                    <h3 className="heading-section mb-4">Wood</h3>
                    <p className="text-luxury mb-4">
                        Our solid wood furniture is finished to enhance its natural beauty and durability.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Dust frequently with a soft, lint-free cloth</li>
                        <li>Avoid direct sunlight and heat sources</li>
                        <li>Use coasters and placemats to prevent water rings</li>
                        <li>Maintain consistent humidity levels</li>
                    </ul>
                </div>

                <div>
                    <h3 className="heading-section mb-4">Leather</h3>
                    <p className="text-luxury mb-4">
                        Full-grain leather develops a rich patina over time that tells your unique story.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Dust regularly with a dry cloth</li>
                        <li>Clean with a damp cloth and mild soap if needed</li>
                        <li>Condition every 6-12 months</li>
                        <li>Avoid sharp objects and direct heat</li>
                    </ul>
                </div>

                <div>
                    <h3 className="heading-section mb-4">Marble & Stone</h3>
                    <p className="text-luxury mb-4">
                        Natural stone surfaces are porous and require gentle care to prevent staining.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Seal surface upon arrival and annually thereafter</li>
                        <li>Wipe spills immediately</li>
                        <li>Use pH-neutral cleaners specifically for stone</li>
                        <li>Avoid acidic substances like lemon or vinegar</li>
                    </ul>
                </div>
            </div>
        </InfoPageLayout>
    );
};

export default CareGuide;
