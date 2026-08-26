import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBillboardTiltedCarousel from '@/components/sections/hero/HeroBillboardTiltedCarousel';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import PricingCenteredCards from '@/components/sections/pricing/PricingCenteredCards';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
      <div id="hero" data-section="hero">
        <SectionErrorBoundary name="hero">
          <HeroBillboardTiltedCarousel
            tag="Next-Generation Rendering"
            title="SEE IT BEFORE IT EXISTS."
            description="From plans to photorealistic experiences. Powered by ARIES."
            primaryButton={{
              text: "Start a Project",              href: "#contact"}}
            secondaryButton={{
              text: "Explore ARIES",              href: "#platform"}}
            items={[
              { imageSrc: "http://img.b2bpic.net/free-photo/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy_1258-169747.jpg" },
              { imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-abstract-building_23-2150896916.jpg" },
              { imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302680.jpg" },
              { imageSrc: "http://img.b2bpic.net/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694045.jpg" },
              { imageSrc: "http://img.b2bpic.net/free-photo/cliffside-modern-home-with-infinity-pool_23-2152008225.jpg" },
              { imageSrc: "http://img.b2bpic.net/free-photo/3d-house-model-with-modern-architecture_23-2151004028.jpg" }
            ]}
            textAnimation="fade-blur"
          />
        </SectionErrorBoundary>
      </div>

      <div id="platform" data-section="platform">
        <SectionErrorBoundary name="platform">
          <FeaturesRevealCardsBento
            tag="The System"
            title="ARIES Platform Capabilities"
            description="Transform your design workflow into an experience."
            items={[
              { title: "AI Rendering", description: "Turn plans into photorealistic imagery.", href: "#", imageSrc: "http://img.b2bpic.net/free-photo/modern-office-space-with-futuristic-decor-furniture_23-2151797639.jpg" },
              { title: "Interior Viz", description: "High-fidelity interior visualization.", href: "#", imageSrc: "http://img.b2bpic.net/free-photo/brutalist-inspiration-architecture-background_23-2149162901.jpg" },
              { title: "Exterior Viz", description: "Generate realistic outdoor settings.", href: "#", imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-timber-house-interior-with-wooden-decor-furnishings_23-2151263586.jpg" },
              { title: "Interactive", description: "Real-time design exploration tools.", href: "#", imageSrc: "http://img.b2bpic.net/free-photo/top-view-tablet-top-architectural-plan_23-2148269855.jpg" },
              { title: "360° Experiences", description: "Immersive virtual environments.", href: "#", imageSrc: "http://img.b2bpic.net/free-photo/building-with-colorful-walls_1127-2241.jpg" },
              { title: "Dashboard", description: "Professional project management.", href: "#", imageSrc: "http://img.b2bpic.net/free-photo/top-view-laptop-table-glowing-screen-dark_169016-53642.jpg" },
              { title: "Collaboration", description: "Seamless professional integration.", href: "#", imageSrc: "http://img.b2bpic.net/free-photo/blueprint-architect-construction-project-sketch-concept_53876-133820.jpg" }
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="metrics" data-section="metrics">
        <SectionErrorBoundary name="metrics">
          <MetricsMediaCards
            tag="Innovation"
            title="Design Precision, AI Powered"
            description="ARIES sets the new standard for professional architectural visualization."
            metrics={[
              { value: "100%", title: "Photorealism", description: "Achieve stunning visual accuracy every time.", imageSrc: "http://img.b2bpic.net/free-photo/3d-model-house-room_23-2150761110.jpg" },
              { value: "10x", title: "Speed", description: "Visualize projects in a fraction of the time.", imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-abstract-building_23-2150896640.jpg" }
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="solutions" data-section="solutions">
        <SectionErrorBoundary name="solutions">
          <PricingCenteredCards
            tag="Professional Solutions"
            title="Plans for Every Professional"
            description="Tailored solutions for your specific design needs."
            plans={[
              { tag: "Architects", price: "Custom", description: "Professional toolset for large firm projects.", features: ["Advanced Material Editing", "Team Collaboration", "Cloud Rendering"], primaryButton: { text: "Contact Sales", href: "#contact" } },
              { tag: "Developers", price: "Custom", description: "Scale development visualization effortlessly.", features: ["Bulk Image Generation", "API Integration", "Priority Scaling"], primaryButton: { text: "Contact Sales", href: "#contact" } }
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="testimonials" data-section="testimonials">
        <SectionErrorBoundary name="testimonials">
          <TestimonialRatingCards
            tag="Trust"
            title="Trusted by Visionaries"
            description="The industry standard for architectural visualization."
            testimonials={[
              { name: "Elena Rossi", role: "Architect", quote: "ARIES transformed our client meetings entirely.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/handsome-confident-man_1098-18449.jpg" },
              { name: "Marcus Chen", role: "Developer", quote: "The speed and quality are unprecedented.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-pretty-young-woman-working-blueprint-working-place_23-2148203942.jpg" },
              { name: "Sophia Moore", role: "Interior Designer", quote: "I can explore endless finishes in seconds.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-working-interior-design-project_23-2150346546.jpg" },
              { name: "James Wilson", role: "Project Manager", quote: "Unbeatable accuracy for modern developments.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-holding-clipboard_23-2148921393.jpg" },
              { name: "Dr. Sarah Lee", role: "Lead Architect", quote: "The visualization engine is world-class.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-young-male-engineer-against-white-backdrop_23-2147843008.jpg" }
            ]}
            textAnimation="fade-blur"
          />
        </SectionErrorBoundary>
      </div>

      <div id="faq" data-section="faq">
        <SectionErrorBoundary name="faq">
          <FaqSimple
            tag="Support"
            title="Frequently Asked Questions"
            description="Everything you need to know about ARIES."
            items={[
              { question: "What files does ARIES support?", answer: "We support blueprints, sketches, CAD, and various image formats." },
              { question: "Can I request revisions?", answer: "Yes, our interactive revision engine is built for feedback." },
              { question: "Is the system secure?", answer: "Security is our top priority, ensuring project intellectual property stays protected." }
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="contact" data-section="contact">
        <SectionErrorBoundary name="contact">
          <ContactCta
            tag="Start Building"
            text="DON’T JUST IMAGINE IT. EXPERIENCE IT. Build what doesn’t exist yet — with ARIES."
            primaryButton={{ text: "Get Started", href: "#" }}
            secondaryButton={{ text: "View Samples", href: "#" }}
            textAnimation="fade-blur"
          />
        </SectionErrorBoundary>
      </div>
    </>
  );
}