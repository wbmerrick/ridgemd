import { describe, expect, it } from "vitest";
import { brandPlateList, brandPlates } from "./catalog";

describe("brandPlates", () => {
  it("exports every planned RidgeMD plate with a bundled src and public path", () => {
    const ids = [
      "alpine",
      "og",
      "portrait",
      "care",
      "shop",
      "mark",
      "tn",
      "hawaii",
      "hawaiiWide",
      "hawaiiPortrait",
      "hawaiiDawn",
      "hawaiiDawnPortrait",
    ];
    expect(Object.keys(brandPlates).sort()).toEqual([...ids].sort());
    expect(brandPlateList).toHaveLength(ids.length);

    for (const plate of brandPlateList) {
      expect(plate.src, plate.id).toMatch(/\/brand\/ridgemd-|ridgemd-/);
      expect(plate.publicPath).toMatch(/^\/brand\/ridgemd-.+\.webp$/);
      expect(plate.ratio).toMatch(/^\d+:\d+$/);
      expect(plate.use.length).toBeGreaterThan(8);
    }
  });
});
