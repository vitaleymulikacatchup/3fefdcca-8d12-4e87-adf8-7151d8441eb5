"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Zap } from "lucide-react";
import Link from "next/link";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function HomePage() {
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
            { name: "Style Guide", id: "#features" },
            { name: "Reviews", id: "/testimonials" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="Stezhka"
          button={{
            text: "Shop Now",
            href: "/products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="STEZHKA"
          description="Elevate your style with our curated collection of contemporary fashion. Discover timeless pieces that define modern elegance."
          buttons={[
            { text: "Explore Collection", href: "/products" },
            { text: "Style Guide", href: "#features" }
          ]}
          slides={[
            {
              imageSrc: "https://pixabay.com/get/g3e706c2b7a7fa066b39cb7e763a39c5350ffd687ed87497259a49b5ee33a05ffb3f420bbc6ad63df462b4ec5850fe73ffdf2fc105062189326e63117e126dc62_1280.jpg",
              imageAlt: "Stezhka fashion boutique interior"
            },
            {
              imageSrc: "https://pixabay.com/get/g00deaaff7db1688a0a27219935a43ef6f103ffc16c8ae62319d6520670c5827c211a5ef6a4cd4d8cef9123c56e453d74cf6d9f1e1673e5f28e49419307f8e71c_1280.jpg",
              imageAlt: "Designer clothing collection"
            },
            {
              imageSrc: "https://pixabay.com/get/g0c5fe0aebaadefc694fa922d7cadd513f8a3e0eab1565ca13cc1086b3a157af0658208dedd6986ec0399c7f2c8b0576c34e553607a15ce1293d83893025ac5fa_1280.jpg",
              imageAlt: "Fashion lifestyle photography"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNine
          title="Style Philosophy"
          description="Discover the principles that guide our design approach and make Stezhka a leader in contemporary fashion."
          tag="Design Excellence"
          tagIcon={Zap}
          textboxLayout="default"
          showStepNumbers={false}
          features={[
            {
              id: 1,
              title: "Versatile Wardrobe",
              description: "Create endless outfit possibilities with pieces designed to mix, match, and transition seamlessly from day to night.",
              phoneOne: {
                imageSrc: "https://pixabay.com/get/g01e0dccdf42fc75b3563b4fa1e483c490b213525899867c2f762f2e1e9560aa47a40af7133aaca54b93803eef8316ca91447ea0faf11b8b13a237d8ebdd5445b_1280.jpg",
                imageAlt: "Versatile dress styling"
              },
              phoneTwo: {
                imageSrc: "https://pixabay.com/get/g7328721a488c772047e15afcde398d0a6cefb5eb35100443a80e0ad2421028fb9802a6aa0bce18606385ee7be6f07e604252e299dbfa85a33c0aa5fb0a9d838c_1280.jpg",
                imageAlt: "Jacket styling options"
              }
            },
            {
              id: 2,
              title: "Premium Quality",
              description: "Experience the difference of carefully selected materials and meticulous construction in every garment.",
              phoneOne: {
                imageSrc: "https://pixabay.com/get/g06f5cd2b30c5eb1ef3e731b85ff35408752feccadd217bd5cd81927ad8043b44c570e232da27f813d44346e78d6aa7e4_1280.jpg",
                imageAlt: "Premium fabric close-up"
              },
              phoneTwo: {
                imageSrc: "https://pixabay.com/get/ge9093fbfafc1e01cda5870acb3cda591898f54728d75db1f5223ee15eca60dc6de4123157af5bbab6f8f2ed88c02580c4ec4345bff8d74d520bf15ba9d783616_1280.jpg",
                imageAlt: "Quality craftsmanship details"
              }
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
        />
      </div>
    </ThemeProvider>
  );
}