"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Nav } from "@/components/ui/nav";
import Navbar from "@/components/navbar";

const words = `At FeedForward, we're driven by the vision of a sustainable world where every action and every innovation contributes to a healthier planet. Born from a passion to tackle some of the most pressing environmental challenges of our time, our platform serves as a dynamic bridge connecting NGOs, Food Processors and Many Composting and Biogas Plants with opportunities to make a tangible impact`;

export default function About() {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <div className="h-[80vh]">
          <TextGenerateEffect words={words} />
        </div>

        <div className="mt-20">
          <Accordion
            type="single"
            collapsible
            className=" ml-15 mr-15 w-full h-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How does FeedForward contribute to environmental sustainability?
              </AccordionTrigger>
              <AccordionContent>
                FeedForward actively contributes to environmental sustainability
                by promoting the efficient recycling of food waste, turning it
                into valuable compost and biogas instead of it ending up in
                landfills. This not only reduces greenhouse gas emissions but
                also supports renewable energy production and organic farming,
                fostering a healthier planet
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What are the benefits for organizations that join the EcoCycle
                platform? ?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Organizations that join the EcoCycle platform receive a
                certificate acknowledging their commitment to environmental
                sustainability. This certificate serves as a testament to their
                proactive role in waste management, renewable energy production,
                and community engagement
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How does EcoCycle ensure the effectiveness of its food waste
                management and recycling programs?
              </AccordionTrigger>
              <AccordionContent>
                EcoCycle ensures the effectiveness of its programs through a
                combination of rigorous monitoring, state-of-the-art technology,
                and strong partnerships. We employ advanced tracking and
                analytics to measure the impact of our waste management and
                recycling efforts accurately. By collaborating closely with
                environmental experts, local governments, and participating
                organizations, we continuously refine our processes and adopt
                best practices
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
