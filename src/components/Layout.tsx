import FooterBrand from '@/components/sections/footer/FooterBrand';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Services",
    "href": "#features"
  },
  {
    "name": "Pricing",
    "href": "#pricing"
  },
  {
    "name": "Team",
    "href": "#team"
  },
  {
    "name": "Reviews",
    "href": "#testimonial"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="noise" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="Luxe Salon"
      ctaButton={{
        text: "Book Now",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBrand
      brand="Luxe Salon"
      columns={[
        {
          items: [
            {
              label: "Services",
              href: "#features",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "Our Team",
              href: "#team",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
