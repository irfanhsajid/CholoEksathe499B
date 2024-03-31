

const Footer = () => {
    return (
        <div className="bg-purple-900 text-white w-full mt-7 px-6">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold">About Us</h4>
                        <div className="border-b border-secondary w-20 mt-2"></div>
                        <p className="text-sm text-gray-300 mt-2">We the CholoFiri people offer the best quality of services having top most professional experiences. Youll feel awesome with us In Sha Allah! *,*</p>
                        <div className="mt-4">
                            <p className="text-sm font-light"><i className="fas fa-phone-alt me-3 text-secondary"></i>1-677-124-44227</p>
                            <p className="text-sm font-light"><i className="fas fa-map-marker-alt me-3 text-secondary"></i>184 Main Collins Street</p>
                            <p className="text-sm font-light"><i className="fas fa-envelope me-3 text-secondary"></i>info@CholoFiri.com</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold">Latest Posts</h4>
                        <div className="border-b border-secondary w-20 mt-2"></div>
                        <div className="mt-2">
                            <span className="text-sm font-light text-secondary">August 30, 2023</span>
                            <p className="text-sm font-light mt-1">How To Take Better Photos?</p>
                        </div>
                        <div className="mt-2">
                            <span className="text-sm font-light text-secondary">January 30, 2020</span>
                            <p className="text-sm font-light mt-1">14 Things To See And Do When Visiting Kyoto</p>
                        </div>
                        <div className="mt-2">
                            <span className="text-sm font-light text-secondary">September 30, 2021</span>
                            <p className="text-sm font-light mt-1">Backpacking Laos: A Full Travel Guide for You</p>
                        </div>
                        <div className="mt-2">
                            <span className="text-sm font-light text-secondary">December 30, 2021</span>
                            <p className="text-sm font-light mt-1">Kashmir: The Heavenly Place.</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold">Latest Tweets</h4>
                        <div className="border-b border-secondary w-20 mt-2"></div>
                        <div className="mt-2">
                            <p className="text-sm font-light text-gray-300"><i className="fab fa-twitter me-2 text-secondary"></i>@alexherder hi @alexherder, we cant recommend anyone specific, but you can find a list of freelancers working with… https://t.co/fs1gMcMOej</p>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm font-light text-gray-300"><i className="fab fa-twitter me-2 text-secondary"></i>@simonrichwright Heres an article to get you started with using our support platform: https://t.co/eiUoQNlHUh Let… https://t.co/PhSMKT4Rph</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
