import React from 'react'

const Terms = () => {
    return (
        <div className="container mx-auto p-6 lg:p-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">Terms and Conditions</h1>
            <div className="space-y-6">
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Service Agreement</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Upon booking, a service agreement will be created between the client and Elpro Cleaning Services, outlining the services to be provided.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Payments and Cancellations</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Payments for services are due at the time of service. Cancellations must be made at least 24 hours in advance to avoid a cancellation fee.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Liability</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Elpro Cleaning Services is not responsible for any damages that occur beyond our control. We are fully insured, and any claims must be made within 24 hours of service.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Modifications</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We reserve the right to modify these terms at any time, and changes will be effective upon posting on this website.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-gray-700 leading-relaxed">
                        For questions regarding these terms, please email us at <a href="mailto:info@elprocleaningservice.com" className="text-blue-500">info@elprocleaningservice.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default Terms