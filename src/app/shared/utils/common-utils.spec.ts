import { TestBed } from "@angular/core/testing";

import { CommonUtils } from "./common-utils";

describe("CommonUtils", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CommonUtils = TestBed.get(CommonUtils);
    expect(service).toBeTruthy();
  });
});
