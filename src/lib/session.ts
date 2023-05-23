import {Token} from '../types/Token';
import {secureStore} from './secureStore';

export function session() {
  async function get(): Promise<Token | null> {
    const data = await secureStore().get('session');
    return data ? JSON.parse(data) : null;
  }

  async function clean() {
    await secureStore().clean('session');
  }

  async function save(data: Token) {
    await secureStore().save('session', JSON.stringify(data));
  }

  return {get, clean, save};
}
