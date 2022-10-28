import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BookCardComponent } from '../book-card/book-card.component';
import { bookNa } from '../models';
import { bookCollection } from '../store';
import { BookListComponent } from './book-list.component';

describe(BookListComponent.name, () => {
  let store: MockStore;

  afterEach(() => {
    store?.resetSelectors();
  });

  describe('When books are present', () => {
    it('displays books in the list', () => {
      const books = [bookNa(), bookNa()];
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [BookListComponent, BookCardComponent],
        providers: [
          provideMockStore({
            selectors: [
              {
                selector: bookCollection as any,
                value: books
              }
            ]
          })
        ]
      });

      const fixture = TestBed.createComponent(BookListComponent);

      fixture.detectChanges(); // spectator, testing-library/angular

      const bookCards = fixture.debugElement.queryAll(By.css('[data-test=book-card]'));

      expect(bookCards.length).toBe(books.length);
    });
  });
});
