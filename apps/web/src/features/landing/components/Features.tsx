import * as React from 'react';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Smartphone, Layers, MonitorSmartphone } from 'lucide-react';
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
import { useLandingData } from '../hooks/useLandingData';

// Map string icon names from mock API to lucide components
const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone size={20} />,
  Layers: <Layers size={20} />,
  MonitorSmartphone: <MonitorSmartphone size={20} />
};

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { data, isLoading } = useLandingData();

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  if (isLoading || !data) {
    return (
      <FeaturesContainer id="features">
        <Skeleton variant="rectangular" width="40%" height={40} sx={{ mb: 2 }} />
        <Skeleton variant="text" width="60%" height={24} sx={{ mb: 4 }} />
        <Skeleton variant="rectangular" width="100%" height={300} />
      </FeaturesContainer>
    );
  }

  const { features } = data;
  
  // Create mapped items that inject the JSX icon
  const itemsWithIcons = features.items.map(item => ({
    ...item,
    icon: iconMap[item.iconName] || null
  }));

  const selectedFeature = itemsWithIcons[selectedItemIndex];

  return (
    <FeaturesContainer id="features">
      <FeaturesHeader>
        <Typography component="h2" variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
          {features.title}
        </Typography>
        <MutedText variant="body1" sx={{ mb: { xs: 2, sm: 4 } }}>
          {features.subtitle}
        </MutedText>
      </FeaturesHeader>
      <FeaturesLayoutBox>
        <div style={{ width: '100%', flex: 1 }}>
          <DesktopFeatureList>
            {itemsWithIcons.map(({ icon, title, description }, index) => {
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
          {/* We pass the mapped items to MobileLayout. Wait, MobileLayout might import featuresData directly! Let's check it next. */}
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
            items={itemsWithIcons} 
          />
        </div>
        <DesktopImageWrapper>
          <DesktopImageCard variant="outlined">
            <FeatureImage
              style={
                selectedFeature
                  ? ({
                      '--items-imageLight': selectedFeature.imageLight,
                      '--items-imageDark': selectedFeature.imageDark,
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
