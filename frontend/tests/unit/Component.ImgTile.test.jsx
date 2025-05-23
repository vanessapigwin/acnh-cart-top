import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ImageTile from "../../src/components/imageTile/ImgTile";

describe("Positive case, successful load", () => {
  it("src is valid", () => {
    const validSrc = "https://images.cattoviz.com/Headwear/CapHatCyclemet2.png";
    render(<ImageTile filename={validSrc} />);
    expect(screen.getByRole("img").src).toBe(validSrc);
  });
});

describe("Negative test, unsuccessful load", () => {
  const invalidSrc = "https://images.cattoviz.com/RandomSwag/Jacket420.png";
  const fallbackImg = "resetti.png";
  it("src just does not load", () => {
    render(<ImageTile filename={invalidSrc} />);
    fireEvent.error(screen.getByRole("img"));
    expect(screen.getByRole("img").src).toMatch(fallbackImg);
  });
});
