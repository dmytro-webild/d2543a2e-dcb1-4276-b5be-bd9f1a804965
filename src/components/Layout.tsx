import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    { name: "Platform", href: "#platform" },
    { name: "Workflow", href: "#how-it-works" },
    { name: "Solutions", href: "#solutions" },
    { name: "Metrics", href: "#metrics" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="floatingGradient" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="ARIES"
      ctaButton={{
        text: "Get Started",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Platform",
          items: [
            {
              label: "How It Works",
              href: "#",
            },
            {
              label: "Pricing",
              href: "#",
            },
          ],
        },
      ]}
      leftText="© 2024 ARIES Visualization."
      rightText="Privacy Policy · Terms of Service"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
