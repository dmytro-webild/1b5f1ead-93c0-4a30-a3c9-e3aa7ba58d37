"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Apple, Gift, Scissors } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="large"
        background="floatingGradient"
        cardStyle="solid"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Products",
          id: "#products",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/digital-art-cute-dog_23-2151150524.jpg"
      logoAlt="WOOF PET MARKET Logo"
      brandName="WOOF PET MARKET"
      bottomLeftText="Happy Pets, Happy Owners"
      bottomRightText="info@woofpetmarket.com"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "radial-gradient",
      }}
      title="WOOF PET MARKET"
      description="Your One-Stop Shop for Happy, Healthy Pets. Discover premium food, toys, grooming, and expert care for your beloved companions."
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
        {
          text: "Our Services",
          href: "#services",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-tanned-dark-haired-woman-with-stylish-bun-smiling-against-wall-bar-with-painted-flamingos_197531-17039.jpg",
          alt: "Sarah",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-male-looking-camera_23-2148179011.jpg",
          alt: "Mark",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-pretty-woman-outdoors_624325-862.jpg",
          alt: "Emily",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-wise-senior-man-posing-studio_23-2149883514.jpg",
          alt: "David",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-young-man-glasses-holding-black-pug-pet-staring-camera-amused-smiling-cheerful-stand_1258-144634.jpg",
          alt: "Olivia",
        },
      ]}
      avatarText="Join our community of 10,000+ happy pet owners!"
      imageSrc="http://img.b2bpic.net/free-photo/cat-is-sitting-fence-looking-into-frame-streets-old-city-animals-urban-environment-animal-care-city-ecosystems-idea-coexistence-city-ecosystem_166373-3102.jpg"
      imageAlt="Happy Golden Retriever in a pet store with toys and food"
      mediaAnimation="slide-up"
      marqueeItems={[
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/cute-red-river-duck-dog-wearing-plaid-bandana_493961-1043.jpg",
          alt: "Happy dog",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/close-up-pet-lifestyle_23-2149180534.jpg",
          alt: "Playful kitten",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/colorful-fruits-candies-container-sale_23-2147920863.jpg",
          alt: "Variety of colorful pet treats",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/young-woman-with-her-pet-french-bulldog-park_1303-28759.jpg",
          alt: "Dog walking on a leash in a park",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/pet-dainties-food_23-2147799971.jpg",
          alt: "Healthy pet food in a bowl",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Passionate About Pets Since Day One"
      description="At Woof Pet Market, we believe every pet deserves the best. Founded by passionate animal lovers, we've dedicated ourselves to providing high-quality products, knowledgeable advice, and a welcoming community for all pet parents. Our mission is to enrich the lives of pets and their families."
      metrics={[
        {
          value: "10K+",
          title: "Happy Pets Served",
        },
        {
          value: "500+",
          title: "Premium Brands",
        },
        {
          value: "15+",
          title: "Years of Experience",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/elderly-person-spendng-tim-with-their-pets_23-2149486377.jpg"
      imageAlt="Woman petting a dog in a friendly pet shop"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Professional Grooming",
          description: "Full-service baths, stylish haircuts, and nail trims performed by certified groomers in a stress-free environment.",
          icon: Scissors,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-girl-petting-cute-dog_23-2149873440.jpg",
              imageAlt: "Dog getting a professional grooming session",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-cute-greyhound-dog_23-2150231878.jpg",
              imageAlt: "Grooming tools clean and organized",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/digital-art-cute-dog_23-2151150524.jpg",
          imageAlt: "dog getting a professional grooming session",
        },
        {
          title: "Nutritional Guidance",
          description: "Expert advice on diet plans, premium food selections, and supplements tailored to your pet's specific needs and health.",
          icon: Apple,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/wooden-board-with-healthy-chocolate-cereal-rings-chocolate-pads-corn-flakes_114579-87689.jpg",
              imageAlt: "Healthy dog eating nutritious meal",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/various-breakfast-cereals-top-view_114579-9721.jpg",
              imageAlt: "Bowls of different kibble and wet food",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/cat-is-sitting-fence-looking-into-frame-streets-old-city-animals-urban-environment-animal-care-city-ecosystems-idea-coexistence-city-ecosystem_166373-3102.jpg",
          imageAlt: "dog getting a professional grooming session",
        },
        {
          title: "Accessories & Toys",
          description: "A curated selection of durable toys, comfortable beds, stylish collars, and all the essentials for a happy pet life.",
          icon: Gift,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/woman-spending-time-with-her-pet_23-2149284087.jpg",
              imageAlt: "Colorful pet toys and accessories display",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/dog-sleepwear-walking-lead_23-2147828946.jpg",
              imageAlt: "Stack of new pet blankets and beds",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-person-spendng-tim-with-their-pets_23-2149486377.jpg",
          imageAlt: "dog getting a professional grooming session",
        },
      ]}
      title="Our Services & Specialty Products"
      description="From nourishing food to pampering spa treatments, we've got everything to keep your furry friends healthy and joyful."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "p-1",
          name: "Woof's Best Dry Dog Food",
          price: "$45.99",
          variant: "Chicken & Veggies, 15lb",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-sweet-pillow-cookies-inside-plate-white_140725-129553.jpg",
          imageAlt: "Premium dog food bag",
        },
        {
          id: "p-2",
          name: "Purrfect Wet Cat Food",
          price: "$2.49",
          variant: "Tuna Pate, 5.5oz",
          imageSrc: "http://img.b2bpic.net/free-photo/view-cat-eating-food-from-bowl_23-2150798716.jpg",
          imageAlt: "Gourmet cat wet food",
        },
        {
          id: "p-3",
          name: "Durable Squeaky Bone",
          price: "$12.99",
          variant: "Large, Red",
          imageSrc: "http://img.b2bpic.net/free-photo/dried-food-dogs-cats_93675-128513.jpg",
          imageAlt: "Durable squeaky dog toy",
        },
        {
          id: "p-4",
          name: "Catnip Mouse Set",
          price: "$8.99",
          variant: "3-Pack, Assorted Colors",
          imageSrc: "http://img.b2bpic.net/free-photo/adorable-cat-lifestyle_23-2151593312.jpg",
          imageAlt: "Plush catnip mouse toy",
        },
        {
          id: "p-5",
          name: "Orthopedic Dog Bed",
          price: "$89.99",
          variant: "Large, Grey",
          imageSrc: "http://img.b2bpic.net/free-photo/black-miniature-schnauzer-sitting-his-bed-house_181624-14803.jpg",
          imageAlt: "Luxurious orthopedic dog bed",
        },
        {
          id: "p-6",
          name: "Adjustable Leather Collar",
          price: "$24.99",
          variant: "Medium, Brown",
          imageSrc: "http://img.b2bpic.net/free-photo/dog-stuff-composition_23-2147799888.jpg",
          imageAlt: "Stylish leather dog collar",
        },
      ]}
      title="Discover Our Premium Pet Products"
      description="Explore a wide range of high-quality food, treats, toys, and accessories carefully selected for your cherished pets."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "PetCare Alliance",
        "Healthy Paws Club",
        "Local Vet Clinic",
        "Happy Tails Rescue",
        "Gourmet Pet Food Co.",
        "Wagging Wonders",
        "Furry Friends Foundation",
      ]}
      title="Trusted by Leading Pet Communities"
      description="We partner with top brands and local organizations to bring you the best in pet care."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Woof Pet Market has transformed our dog's health with their expert nutritional advice and high-quality food. The staff is incredibly friendly and knowledgeable, always ready to help. It's truly a community for pet lovers!"
      rating={5}
      author="Jessica L., Proud Dog Mom"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-blonde-businesswoman-smiling-happy-standing-city_839833-16454.jpg",
          alt: "Customer Sarah Johnson",
        },
        {
          src: "http://img.b2bpic.net/free-photo/very-good-smiling-brunette-woman-shows-ok-okay-hand-sign-looking-satisfied-recommend-great-deal-pleased-with-quality-standing-white-background_176420-46695.jpg",
          alt: "Customer Michael Chen",
        },
        {
          src: "http://img.b2bpic.net/free-photo/businesswoman-working-warehouse_329181-12822.jpg",
          alt: "Customer Emily Rodriguez",
        },
        {
          src: "http://img.b2bpic.net/free-photo/old-senior-man-with-grey-hair-long-beard-wearing-striped-tshirt-smiling-cheerful-with-open-arms-as-friendly-welcome-positive-confident-greetings_839833-9821.jpg",
          alt: "Customer David Kim",
        },
        {
          src: "http://img.b2bpic.net/free-photo/image-happy-satisfied-young-man-sitting-near-pug-dog-showing-thumbs-up-smiling-praising-good-product-white-background_1258-75828.jpg",
          alt: "Customer Maria G.",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "What types of pet food do you offer?",
          content: "We offer a wide selection of premium pet foods, including dry kibble, wet food, raw food, and specialized diets for various dietary needs and allergies, from trusted organic and natural brands.",
        },
        {
          id: "faq-2",
          title: "Do you offer grooming services for all pet sizes?",
          content: "Yes, our certified groomers are experienced with all breeds and sizes of dogs and cats. We offer a range of services from basic baths and trims to full-service styling. Please book an appointment online or call us.",
        },
        {
          id: "faq-3",
          title: "Can I bring my pet to the store?",
          content: "Absolutely! Well-behaved pets on a leash are always welcome at Woof Pet Market. We love meeting your furry family members!",
        },
        {
          id: "faq-4",
          title: "What is your return policy?",
          content: "We offer a 30-day return policy on most unopened and unused items with a valid receipt. For pet food, we offer a satisfaction guarantee. Please see our full policy in-store or on our website for details.",
        },
        {
          id: "faq-5",
          title: "Do you offer local delivery?",
          content: "Yes, we offer local delivery services within a 10-mile radius for orders over $50. Check our website or contact us for more details and delivery schedules.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about our products, services, and store policies."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get In Touch With Our Team"
      description="Have questions or need assistance? Reach out to us, and our friendly pet experts will be happy to help!"
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-dog_23-2149335075.jpg"
      imageAlt="Friendly pet store staff at counter"
      mediaAnimation="slide-up"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="http://img.b2bpic.net/free-photo/digital-art-cute-dog_23-2151150524.jpg"
      logoAlt="WOOF PET MARKET Logo"
      columns={[
        {
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Team",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Shop Food",
              href: "#products",
            },
            {
              label: "Grooming",
              href: "#services",
            },
            {
              label: "Accessories",
              href: "#products",
            },
          ],
        },
        {
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="WOOF PET MARKET"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
