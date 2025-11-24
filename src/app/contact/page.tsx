"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Mail, Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="small"
      background="plain"
      cardStyle="gradient-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Collections", id: "/products" },
            { name: "About", id: "/about" },
            { name: "Style Guide", id: "/" },
            { name: "Reviews", id: "/testimonials" },
            { name: "Contact", id: "#contact" }
          ]}
          brandName="Stezhka"
          button={{
            text: "Shop Now",
            href: "/products"
          }}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Updated"
          tagIcon={Mail}
          title="Join the Stezhka Community"
          description="Be the first to discover new collections, exclusive offers, and style inspiration delivered to your inbox."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive updates from Stezhka. You can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          copyrightText="© 2025 Stezhka. All rights reserved."
          columns={[
            {
              title: "Shop",
              items: [
                { label: "New Arrivals", href: "/products" },
                { label: "Dresses", href: "/products" },
                { label: "Outerwear", href: "/products" },
                { label: "Accessories", href: "/products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "/about" },
                { label: "Sustainability", href: "/about" },
                { label: "Careers", href: "#contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Size Guide", href: "/" },
                { label: "Shipping", href: "#contact" },
                { label: "Returns", href: "#contact" },
                { label: "Contact", href: "#contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Follow us on Instagram" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Follow us on Twitter" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Follow us on Facebook" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}