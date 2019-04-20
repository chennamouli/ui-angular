import { TestBed } from '@angular/core/testing';

import { BannerMessageService } from './banner-message.service';

describe('BannerMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BannerMessageService = TestBed.get(BannerMessageService);
    expect(service).toBeTruthy();
  });
});
