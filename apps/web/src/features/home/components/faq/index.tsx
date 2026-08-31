import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import {
  FAQContainer,
  FAQHeader,
  FAQBox,
  FAQDetailText,
} from './styles';
import { useLandingQuery } from '@/features/landing/hooks/queries/useLandingQuery';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);
  const { data, isLoading } = useLandingQuery();

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
      <FAQHeader variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 2, fontWeight: 900 }}>
        <MessageCircleQuestion size={40} color="var(--template-palette-primary-main)" />
        {faq.title}
      </FAQHeader>
      <FAQBox>
        {faq.questions.map((q) => (
          <Accordion
            key={q.id}
            expanded={expanded.includes(q.id)}
            onChange={handleChange(q.id)}
            sx={{
              mb: 2,
              borderRadius: '16px !important',
              border: '2px solid',
              borderColor: 'rgba(0,0,0,0.1)',
bgcolor: 'rgba(255,255,255,0.6)',
'[data-mui-color-scheme="dark"] &': { borderColor: 'rgba(255,255,255,0.1)', bgcolor: 'rgba(20,20,25,0.6)' },
              backdropFilter: 'blur(16px)',
              '&:before': { display: 'none' },
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              '&:hover': {
                borderColor: 'primary.main',
              },
              ...(expanded.includes(q.id) && {
                boxShadow: '4px 4px 0px rgba(99,102,241,1)',
                borderColor: 'primary.main',
                transform: 'translateX(-4px) translateY(-2px)',
              })
            }}
          >
            <AccordionSummary
              expandIcon={<ChevronDown size={20} />}
              aria-controls={`${q.id}-content`}
              id={`${q.id}-header`}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
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
