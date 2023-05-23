import * as SecureStore from 'expo-secure-store';

export function secureStore() {
  async function get(key: string) {
    let result = await SecureStore.getItemAsync(key);
    return result;
  }

  async function save(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
  }

  async function clean(key: string) {
    await SecureStore.deleteItemAsync(key);
  }

  return {get, save, clean};
}
