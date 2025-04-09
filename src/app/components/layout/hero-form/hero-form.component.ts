import { Component, computed, inject, input } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HeroService } from '../../../core/services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.scss',
})
export class HeroFormComponent {
  fb = inject(FormBuilder);
  heroService = inject(HeroService);
  router = inject(Router);

  heroId = input<string | null>(null);
  hero = computed(() => this.heroService.getHeroById(Number(this.heroId()) ?? 0));

  heroForm = this.fb.group({
    id: [null],
    name: ['', [Validators.required, Validators.minLength(2)]],
    power: [''],
    universe: [''],
  });

  ngOnInit(): void {
    console.log('hero()', this.hero(), this.heroId())
    const hero = this.hero();
    if (hero) {
      console.log('entro: ', hero)
      this.heroForm.patchValue({
        name: hero.name,
        power: hero.power,
        universe: hero.universe,
      });
    }
  }

  onSubmit() {
    const hero = this.heroForm.value as any;
    if (hero.id) {
      this.heroService.updateHero(hero);
    } else {
      this.heroService.addHero(hero);
    }

    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.heroForm.get(controlName);
    if (!control || !control.touched) return null;

    if (control.hasError('required')) return 'Este campo es obligatorio';
    if (control.hasError('minlength')) return 'El texto es demasiado corto';

    return null;
  }
}
