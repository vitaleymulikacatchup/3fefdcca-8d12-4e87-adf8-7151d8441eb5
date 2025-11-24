"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { MessageCircle, Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function TestimonialsPage() {
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
            { name: "Reviews", id: "#testimonials" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="Stezhka"
          button={{
            text: "Shop Now",
            href: "/products"
          }}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="Real feedback from fashion enthusiasts who've discovered their style with Stezhka."
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah",
              handle: "@sarahstyles",
              testimonial: "Stezhka pieces have completely transformed my wardrobe. The quality is exceptional and every piece feels like it was made just for me.",
              imageSrc: "https://pixabay.com/get/gb9a268abcaf138a8820137c5c888fa30f714fcdd58d451f50d7186afbd3051d0ba68de07ad70c841e5a2a8b28f2748a387e597aaee1586a43caa5f5a12aa6727_1280.jpg",
              imageAlt: "Sarah customer portrait"
            },
            {
              id: "2",
              name: "Marcus",
              handle: "@marcusfashion",
              testimonial: "Finally found a brand that understands modern sophistication. The attention to detail in every garment is remarkable.",
              imageSrc: "https://pixabay.com/get/g40df302787190c579f24176fc3a426754efdea1738b107293195ff0e2fb99bf7f10d3078b9dbfe45b82cd3690a531473d27521429eaf9323899ef81922456f88_1280.jpg",
              imageAlt: "Marcus customer portrait"
            },
            {
              id: "3",
              name: "Elena",
              handle: "@elenachic",
              testimonial: "Stezhka has become my go-to for professional attire that doesn't compromise on style. Absolutely love the versatility.",
              imageSrc: "https://pixabay.com/get/g3b4a7d2fa67dea796686994ee21423548114b7d2bbf6a948ff307ca8b8ec4c3789db25a45cc49e3dced824ba17176839ee8d5761768dc02d868494c933397743_1280.jpg",
              imageAlt: "Elena customer portrait"
            },
            {
              id: "4",
              name: "David",
              handle: "@davidstyle",
              testimonial: "The sustainable approach combined with incredible design makes Stezhka a brand I'm proud to support and wear.",
              imageSrc: "https://pixabay.com/get/g144e8835b9eaf27f507ff92beb4757f7347f8885a7831e59decd20eaad7a927630a2d205923a547fed53fc20daabf73fcb7545e38077df49e913700a74311cd1_1280.jpg",
              imageAlt: "David customer portrait"
            }
          ]}
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
                { label: "Careers", href: "/contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Size Guide", href: "/" },
                { label: "Shipping", href: "/contact" },
                { label: "Returns", href: "/contact" },
                { label: "Contact", href: "/contact" }
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