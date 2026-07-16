import { TestBed } from '@angular/core/testing';

import { unsavedChangesGuard } from './unsaved-changes-guard';

describe('unsavedChangesGuard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be defined', () => {
    expect(unsavedChangesGuard).toBeTruthy();
  });

});