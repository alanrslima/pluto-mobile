// import React from 'react';
// import {TextInput as RNTextInput} from 'react-native';

// export function TextInput() {
//   return <RNTextInput />;
// }

import React from 'react';
import {ConnectForm} from '../ConnectForm';
import {forwardRef, ReactElement} from 'react';
// import {Input} from './input.component';
import {Container} from './styles';
import {TextInputProps} from './types';
import {TextInput as RNTextInput} from 'react-native';

const comp = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref): ReactElement => {
    const {
      name,
      type = 'text',
      isInvalid,
      controlled = true,
      disabled,
      ...inputProps
    } = props || {};

    return (
      <Container disabled={disabled} isInvalid={isInvalid}>
        <ConnectForm>
          {({register}) => {
            const hasControl =
              controlled && register ? register(name) : undefined;

            return (
              <RNTextInput
                style={{alignItems: 'center'}}
                // list={list || null}
                id={id ?? `txt_${name}`}
                type={type}
                {...(register ?? {ref, name})}
                {...inputProps}
              />
            );
          }}
        </ConnectForm>
      </Container>
    );
  },
);

export const TextInput = comp;
