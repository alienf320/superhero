import { Injectable, signal, computed } from '@angular/core';
import { Hero } from '../../shared/models/hero.model';

@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroes = signal<Hero[]>([
    { id: 1, name: 'Spiderman', power: 'Web-slinging', universe: 'Marvel' },
    { id: 2, name: 'Superman', power: 'Flight', universe: 'DC' },
  ]);

  allHeroes = computed(() => this.heroes());
  filteredHeroes = computed(() => {
    const filter = this.filter().toLowerCase();
    return filter
      ? this.heroes().filter(h => h.name.toLowerCase().includes(filter))
      : this.heroes();
  });

  private filter = signal<string>('');

  setFilter(term: string) {
    this.filter.set(term);
  }

  getHeroById(id: number) {
    return this.heroes().find(h => h.id === id);
  }

  addHero(hero: Hero) {
    const newId = Math.max(...this.heroes().map(h => h.id), 0) + 1;
    this.heroes.update(current => [...current, { ...hero, id: newId }]);
  }

  updateHero(updatedHero: Hero) {
    this.heroes.update(current =>
      current.map(h => (h.id === updatedHero.id ? updatedHero : h))
    );
  }

  deleteHero(id: number) {
    this.heroes.update(current => current.filter(h => h.id !== id));
  }
}
