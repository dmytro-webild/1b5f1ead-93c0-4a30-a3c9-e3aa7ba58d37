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
import { Scissors, Star, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="medium"
        background="noiseDiagonalGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Products",          id: "#products"},
        {
          name: "Services",          id: "#services"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/vintage-barber-pole-sign_114579-99448.jpg"
      logoAlt="The Gentleman's Cut Barbershop Logo"
      brandName="THE GENTLEMAN'S CUT"
      bottomLeftText="Precision & Style"
      bottomRightText="appointments@gentlemanscut.com"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "rotated-rays-animated"}}
      title="THE GENTLEMAN'S CUT"
      description="Experience the finest in men's grooming. Precision haircuts, classic shaves, and a refined atmosphere tailored for the modern man."
      buttons={[
        {
          text: "Book an Appointment",          href: "#contact"},
        {
          text: "Our Services",          href: "#services"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/handsome-young-afro-american-barber-in-stylish-t-shirt-and-apron-sitting-chair-with-crosses-arms-and-smiling-camera-workplace-background_2221-8255.jpg",          alt: "Skilled Barber Mark"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-young-barber_23-2148184855.jpg",          alt: "Experienced Stylist Alex"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-barber-shop_23-2149341416.jpg",          alt: "Master Barber David"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-male-looking-camera_23-2148179011.jpg",          alt: "Barber John"},
        {
          src: "http://img.b2bpic.net/free-photo/handsome-young-man-with-dark-hair-beard-white-t-shirt-looking-camera-with-serious-face-indoors_197531-29177.jpg",          alt: "Client Reviewer Tom"},
      ]}
      avatarText="Trusted by 5,000+ satisfied gentlemen!"
      imageSrc="http://img.b2bpic.net/free-photo/side-view-man-getting-haircut_23-2149341400.jpg"
      imageAlt="Barber giving a precision haircut in a modern barbershop"
      mediaAnimation="slide-up"
      marqueeItems={[
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/close-up-stylish-haircut-man_23-2149586411.jpg",          alt: "Fresh haircut"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/high-angle-view-old-fashioned-hairdresser-items_23-2149544975.jpg",          alt: "Classic shave tools"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/man-getting-beard-trimmed-barber-shop_23-2149204098.jpg",          alt: "Beard grooming"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/barber-holding-razor-while-man-gets-shaved_23-2149341406.jpg",          alt: "Hot towel shave"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/barber-grooming-client-beard-with-clipper_23-2149341392.jpg",          alt: "Precision beard trim"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Crafting Style & Confidence for Generations"
      description="At The Gentleman's Cut, we honor the timeless art of barbering while embracing modern trends. Our experienced barbers are dedicated to delivering not just a cut, but an experience that leaves you feeling refined, confident, and ready to conquer your day. We blend tradition with contemporary style."
      metrics={[
        {
          value: "10K+",          title: "Happy Clients"},
        {
          value: "25+",          title: "Years Combined Experience"},
        {
          value: "5-Star",          title: "Average Rating"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-man-barber-shop_23-2149341416.jpg"
      imageAlt="Barber at work in a classic barbershop setting"
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
          title: "Precision Haircuts",          description: "From classic fades to modern styles, our barbers provide expert cuts tailored to your preferences and head shape.",          icon: Scissors,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-getting-haircut-barber-shop_23-2149341395.jpg",              imageAlt: "Man getting a fresh haircut from a barber"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-trimming-customer-hair_23-2149341421.jpg",              imageAlt: "Close-up of barber using scissors"},
          ]
        },
        {
          title: "Classic Hot Towel Shaves",          description: "Indulge in a luxurious hot towel shave, a timeless ritual for ultimate relaxation and a perfectly smooth finish.",          icon: Star,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/barber-shaving-mans-beard_23-2149341426.jpg",              imageAlt: "Man enjoying a hot towel shave"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-barber-using-straight-razor_23-2149544971.jpg",              imageAlt: "Close-up of straight razor shaving"},
          ]
        },
        {
          title: "Expert Beard Trimming",          description: "Keep your beard looking its best with our professional trimming and shaping services, ensuring a clean and sharp look.",          icon: Zap,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/man-getting-beard-trimmed-barber-shop_23-2149204098.jpg",              imageAlt: "Barber trimming a man's beard"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/barber-grooming-client-beard-with-clipper_23-2149341392.jpg",              imageAlt: "Barber using clippers for beard trim"},
          ]
        }
      ]}
      title="Our Premier Barbershop Services"
      description="Discover a full range of grooming services designed to elevate your look and enhance your confidence."
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
          id: "p-1",          name: "Signature Hair Pomade",          price: "$24.00",          variant: "Strong Hold, Matte Finish",          imageSrc: "http://img.b2bpic.net/free-photo/mens-hair-products_23-2149284144.jpg",          imageAlt: "High-quality hair pomade for men"},
        {
          id: "p-2",          name: "Luxury Shaving Cream",          price: "$18.00",          variant: "Sandalwood Scent",          imageSrc: "http://img.b2bpic.net/free-photo/men-s-skin-care_23-2149284139.jpg",          imageAlt: "Rich shaving cream for a smooth shave"},
        {
          id: "p-3",          name: "Beard Oil Elixir",          price: "$28.00",          variant: "Cedarwood & Bergamot",          imageSrc: "http://img.b2bpic.net/free-photo/set-man-shaving-accessories_23-2149284159.jpg",          imageAlt: "Nourishing beard oil for softness"},
        {
          id: "p-4",          name: "Aftershave Balm",          price: "$22.00",          variant: "Cooling Menthol",          imageSrc: "http://img.b2bpic.net/free-photo/mens-perfume-toiletries_23-2149284154.jpg",          imageAlt: "Soothing aftershave balm"},
        {
          id: "p-5",          name: "Classic Barber Comb Set",          price: "$15.00",          variant: "Fine & Wide Tooth",          imageSrc: "http://img.b2bpic.net/free-photo/set-old-fashioned-hairdresser-items_23-2149544978.jpg",          imageAlt: "Professional barber comb set"},
        {
          id: "p-6",          name: "Shaving Brush & Bowl",          price: "$35.00",          variant: "Badger Hair",          imageSrc: "http://img.b2bpic.net/free-photo/barber-set_23-2147799912.jpg",          imageAlt: "High-quality shaving brush and bowl"},
      ]}
      title="Shop Our Premium Grooming Products"
      description="Elevate your daily routine with our selection of high-quality hair, shave, and beard products, curated for the modern gentleman."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "GQ Magazine",        "Men's Health Style",        "Barber's Guild UK",        "Esquire Grooming",        "The Modern Gent",        "Sharp Cuts Journal",        "Urban Groomer Society"]}
      title="Trusted & Featured in Top Men's Style Publications"
      description="Our commitment to excellence in grooming has earned us recognition from leading names in men's fashion and lifestyle."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="'The Gentleman's Cut is simply the best barbershop I've ever visited. The attention to detail, the relaxing atmosphere, and the exceptional skill of the barbers make every visit a true pleasure. My hair and beard have never looked better!'"
      rating={5}
      author="Michael B., Satisfied Client"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/handsome-young-man-with-dark-hair-beard-white-t-shirt-looking-camera-with-serious-face-indoors_197531-29177.jpg",          alt: "Michael B."},
        {
          src: "http://img.b2bpic.net/free-photo/smiley-man-posing-city_23-2149397666.jpg",          alt: "David P."},
        {
          src: "http://img.b2bpic.net/free-photo/smiley-young-man-looking-camera_23-2148179018.jpg",          alt: "James L."},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-young-male-portrait_23-2149341419.jpg",          alt: "Robert S."},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-young-barber_23-2148184855.jpg",          alt: "Chris T."},
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
          id: "faq-1",          title: "What services do you offer?",          content: "We offer a full range of men's grooming services including precision haircuts, classic hot towel shaves, expert beard trims, facials, and grooming consultations."
        },
        {
          id: "faq-2",          title: "How do I book an appointment?",          content: "You can easily book an appointment through our website's booking system, by calling us directly, or by walking in. We recommend booking in advance for guaranteed slots."
        },
        {
          id: "faq-3",          title: "Do you offer gift cards?",          content: "Yes, gift cards are available for all services and products, making them the perfect present for the gentleman in your life."
        },
        {
          id: "faq-4",          title: "What product brands do you use and sell?",          content: "We use and stock a curated selection of premium grooming brands known for their quality and effectiveness. Our barbers can recommend the best products for your specific needs."
        },
        {
          id: "faq-5",          title: "What is your cancellation policy?",          content: "We require at least 24 hours' notice for cancellations or rescheduling. Late cancellations may incur a fee. Please refer to our booking terms for full details."
        }
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about our services, bookings, and products."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Schedule Your Visit or Ask a Question"
      description="Ready for a fresh cut or a relaxing shave? Reach out to us to book your next appointment or inquire about our services."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Your Phone (Optional)"},
      ]}
      textarea={{
        name: "message",        placeholder: "Your Message / Service Request",        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/barber-station-with-tools-chair_23-2149341434.jpg"
      imageAlt="Modern barbershop interior with empty chair and tools"
      mediaAnimation="slide-up"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="http://img.b2bpic.net/free-photo/vintage-barber-pole-sign_114579-99448.jpg"
      logoAlt="The Gentleman's Cut Barbershop Logo"
      columns={[
        {
          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Our Barbers",              href: "#"},
            {
              label: "Careers",              href: "#"},
          ],
        },
        {
          items: [
            {
              label: "Haircuts",              href: "#services"},
            {
              label: "Shaves",              href: "#services"},
            {
              label: "Products",              href: "#products"},
          ],
        },
        {
          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Contact Us",              href: "#contact"},
            {
              label: "Privacy Policy",              href: "#"},
          ],
        },
      ]}
      logoText="THE GENTLEMAN'S CUT"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}