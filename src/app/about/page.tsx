"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Award, Leaf, Sparkles, Star, Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SplitAbout from '@/components/sections/about/SplitAbout';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function AboutPage() {
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
            { name: "About", id: "#about" },
            { name: "Style Guide", id: "/" },
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

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Story"
          description="Stezhka represents the path to authentic style. We believe fashion should be an expression of individuality, crafted with attention to detail and sustainable practices."
          tag="About Stezhka"
          tagIcon={Sparkles}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Sustainable Materials",
              description: "We source premium fabrics from eco-conscious suppliers, ensuring quality while respecting our planet.",
              icon: Leaf
            },
            {
              title: "Timeless Design",
              description: "Our collections feature classic silhouettes with modern touches that transcend seasonal trends.",
              icon: Star
            },
            {
              title: "Expert Craftsmanship",
              description: "Each piece is carefully constructed by skilled artisans who share our commitment to excellence.",
              icon: Award
            }
          ]}
          imageSrc="https://pixabay.com/get/g00deaaff7db1688a0a27219935a43ef6f103ffc16c8ae62319d6520670c5827c211a5ef6a4cd4d8cef9123c56e453d74cf6d9f1e1673e5f28e49419307f8e71c_1280.jpg"
          imageAlt="Stezhka design process"
          imagePosition="right"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Featured In"
          description="Stezhka has been recognized by leading fashion publications worldwide for our innovative approach to contemporary style."
          tag="Press Coverage"
          tagIcon={Star}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/gfb45b2c73111e20a50329645658f60b710ca143feb773d70c78b825d60e86cbee1d434daef05467afd36cdc26ad1ba7a62f7809e8138ac4f4d13583dbaa20a1c_1280.jpg",
            "https://pixabay.com/get/g0b94cfb8b043089780caef442c0cd64666905af27623f63e6ff42e210f7d1185c708048180336785f6278f0f9564b7efa23f4425ddc31d50484eb557f265d179_1280.jpg",
            "https://pixabay.com/get/ga1e30bf984b6626df2571dc2b8ade195528425e3cca4f5f0cbb448a4ea1c3868c3dd5cfa4a63467b162f9f002cdd485cc6f7b64d823a14df2ca183c62a248aa7_1280.jpg",
            "https://pixabay.com/get/g43b286a28d93d8b7fddf78ac9e3af8e48b2f6142f6e90d3eebdd17d5342ca8ce323c45b88f693a8b4ce76ca1c143266c62334a0079c1ffc4543064728769eefb_1280.jpg",
            "https://pixabay.com/get/g9f51b0d8a4b374387a7d9e8a2bb5bc65bc659ce4222f37c51ab2ed3bdc6096512ff2fb841ac1e80d8d6eeffb8d8486b76ae60d73f036f49f013096a91dc6530a_1280.jpg",
            "https://pixabay.com/get/g8e66e27cdcd1136e9ec83cc617200286fa4b6d19633bd3d35134a3960b02a827a98946a2d75511681dc04f0090bc7de3ad6918678f1510d80428bc51c71169e1_1280.jpg",
            "https://pixabay.com/get/g6acc8556bd228cf2d944c2cc45f4000db87fdda0eba246164d9141d86e667f97a2a0c658d540d168c2cb7d8fec33f7ef2b73757d0423b9b13661465f44b16441_1280.jpg"
          ]}
          speed={35}
          showCard={true}
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