"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { ShoppingBag, Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function ProductsPage() {
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
            { name: "Collections", id: "#products" },
            { name: "About", id: "/about" },
            { name: "Style Guide", id: "/" },
            { name: "Reviews", id: "/testimonials" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="Stezhka"
          button={{
            text: "Shop Now",
            href: "#products"
          }}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Collection"
          description="Discover our carefully curated selection of statement pieces that define contemporary elegance."
          tag="New Arrivals"
          tagIcon={ShoppingBag}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Meridian Dress",
              price: "$295",
              imageSrc: "https://pixabay.com/get/g01e0dccdf42fc75b3563b4fa1e483c490b213525899867c2f762f2e1e9560aa47a40af7133aaca54b93803eef8316ca91447ea0faf11b8b13a237d8ebdd5445b_1280.jpg",
              imageAlt: "Meridian elegant dress"
            },
            {
              id: "2",
              name: "Urban Blazer",
              price: "$385",
              imageSrc: "https://pixabay.com/get/g7328721a488c772047e15afcde398d0a6cefb5eb35100443a80e0ad2421028fb9802a6aa0bce18606385ee7be6f07e604252e299dbfa85a33c0aa5fb0a9d838c_1280.jpg",
              imageAlt: "Urban contemporary blazer"
            },
            {
              id: "3",
              name: "Essential Trousers",
              price: "$225",
              imageSrc: "https://pixabay.com/get/g06f5cd2b30c5eb1ef3e731b85ff35408752feccadd217bd5cd81927ad8043b44c570e232da27f813d44346e78d6aa7e4_1280.jpg",
              imageAlt: "Essential tailored trousers"
            },
            {
              id: "4",
              name: "Statement Shoes",
              price: "$165",
              imageSrc: "https://pixabay.com/get/ge9093fbfafc1e01cda5870acb3cda591898f54728d75db1f5223ee15eca60dc6de4123157af5bbab6f8f2ed88c02580c4ec4345bff8d74d520bf15ba9d783616_1280.jpg",
              imageAlt: "Designer statement shoes"
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
                { label: "New Arrivals", href: "#products" },
                { label: "Dresses", href: "#products" },
                { label: "Outerwear", href: "#products" },
                { label: "Accessories", href: "#products" }
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