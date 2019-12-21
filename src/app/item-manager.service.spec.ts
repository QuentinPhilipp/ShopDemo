import { TestBed } from '@angular/core/testing';

import { ItemManagerService } from './item-manager.service';

describe('ItemManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemManagerService = TestBed.get(ItemManagerService);
    expect(service).toBeTruthy();
  });

  it('should have at least 3 item', () => {
    const service: ItemManagerService = TestBed.get(ItemManagerService);
    expect(service.items.length>3).toBeTruthy();
  });

  it('should return an error item on the call of getItemById if the id is not in the list', () => {
    const service: ItemManagerService = TestBed.get(ItemManagerService);
    expect(service.getItemById(-1)==service.errorItem).toBeTruthy();
  });

  it('should return multiple Item when we call getAllItems()', () => {
    const service: ItemManagerService = TestBed.get(ItemManagerService);
    expect(service.getAllItems().length>=2).toBeTruthy();
  });


});
