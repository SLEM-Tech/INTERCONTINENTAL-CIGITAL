"use client";
import React, { useEffect, useState } from "react";
import AppLayout from "@src/components/AppLayout";
import { useSearchParams } from "next/navigation";
import { CompanyName } from "@constants";
import RefundPolicy from "./_components/RefundPolicy";
import DeliveryReturn from "./_components/DeliveryReturn";

const Page = () => {
	const searchParams = useSearchParams().toString();
	const search = searchParams.replace(/=$/, "");
	const [activeTab, setActiveTab] = useState<string>("termsOfUse");

	useEffect(() => {
		if (search === "terms-of-use") {
			setActiveTab("termsOfUse");
		} else if (search === "privacy-policy") {
			setActiveTab("privacyPolicy");
		} else if (search === "delivery-return") {
			setActiveTab("deliveryReturn");
		} else if (search === "refund-policy") {
			setActiveTab("refundPolicy");
		}
	}, [search]);

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<AppLayout>
			<main className='bg-white mx-auto mt-28 lg:mt-32 pb-12 lg:pb-24'>
				<section className='flex w-full flex-col items-center pt-8 xl:pt-16 gap-2 sm:gap-3 px-2 sm:px-8 md:px-16 text-center'>
					<h4 className='text-black text-base sm:text-xl font-semibold leading-[120%]'>
						Our Policies
					</h4>
					<h3 className='font-semibold text-xl sm:text-2xl md:text-3xl leading-[150%]'>
						Intercontinental Cigital Service Concept Limited Policies
					</h3>
					<span className='text-xs sm:text-sm xl:text-base leading-[150%] text-black/80 sm:max-w-3xl slg:max-w-2xl'>
						At Intercontinental Cigital Service Concept Limited, we excel in
						general merchandise supply and contract services with international
						reach, cigital integration, and comprehensive business solutions for
						modern global commerce needs.
					</span>
					<div className='flex gap-2 mt-3 xl:mt-8 text-[10px] xs:text-xs sm:text-sm slg:text-base leading-[140%] bg-[#F5F5F5] p-1 rounded-md transition'>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "termsOfUse"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("termsOfUse")}
						>
							Terms of use
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "privacyPolicy"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("privacyPolicy")}
						>
							Privacy Policy
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "deliveryReturn"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("deliveryReturn")}
						>
							Delivery & Return
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "refundPolicy"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("refundPolicy")}
						>
							Refund Policy
						</button>
					</div>
				</section>

				<div className='flex mx-auto w-full mt-4 md:mt-8 text-base leading-[155%] px-2 sm:px-0 sm:max-w-xl slg:max-w-2xl pb-20'>
					{activeTab === "termsOfUse" && (
						<div id='termsOfUse' className='text-[#667085]'>
							<h4 className='text-base sm:text-xl xl:text-2xl font-semibold text-black capitalize'>
								Terms of Use - Intercontinental Cigital Service Concept Limited
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								By engaging Intercontinental Cigital Service Concept Limited for
								general merchandise and contract services, you agree to our
								comprehensive terms designed for international business
								operations and cigital service integration:
							</p>

							<ul className='list-disc pl-5 mt-2 space-y-2 text-xs md:text-sm xl:text-base'>
								<li>
									<span className='font-medium'>
										International Business Operations:
									</span>{" "}
									Intercontinental Cigital Service Concept specializes in
									cross-border general merchandise supply and contract services
									with cigital integration, international logistics
									coordination, multi-jurisdictional compliance management, and
									global business solutions.
								</li>
								<li>
									<span className='font-medium'>
										Cigital Service Integration:
									</span>{" "}
									Our services combine traditional merchandise supply with
									cutting-edge cigital solutions including e-commerce
									integration, cigital documentation systems, online project
									management platforms, and automated business process
									workflows.
								</li>
								<li>
									<span className='font-medium'>
										Global Supply Chain Management:
									</span>{" "}
									Comprehensive merchandise sourcing from international
									suppliers with quality assurance protocols, customs
									coordination services, multi-currency transaction
									capabilities, and real-time supply chain visibility.
								</li>
								<li>
									<span className='font-medium'>
										Contract Services Portfolio:
									</span>{" "}
									Professional contract execution including project management,
									international business consulting, cigital transformation
									services, cross-border logistics coordination, and
									comprehensive business solution development.
								</li>
								<li>
									<span className='font-medium'>
										Cigital Technology Integration:
									</span>{" "}
									Advanced technology solutions including cloud-based inventory
									management, cigital procurement platforms, automated contract
									administration, and integrated business intelligence systems
									for enhanced operational efficiency.
								</li>
								<li>
									<span className='font-medium'>
										International Compliance Management:
									</span>{" "}
									Comprehensive compliance services covering international trade
									regulations, cigital commerce laws, cross-border taxation
									requirements, and multi-jurisdictional business standards with
									expert guidance and documentation.
								</li>
								<li>
									<span className='font-medium'>
										Multi-Channel Business Solutions:
									</span>{" "}
									Integrated service delivery through cigital platforms,
									traditional business channels, and hybrid approaches designed
									to optimize client accessibility, operational efficiency, and
									business outcomes across diverse markets.
								</li>
								<li>
									<span className='font-medium'>
										Quality & Performance Standards:
									</span>{" "}
									International quality management systems with cigital
									monitoring, performance analytics, customer satisfaction
									tracking, and continuous improvement processes to ensure
									service excellence and client success.
								</li>
								<li>
									<span className='font-medium'>
										Payment & Currency Management:
									</span>{" "}
									Flexible payment solutions including multi-currency support,
									international wire transfers, cigital payment platforms, and
									trade financing options designed to facilitate seamless
									international business transactions.
								</li>
							</ul>

							<p className='mt-4 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<span className='font-medium'>Cigital Innovation:</span> We
								continuously invest in cigital technologies and international
								business capabilities to provide cutting-edge solutions that
								meet evolving global commerce requirements and client
								expectations.
							</p>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<span className='font-medium'>Global Partnership Network:</span>{" "}
								Strategic partnerships with international suppliers, logistics
								providers, and technology partners enable comprehensive service
								delivery and competitive advantages for our clients worldwide.
							</p>
						</div>
					)}

					{activeTab === "privacyPolicy" && (
						<div id='privacyPolicy' className='text-[#667085]'>
							<h4 className='text-sm sm:text-xl xl:text-2xl font-semibold text-black'>
								PRIVACY POLICY - INTERCONTINENTAL CIGITAL SERVICE CONCEPT
								LIMITED
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								Intercontinental Cigital Service Concept Limited is committed to
								protecting client privacy across our international business
								operations, cigital service platforms, and global commerce
								solutions while maintaining compliance with international
								privacy standards.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								INTERNATIONAL BUSINESS DATA COLLECTION
							</h4>

							<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-decimal pl-4'>
								<li>
									International client information (company details, business
									registration, global contact information)
								</li>
								<li>
									Cross-border transaction data and multi-currency payment
									processing information
								</li>
								<li>
									Cigital platform usage analytics and international commerce
									behavior patterns
								</li>
								<li>
									Supply chain and logistics data for global merchandise
									coordination
								</li>
								<li>
									Contract service specifications and international project
									requirements
								</li>
								<li>
									Compliance documentation for multi-jurisdictional business
									operations
								</li>
								<li>
									Cigital communication records and international business
									correspondence
								</li>
								<li>
									Performance analytics and global business intelligence data
								</li>
							</ul>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								GLOBAL DATA USAGE PRACTICES
							</h4>

							<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-disc pl-4'>
								<li>
									To facilitate international business operations and
									cross-border commerce
								</li>
								<li>
									To provide cigital service integration and technology
									solutions
								</li>
								<li>
									To coordinate global supply chains and international logistics
								</li>
								<li>
									To ensure compliance with multi-jurisdictional regulations and
									standards
								</li>
								<li>
									To process international payments and manage currency
									transactions
								</li>
								<li>
									To deliver contract services and manage global project
									execution
								</li>
								<li>
									To provide business intelligence and international market
									insights
								</li>
								<li>
									To maintain cigital security and prevent international fraud
								</li>
							</ul>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								INTERNATIONAL DATA SECURITY PROTOCOLS
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								We implement international-grade security measures including
								encrypted cross-border communications, secure
								multi-jurisdictional data storage, and compliance with global
								privacy regulations including GDPR, CCPA, and local privacy
								laws. Cigital platforms maintain enterprise-level security with
								continuous monitoring and threat detection.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								GLOBAL PARTNER & REGULATORY COMPLIANCE
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								International business data is shared with global partners under
								strict confidentiality agreements and privacy protection
								requirements. Regulatory authorities receive necessary
								information for compliance and trade facilitation. Cross-border
								data transfers comply with international privacy frameworks and
								bilateral agreements.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								CLIENT CONTROL & INTERNATIONAL RIGHTS
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								International clients have comprehensive rights including data
								access, correction, and deletion under applicable privacy laws.
								Cross-border data portability services available for business
								continuity. Global privacy inquiries and requests handled
								through our international privacy office at
								privacy@intercigital.com.ng.
							</p>
						</div>
					)}

					{activeTab === "deliveryReturn" && (
						<div id='deliveryReturn' className='text-[#667085]'>
							<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
								INTERNATIONAL DELIVERY & SERVICE POLICY - INTERCONTINENTAL
								CIGITAL SERVICE CONCEPT
							</h3>

							<p className='text-xs md:text-sm xl:text-base mb-4'>
								Intercontinental Cigital Service Concept Limited provides
								comprehensive international delivery solutions and cigital
								service deployment with global reach, cross-border logistics
								expertise, and technology-enhanced service delivery for modern
								international commerce.
							</p>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									International Merchandise Delivery
								</h4>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div>
										<h5 className='font-medium text-xs md:text-sm mb-1'>
											Domestic Operations (Nigeria)
										</h5>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>
												Same-day delivery within Lagos for urgent business
												requirements
											</li>
											<li>
												Next-day delivery nationwide with tracking and
												confirmation
											</li>
											<li>
												Cigital integration with real-time delivery status
												updates
											</li>
											<li>
												Free delivery for orders above ₦150,000 within major
												cities
											</li>
										</ul>
									</div>
									<div>
										<h5 className='font-medium text-xs md:text-sm mb-1'>
											International Operations
										</h5>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>
												Cross-border delivery coordination with customs
												clearance
											</li>
											<li>
												International shipping via air, sea, and land
												transportation
											</li>
											<li>Multi-currency pricing and payment processing</li>
											<li>
												Global tracking with international logistics partners
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Cigital Service Deployment
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>
										Cloud-based service activation within 24 hours of contract
										execution
									</li>
									<li>
										Cigital platform integration with existing business systems
									</li>
									<li>
										International compliance configuration for
										multi-jurisdictional operations
									</li>
									<li>
										Real-time service monitoring and performance analytics
										dashboard
									</li>
									<li>
										24/7 global technical support with multi-language
										capabilities
									</li>
									<li>Automated service scaling and capacity management</li>
								</ul>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Contract Services & Project Delivery
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>
										International project management with multi-timezone
										coordination
									</li>
									<li>
										Cigital collaboration platforms for global team coordination
									</li>
									<li>
										Milestone-based delivery with automated progress tracking
									</li>
									<li>
										Multi-currency billing and international payment processing
									</li>
									<li>
										Cross-border compliance verification and documentation
									</li>
									<li>
										Global quality assurance with international standards
										compliance
									</li>
								</ul>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Technology Integration & Support
								</h4>
								<div className='space-y-3'>
									<div>
										<p className='font-medium text-xs md:text-sm'>
											Cigital Platform Integration:
										</p>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>
												API integration with existing business systems and
												international platforms
											</li>
											<li>
												Real-time data synchronization across global operations
											</li>
											<li>
												Automated workflow integration and business process
												optimization
											</li>
											<li>
												Multi-language interface support for international
												operations
											</li>
										</ul>
									</div>
									<div>
										<p className='font-medium text-xs md:text-sm'>
											Global Support Services:
										</p>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>
												24/7 international customer support with regional
												expertise
											</li>
											<li>
												Multi-language technical documentation and user guides
											</li>
											<li>
												Regional service representatives for localized support
											</li>
											<li>
												Emergency response protocols for business-critical
												services
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									International Quality Guarantees
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>
										Global service level agreements with performance guarantees
									</li>
									<li>
										International quality standards compliance and certification
									</li>
									<li>
										Cross-border warranty coordination and service support
									</li>
									<li>
										Multi-jurisdictional dispute resolution and mediation
										services
									</li>
									<li>Currency protection and exchange rate risk management</li>
									<li>
										International business continuity and disaster recovery
										planning
									</li>
								</ul>
							</div>

							<div className='mt-6 pt-4 border-t border-gray-200'>
								<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
									Global Contact Information
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>International Operations: global@intercigital.com.ng</li>
									<li>Cigital Services: cigital@intercigital.com.ng</li>
									<li>Contract Services: contracts@intercigital.com.ng</li>
									<li>Technical Support: support@intercigital.com.ng</li>
									<li>Phone: +234-801-234-5017</li>
									<li>Website: www.intercigital.com.ng</li>
								</ul>
							</div>
						</div>
					)}

					{activeTab === "refundPolicy" && (
						<div id='refundPolicy' className='text-[#667085]'>
							<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
								REFUND POLICY - INTERCONTINENTAL Cigital SERVICE CONCEPT LIMITED
							</h3>
							<p className='text-xs md:text-sm xl:text-base mb-4'>
								Effective Date: {new Date().toLocaleDateString("en-GB")}
							</p>

							<p className='text-xs md:text-sm xl:text-base mb-4'>
								At Intercontinental Cigital Service Concept Limited, we are
								committed to delivering exceptional international business
								solutions, cigital services, and global commerce support. Our
								comprehensive refund policy addresses the complexities of
								international operations while ensuring fair treatment across
								all jurisdictions.
							</p>

							<ul className='list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<li>
									<span className='font-medium'>
										1. International Service Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Cross-border service failure refunds with currency
											protection guarantees
										</li>
										<li>
											Cigital platform malfunction refunds for service
											disruptions exceeding SLA thresholds
										</li>
										<li>
											International compliance failure refunds if services don't
											meet regulatory requirements
										</li>
										<li>
											Global project delivery refunds for milestone failures and
											timeline breaches
										</li>
										<li>
											Multi-jurisdictional dispute resolution with international
											arbitration options
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										2. Cigital Service Integration Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											API integration failure refunds if cigital connections
											cannot be established
										</li>
										<li>
											Platform compatibility refunds for systems that don't
											integrate as specified
										</li>
										<li>
											Data migration failure refunds with comprehensive data
											recovery services
										</li>
										<li>
											Performance optimization refunds if cigital solutions
											don't meet efficiency targets
										</li>
										<li>
											Security breach compensation with enhanced protection
											implementation
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										3. International Merchandise Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Cross-border delivery failure refunds with alternative
											sourcing options
										</li>
										<li>
											Customs clearance issue refunds for documentation or
											compliance problems
										</li>
										<li>
											Quality standard refunds for international merchandise not
											meeting specifications
										</li>
										<li>
											Currency fluctuation protection for large international
											orders
										</li>
										<li>
											Force majeure refunds for international shipping
											disruptions beyond our control
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										4. Global Contract Service Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											International project management refunds for coordination
											failures
										</li>
										<li>
											Multi-timezone service refunds for communication and
											delivery issues
										</li>
										<li>
											Compliance consulting refunds if regulatory guidance
											proves incorrect
										</li>
										<li>
											Global business solution refunds for outcomes not meeting
											international standards
										</li>
										<li>
											Cross-cultural business consulting refunds for ineffective
											market strategies
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										5. Non-Refundable International Services
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Successfully completed international projects meeting all
											agreed specifications
										</li>
										<li>
											Cigital services operating within performance parameters
											and SLA requirements
										</li>
										<li>
											International consultation services delivered according to
											agreed scope
										</li>
										<li>
											Third-party international costs including customs, taxes,
											and regulatory fees
										</li>
										<li>
											Global marketplace transactions completed through our
											platform successfully
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										6. International Refund Processing
									</span>
									<p className='mt-1'>
										To request refunds for international services:
									</p>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>Email: refunds@intercigital.com.ng</li>
										<li>International Hotline: +234-801-234-5017</li>
										<li>
											Global Support Portal: Available 24/7 with multi-language
											support
										</li>
										<li>
											Provide comprehensive documentation including
											international contracts and correspondence
										</li>
										<li>
											Include jurisdictional requirements and applicable law
											considerations
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										7. Multi-Jurisdictional Assessment
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											International legal review for complex cross-border refund
											situations
										</li>
										<li>
											Currency impact analysis and exchange rate protection
											evaluation
										</li>
										<li>
											Regulatory compliance verification across multiple
											jurisdictions
										</li>
										<li>
											International arbitration services for disputed global
											transactions
										</li>
										<li>
											Cross-border dispute mediation with cultural and legal
											expertise
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										8. Global Resolution Alternatives
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											International service credits applicable to global
											operations and future projects
										</li>
										<li>
											Alternative service provider coordination for continued
											business operations
										</li>
										<li>
											Enhanced service agreements with improved performance
											guarantees
										</li>
										<li>
											Global account management upgrades with dedicated
											international support
										</li>
										<li>
											Multi-currency compensation options with favorable
											exchange rate protection
										</li>
									</ul>
								</li>
							</ul>

							<div className='mt-6 pt-4 border-t border-gray-200'>
								<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
									Contact Information
								</h4>
								<p className='text-xs md:text-sm xl:text-base'>
									For international refunds and global resolution:
								</p>
								<ul className='list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>Intercontinental Cigital Service Concept Limited</li>
									<li>Email: refunds@intercigital.com.ng</li>
									<li>Global Services: global@intercigital.com.ng</li>
									<li>Phone: +234-801-234-5017</li>
									<li>Website: www.intercigital.com.ng</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</main>
		</AppLayout>
	);
};

export default Page;
