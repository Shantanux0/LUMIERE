import InfoPageLayout from "@/components/layout/InfoPageLayout";
import { Button } from "@/components/ui/button";

const CookieSettings = () => {
    return (
        <InfoPageLayout title="Cookie Settings" subtitle="Manage your cookie preferences.">
            <div className="space-y-12 max-w-3xl mx-auto">
                <div>
                    <h3 className="heading-section mb-4">About Cookies</h3>
                    <p className="text-luxury mb-4">
                        Cookies are small text files stored on your device that help us improve your
                        browsing experience, analyze site traffic, and personalize content.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="p-6 border border-border rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h4 className="font-serif text-lg mb-2">Essential Cookies</h4>
                                <p className="text-sm text-muted-foreground">
                                    Required for the website to function properly. Cannot be disabled.
                                </p>
                            </div>
                            <div className="text-sm text-muted-foreground">Always Active</div>
                        </div>
                    </div>

                    <div className="p-6 border border-border rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h4 className="font-serif text-lg mb-2">Analytics Cookies</h4>
                                <p className="text-sm text-muted-foreground">
                                    Help us understand how visitors interact with our website.
                                </p>
                            </div>
                            <Button variant="outline" size="sm">Enable</Button>
                        </div>
                    </div>

                    <div className="p-6 border border-border rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h4 className="font-serif text-lg mb-2">Marketing Cookies</h4>
                                <p className="text-sm text-muted-foreground">
                                    Used to track visitors and display personalized advertisements.
                                </p>
                            </div>
                            <Button variant="outline" size="sm">Enable</Button>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 pt-6">
                    <Button size="lg">Save Preferences</Button>
                    <Button variant="outline" size="lg">Accept All</Button>
                </div>
            </div>
        </InfoPageLayout>
    );
};

export default CookieSettings;
