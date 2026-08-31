import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { ChevronDown } from "lucide-react";
import {
  FAQContainer,
  FAQHeader,
  FAQBox,
  FAQDetailText,
} from './FAQ.styles';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter((item) => item !== panel),
      );
    };

  return (
    <FAQContainer id="faq">
      <FAQHeader variant="h4">
        Frequently asked questions
      </FAQHeader>
      <FAQBox>
        <Accordion
          expanded={expanded.includes('panel1')}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ChevronDown size={20} />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="span" variant="subtitle2">
              How do I contact customer support if I have a question or issue?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FAQDetailText variant="body2" gutterBottom>
              You can reach our customer support team by emailing&nbsp;
              <Link href="mailto:support@email.com">support@email.com</Link>
              &nbsp;or calling our toll-free number. We&apos;re here to assist you
              promptly.
            </FAQDetailText>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel2')}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ChevronDown size={20} />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="span" variant="subtitle2">
              Can I return the product if it doesn&apos;t meet my expectations?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FAQDetailText variant="body2" gutterBottom>
              Absolutely! We offer a hassle-free return policy. If you&apos;re not
              completely satisfied, you can return the product within [number of
              days] days for a full refund or exchange.
            </FAQDetailText>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel3')}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ChevronDown size={20} />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="span" variant="subtitle2">
              What makes your product stand out from others in the market?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FAQDetailText variant="body2" gutterBottom>
              Our product distinguishes itself through its adaptability, durability,
              and innovative features. We prioritize user satisfaction and
              continually strive to exceed expectations in every aspect.
            </FAQDetailText>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel4')}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ChevronDown size={20} />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="span" variant="subtitle2">
              Is there a warranty on the product, and what does it cover?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FAQDetailText variant="body2" gutterBottom>
              Yes, our product comes with a [length of warranty] warranty. It covers
              defects in materials and workmanship. If you encounter any issues
              covered by the warranty, please contact our customer support for
              assistance.
            </FAQDetailText>
          </AccordionDetails>
        </Accordion>
      </FAQBox>
    </FAQContainer>
  );
}
