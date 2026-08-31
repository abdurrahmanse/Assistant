import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { ChevronDown } from "lucide-react";
import {
  FAQContainer,
  FAQHeader,
  FAQBox,
  FAQDetailText,
} from './FAQ.styles';
import { useLandingData } from '../hooks/useLandingData';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);
  const { data, isLoading } = useLandingData();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter((item) => item !== panel),
      );
    };

  if (isLoading || !data) {
    return (
      <FAQContainer id="faq">
        <Skeleton variant="rectangular" width="40%" height={40} sx={{ mb: 2 }} />
        <FAQBox>
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} variant="rectangular" width="100%" height={60} sx={{ mb: 1 }} />
          ))}
        </FAQBox>
      </FAQContainer>
    );
  }

  const { faq } = data;

  return (
    <FAQContainer id="faq">
      <FAQHeader variant="h4">
        {faq.title}
      </FAQHeader>
      <FAQBox>
        {faq.questions.map((q) => (
          <Accordion
            key={q.id}
            expanded={expanded.includes(q.id)}
            onChange={handleChange(q.id)}
          >
            <AccordionSummary
              expandIcon={<ChevronDown size={20} />}
              aria-controls={`${q.id}-content`}
              id={`${q.id}-header`}
            >
              <Typography variant="subtitle2">
                {q.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FAQDetailText variant="body2" gutterBottom>
                {/* Normally we might dangerouslySetInnerHTML here if it contains HTML links,
                    but since the mock is plain text, we render it directly. If we need links,
                    we'd format it differently in the API response or parse markdown. */}
                {q.answer}
              </FAQDetailText>
            </AccordionDetails>
          </Accordion>
        ))}
      </FAQBox>
    </FAQContainer>
  );
}
