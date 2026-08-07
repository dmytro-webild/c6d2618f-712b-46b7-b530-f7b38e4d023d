import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesRevealCards from '@/components/sections/features/FeaturesRevealCards';
import HeroTiltedCards from '@/components/sections/hero/HeroTiltedCards';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import PricingCenteredCards from '@/components/sections/pricing/PricingCenteredCards';
import TeamGlassCards from '@/components/sections/team/TeamGlassCards';
import TestimonialMarqueeOverlayCards from '@/components/sections/testimonial/TestimonialMarqueeOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
      <div id="hero" data-section="hero">
        <SectionErrorBoundary name="hero">
          <HeroTiltedCards
            tag="Elevate Your Style"
            title="Professional Care for Exceptional Hair"
            description="Experience personalized styling and premium treatments in our serene, high-end studio."
            primaryButton={{
              text: "Book Appointment",              href: "#contact"}}
            secondaryButton={{
              text: "Our Services",              href: "#features"}}
            items={[
              { imageSrc: "http://img.b2bpic.net/free-photo/back-view-female-tailor-working-studio_23-2148834097.jpg" },
              { imageSrc: "http://img.b2bpic.net/free-photo/natural-elements-spa-with-beauty-cream_23-2148199484.jpg" },
              { imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-giving-hairstyle-young-woman_23-2147769862.jpg" },
              { imageSrc: "http://img.b2bpic.net/free-photo/comb-brush-soap-cosmetic-jars-dark-background-space-text_185193-161817.jpg" },
              { imageSrc: "http://img.b2bpic.net/free-photo/young-black-people-taking-care-afro-hair_23-2149575477.jpg" },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="testimonial" data-section="testimonial">
        <SectionErrorBoundary name="testimonial">
          <TestimonialMarqueeOverlayCards
            tag="Client Love"
            title="Loved by Our Community"
            description="Discover why our clients keep returning for our signature salon experience."
            testimonials={[
              { name: "Clara S.", role: "Fashion Editor", company: "StyleDaily", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/woman-makeup-artist-looking-phone_23-2148332485.jpg" },
              { name: "Mark D.", role: "Architect", company: "StudioArch", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/hairstyling-smiling-young-woman-demonstrating-hairstyling-tips_259150-60121.jpg" },
              { name: "Elena V.", role: "Designer", company: "CreativeFlow", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/professional-girl-hairdresser-makes-client-haircut-girl-is-sitting-mask-beauty-salon_343596-4456.jpg" },
              { name: "Sophie P.", role: "Executive", company: "TechInnovate", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-smiling-female_1301-109.jpg" },
              { name: "James L.", role: "Photographer", company: "LensLife", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/closeup-beauty-woman-with-ideal-skin-looking-camera-grey-background_633478-648.jpg" },
            ]}
            textAnimation="fade-blur"
          />
        </SectionErrorBoundary>
      </div>

      <div id="features" data-section="features">
        <SectionErrorBoundary name="features">
          <FeaturesRevealCards
            tag="Our Expertise"
            title="Signature Hair Services"
            description="We blend artistic precision with premium hair care rituals."
            items={[
              { title: "Coloring", description: "Bespoke color blending and expert highlights for a natural, healthy glow.", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-looking-photo-tape-red-background-high-quality-photo_114579-60928.jpg" },
              { title: "Precision Cuts", description: "Expert architectural cuts that frame your face and simplify your daily routine.", imageSrc: "http://img.b2bpic.net/free-photo/top-view-male-self-care-setting-still-life_23-2150326541.jpg" },
              { title: "Deep Treatments", description: "Restorative hydration rituals that bring strength, shine, and vitality to your strands.", imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-treatment-hairdresser-shop_23-2149229762.jpg" },
            ]}
            textAnimation="fade"
          />
        </SectionErrorBoundary>
      </div>

      <div id="pricing" data-section="pricing">
        <SectionErrorBoundary name="pricing">
          <PricingCenteredCards
            tag="Investment"
            title="Simple Salon Pricing"
            description="Transparent pricing for high-end results."
            plans={[
              { tag: "Essentials", price: "$80", description: "For standard maintenance and refresh.", features: ["Consultation", "Cut & Blow Dry", "Light Scalp Massage"], primaryButton: { text: "Book Now", href: "#contact" } },
              { tag: "Signature", price: "$180", description: "Our complete color & cut experience.", features: ["Full Color Consultation", "Highlight / Balayage", "Restorative Treatment"], primaryButton: { text: "Book Now", href: "#contact" } },
              { tag: "Luxury", price: "$280", description: "The ultimate transformation package.", features: ["Bespoke Coloring", "Precision Cut", "Luxury Keratin Treatment", "Gift Set"], primaryButton: { text: "Book Now", href: "#contact" } },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="metrics" data-section="metrics">
        <SectionErrorBoundary name="metrics">
          <MetricsIconCards
            tag="By The Numbers"
            title="Our Salon Legacy"
            description="A decade of making clients feel their most beautiful."
            metrics={[
              { icon: "Sparkles", title: "Happy Clients", value: "15,000+" },
              { icon: "Award", title: "Awards Won", value: "24" },
              { icon: "Star", title: "Avg Rating", value: "4.9/5" },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="team" data-section="team">
        <SectionErrorBoundary name="team">
          <TeamGlassCards
            tag="The Artists"
            title="Meet Our Expert Stylists"
            description="Passionate professionals dedicated to your hair health."
            members={[
              { name: "Sarah J.", role: "Lead Creative Director", imageSrc: "http://img.b2bpic.net/free-photo/confident-young-beautiful-female-barber-uniform-grabbed-hair-isolated-green-wall_141793-105669.jpg" },
              { name: "Julian D.", role: "Master Stylist", imageSrc: "http://img.b2bpic.net/free-photo/man-sitting-chair-hairdresser-with-client-guy-drinkig-whiskey_1157-43567.jpg" },
              { name: "Mina K.", role: "Senior Colorist", imageSrc: "http://img.b2bpic.net/free-photo/excited-young-beautiful-female-barber-uniform-holding-barber-tools-doing-beard-shaving-guy-isolated-pink-wall_141793-105761.jpg" },
            ]}
            textAnimation="fade-blur"
          />
        </SectionErrorBoundary>
      </div>

      <div id="faq" data-section="faq">
        <SectionErrorBoundary name="faq">
          <FaqSimple
            tag="Questions?"
            title="Frequent Inquiries"
            description="Everything you need to know before your salon visit."
            items={[
              { question: "What is your cancellation policy?", answer: "We require at least 24 hours notice for all cancellations to avoid a fee." },
              { question: "Do you offer consultations?", answer: "Absolutely. We encourage consultations for all major transformations." },
              { question: "Are your products cruelty-free?", answer: "Yes, we exclusively use premium cruelty-free products." },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="contact" data-section="contact">
        <SectionErrorBoundary name="contact">
          <ContactCta
            tag="Get In Touch"
            text="Ready to transform your look? Let's start the conversation."
            primaryButton={{ text: "Book Appointment", href: "#" }}
            secondaryButton={{ text: "Call Us", href: "tel:555-0123" }}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>
    </>
  );
}
