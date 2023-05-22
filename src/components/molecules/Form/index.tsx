// import React from 'react';
// // import {DevTool} from '@hookform/devtools';
// // import {yupResolver} from '@hookform/resolvers/yup';
// import {ReactElement, useEffect} from 'react';
// import {FormProvider, useForm, useFormContext} from 'react-hook-form';
// import {View} from 'react-native';
// // import * as yup from 'yup';
// // import {Container, Fieldset} from './styles';
// // import {FormProps} from './types';

// const RenderForm = ({children, onSubmit, isLoading, disabled, ...props}) => {
//   const methods = useFormContext();

//   return (
//     <View
//       onSubmit={methods.handleSubmit(data => onSubmit(data, methods))}
//       as="form"
//       {...props}>
//       <Fieldset
//         disabled={disabled || methods?.formState?.isSubmitting || isLoading}
//         as="fieldset">
//         {children({...methods})}
//       </Fieldset>
//     </View>
//   );
// };

// export function Form({
//   children,
//   handleSubmit,
//   //   schema,
//   defaultValues,
//   disabled,
//   isLoading,
//   //   devTools,
//   ...props
// }: FormProps): ReactElement {
//   const methods = useForm({
//     // resolver: schema ? yupResolver<yup.AnyObjectSchema>(schema) : undefined,
//     defaultValues,
//   });

//   useEffect(() => {
//     methods.reset({...defaultValues});
//   }, [defaultValues]);

//   return (
//     <>
//       <FormProvider {...methods}>
//         <RenderForm
//           onSubmit={handleSubmit}
//           disabled={disabled}
//           isLoading={isLoading}
//           {...props}>
//           {children}
//         </RenderForm>
//       </FormProvider>
//       {/* {devTools && <DevTool control={methods.control} />} */}
//     </>
//   );
// }

import React, {useState} from 'react';
import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import {Button} from '../../atoms/Button';
import {useStyle} from '../../../hooks/useStyle';
import {formStyles} from './styles';
import {FormProps} from './types';

export function Form(props: FormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const styles = useStyle(formStyles);

  async function onSubmit() {
    setIsLoading(true);
    await props.onSubmit();
    setIsLoading(false);
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={styles.wrapper}>
        {props.children}
      </ScrollView>
      <View style={styles.wrapperButton}>
        <Button
          isLoading={isLoading}
          onPress={onSubmit}
          disabled={props.isDisabled}
          title={props.onSubmitTitle || 'Enviar'}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
