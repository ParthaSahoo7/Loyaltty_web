import React from "react";
import { FeatureSection } from "../shared/FeatureSection";


// export function Features() {
//   return (
//     <section className="py-36 max-md:py-24" aria-labelledby="features-heading">
//       <h2 id="features-heading" >Our Features</h2>
//       <FeatureSection
//         title="Customizable Rewards Programs"
//         description="Create point-based, tiered, or custom rewards that match your business."
//         buttonText="Get Started"
//         imageUrl="http://b.io/feature-1.jpg"
//       />
//       <FeatureSection
//         title="Customer Insights Dashboard"
//         description="Understand customer behavior and make data-driven decisions."
//         buttonText="Get Started"
//         imagePosition="left"
//         imageUrl="http://b.io/feature-2.jpg"
//       />
//       <FeatureSection
//         title="Marketing Campaign Tools"
//         description="Send personalized offers and promotions"
//         buttonText="Try it now"
//         imageUrl="http://b.io/feature-3.jpg"
//       />
//     </section>
//   );
// }

export function Features() {
  
  return (
    <section className="py-4 max-md:py-24" aria-labelledby="features-heading">
      <h2 id="features-heading" className="text-7xl font-bold text-center text-neutral-800 mb-16 max-md:text-4xl">
      What is loyaltty?
      </h2>
      <p className="px-8 text-center py-3 text-4xl ">
      Our <strong>RACE</strong> Methodology is a strategic framework used in Loyaltty to help businesses grow customers and nurture  relationships.
      </p>
      <FeatureSection
        title="REACH"
        description={
          <>
            <strong> Expand Your Digital Presence : </strong>Influence through social media, email campaigns, and
            digital advertising to showcase your business to a wide audience.
            <br />
            <br />
            <strong>Target the Right Audience : </strong>Use precise targeting to connect with potential
            customers who are more likely to engage with your brand.
            <br />
            <br />
            
          </>
        }
        buttonText="Get Started"
        imageUrl="https://img.freepik.com/free-vector/flat-design-kol-illustration_23-2149337641.jpg?t=st=1736410526~exp=1736414126~hmac=7ef0a7a7167398f4c3164e7dc6002b92bb8573808013cced70461b97d2e2840f&w=740"
      />
      <FeatureSection
        title="ACQUIRE"
        description={
          <>
            <strong>Attract with Irresistible Offers : </strong>Create promotions and deals to suit your customers'
            needs and preferences. <br />
            <br />
            <strong>Simplify Customer Onboarding : </strong>User-friendly tools to make joining your loyalty or
            rewards program easy and engaging.{" "}
            <br />
            <br />
            
          </>
        }
        buttonText="Get Started"
        imagePosition="left"
        imageUrl="https://img.freepik.com/free-vector/businessmen-shaking-hands-through-display-video-call-smart-phone-internet-business-concept-cartoon-character-vector-illustration_1150-56245.jpg?t=st=1736410718~exp=1736414318~hmac=c9eebcc54537c57fc8666322fbe06531e94f0a21e031356b58a3aa039fb85a31&w=740"
      />
      <FeatureSection
        title="CONVERT"
        description={
          <>
            <strong>
            Transform Transactions into Loyalty:
            </strong>
            Offer rewards programs that encourage repeat
purchases and promote brand loyalty.Set up an ad campaign on Our Platform.
            <br />
            <br />
            <strong>
            Deliver Value Consistently:
            </strong>
            Providing excellent service and personal rewards that
keep customers coming back for more.
            <br />
            <br />
          </>
        }
        buttonText="Try it now"
        imageUrl="https://img.freepik.com/free-vector/conversion-rate-optimization-concept-illustration_114360-7653.jpg?t=st=1736410779~exp=1736414379~hmac=8f58bdce29d54266bba8a6a2647470fdf1ca1691c0cf765bd0545a6613aa755e&w=740"
      />

      <FeatureSection
        title="ENGAGE"
        description={
          <>
            <strong>Stay Connected : </strong>Use text, WhatsApp, and email to maintain consistent and
            meaningful communication with your customers. <br />
            <br />
            <strong>Personalize Every Interaction : </strong>Delight your customers with customized offers and
            services that they value and appreciate.{" "}
            <br />
            <br />
          </>
        }
        buttonText="Get Started"
        imagePosition="left"
        imageUrl="https://img.freepik.com/free-vector/organic-flat-feedback-concept-illustrated_23-2148951368.jpg?t=st=1736410856~exp=1736414456~hmac=f5fcca62094088f078946e3b19db5bbd1f413894f39de3abc7225fd593b1ccf6&w=740"
      />
    </section>
  );
}
