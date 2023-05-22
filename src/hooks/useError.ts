import {useAlert} from './useAlert';

export const useError = () => {
  const alert = useAlert();

  function handle(err: any) {
    const props = {
      title: 'Ops',
      description: 'Houve um problema! Por favor, tente novamente mais tarde.',
    };
    if (err?.response?.data) {
      props.description = err?.response?.data?.message;
    }
    alert?.current?.show(props);
  }

  return {handle};
};
