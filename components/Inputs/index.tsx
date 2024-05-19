import React, { memo } from 'react';

import { IStyledComponent } from 'styled-components';
import { Container, InputType } from './styles';

type propsInput = {
    defaultValue?: string;
    colorBorder?: string | undefined;
    background?: string | undefined;
}

export const Input = ({ defaultValue, colorBorder, background, ...props }: propsInput & IStyledComponent<"native">) => {
    return (
        <Container>
            <InputType colorBorder={colorBorder} background={background} defaultValue={defaultValue} {...props} />
        </Container>
    );
}

