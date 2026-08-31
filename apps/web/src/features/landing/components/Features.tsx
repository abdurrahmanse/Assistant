import * as React from 'react';
import Typography from '@mui/material/Typography';
import { items } from './features/featuresData';
import { MobileLayout } from './features/MobileLayout';
import { MutedText } from '@repo/ui/styled';
import {
  FeaturesContainer,
  FeaturesHeader,
  FeaturesLayoutBox,
  DesktopFeatureList,
  FeatureItemButton,
  FeatureItemContent,
  DesktopImageWrapper,
  DesktopImageCard,
  FeatureImage,
} from './Features.styles';

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <FeaturesContainer id="features">
      <FeaturesHeader>
        <Typography component="h2" variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
          Product features
        </Typography>
        <MutedText variant="body1" sx={{ mb: { xs: 2, sm: 4 } }}>
          Provide a brief overview of the key features of the product. For example,
          you could list the number of features, their types or benefits, and
          add-ons.
        </MutedText>
      </FeaturesHeader>
      <FeaturesLayoutBox>
        <div>
          <DesktopFeatureList>
            {items.map(({ icon, title, description }, index) => {
              const isSelected = selectedItemIndex === index;
              return (
                <FeatureItemButton
                  key={index}
                  onClick={() => handleItemClick(index)}
                  selected={isSelected}
                >
                  <FeatureItemContent selected={isSelected}>
                    {icon}
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="body2">{description}</Typography>
                  </FeatureItemContent>
                </FeatureItemButton>
              );
            })}
          </DesktopFeatureList>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <DesktopImageWrapper>
          <DesktopImageCard variant="outlined">
            <FeatureImage
              style={
                items[selectedItemIndex]
                  ? ({
                      '--items-imageLight': items[selectedItemIndex].imageLight,
                      '--items-imageDark': items[selectedItemIndex].imageDark,
                    } as any)
                  : {}
              }
            />
          </DesktopImageCard>
        </DesktopImageWrapper>
      </FeaturesLayoutBox>
    </FeaturesContainer>
  );
}
