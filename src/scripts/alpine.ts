import type { Alpine } from 'alpinejs';
import collapse from '@alpinejs/collapse';
import persist from '@alpinejs/persist';

export default (Alpine: Alpine) => {
  Alpine.plugin(collapse);
  Alpine.plugin(persist);
};
