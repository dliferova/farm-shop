import React from "react";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import { Ul, Li } from "/src/components/styled";
import { Features, StyledButton, StyledTitle } from "./styles";

function FeaturesList({ features }) {
    return features && features.length ? (
        <Features>
            <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
            <Ul $isGridList>
                {features.map((feature) => (
                    <Li key={feature.id}>
                        <FeatureCard {...feature} />
                    </Li>
                ))}
            </Ul>
            <StyledButton link="/catalog">Купить</StyledButton>
        </Features>
    ) : null;
}

export default FeaturesList;
